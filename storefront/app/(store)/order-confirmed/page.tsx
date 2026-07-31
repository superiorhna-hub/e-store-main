"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useCart } from "@/context/cart-context"

function OrderConfirmedContent() {
  const { clearCart } = useCart()
  const searchParams = useSearchParams()
  const paymentId = searchParams.get("payment_id") ?? searchParams.get("session_id") ?? ""
  const [downloadToken, setDownloadToken] = useState("")

  useEffect(() => {
    clearCart()
    // Retrieve the HMAC token stored by the checkout page before redirect.
    // Using sessionStorage (not the URL) keeps the token out of server logs
    // and browser history. Cleared immediately after reading so it cannot
    // be reused by another tab or a page refresh.
    const tok = sessionStorage.getItem("invoice_token") ?? ""
    if (tok) {
      setDownloadToken(tok)
      sessionStorage.removeItem("invoice_token")
    }
  }, [clearCart])

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)", padding: "40px 24px" }}>
      <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>

        {/* Checkmark */}
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "2px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <div className="lbl" style={{ justifyContent: "center", marginBottom: 16 }}>ORDER CONFIRMED</div>

        <h1 className="D3" style={{ marginBottom: 16 }}>Thank You!</h1>

        <p style={{ fontSize: 17, color: "var(--text2)", lineHeight: 1.74, marginBottom: 32 }}>
          Your order has been placed successfully. We've sent a confirmation to your email address.
          Our team will process your order shortly.
        </p>

        {paymentId && (
          <div style={{ background: "var(--bg2)", borderRadius: 12, padding: "16px 20px", marginBottom: 32, border: "1px solid var(--bd)" }}>
            <div style={{ fontSize: 11, fontFamily: "var(--font-sora)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--textM)", marginBottom: 6 }}>
              Payment Reference
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 14, color: "var(--text2)", wordBreak: "break-all" }}>
              {paymentId}
            </div>
          </div>
        )}

        <div style={{ background: "var(--bg2)", borderRadius: 16, padding: "24px 28px", marginBottom: 40, border: "1px solid var(--bd)", textAlign: "left" }}>
          <h3 style={{ fontFamily: "var(--font-sora)", fontSize: 15, fontWeight: 700, marginBottom: 16 }}>What happens next?</h3>
          {[
            "We'll review and confirm your order within 24 hours.",
            "Our team will pack and ship your items manually.",
            "You'll be able to track updates by contacting us.",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: i < 2 ? 12 : 0 }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--acc)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sora)", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                {i + 1}
              </div>
              <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.6 }}>{step}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <Link href="/shop" className="btn bp">
            Continue Shopping
          </Link>
          {paymentId && downloadToken && (
            <a href={`/api/invoice?paymentId=${encodeURIComponent(paymentId)}&token=${encodeURIComponent(downloadToken)}`} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "transparent", border: "1px solid var(--bd)", color: "var(--text)" }}>
              Download Invoice
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

import { Suspense } from "react"

export default function OrderConfirmedPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>Loading...</div>}>
      <OrderConfirmedContent />
    </Suspense>
  )
}
