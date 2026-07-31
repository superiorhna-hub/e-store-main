import { NextRequest, NextResponse } from "next/server"

// Edge-Runtime reimplementation of verifyAdminToken.
// Cannot import from app/api/admin/auth/route.ts because that file uses
// Node.js crypto (Buffer, createHmac) which is unavailable in Edge Runtime.
// crypto.subtle.verify is inherently timing-safe (no separate timingSafeEqual needed).
async function verifyAdminTokenEdge(token: string): Promise<boolean> {
  try {
    const dotIdx = token.indexOf(".")
    if (dotIdx === -1) return false

    const payload = token.slice(0, dotIdx)
    const sig = token.slice(dotIdx + 1)
    if (!payload || sig.length !== 64) return false

    const secret = process.env.NEXTAUTH_SECRET ?? ""
    const encoder = new TextEncoder()

    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"],
    )

    const pairs = sig.match(/.{2}/g)
    if (!pairs || pairs.length !== 32) return false
    const sigBytes = new Uint8Array(pairs.map((b) => parseInt(b, 16)))

    const valid = await crypto.subtle.verify("HMAC", key, sigBytes, encoder.encode(payload))
    if (!valid) return false

    // base64url → base64 → plain text, then extract expiry
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/")
    const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4)
    const decoded = atob(padded)
    const parts = decoded.split(":")
    const expiry = parseInt(parts[2] ?? "0", 10)
    return Date.now() < expiry
  } catch {
    return false
  }
}

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("admin_session")?.value ?? ""
  const valid = await verifyAdminTokenEdge(token)

  if (!valid) {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return NextResponse.next()
}

// Matches /admin/dashboard and any future /admin/<subpath> pages,
// but NOT /admin itself (the login page).
export const config = {
  matcher: ["/admin/:path+"],
}
