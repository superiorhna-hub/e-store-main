"use client"

import { useState } from "react"

type Props = {
  source: "footer" | "popup" | "inline"
  compact?: boolean
  onSuccess?: () => void
}

export default function NewsletterForm({ source, compact, onSuccess }: Props) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const isPopup = source === "popup"

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, honeypot: "" }),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus("error")
        setMessage(data.error ?? "Something went wrong.")
        return
      }
      setStatus("success")
      setMessage("You're subscribed! Check your inbox for updates.")
      setEmail("")
      onSuccess?.()
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          aria-label="Email address"
          disabled={status === "loading" || status === "success"}
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: isPopup ? 0 : 6,
            border: isPopup ? "1.5px solid #c8cdd4" : "1px solid rgba(255,255,255,0.15)",
            background: isPopup ? "#fff" : "rgba(255,255,255,0.05)",
            color: isPopup ? "#111" : "#fff",
            fontSize: 14,
            outline: "none",
            fontFamily: "var(--font-dm-sans)",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={isPopup ? "cc-btn cc-btn--primary" : "ft__quote-btn"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginTop: 0,
            width: "100%",
            justifyContent: "center",
            opacity: status === "loading" || status === "success" ? 0.7 : 1,
            cursor: status === "loading" || status === "success" ? "default" : "pointer",
          }}
        >
          {status === "loading" ? "SUBSCRIBING…" : status === "success" ? "SUBSCRIBED ✓" : "SUBSCRIBE"}
        </button>
      </div>
      {/* Honeypot — hidden from users, bots may fill it */}
      <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      {message && (
        <p
          style={{
            marginTop: 8,
            marginBottom: 0,
            fontSize: 12,
            color: status === "error" ? "#e74c3c" : isPopup ? "#333" : "rgba(255,255,255,0.7)",
          }}
        >
          {message}
        </p>
      )}
    </form>
  )
}
