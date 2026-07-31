/**
 * @file lib/rate-limit.ts
 * @description Simple in-memory sliding-window rate limiter for Next.js API routes.
 *   Uses a Map keyed by IP address to track request counts within a time window.
 *
 *   ⚠️  KNOWN LIMITATION — DOES NOT WORK ON VERCEL SERVERLESS:
 *   Vercel spins up a new function instance per request (or reuses one briefly).
 *   The `store` Map lives only in memory for the lifetime of that instance, so
 *   every request effectively starts with a fresh counter. No IP is ever blocked.
 *
 *   To make rate limiting work in production you would need a shared external
 *   store (e.g. Upstash Redis with the @upstash/ratelimit package). Until then
 *   this file provides the correct interface so call-sites compile, but the
 *   enforcement has no effect at runtime on Vercel.
 *
 *   MITIGATING FACTOR: The admin login endpoint — the most sensitive target for
 *   brute-force — is also protected by an HMAC-signed session token (see
 *   app/api/admin/auth/route.ts). An attacker must guess both the password AND
 *   forge a SHA-256 HMAC, making password-only brute-force insufficient even
 *   without a working rate limiter.
 *
 *   Usage:
 *     const { success } = rateLimit(request, { limit: 5, windowMs: 60_000 })
 *     if (!success) return NextResponse.json({ error: "Too many requests" }, { status: 429 })
 *
 * @owner Heet-P
 * @lastModified May 23, 2026
 */

interface RateLimitEntry {
  count: number      // number of requests made in current window
  resetAt: number    // timestamp (ms) when the window resets
}

// In-memory store — Map<"key:ip", entry>.
// NOTE: On Vercel serverless this resets to empty on every cold invocation;
// rate limiting is therefore non-functional in that environment (see file header).
const store = new Map<string, RateLimitEntry>()

// Periodically clean up expired entries to avoid memory leaks
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt < now) store.delete(key)
  }
}, 5 * 60 * 1000) // clean every 5 minutes

interface RateLimitOptions {
  limit: number      // max requests allowed per window
  windowMs: number   // time window in milliseconds
  key?: string       // optional namespace (e.g. "contact", "login")
}

interface RateLimitResult {
  success: boolean   // true = request allowed, false = rate limit exceeded
  remaining: number  // how many requests remain in this window
  resetAt: number    // when the window resets (ms timestamp)
}

/**
 * Check whether the incoming request is within the rate limit.
 * @param request - The incoming Next.js Request object
 * @param options - { limit, windowMs, key }
 */
export function rateLimit(request: Request, options: RateLimitOptions): RateLimitResult {
  const { limit, windowMs, key = "default" } = options

  // Extract IP from headers (works on Vercel + local dev)
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "anonymous"

  const storeKey = `${key}:${ip}`
  const now = Date.now()
  const entry = store.get(storeKey)

  if (!entry || entry.resetAt < now) {
    // First request in this window — initialise counter
    const newEntry: RateLimitEntry = { count: 1, resetAt: now + windowMs }
    store.set(storeKey, newEntry)
    return { success: true, remaining: limit - 1, resetAt: newEntry.resetAt }
  }

  if (entry.count >= limit) {
    // Limit exceeded — reject
    return { success: false, remaining: 0, resetAt: entry.resetAt }
  }

  // Increment counter and allow
  entry.count++
  return { success: true, remaining: limit - entry.count, resetAt: entry.resetAt }
}
