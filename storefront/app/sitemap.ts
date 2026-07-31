import type { MetadataRoute } from "next"
import { getProducts, getBlogs } from "@/lib/sheets"

const BASE = process.env.NEXT_PUBLIC_STORE_URL ?? "https://clientstore.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let productUrls: MetadataRoute.Sitemap = []
  let blogUrls: MetadataRoute.Sitemap = []

  try {
    const products = await getProducts()
    productUrls = products.map((p) => ({
      url: `${BASE}/products/${p.handle}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  } catch {
    // Sheets may not be reachable at build time — skip product URLs
  }

  try {
    const blogs = await getBlogs(true)
    blogUrls = blogs.map((b) => ({
      url: `${BASE}/blog/${b.slug}`,
      // Use the blog's own publish date as lastModified when available
      lastModified: b.publishDate ? new Date(b.publishDate) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  } catch {
    // Sheets may not be reachable at build time — skip blog URLs
  }

  return [
    { url: BASE,                          lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/products`,            lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/about`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/get-a-quote`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,               lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    ...productUrls,
    ...blogUrls,
  ]
}
