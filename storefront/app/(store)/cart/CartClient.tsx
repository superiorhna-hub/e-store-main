"use client"

/**
 * @file CartClient.tsx
 * @description Manages the shopping cart user interface.
 * 
 * Logic Highlights:
 * 1. Global State: Uses the `useCart` context to read and modify cart items.
 * 2. MOQ (Minimum Order Quantity): Wires and Cables have a strict MOQ of 5 items. 
 *    The `updateQuantity` function intercepts reductions below 5 and alerts the user.
 * 3. Shipping Calculation: Adds a flat $15.00 shipping rate to the subtotal.
 */

import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/cart-context"

import { formatPrice } from "@/lib/format"

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </svg>
  )
}

function MinusIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
}

function PlusIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
}

function TrashIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg>
}

export default function CartClient() {
  const { items, loading, subtotal, removeItem, updateQuantity } = useCart()

  const isEmpty = items.length === 0

  return (
    <div className="cart-page">
      <div className="W">
        <div style={{ marginBottom: 48 }}>
          <div className="lbl" style={{ marginBottom: 16 }}>YOUR CART</div>
          <h1 className="D3">Shopping Cart</h1>
        </div>

        {/* Note Banner for Wires & Cables in Cart */}
        {items.some(item => item.category?.toLowerCase().includes("cable") || item.category?.toLowerCase().includes("wire")) && (
          <div style={{
            background: "var(--bg2)",
            border: "1px solid var(--bd)",
            borderRadius: "var(--r)",
            padding: "16px 20px",
            marginBottom: "32px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--acc)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <div>
              <strong style={{ display: "block", marginBottom: "4px", color: "var(--text)" }}>Important Note Regarding Wires & Cables</strong>
              <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>
                The quantity for all wire and cable products in your cart represents the total length in feet (FT).
              </p>
            </div>
          </div>
        )}

        {isEmpty ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ color: "var(--text2)", fontSize: 18, marginBottom: 32 }}>
              Your cart is empty.
            </p>
            <Link href="/shop" className="btn bp">
              Continue Shopping <ArrowIcon />
            </Link>
          </div>
        ) : (
          <div className="cart-layout" style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 64, alignItems: "start" }}>

            {/* ── Line items ─────────────────────────────────────────── */}
            <div>
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  {/* Thumbnail */}
                  <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--bg2)", aspectRatio: "1", position: "relative" }}>
                    {(() => {
                      const firstUrl = item.imageUrl ? item.imageUrl.split(",")[0].trim() : ""
                      if (!firstUrl || firstUrl === "-") return false
                      if (firstUrl.startsWith("/")) return firstUrl
                      try { new URL(firstUrl); return firstUrl } catch { return false }
                    })() ? (
                      <img src={item.imageUrl.split(",")[0].trim()} alt={item.name} style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "var(--textM)", fontFamily: "monospace", padding: 8, textAlign: "center" }}>
                        {item.name}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div>
                    <div style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 8 }}>{item.category}</div>
                    <div style={{ fontSize: 14, color: "var(--acc)", fontWeight: 600 }}>
                      {formatPrice(item.price)}
                    </div>
                  </div>

                  {/* Qty controls */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, border: "1.5px solid var(--bd)", borderRadius: 9999, padding: "4px 12px" }}>
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(5, item.quantity - 1))}
                      disabled={loading}
                      style={{ color: "var(--text2)", display: "flex", padding: 4 }}
                    >
                      <MinusIcon />
                    </button>
                    <span style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: 14, minWidth: 20, textAlign: "center" }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={loading}
                      style={{ color: "var(--text2)", display: "flex", padding: 4 }}
                    >
                      <PlusIcon />
                    </button>
                  </div>

                  {/* Remove */}
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: 18 }}>
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      disabled={loading}
                      style={{ color: "var(--text2)", display: "flex", opacity: 0.6, transition: "opacity 0.2s" }}
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Summary ─────────────────────────────────────────────── */}
            <div className="cart-summary" style={{ background: "var(--cBg)", border: "1px solid var(--bd)", borderRadius: "var(--rL)", padding: 32, position: "sticky", top: 100 }}>
              <div style={{ fontFamily: "var(--font-sora)", fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24, color: "var(--text2)" }}>
                Order Summary
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 15 }}>
                <span style={{ color: "var(--text2)" }}>Subtotal</span>
                <span style={{ fontWeight: 700 }}>{formatPrice(subtotal)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, fontSize: 13, color: "var(--text2)" }}>
                <span>Shipping (Flat Rate)</span>
                <span>$15.00</span>
              </div>

              <div style={{ borderTop: "1px solid var(--bd)", paddingTop: 20, marginBottom: 24, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-sora)", fontWeight: 700 }}>Total</span>
                <span style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: 22, color: "var(--acc)" }}>
                  {formatPrice(subtotal + 15)}
                </span>
              </div>

              <Link href="/checkout" className="btn bp" style={{ width: "100%", justifyContent: "center" }}>
                Proceed to Checkout <ArrowIcon />
              </Link>
              <Link href="/shop" style={{ display: "block", textAlign: "center", marginTop: 16, fontSize: 13, color: "var(--text2)" }}>
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
