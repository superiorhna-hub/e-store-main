import ProductCard from "@/components/ProductCard"
import Link from "next/link"
import type { Product } from "@/lib/sheets"

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </svg>
  )
}

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products.length) return null

  return (
    <section id="shop" className="S" style={{ background: "var(--bg)" }}>
      <div className="W">
        <div className="sHdr sHdr--c rv">
          <div className="lbl">FEATURED PRODUCTS</div>
          <h2 className="D2" style={{ marginTop: 16 }}>Premium Selections</h2>
        </div>
        <div className="prodG">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <Link href="/shop" className="btn bod">
            View All Products <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
