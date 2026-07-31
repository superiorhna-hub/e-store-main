import type { Product } from "@/lib/sheets"

export function ProductSchema({ product }: { product: Product }) {
  const BASE = process.env.NEXT_PUBLIC_STORE_URL ?? "https://clientstore.com"

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description ?? "",
    image: product.imageUrl ?? "",
    brand: {
      "@type": "Brand",
      // Fixed: was hardcoded "Client Store" (template placeholder)
      name: "Superior Harness & Assembly",
    },
    offers: {
      "@type": "Offer",
      // Fixed: prices are stored as whole dollars — no division needed.
      // Previous code divided by 100 (e.g. $1500 → $15 in structured data).
      price: product.price > 0 ? product.price : undefined,
      priceCurrency: "USD",
      // Fixed: was always "InStock" — now reflects the actual stock flag
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${BASE}/products/${product.handle}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026") }}
    />
  )
}
