/**
 * @file app/api/admin/settings/route.ts
 * @description Admin-protected API for application settings.
 *   GET  – Returns the current settings (admin only).
 *   POST – Merges validated settings into the persisted JSON file.
 *          Only known, schema-validated keys are accepted; all others
 *          are stripped to prevent arbitrary config injection.
 *
 *   Authentication: cookie-based session (admin_session). Admin role only.
 *
 * @owner Heet-P
 * @lastModified June 8, 2026
 */

import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getSettings, saveSettings } from "@/lib/settings"
import { z } from "zod"

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

// Whitelist of known settings keys — add new keys here as the app grows.
// Unknown keys sent by the client are stripped before writing to disk.
const settingsSchema = z.object({
  showCertifications: z.boolean().optional(),
})

export const revalidate = 0

export async function GET() {
  if (!(await checkAuth(["admin"]))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  return NextResponse.json(getSettings())
}

export async function POST(req: Request) {
  if (!(await checkAuth(["admin"]))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  try {
    const body = await req.json()
    const parsed = settingsSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 })
    }
    const current = getSettings()
    saveSettings({ ...current, ...parsed.data })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 })
  }
}
