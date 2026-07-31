import { NextResponse } from "next/server"
import { z } from "zod"
import { appendSubscriber } from "@/lib/sheets"
import { sendNewsletterWelcomeEmail } from "@/lib/email"
import { rateLimit } from "@/lib/rate-limit"

const schema = z.object({
  email: z.string().email("Invalid email address"),
  source: z.enum(["footer", "popup", "inline"]).default("footer"),
  honeypot: z.string().max(0, "Bot detected"),
})

export async function POST(request: Request) {
  const { success, resetAt } = rateLimit(request, { key: "newsletter", limit: 5, windowMs: 60_000 })
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429, headers: { "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)) } }
    )
  }

  try {
    const body = await request.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 })
    }

    await appendSubscriber({ email: parsed.data.email, source: parsed.data.source })
    
    // Send welcome email asynchronously so it doesn't block the UI response
    sendNewsletterWelcomeEmail({ to: parsed.data.email }).catch((err) => {
      console.error("[newsletter email error]", err)
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[newsletter]", err)
    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 })
  }
}
