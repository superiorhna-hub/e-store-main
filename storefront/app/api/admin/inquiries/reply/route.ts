/**
 * @file app/api/admin/inquiries/reply/route.ts
 * @description API endpoint to send email replies to inquiries from the admin panel.
 *   Validates the admin session, uses lib/email to send the email to the customer,
 *   and automatically updates the inquiry status to "Replied".
 *
 * @owner Heet-P
 */

import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { updateInquiryStatus } from "@/lib/sheets"
import { sendInquiryReplyEmail } from "@/lib/email"
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

export async function POST(request: Request) {
  if (!(await checkAuth(["admin", "support"]))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  
  try {
    const { rowIndex, email, name, subject, replyMessage: rawReply } = await request.json()
    const replyMessage = typeof rawReply === "string" ? stripEmoji(rawReply) : rawReply
    
    if (!email || !replyMessage || !rowIndex) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // 1. Send the email
    await sendInquiryReplyEmail({
      to: email,
      customerName: name,
      originalSubject: subject,
      replyMessage,
    })

    // 2. Update the status in Google Sheets to "Replied"
    await updateInquiryStatus(rowIndex, "Replied")

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Failed to send reply:", err)
    return NextResponse.json({ error: "Failed to send reply email" }, { status: 500 })
  }
}
