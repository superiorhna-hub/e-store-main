/**
 * @file app/api/admin/orders/route.ts
 * @description Admin-protected REST API for order management.
 *   GET  – Returns all orders from the Google Sheet (admin only).
 *   PUT  – Updates a specific order's status and tracking comment.
 *          Optionally sends a branded HTML email notification to the customer
 *          when `sendEmail: true` is passed in the request body.
 *
 *   Authentication: cookie-based session (`admin_session=authenticated`).
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getAllOrders, updateOrderStatus } from "@/lib/sheets"
import { sendOrderStatusEmail } from "@/lib/email"
import { stripEmoji } from "@/lib/sanitize"

async function checkAuth(allowedRoles?: string[]) {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  if (!session?.value) return false
  const { verifyAdminToken } = await import("@/lib/admin-auth")
  const { valid, role } = verifyAdminToken(session.value)
  if (!valid || !role) return false
  if (allowedRoles && !allowedRoles.includes(role)) return false
  return true
}

export async function GET() {
  if (!(await checkAuth(["admin", "shipping", "packaging", "payment"]))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const orders = await getAllOrders()
    return NextResponse.json({ orders })
  } catch {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  if (!(await checkAuth(["admin", "shipping", "packaging", "payment"]))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const { rowIndex, status, comments: rawComments, sendEmail } = await request.json()
    const comments = typeof rawComments === "string" ? stripEmoji(rawComments) : rawComments

    if (!Number.isInteger(rowIndex) || rowIndex < 2) {
      return NextResponse.json({ error: "Invalid rowIndex" }, { status: 400 })
    }

    // 1. Update Google Sheets
    await updateOrderStatus(rowIndex, status, comments ?? "")

    // 2. Optionally send customer email
    let emailSent = false
    if (sendEmail) {
      const orders = await getAllOrders()
      const order = orders.find((o) => o.rowIndex === rowIndex)
      if (order?.email) {
        try {
          await sendOrderStatusEmail({
            to: order.email,
            customerName: order.customerName,
            orderId: order.orderId,
            product: order.product,
            status,
            comments: comments || undefined,
          })
          emailSent = true
        } catch (emailErr) {
          console.error("Email send failed (non-fatal):", emailErr)
        }
      }
    }

    return NextResponse.json({ success: true, emailSent })
  } catch {
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 })
  }
}
