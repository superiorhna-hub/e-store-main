import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getAllSubscribers } from "@/lib/sheets"

export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  if (!session?.value) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const subscribers = await getAllSubscribers()
    return NextResponse.json({ subscribers })
  } catch (err) {
    console.error("[admin/subscribers]", err)
    return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 })
  }
}
