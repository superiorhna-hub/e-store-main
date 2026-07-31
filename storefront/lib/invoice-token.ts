import crypto from "crypto"

// Generates a short HMAC token that proves the caller who received a payment
// confirmation is the same party requesting the invoice.
// The token is HMAC-SHA256(paymentId, NEXTAUTH_SECRET) truncated to 32 hex
// chars — short enough for a URL query param, long enough to be unguessable.
//
// An attacker who knows a paymentId cannot compute the token without the
// server secret, so invoice enumeration is blocked even if payment IDs leak.
export function generateInvoiceToken(paymentId: string): string {
  const secret = process.env.NEXTAUTH_SECRET ?? ""
  return crypto
    .createHmac("sha256", secret)
    .update(paymentId)
    .digest("hex")
    .slice(0, 32)
}

export function verifyInvoiceToken(paymentId: string, token: string): boolean {
  if (!token || token.length !== 32) return false
  const expected = generateInvoiceToken(paymentId)
  // Constant-time comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(token, "hex"),
      Buffer.from(expected, "hex")
    )
  } catch {
    return false
  }
}
