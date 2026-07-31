"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      router.push("/admin/dashboard")
    } else {
      setError("Invalid email or password. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#f4f4f5", // Light neutral gray
      fontFamily: "var(--font-dm-sans), 'Inter', sans-serif",
    }}>
      <div style={{
        background: "#ffffff",
        borderRadius: 12,
        width: "100%", maxWidth: 440,
        boxShadow: "0 28px 80px rgba(0,0,0,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Dark Header Band */}
        <div style={{
          background: "#0A0A0A",
          padding: "32px 32px 28px",
          textAlign: "center",
        }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
             <img src="/images/dark-logo.webp" alt="Logo" style={{ height: "48px", width: "auto" }} />
          </div>
          <h1 style={{ color: "#ffffff", fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: "0.06em", fontFamily: "var(--font-sora), 'Sora', sans-serif", textTransform: "uppercase" }}>Admin Panel</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", margin: "6px 0 0", fontSize: 13, letterSpacing: "0.02em" }}>Secure Access Required</p>
        </div>

        {/* Form Body */}
        <div style={{ padding: "32px" }}>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", color: "#111", fontSize: 13, fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-sora), 'Sora', sans-serif" }}>
                Email Address <span style={{ color: "#e53e3e" }}>*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@superiorharness.com"
                required
                style={{
                  width: "100%", boxSizing: "border-box", padding: "12px 14px",
                  background: "#fff", border: "1.5px solid #d1d5db", borderRadius: 7,
                  color: "#111", fontSize: 14, outline: "none", transition: "border-color 0.18s, box-shadow 0.18s",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#0A0A0A"; e.target.style.boxShadow = "0 0 0 3px rgba(0,0,0,0.07)"; }}
                onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", color: "#111", fontSize: 13, fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-sora), 'Sora', sans-serif" }}>
                Password <span style={{ color: "#e53e3e" }}>*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: "100%", boxSizing: "border-box", padding: "12px 14px",
                  background: "#fff", border: "1.5px solid #d1d5db", borderRadius: 7,
                  color: "#111", fontSize: 14, outline: "none", transition: "border-color 0.18s, box-shadow 0.18s",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#0A0A0A"; e.target.style.boxShadow = "0 0 0 3px rgba(0,0,0,0.07)"; }}
                onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            {error && (
              <div style={{
                padding: "12px 14px", background: "#fff0f0", border: "1px solid #fecaca",
                borderRadius: 7, color: "#dc2626", fontSize: 13, marginBottom: 20,
              }}>{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", padding: "15px", background: "#0A0A0A",
                color: "#ffffff", border: "none", borderRadius: 9999, fontSize: 14, fontWeight: 700,
                fontFamily: "var(--font-sora), 'Sora', sans-serif", letterSpacing: "0.02em",
                cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1,
                transition: "background 0.2s, transform 0.15s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.background = "#222", e.currentTarget.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => !loading && (e.currentTarget.style.background = "#0A0A0A", e.currentTarget.style.transform = "none")}
            >
              {loading ? "Authenticating..." : "Sign In"}
              {!loading && <span>→</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
