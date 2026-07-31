import { NextResponse } from "next/server";
import { generateInvoicePdf, InvoiceLineItem } from "@/lib/pdf";
import { verifyInvoiceToken } from "@/lib/invoice-token";
import Stripe from "stripe";

function parseProductString(product: string): Array<{ name: string; quantity: number }> {
  return product
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((segment) => {
      const m = segment.match(/^(.+)\s+x(\d+)$/i);
      return m
        ? { name: m[1].trim(), quantity: parseInt(m[2], 10) }
        : { name: segment, quantity: 1 };
    });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const paymentId = searchParams.get("paymentId");
  const token = searchParams.get("token") ?? "";

  if (!paymentId) {
    return NextResponse.json({ error: "Missing paymentId" }, { status: 400 });
  }

  if (!verifyInvoiceToken(paymentId, token)) {
    return NextResponse.json({ error: "Invalid or missing download token" }, { status: 403 });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2025-01-27.acacia" as any });

    let lookupId = paymentId;
    let stripeSession: Stripe.Checkout.Session | null = null;

    if (paymentId.startsWith("cs_")) {
      stripeSession = await stripe.checkout.sessions.retrieve(paymentId);
      if (stripeSession.payment_intent) {
        lookupId = stripeSession.payment_intent as string;
      }
    }

    const { getOrderByPaymentId, getProducts } = await import("@/lib/sheets");
    const [order, products] = await Promise.all([
      getOrderByPaymentId(lookupId),
      getProducts().catch(() => []),
    ]);

    const productMap = new Map(products.map((p) => [p.name.toLowerCase(), p.price]));

    // Determine invoice data: prefer the saved order, fall back to Stripe session
    // when the webhook hasn't written the order to Sheets yet (race condition on mobile).
    let orderId: string;
    let customerName: string;
    let email: string;
    let productStr: string;
    let amount: number;

    if (order) {
      orderId = order.orderId;
      customerName = order.customerName;
      email = order.email;
      productStr = order.product;
      amount = order.amount;
    } else {
      // Order not in Sheets yet — fetch from Stripe session directly
      if (!stripeSession && lookupId.startsWith("pi_")) {
        const sessions = await stripe.checkout.sessions.list({ payment_intent: lookupId, limit: 1 });
        stripeSession = sessions.data[0] ?? null;
      }

      if (!stripeSession) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
      }

      const meta = stripeSession.metadata ?? {};
      orderId = `INV-${stripeSession.id.slice(-8).toUpperCase()}`;
      customerName = meta.customerName || stripeSession.customer_details?.name || "Customer";
      email = meta.email || stripeSession.customer_details?.email || "";
      productStr = meta.productSummary || "Stripe Order";
      amount = stripeSession.amount_total != null ? stripeSession.amount_total / 100 : 0;
    }

    const parsed = parseProductString(productStr);
    const items: InvoiceLineItem[] = parsed.map((entry) => ({
      name: entry.name,
      quantity: entry.quantity,
      unitPrice: productMap.get(entry.name.toLowerCase()) ?? 0,
    }));

    const pdfBuffer = await generateInvoicePdf({
      orderId,
      customerName,
      email,
      items,
      amount,
    });

    return new NextResponse(pdfBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Invoice_${orderId}.pdf"`,
      },
    });
  } catch (err) {
    console.error("Failed to generate invoice:", err);
    return NextResponse.json({ error: "Failed to generate invoice" }, { status: 500 });
  }
}
