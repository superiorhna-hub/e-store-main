/**
 * @file app/api/admin/inquiries/route.ts
 * @description Admin-protected API for managing contact form inquiries.
 *   GET – Returns all inquiries from the Inquiries sheet (admin only).
 *   PUT – Updates the status of a specific inquiry row.
 *         Status lifecycle: New → In Progress → Replied → Closed
 *
 *   Authentication: cookie-based session (`admin_session=authenticated`).
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getAllInquiries, updateInquiryStatus } from "@/lib/sheets"

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
  if (!(await checkAuth(["admin", "support"]))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const inquiries = await getAllInquiries()
    return NextResponse.json({ inquiries })
  } catch {
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  if (!(await checkAuth(["admin", "support"]))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const { rowIndex, status } = await request.json()
    if (!Number.isInteger(rowIndex) || rowIndex < 2) {
      return NextResponse.json({ error: "Invalid rowIndex" }, { status: 400 })
    }
    await updateInquiryStatus(rowIndex, status)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to update inquiry" }, { status: 500 })
  }
}
