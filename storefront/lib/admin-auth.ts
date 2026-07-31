import crypto from "crypto"

const SESSION_TTL_MS = 8 * 60 * 60 * 1000 // 8 hours

export function createAdminToken(role: string): string {
  const expiry  = Date.now() + SESSION_TTL_MS
  const payload = Buffer.from(`admin:${role}:${expiry}`).toString("base64url")
  const secret  = process.env.NEXTAUTH_SECRET ?? ""
  const sig     = crypto.createHmac("sha256", secret).update(payload).digest("hex")
  return `${payload}.${sig}`
}

export function verifyAdminToken(token: string): { valid: boolean; role: string | null } {
  try {
    const [payload, sig] = token.split(".")
    if (!payload || !sig) return { valid: false, role: null }

    const secret      = process.env.NEXTAUTH_SECRET ?? ""
    const expectedSig = crypto.createHmac("sha256", secret).update(payload).digest("hex")

    const sigMatch = crypto.timingSafeEqual(
      Buffer.from(sig.padEnd(64, "0"), "hex"),
      Buffer.from(expectedSig, "hex")
    )
    if (!sigMatch) return { valid: false, role: null }

    const decoded = Buffer.from(payload, "base64url").toString()
    const parts = decoded.split(":")
    const role = parts[1] ?? null
    const expiry  = parseInt(parts[2] ?? "0", 10)
    
    if (Date.now() >= expiry) {
      return { valid: false, role: null }
    }
    return { valid: true, role }
  } catch(e) {
    return { valid: false, role: null }
  }
}
