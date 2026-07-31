import { NextResponse } from "next/server"
import Stripe from "stripe"
import { appendOrder, getOrderByPaymentId } from "@/lib/sheets"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-01-27.acacia" as any,
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ""

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")

    if (!signature) {
      return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 })
    }

    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err: any) {
      console.error(`Webhook signature verification failed: ${err.message}`)
      return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session
      
      const paymentIntentId = session.payment_intent as string
      
      if (!paymentIntentId) {
        console.warn("Missing payment intent ID on session", session.id)
        return NextResponse.json({ received: true, message: "No payment intent" })
      }

      // Idempotency check: Ensure we haven't processed this payment already
      const existingOrder = await getOrderByPaymentId(paymentIntentId)
      if (existingOrder) {
        console.log(`Order for payment ${paymentIntentId} already exists. Skipping.`)
        return NextResponse.json({ received: true, message: "Order already processed" })
      }

      const { customerName, email, productSummary } = session.metadata || {}

      if (!customerName || !email) {
        console.error("Missing metadata in session", session.id)
        return NextResponse.json({ error: "Missing metadata in session" }, { status: 400 })
      }

      // Use the amount Stripe actually confirmed (amount_total) rather than
      // the client-supplied metadata value, which could have been tampered
      // with before the checkout session was created.
      // amount_total is in the smallest currency unit (paise/cents), so
      // divide by 100 to get the decimal amount stored in the sheet.
      const confirmedAmount = session.amount_total != null
        ? session.amount_total / 100
        : 0

      const orderId = await appendOrder({
        customerName,
        email,
        product: productSummary || "Stripe Order",
        amount: confirmedAmount,
        paymentId: paymentIntentId,
      })

      // Send the automated bill / confirmation email
      try {
        const { sendOrderConfirmationEmail } = await import("@/lib/email")
        await sendOrderConfirmationEmail({
          to: email,
          customerName,
          orderId,
          product: productSummary || "Stripe Order",
          amount: confirmedAmount,
        })
      } catch (emailErr) {
        console.error("Failed to send confirmation email:", emailErr)
      }

      console.log(`Successfully processed order for payment ${paymentIntentId}`)
    }

    return NextResponse.json({ received: true })
  } catch (err: any) {
    console.error("Stripe webhook error:", err)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}
