import { NextResponse } from "next/server"
import { z } from "zod"
import { appendVisitorEvent } from "@/lib/sheets"
import { rateLimit } from "@/lib/rate-limit"

const schema = z.object({
  page: z.string().min(1).max(500),
  referrer: z.string().max(2000).default(""),
  utmSource: z.string().max(200).default(""),
  utmMedium: z.string().max(200).default(""),
  utmCampaign: z.string().max(200).default(""),
})

export async function POST(request: Request) {
  const { success, resetAt } = rateLimit(request, { key: "visitor-event", limit: 30, windowMs: 60_000 })
  if (!success) {
    return NextResponse.json(
      { error: "Rate limited" },
      { status: 429, headers: { "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)) } }
    )
  }

  try {
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    await appendVisitorEvent(parsed.data)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[visitor-event]", err)
    return NextResponse.json({ error: "Failed to log event" }, { status: 500 })
  }
}
