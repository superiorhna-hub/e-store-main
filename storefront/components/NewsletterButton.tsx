"use client"

import { useState } from "react"
import NewsletterForm from "@/components/NewsletterForm"

function IcoClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function IcoArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

export default function NewsletterButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="ft__quote-btn"
        style={{ cursor: "pointer", whiteSpace: "nowrap" }}
      >
        Newsletter <IcoArrow />
      </button>

      {open && (
        <div
          className="cc-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div className="cc-modal" style={{ maxWidth: 440 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <div className="cc-modal__title" style={{ color: "#111", marginBottom: 6 }}>Newsletter</div>
                <p style={{ margin: 0, fontSize: 14, color: "#555", lineHeight: 1.6 }}>
                  Subscribe to receive updates about our latest industrial solutions and services.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#999", padding: 4, flexShrink: 0, marginLeft: 12 }}
                aria-label="Close"
              >
                <IcoClose />
              </button>
            </div>
            <NewsletterForm source="popup" onSuccess={() => setTimeout(() => setOpen(false), 2000)} />
          </div>
        </div>
      )}
    </>
  )
}
