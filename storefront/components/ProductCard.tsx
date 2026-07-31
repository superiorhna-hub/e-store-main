/**
 * @file components/ProductCard.tsx
 * @description Reusable product card component used on the shop listing page.
 *   Renders product image (with URL validation fallback to placeholder),
 *   category label, product name, price, and an "Add to Cart" / "View" CTA.
 *
 *   Props:
 *     product  – Product object from Google Sheets
 *     index    – Card index used for staggered reveal animation delay
 *
 *   Image handling: validates URL before passing to next/image to prevent
 *   crashes when imageUrl is empty, "-", or an invalid URL string.
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/sheets"
import { formatPrice } from "@/lib/format"

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </svg>
  )
}

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart()
  const [adding, setAdding] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAddToCart = useCallback(() => {
    setAdding(true)
    addItem({
      id: product.handle || product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      category: product.category,
    })
    setAdding(false)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }, [addItem, product])

  const href = product.handle ? `/products/${product.handle}` : "/products"

  const isValidUrl = (url: string) => {
    if (!url || url === "-") return false
    if (url.startsWith("/")) return true
    try { new URL(url); return true } catch { return false }
  }

  const images = product.imageUrl 
    ? product.imageUrl.split(",").map(i => i.trim()).filter(isValidUrl)
    : []
  const primaryImage = images.length > 0 ? images[0] : null

  const outOfStock = product.inStock === false

  const isWireOrCable = product.category?.toLowerCase().includes("wire") || product.category?.toLowerCase().includes("cable")
  
  return (
    <div suppressHydrationWarning className="prodC rv" style={{ transitionDelay: `${index * 0.07}s`, opacity: outOfStock ? 0.55 : 1 }}>
      <div className="prodC__img" style={{ position: "relative" }}>
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            unoptimized={true}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            style={{ objectFit: "contain", padding: "8px", filter: outOfStock ? "grayscale(70%)" : "none" }}
          />
        ) : (
          <PlaceholderImage title={product.name} />
        )}
        {outOfStock && (
          <div style={{
            position: "absolute", top: 10, left: 10,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            color: "#e5e2db",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 10px", borderRadius: 6,
          }}>
            Out of Stock
          </div>
        )}
      </div>
      <div className="prodC__bd">
        <div className="prodC__cat">{product.category || "Product"}</div>
        <div className="prodC__nm">{product.name}</div>
        {product.partNumber && (
          <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 8, fontFamily: "monospace" }}>
            PN: {product.partNumber}
          </div>
        )}
        <div className="prodC__pr">
          {product.price > 0 ? formatPrice(product.price) : "Contact for price"}
        </div>
        <div className="prodC__row" style={{ flexWrap: "wrap" }}>
          <button
            className="btn bp bsm no-fill"
            onClick={handleAddToCart}
            disabled={adding || added || outOfStock}
            style={outOfStock ? { opacity: 0.4, cursor: "not-allowed" } : added ? { background: "#16a34a" } : {}}
          >
            {outOfStock ? "Out of Stock" : added ? "✓ Added!" : adding ? "Adding…" : "Add to Cart"}
          </button>
          <Link href={href} className="btn bod bsm">
            View <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

function PlaceholderImage({ title }: { title: string }) {
  const id = `prod-${title.replace(/\W/g, "")}`
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" style={{ width: "100%", height: "100%" }}>
      <rect width="800" height="600" fill="#f8f9fa" />
      <defs>
        <pattern id={id} width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="9" y1="0" x2="9" y2="18" stroke="#dee2e6" strokeWidth="2" opacity="0.6" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill={`url(#${id})`} />
      <text x="400" y="297" fontFamily="monospace" fontSize="11" fill="#adb5bd" opacity="0.9" textAnchor="middle" dominantBaseline="middle">
        {title.toUpperCase()}
      </text>
    </svg>
  )
}
