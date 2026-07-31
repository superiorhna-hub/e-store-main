"use client"

/**
 * @file ShopFilters.tsx
 * @description Renders the shop page with a sidebar for filters and a grid for products.
 * 
 * Logic Highlights:
 * 1. Filtering logic (search, category, inStock): Handled via a single useMemo (`filteredProducts`)
 *    which recalculates whenever any state changes. This is highly performant.
 * 2. Search matches across Name, Category, AND Part Number.
 * 3. Mobile responsiveness: The filter sidebar transforms into a slide-out drawer on small screens.
 * 4. Pagination: Slices the filtered array into pages of 6 items.
 */

import { useState, useMemo, useEffect } from "react"
import type { Product } from "@/lib/sheets"
import ProductCard from "./ProductCard"

interface ShopFiltersProps {
  initialProducts: Product[]
  initialQuery?: string
}

function getNormalizedCategory(rawCat: string): string {
  if (!rawCat) return ""
  const lower = rawCat.toLowerCase()
  if (lower.includes("connector") || lower.includes("part")) return "Connectors / Parts"
  if (lower.includes("cable") || lower.includes("wire")) return "Cables"
  return rawCat.trim()
}

export default function ShopFilters({ initialProducts, initialQuery = "" }: ShopFiltersProps) {
  const [search, setSearch] = useState(initialQuery)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState<string>("")
  const [maxPrice, setMaxPrice] = useState<string>("")
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortOrder, setSortOrder] = useState<"" | "low-high" | "high-low">("")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const PRODUCTS_PER_PAGE = 6

  // Disable body scroll when mobile filter is open
  useEffect(() => {
    if (mobileFiltersOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileFiltersOpen])

  const maxPossiblePrice = useMemo(() => {
    if (!initialProducts.length) return 10000;
    return Math.max(...initialProducts.map(p => p.price));
  }, [initialProducts])

  const categories = useMemo(() => {
    const catsMap = new Map<string, string>() // stores lowercase -> original
    initialProducts.forEach(p => {
      if (p.category) {
        const normalized = getNormalizedCategory(p.category)
        const lower = normalized.toLowerCase()
        // If we haven't seen this category yet, or if the current one has better casing (starts with uppercase)
        if (!catsMap.has(lower) || (normalized[0] === normalized[0].toUpperCase() && catsMap.get(lower)![0] !== catsMap.get(lower)![0].toUpperCase())) {
          catsMap.set(lower, normalized)
        }
      }
    })
    return Array.from(catsMap.values()).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  }, [initialProducts])

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(p => {
      if (search) {
        const q = search.toLowerCase()
        const matchName = p.name.toLowerCase().includes(q)
        const matchCategory = p.category.toLowerCase().includes(q)
        const matchPartNumber = p.partNumber ? p.partNumber.toLowerCase().includes(q) : false

        if (!matchName && !matchCategory && !matchPartNumber) {
          return false
        }
      }
      
      // Category
      if (selectedCategories.length > 0) {
        const pNormalizedCat = getNormalizedCategory(p.category || "")
        if (!selectedCategories.includes(pNormalizedCat)) return false
      }

      // Price
      if (minPrice && p.price < Number(minPrice)) return false
      if (maxPrice && p.price > Number(maxPrice)) return false

      // Availability
      if (inStockOnly && !p.inStock) return false

      return true
    }).sort((a, b) => {
      if (sortOrder === "low-high") return a.price - b.price
      if (sortOrder === "high-low") return b.price - a.price
      return 0
    })
  }, [initialProducts, search, selectedCategories, minPrice, maxPrice, inStockOnly, sortOrder])

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [search, selectedCategories, minPrice, maxPrice, inStockOnly, sortOrder])

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )

  // Re-trigger reveal animation when filtered products change.
  // io is declared outside the timeout so cleanup can disconnect it whether
  // or not the 50ms timer has fired — prevents orphaned observer accumulation.
  useEffect(() => {
    let io: IntersectionObserver | null = null

    const timeoutId = setTimeout(() => {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("in")
          })
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      )
      document.querySelectorAll(".shop-container .rv").forEach((el) => io!.observe(el))
    }, 50)

    return () => {
      clearTimeout(timeoutId)
      io?.disconnect()
    }
  }, [filteredProducts])

  return (
    <div className="shop-layout" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 32, maxWidth: "100%" }}>
      
      {/* Mobile/Desktop responsive layout: we'll use CSS grid. 
          On desktop: 280px 1fr
          On mobile: 1fr */}
      <style dangerouslySetInnerHTML={{__html: `
        .shop-container {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 32px;
          align-items: start;
          max-width: 100%;
        }
        
        .mobile-filter-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px;
          background: var(--bg2);
          border: 1px solid var(--bd);
          border-radius: 8px;
          font-family: var(--font-sora);
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 24px;
          color: var(--text);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        /* Mobile Drawer Defaults */
        .shop-sidebar {
          position: fixed;
          top: 120px;
          left: -100%;
          width: 320px;
          max-width: 85vw;
          height: calc(100vh - 120px);
          background: var(--bg);
          z-index: 900;
          padding: 24px;
          overflow-y: auto;
          transition: left 0.3s ease;
          box-shadow: 4px 0 24px rgba(0,0,0,0.5);
          border-right: 1px solid var(--bd);
        }
        .shop-sidebar.open {
          left: 0;
        }
        .sidebar-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 899;
          backdrop-filter: blur(4px);
        }
        .sidebar-overlay.open {
          display: block;
        }
        .sidebar-close-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--bd);
          font-family: var(--font-sora);
          font-weight: 800;
          font-size: 18px;
        }

        @media (min-width: 900px) {
          .shop-container {
            grid-template-columns: 280px minmax(0, 1fr);
            gap: 64px;
          }
          .mobile-filter-btn {
            display: none;
          }
          .shop-sidebar {
            position: static;
            width: auto;
            max-width: none;
            height: auto;
            padding: 0;
            overflow-y: visible;
            box-shadow: none;
            border-right: none;
            transition: none;
          }
          .sidebar-overlay {
            display: none !important;
          }
          .sidebar-close-btn {
            display: none;
          }
        }
        .filter-section {
          margin-bottom: 32px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--bd);
        }
        .filter-title {
          font-family: var(--font-sora);
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .filter-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          cursor: pointer;
          color: var(--text2);
          font-size: 15px;
        }
        .filter-label:hover {
          color: var(--text);
        }
        .price-input {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid var(--bd);
          border-radius: 8px;
          background: transparent;
          color: var(--text);
          font-family: var(--font-inter);
        }
        .price-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          align-items: center;
        }
      `}} />

      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <div className="lbl" style={{ marginBottom: 16 }}>
          {selectedCategories.length > 0 ? "CATEGORY" : "ALL PRODUCTS"}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <h1 className="D2">
            {search 
              ? `Search: "${search}"` 
              : selectedCategories.length > 0 
                ? selectedCategories.join(" & ") 
                : "Shop Everything"}
          </h1>
          <div style={{ color: "var(--text2)", fontSize: 15 }}>
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button className="mobile-filter-btn" onClick={() => setMobileFiltersOpen(true)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
        Filter Products
      </button>

      {/* Overlay for Mobile */}
      <div 
        className={`sidebar-overlay ${mobileFiltersOpen ? 'open' : ''}`} 
        onClick={() => setMobileFiltersOpen(false)}
      />

      <div className="shop-container">
        
        {/* Sidebar */}
        <aside className={`shop-sidebar ${mobileFiltersOpen ? 'open' : ''}`}>
          
          <div className="sidebar-close-btn">
            Filters
            <button onClick={() => setMobileFiltersOpen(false)} style={{ background: "transparent", border: "none", color: "var(--text)", fontSize: 24, cursor: "pointer" }}>&times;</button>
          </div>

          <div className="filter-section">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="price-input"
              style={{ marginBottom: 8 }}
            />
          </div>

          {categories.length > 0 && (
            <div className="filter-section">
              <div className="filter-title">Categories</div>
              {categories.map(cat => (
                <label key={cat} className="filter-label">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    style={{ accentColor: "var(--acc)", width: 16, height: 16 }}
                  />
                  {cat}
                </label>
              ))}
            </div>
          )}

          {/* Price Range Filter Hidden
          <div className="filter-section">
            <div className="filter-title">Price Range</div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text2)", marginBottom: 8 }}>
                <span>Min: ${minPrice || "0"}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max={maxPossiblePrice} 
                step="100"
                value={minPrice || "0"}
                onChange={e => setMinPrice(e.target.value)}
                style={{ width: "100%", accentColor: "var(--acc)", cursor: "pointer" }}
              />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text2)", marginBottom: 8 }}>
                <span>Max: ${maxPrice || maxPossiblePrice}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max={maxPossiblePrice} 
                step="100"
                value={maxPrice || maxPossiblePrice}
                onChange={e => setMaxPrice(e.target.value)}
                style={{ width: "100%", accentColor: "var(--acc)", cursor: "pointer" }}
              />
            </div>
          </div>
          */}

          <div className="filter-section">
            <div className="filter-title">Sort By</div>
            {(["", "low-high", "high-low"] as const).map((val) => {
              const label = val === "" ? "Default" : val === "low-high" ? "Price: Low to High" : "Price: High to Low"
              return (
                <label key={val} className="filter-label">
                  <input
                    type="radio"
                    name="sortOrder"
                    checked={sortOrder === val}
                    onChange={() => setSortOrder(val)}
                    style={{ accentColor: "var(--acc)", width: 16, height: 16 }}
                  />
                  {label}
                </label>
              )
            })}
          </div>

          <div className="filter-section" style={{ borderBottom: "none" }}>
            <div className="filter-title">Availability</div>
            <label className="filter-label">
              <input 
                type="checkbox" 
                checked={inStockOnly}
                onChange={e => setInStockOnly(e.target.checked)}
                style={{ accentColor: "var(--acc)", width: 16, height: 16 }}
              />
              In Stock Only
            </label>
          </div>

          {(selectedCategories.length > 0 || minPrice || maxPrice || inStockOnly || search || sortOrder) && (
            <button
              onClick={() => {
                setSearch("")
                setSelectedCategories([])
                setMinPrice("")
                setMaxPrice("")
                setInStockOnly(false)
                setSortOrder("")
              }}
              className="btn bod" 
              style={{ width: "100%", justifyContent: "center" }}
            >
              Clear All Filters
            </button>
          )}

        </aside>

        {/* Grid */}
        <div>
          {/* Note Banner for Wires & Cables */}
          {selectedCategories.some(c => c.toLowerCase().includes('cable') || c.toLowerCase().includes('wire')) && (
            <div style={{
              background: "var(--bg2)",
              border: "1px solid var(--bd)",
              borderRadius: "var(--r)",
              padding: "16px 20px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px"
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--acc)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <div>
                <strong style={{ display: "block", marginBottom: "4px", color: "var(--text)" }}>Important Note</strong>
                <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>
                  All wires and cables are priced and sold per foot (FT). Please adjust your quantity accordingly when adding to your cart.
                </p>
              </div>
            </div>
          )}
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text2)", background: "rgba(0,109,55,0.02)", borderRadius: "var(--rL)", border: "1px dashed var(--bd)" }}>
              <p>No products match your filters.</p>
              <button
                onClick={() => {
                  setSearch("")
                  setSelectedCategories([])
                  setMinPrice("")
                  setMaxPrice("")
                  setInStockOnly(false)
                  setSortOrder("")
                }}
                className="btn bod"
                style={{ marginTop: 16 }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div>
              <div className="prodG">
                {paginatedProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>

              {totalPages > 1 && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 64, paddingBottom: 32 }}>
                  <button 
                    onClick={() => {
                      setCurrentPage(p => Math.max(1, p - 1))
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    disabled={currentPage === 1}
                    className="btn bod"
                    style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", minWidth: 100, opacity: currentPage === 1 ? 0.3 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    Prev
                  </button>
                  
                  <div style={{ display: "flex", gap: 8, fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: 14 }}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                      <button
                        key={num}
                        onClick={() => {
                          setCurrentPage(num)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        style={{
                          width: 36, height: 36,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          borderRadius: 8,
                          border: num === currentPage ? "2px solid var(--text)" : "1px solid var(--bd)",
                          background: num === currentPage ? "var(--text)" : "transparent",
                          color: num === currentPage ? "var(--bg)" : "var(--text)",
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={() => {
                      setCurrentPage(p => Math.min(totalPages, p + 1))
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    disabled={currentPage === totalPages}
                    className="btn bod"
                    style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", minWidth: 100, opacity: currentPage === totalPages ? 0.3 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                  >
                    Next
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
