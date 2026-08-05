import type { MetadataRoute } from "next"

const BASE = process.env.NEXT_PUBLIC_STORE_URL ?? "https://www.superiorharness.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/checkout", "/order-confirmed", "/cart", "/admin/"],
    },
    sitemap: `${BASE}/sitemap.xml`,
  }
}
