"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import type { Order } from "@/lib/sheets"
import { formatPrice } from "@/lib/format"

// SVG status icons — no emojis
function IconProcessing() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function IconPacked() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
}
function IconShipped() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
}
function IconInTransit() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
}
function IconDelivered() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
}
function IconCancelled() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
}
function IconDefault() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
}

const STATUS_CONFIG: Record<string, { color: string; bg: string; icon: React.ReactNode; step: number }> = {
  Processing:   { color: "#f59e0b", bg: "rgba(245,158,11,0.12)",  icon: <IconProcessing />,  step: 1 },
  Packed:       { color: "#8b5cf6", bg: "rgba(139,92,246,0.12)",  icon: <IconPacked />,      step: 2 },
  Shipped:      { color: "#2563eb", bg: "rgba(37,99,235,0.12)",   icon: <IconShipped />,     step: 3 },
  "In Transit": { color: "#0891b2", bg: "rgba(8,145,178,0.12)",   icon: <IconInTransit />,   step: 4 },
  Delivered:    { color: "#16a34a", bg: "rgba(22,163,74,0.12)",   icon: <IconDelivered />,   step: 5 },
  Cancelled:    { color: "#ef4444", bg: "rgba(239,68,68,0.12)",   icon: <IconCancelled />,   step: 0 },
}

const ALL_STEPS = ["Processing", "Packed", "Shipped", "In Transit", "Delivered"]

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status] ?? { color: "var(--text2)", bg: "var(--bg2)", icon: <IconDefault />, step: 0 }
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "5px 12px", borderRadius: 20, fontSize: 13, fontWeight: 700,
      color: cfg.color, background: cfg.bg,
    }}>
      {cfg.icon} {status}
    </span>
  )
}

function ProgressBar({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status]
  if (!cfg || cfg.step === 0) return null
  const pct = ((cfg.step - 1) / (ALL_STEPS.length - 1)) * 100

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        {ALL_STEPS.map((step, i) => {
          const done = i < cfg.step
          const active = i === cfg.step - 1
          return (
            <div key={step} style={{ textAlign: "center", flex: 1 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%", margin: "0 auto 4px",
                background: done ? (active ? cfg.color : "#16a34a") : "var(--bg3)",
                border: `2px solid ${done ? (active ? cfg.color : "#16a34a") : "var(--bdM)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700,
                color: done ? "#fff" : "var(--textM)",
                transition: "all 0.3s",
              }}>
                {done ? (active ? "●" : "✓") : i + 1}
              </div>
              <div style={{ fontSize: 10, color: done ? "var(--text2)" : "var(--textM)", fontWeight: active ? 700 : 400 }}>{step}</div>
            </div>
          )
        })}
      </div>
      <div style={{ height: 4, background: "var(--bg3)", borderRadius: 4, marginTop: 4 }}>
        <div style={{
          height: "100%", borderRadius: 4,
          background: `linear-gradient(90deg, #16a34a, ${cfg.color})`,
          width: `${pct}%`, transition: "width 0.5s ease",
        }} />
      </div>
    </div>
  )
}

function OrderCard({ order }: { order: Order }) {
  const [open, setOpen] = useState(false)
  const cfg = STATUS_CONFIG[order.status] ?? { color: "var(--text2)", bg: "var(--bg2)", icon: <IconDefault />, step: 0 }

  return (
    <div style={{
      background: "var(--cBg)", border: `1px solid ${open ? cfg.color + "44" : "var(--bd)"}`,
      borderRadius: 16, overflow: "hidden", transition: "border-color 0.3s",
    }}>
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          padding: "20px 24px", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "var(--acc)", marginBottom: 4 }}>{order.orderId}</div>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: "var(--text)" }}>{order.product}</div>
          <StatusBadge status={order.status} />
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          {order.amount > 0 && (
            <div style={{ fontWeight: 800, fontSize: 20, color: "var(--text)" }}>
              {formatPrice(order.amount)}
            </div>
          )}
          <div style={{ fontSize: 18, color: "var(--textM)", marginTop: 4 }}>{open ? "▲" : "▼"}</div>
        </div>
      </div>

      {open && (
        <div style={{ padding: "0 24px 24px", borderTop: "1px solid var(--bd)" }}>
          <ProgressBar status={order.status} />
          {order.comments && (
            <div style={{
              marginTop: 16, padding: "12px 16px",
              background: `${cfg.color}10`, border: `1px solid ${cfg.color}30`,
              borderRadius: 10, fontSize: 14, color: "var(--text2)",
            }}>
              <span style={{ fontWeight: 700, color: cfg.color }}>Update: </span>
              {order.comments}
            </div>
          )}
          {order.updatedBy && (
            <div style={{ marginTop: 8, fontSize: 12, color: "var(--textM)" }}>Last updated by {order.updatedBy}</div>
          )}
        </div>
      )}
    </div>
  )
}

export default function TrackOrderClient() {
  const { data: session, status } = useSession()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!session?.user?.email) return
    setLoading(true)
    setError("")
    fetch(`/api/orders?email=${encodeURIComponent(session.user.email)}`)
      .then((r) => r.json())
      .then((data) => { setOrders(data.orders ?? []); setLoading(false) })
      .catch(() => { setError("Failed to load orders. Please try again."); setLoading(false) })
  }, [session])

  return (
    <div style={{
      minHeight: "100vh", paddingTop: 120, paddingBottom: 80,
      background: "var(--bg)", fontFamily: "var(--font-dm-sans, system-ui)",
    }}>
      <div className="W" style={{ maxWidth: 720 }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="lbl" style={{ marginBottom: 16 }}>SHIPMENT TRACKING</div>
          <h1 className="D2">Track Your Orders</h1>
          <p className="Bd" style={{ marginTop: 12 }}>
            Log in with your Google account to see your order status in real time.
          </p>
        </div>

        {status === "loading" && (
          <div style={{ textAlign: "center", padding: 60, color: "var(--text2)" }}>Loading…</div>
        )}

        {status === "unauthenticated" && (
          <div style={{
            background: "var(--cBg)", border: "1px solid var(--bd)", borderRadius: "var(--rL)",
            padding: 48, textAlign: "center",
          }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--acc)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="56" height="56">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 800, marginBottom: 8, color: "var(--text)" }}>Sign in to track your order</h2>
            <p style={{ color: "var(--text2)", marginBottom: 32 }}>
              We use your Google email to find your orders securely. No password needed.
            </p>
            <button
              onClick={() => signIn("google")}
              style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                padding: "14px 28px", background: "#111111", color: "#f5f5f5",
                border: "none", borderRadius: 12, fontSize: 16, fontWeight: 700,
                cursor: "pointer",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.8 33.9 29.4 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.9 0 20.4-7.9 20.4-21 0-1.4-.1-2.7-.4-4z"/>
                <path fill="#FF3D00" d="M6.3 14.7l7 5.1C15.1 15.7 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 5.1 29.5 3 24 3 16.3 3 9.6 7.9 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 45c5.4 0 10.3-1.9 14.1-5.1l-6.5-5.5C29.6 36 26.9 37 24 37c-5.3 0-9.8-3.1-11.3-7.5l-7 5.4C9.6 41.1 16.3 45 24 45z"/>
                <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.5-2.5 4.5-4.6 6l6.5 5.5C40.9 36.2 44 30.6 44 24c0-1.4-.1-2.7-.4-4z"/>
              </svg>
              Continue with Google
            </button>
          </div>
        )}

        {status === "authenticated" && (
          <div>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "var(--cBg)", border: "1px solid var(--bd)", borderRadius: 12,
              padding: "14px 20px", marginBottom: 32,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {session.user?.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={session.user.image} alt="" style={{ width: 36, height: 36, borderRadius: "50%" }} />
                )}
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>{session.user?.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)" }}>{session.user?.email}</div>
                </div>
              </div>
              <button
                onClick={() => signOut()}
                style={{
                  padding: "7px 14px", background: "transparent", border: "1px solid var(--bd)",
                  borderRadius: 8, color: "var(--text2)", fontSize: 13, cursor: "pointer",
                }}
              >
                Sign Out
              </button>
            </div>

            {loading && <div style={{ textAlign: "center", padding: 40, color: "var(--text2)" }}>Loading your orders…</div>}
            {error && <div style={{ padding: "14px 18px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 12, color: "#ef4444" }}>{error}</div>}
            {!loading && !error && orders.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text2)" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--textM)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="56" height="56">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <p style={{ fontSize: 18 }}>No orders found for this email address.</p>
                <p style={{ fontSize: 14, marginTop: 8, color: "var(--textM)" }}>
                  Orders are matched by the email you used at checkout.
                </p>
              </div>
            )}
            {!loading && orders.length > 0 && (
              <div style={{ display: "grid", gap: 16 }}>
                <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 8 }}>
                  {orders.length} order{orders.length !== 1 ? "s" : ""} found
                </div>
                {[...orders].reverse().map((order) => (
                  <OrderCard key={order.orderId} order={order} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
