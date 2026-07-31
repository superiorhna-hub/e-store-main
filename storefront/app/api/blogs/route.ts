/**
 * @file app/api/blogs/route.ts
 * @description Public (unauthenticated) API for fetching published blog posts.
 *   GET – Returns all published blogs. Cached for 5 minutes via Next.js ISR.
 *   Used by client-side pages that need blog data without server-side auth.
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

import { NextResponse } from "next/server"
import { getBlogs } from "@/lib/sheets"

export const revalidate = 300 // cache blogs for 5 mins

export async function GET() {
  try {
    const blogs = await getBlogs()
    return NextResponse.json({ blogs })
  } catch (err) {
    console.error("Failed to fetch blogs from Google Sheets:", err)
    return NextResponse.json({ blogs: [] }, { status: 500 })
  }
}
