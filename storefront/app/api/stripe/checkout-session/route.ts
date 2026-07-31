/**
 * @file app/api/stripe/checkout-session/route.ts
 * @description Creates a Stripe Checkout session for a cart of items.
 *
 *   Security:
 *     - Accepts an `items` array (handle + quantity) instead of a raw amount.
 *       Prices are resolved server-side from the Google Sheets product catalogue
 *       so the client cannot tamper with prices by modifying localStorage.
 *     - Validates that every requested product exists and is in stock.
 *     - Restricts success/cancel URLs to the same origin as NEXT_PUBLIC_STORE_URL
 *       to prevent open-redirect phishing.
 *
 * @owner Heet-P
 * @lastModified June 8, 2026
 */

import { NextResponse } from "next/server"
import Stripe from "stripe"
import { z } from "zod"
import { generateInvoiceToken } from "@/lib/invoice-token"
import { stripEmoji } from "@/lib/sanitize"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-01-27.acacia" as any,
})

const checkoutSessionSchema = z.object({
  customerName: z.string().min(1).transform(stripEmoji),
  email:        z.email(),
  // Array of cart items — price is resolved server-side, never trusted from client
  items: z.array(
    z.object({
      handle:   z.string().min(1),
      name:     z.string().min(1).transform(stripEmoji),
      quantity: z.number().int().positive().max(1000),
    })
  ).min(1, "Cart is empty"),
  successUrl: z.url(),
  cancelUrl:  z.url(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = checkoutSessionSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid request data" }, { status: 400 })
    }

    const { customerName, email, items, successUrl, cancelUrl } = parsed.data

    // Restrict redirect URLs to the same origin as the store to prevent
    // open-redirect phishing (attacker supplies an external successUrl).
    const storeOrigin = process.env.NEXT_PUBLIC_STORE_URL
      ? new URL(process.env.NEXT_PUBLIC_STORE_URL).origin
      : null

    if (storeOrigin) {
      const successOrigin = new URL(successUrl).origin
      const cancelOrigin  = new URL(cancelUrl).origin
      if (successOrigin !== storeOrigin || cancelOrigin !== storeOrigin) {
        return NextResponse.json({ error: "Invalid redirect URL" }, { status: 400 })
      }
    }

    // ── Server-side price resolution ──────────────────────────────────────────
    // Look up every requested product by handle from the authoritative Google
    // Sheets catalogue. This prevents clients from manipulating cart prices
    // via localStorage edits.
    const { getProducts } = await import("@/lib/sheets")
    const products = await getProducts()
    const productMap = new Map(products.map((p) => [p.handle, p]))

    let serverAmount = 0
    const productSummaryParts: string[] = []

    for (const item of items) {
      const product = productMap.get(item.handle)
      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.handle}` },
          { status: 400 }
        )
      }
      if (!product.inStock) {
        return NextResponse.json(
          { error: `"${product.name}" is currently out of stock.` },
          { status: 400 }
        )
      }
      serverAmount += product.price * item.quantity
      productSummaryParts.push(`${product.name} x${item.quantity}`)
    }

    if (serverAmount < 0) {
      return NextResponse.json({ error: "Invalid order amount" }, { status: 400 })
    }

    const productSummary = productSummaryParts.join(", ").substring(0, 500)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Superior Harness & Assembly Order",
              description: productSummary,
            },
            unit_amount: Math.round(serverAmount * 100),
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Shipping (Flat Rate)",
            },
            unit_amount: 1500, // $15.00
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url:  cancelUrl,
      customer_email: email,
      metadata: {
        customerName,
        email,
        productSummary,
        amount: (serverAmount + 15).toString(), // server-computed, stored for reference only
      },
    })

    return NextResponse.json({
      url: session.url,
      downloadToken: generateInvoiceToken(session.id),
    })
  } catch (err: any) {
    console.error("Stripe session creation error:", err)
    return NextResponse.json(
      { error: err.message || "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
