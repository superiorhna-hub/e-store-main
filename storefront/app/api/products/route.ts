/**
 * @file app/api/products/route.ts
 * @description Public (unauthenticated) API for fetching all products.
 *   GET – Returns all products from Google Sheets. Cached for 60 seconds.
 *   Used by the /products listing page and product search.
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

import { NextResponse } from "next/server"
import { getProducts } from "@/lib/sheets"

export const revalidate = 60

export async function GET() {
  try {
    const products = await getProducts()
    return NextResponse.json({ products })
  } catch (err) {
    console.error("Failed to fetch products from Google Sheets:", err)
    return NextResponse.json({ products: [] }, { status: 500 })
  }
}
