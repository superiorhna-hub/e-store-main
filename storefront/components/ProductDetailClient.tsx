"use client"

/**
 * @file ProductDetailClient.tsx
 * @description Renders the individual product details, image gallery, and tabbed information.
 * 
 * Logic Highlights:
 * 1. Image Gallery: Splits the comma-separated `imageUrl` string and renders a main image with thumbnails.
 * 2. Tabs State: Uses React `useState` to switch between Overview, Features, Services, Gallery, and Customize tabs without reloading the page.
 * 3. Add to Cart: Integrates with `useCart` context. Also temporarily shows a "Added to Cart!" success state.
 */

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/sheets"
import { formatPrice } from "@/lib/format"

import Image from "next/image"

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </svg>
  )
}

const ALL_TABS = [
  { id: "overview",   label: "Overview"      },
  { id: "features",   label: "Features"      },
  { id: "services",   label: "Services"      },
  { id: "gallery",    label: "Gallery"       },
  { id: "customize",  label: "Customize"     },
] as const

type TabId = typeof ALL_TABS[number]["id"]

export default function ProductDetailClient({ product }: { product: Product }) {
  const router = useRouter()
  const { addItem } = useCart()
  const [adding, setAdding]     = useState(false)
  const [added, setAdded]       = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>("overview")
  const [activeImage, setActiveImage] = useState(0)

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
    setTimeout(() => { setAdded(false); router.push("/cart") }, 800)
  }, [addItem, product, router])

  const isValidUrl = (url: string) => {
    if (!url || url === "-") return false
    if (url.startsWith("/")) return true
    try { new URL(url); return true } catch { return false }
  }

  const images = product.imageUrl
    ? product.imageUrl.split(",").map(i => i.trim()).filter(isValidUrl)
    : []
  const hasImages = images.length > 0

  const tabs = hasImages ? ALL_TABS : ALL_TABS.filter(t => t.id !== "gallery")

  const isWireOrCable = product.category?.toLowerCase().includes("wire") || product.category?.toLowerCase().includes("cable")

  return (
    <div className="pd-shell">

      {/* ── Product name header ── */}
      <div className="pd-hdr">
        <div className="W">
          <div className="lbl" style={{ marginBottom: 12 }}>
            {product.category || "Product"}
            {product.partNumber && (
              <span style={{ marginLeft: 16, fontFamily: "monospace", color: "var(--text2)" }}>
                PN: {product.partNumber}
              </span>
            )}
          </div>
          <h1 className="D3" style={{ fontSize: "clamp(32px, 5vw, 64px)" }}>{product.name}</h1>
        </div>
      </div>

      {/* ── Tab body ── */}
      <div className="pd-layout">

        {/* Sidebar */}
        <aside className="pd-sidebar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pd-tab-btn${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Content panel */}
        <div className="pd-panel">

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div className="pd-overview-grid">
              {/* Image gallery */}
              <div>
                <div className="pd-img-main">
                  {hasImages ? (
                    <>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Image
                          src={images[activeImage]}
                          alt={product.name}
                          fill
                          style={{ objectFit: "contain", display: "block" }}
                        />
                      </div>
                      {images.length > 1 && (
                        <>
                          <button className="pd-img-arrow pd-img-arrow--l" onClick={() => setActiveImage(p => (p === 0 ? images.length - 1 : p - 1))} aria-label="Previous image">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                          </button>
                          <button className="pd-img-arrow pd-img-arrow--r" onClick={() => setActiveImage(p => (p === images.length - 1 ? 0 : p + 1))} aria-label="Next image">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="pd-img-placeholder">{product.name}</div>
                  )}
                </div>

                {hasImages && images.length > 1 && (
                  <div className="pd-thumbs">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        className={`pd-thumb${activeImage === idx ? " active" : ""}`}
                        onClick={() => setActiveImage(idx)}
                      >
                        <div style={{ position: "relative", width: "100%", height: "100%" }}>
                          <Image src={img} alt={`${product.name} view ${idx + 1}`} fill style={{ objectFit: "contain" }} />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Pricing + CTA */}
              <div className="pd-overview-info">
                <p className="Bd" style={{ marginBottom: 28, color: "var(--text2)" }}>
                  {product.description || "Superior Harness & Assembly is an ISO certified manufacturer of a wide range of custom products. Known for enduring quality, enhanced structure, and built to exact specifications."}
                </p>

                <div className="pd-price">
                  {product.price > 0 ? formatPrice(product.price) : "Contact for price"}
                </div>

                <button
                  className="btn bp no-fill"
                  onClick={handleAddToCart}
                  disabled={adding || added || !product.inStock}
                  style={{
                    width: "100%",
                    background: added ? "#16a34a" : (!product.inStock ? "var(--bg3)" : undefined),
                    color: !product.inStock ? "var(--textM)" : undefined,
                    cursor: !product.inStock ? "not-allowed" : undefined,
                    borderColor: !product.inStock ? "var(--bd)" : undefined,
                  }}
                >
                  {!product.inStock ? "Out of Stock" : added ? "✓ Added to Cart!" : adding ? "Adding…" : "Add to Cart"}
                  {product.inStock && !added && <ArrowIcon />}
                </button>

                <div className="pd-overview-desc">
                  <p className="Bd">
                    The {product.name.toLowerCase()} are manufactured to the highest quality standards, offering excellent durability and resistance to temperature and environmental factors. Widely used in automotive, industrial, and defense applications.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FEATURES */}
          {activeTab === "features" && (
            <div>
              <div className="pd-tab-hdr">
                <h2 className="pd-tab-title">Features &amp; Materials</h2>
                <p className="Bd pd-tab-sub">Technical specifications and materials used in manufacturing {product.name.toLowerCase()}.</p>
              </div>
              <div className="pd-two-col">
                <div>
                  <h3 className="pd-section-h">Salient Features</h3>
                  <p className="Bd" style={{ marginBottom: 20, color: "var(--text2)" }}>
                    {product.name} is a versatile component known for its excellent properties and wide range of applications.
                  </p>
                  <ul className="pd-list">
                    {[
                      "Suitable for usage in extreme temperatures ranging from -60 F to 400 F",
                      "Manufactured to meet strict ISO quality standards",
                      "Resistant to ozone and UV radiations",
                      "Available in industrial grade and custom specifications",
                    ].map((item, i) => (
                      <li key={i}><span className="pd-list-bullet">›</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="pd-section-h">Materials</h3>
                  <p className="Bd" style={{ marginBottom: 20, color: "var(--text2)" }}>
                    Premium materials depending on application type and requirements.
                  </p>
                  <ul className="pd-list">
                    {[
                      "OEM-Grade Wiring",
                      "Automotive Connectors (Deutsch, Delphi)",
                      "Silicone & EPDM",
                      "High-temperature Neoprene",
                    ].map((item, i) => (
                      <li key={i}><span className="pd-list-bullet">›</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SERVICES */}
          {activeTab === "services" && (
            <div>
              <div className="pd-tab-hdr">
                <h2 className="pd-tab-title">Product Facility and Service</h2>
              </div>
              <p className="Bd" style={{ marginBottom: 32, color: "var(--text2)" }}>
                The {product.name.toLowerCase()} is high in demand as it has many applications including industrial equipment sealing, vehicle wiring, and complex machinery. With an earnest aim to provide satisfactory and customized products, we ensure sturdy quality that will never fail your expectations. As per the customer&rsquo;s requirements, we are capable of manufacturing any custom and complex assembly.
              </p>
              <a href="#quote" className="btn bp" style={{ display: "inline-flex" }}>
                Request a Quotation <ArrowIcon />
              </a>
            </div>
          )}

          {/* GALLERY */}
          {activeTab === "gallery" && hasImages && (
            <div>
              <div className="pd-tab-hdr">
                <h2 className="pd-tab-title">Product Gallery</h2>
                <p className="Bd pd-tab-sub">Visual profiles of {product.name.toLowerCase()}.</p>
              </div>
              <div className="pd-gallery-grid">
                {images.map((img, idx) => (
                  <div key={idx} className="pd-gallery-item">
                    <div style={{ position: "relative", width: "100%", minHeight: "200px" }}>
                      <Image src={img} alt={`${product.name} profile ${idx + 1}`} fill style={{ objectFit: "contain", padding: 16 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CUSTOMIZE */}
          {activeTab === "customize" && (
            <div>
              <div className="pd-tab-hdr">
                <h2 className="pd-tab-title">Customization</h2>
              </div>
              <p className="Bd" style={{ marginBottom: 32, color: "var(--text2)" }}>
                Your order can be completely customized, as per your requirements. We provide value-added services such as cut-to-length extrusion, wire splicing, terminal crimping, custom loom protection, and complex color-matching assemblies.
              </p>
              <div className="pd-cta-card">
                <h3 className="pd-cta-card__h">
                  Have specific custom material, size and component requirements?
                </h3>
                <p className="Bd" style={{ marginBottom: 28, color: "var(--text2)" }}>
                  Please contact us today to get the best competitive prices.
                </p>
                <a href="/contact" className="btn bp" style={{ display: "inline-flex" }}>
                  Contact Us <ArrowIcon />
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
