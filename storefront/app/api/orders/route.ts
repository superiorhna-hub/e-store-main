/**
 * @file app/api/orders/route.ts
 * @description Public-facing API route for order operations.
 *   POST – Called after a successful Razorpay payment to record a new order
 *          in the Google Sheet. Validates input with Zod before writing.
 *          Returns the generated orderId on success.
 *   GET  – Fetches all orders belonging to a specific customer email.
 *          Used by the /track-order page after Google OAuth sign-in.
 *          Requires ?email= query parameter.
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

import { NextResponse } from "next/server"
import { appendOrder, getOrderByPaymentId } from "@/lib/sheets"
import { generateInvoiceToken } from "@/lib/invoice-token"
import { z } from "zod"
import { rateLimit } from "@/lib/rate-limit"
import { stripEmoji } from "@/lib/sanitize"

const orderSchema = z.object({
  customerName: z.string().min(1).transform(stripEmoji),
  email:        z.email(),
  product:      z.string().min(1).transform(stripEmoji),
  amount:       z.number().positive(),
  paymentId:    z.string().min(1),
})

// POST method removed: Order creation is now handled exclusively via Stripe Webhooks.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get("email")

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 })
  }

  // Require a valid NextAuth session and verify the session email matches
  // the requested email so customers can only see their own orders.
  try {
    const { getServerSession } = await import("next-auth")
    const { authOptions } = await import("@/app/api/auth/[...nextauth]/route")
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    if (session.user.email.toLowerCase() !== email.toLowerCase()) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }
  } catch {
    return NextResponse.json({ error: "Authentication check failed" }, { status: 500 })
  }

  try {
    const { getOrdersByEmail } = await import("@/lib/sheets")
    const orders = await getOrdersByEmail(email)
    return NextResponse.json({ orders })
  } catch (err) {
    console.error("Failed to fetch orders:", err)
    return NextResponse.json({ orders: [] }, { status: 500 })
  }
}
