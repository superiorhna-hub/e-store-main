import type { Metadata } from "next"
import { getProducts } from "@/lib/sheets"
import ShopFilters from "@/components/ShopFilters"

export const metadata: Metadata = {
  title: "Shop | Superior Harness & Assembly",
  description: "Browse our full catalog of custom wire harnesses, cable assemblies, PCB assemblies, and OEM solutions.",
}

export const revalidate = 60

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>
}) {
  const resolvedSearchParams = await searchParams
  const products = await getProducts()
  const query = resolvedSearchParams?.q?.toLowerCase() || ""

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ paddingTop: 120 }}>
        <section className="inner-banner">
          <div className="W">
            <div className="inner-banner__eyebrow">Online Store</div>
            <h1 className="D2 inner-banner__h">Shop Our Products</h1>
            <p className="inner-banner__p">
              Browse and order from our catalog of wire harnesses, cable assemblies, and electromechanical builds — engineered and manufactured under one roof.
            </p>
          </div>
        </section>
      </div>

      <div className="W" style={{ paddingTop: 56, paddingBottom: 80 }}>
        <ShopFilters initialProducts={products} initialQuery={query} />
      </div>
    </div>
  )
}
