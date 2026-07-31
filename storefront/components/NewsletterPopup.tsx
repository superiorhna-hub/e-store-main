"use client"

import { useEffect, useState } from "react"
import NewsletterForm from "@/components/NewsletterForm"

const DISMISS_KEY = "newsletter_popup_dismissed"
const DELAY_MS = 8000

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return
    const timer = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Newsletter signup"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "rgba(0,0,0,0.55)",
      }}
      onClick={dismiss}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 440,
          padding: "36px 32px",
          borderRadius: 12,
          background: "var(--bg)",
          border: "1px solid var(--bd)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "none",
            border: "none",
            fontSize: 22,
            lineHeight: 1,
            cursor: "pointer",
            color: "var(--text2)",
          }}
        >
          ×
        </button>
        <h2
          style={{
            margin: "0 0 8px",
            fontSize: 22,
            fontFamily: "var(--font-sora)",
            color: "var(--text)",
          }}
        >
          Stay in the loop
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 14, lineHeight: 1.6, color: "var(--text2)" }}>
          Get product updates, industry insights, and manufacturing tips delivered to your inbox.
        </p>
        <NewsletterForm source="popup" compact onSuccess={() => setTimeout(dismiss, 2000)} />
      </div>
    </div>
  )
}
