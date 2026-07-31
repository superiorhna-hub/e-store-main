/**
 * @file app/admin/dashboard/page.tsx
 * @description Password-protected Admin Dashboard — Client Component.
 *   Provides a full management interface for the Client Store, split into
 *   five sidebar-navigated tabs:
 *
 *   1. Overview     – KPI cards: total products, orders, and revenue.
 *   2. Products     – Add / Edit / Delete products (writes to Google Sheets).
 *   3. Orders       – View all orders, update shipment status & tracking notes,
 *                     toggle customer email notifications per update.
 *   4. Blog Posts   – Add blog entries with title, keywords, slug, cover image,
 *                     publish date, content, and Published/Draft toggle.
 *   5. Inquiries    – View contact form submissions, expand messages,
 *                     update inquiry status (New → In Progress → Replied → Closed).
 *
 *   Auth: Reads `admin_session` cookie set by /api/admin/auth.
 *   If the session cookie is missing, redirect to /admin login page.
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import type { Product, Order, Blog, Inquiry, Quote, Subscriber } from "@/lib/sheets"
import { formatPrice } from "@/lib/format"

// ── Styles ────────────────────────────────────────────────────────────────────
const s = {
  page: {
    minHeight: "100vh",
    background: "var(--bg2)",
    fontFamily: "var(--font-dm-sans), 'Inter', sans-serif",
    color: "var(--text)",
  } as React.CSSProperties,
  sidebar: {
    width: 240,
    background: "var(--bg)",
    borderRight: "1px solid var(--bd)",
    position: "fixed" as const,
    top: 0, left: 0, bottom: 0,
    display: "flex", flexDirection: "column" as const,
    zIndex: 10,
  },
  main: {
    marginLeft: 240,
    padding: "32px 40px",
    minHeight: "100vh",
  } as React.CSSProperties,
  card: {
    background: "var(--cBg)",
    border: "1px solid var(--bd)",
    borderRadius: 12,
    padding: 24,
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
  } as React.CSSProperties,
  btn: {
    padding: "12px 20px", borderRadius: 9999, border: "none",
    cursor: "pointer", fontSize: 13, fontWeight: 700,
    fontFamily: "var(--font-sora), 'Sora', sans-serif",
    letterSpacing: "0.02em",
  } as React.CSSProperties,
  input: {
    width: "100%", boxSizing: "border-box" as const,
    padding: "10px 14px", background: "var(--bg2)",
    border: "1.5px solid var(--bdM)", borderRadius: 7,
    color: "var(--text)", fontSize: 14, outline: "none",
    fontFamily: "var(--font-dm-sans), 'Inter', sans-serif",
  } as React.CSSProperties,
  label: {
    display: "block", color: "var(--text)", fontSize: 13,
    fontWeight: 600, marginBottom: 6,
    fontFamily: "var(--font-sora), 'Sora', sans-serif",
  } as React.CSSProperties,
}

// ── Nav Item ──────────────────────────────────────────────────────────────────
function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "12px 20px", background: active ? "rgba(0,0,0,0.12)" : "transparent",
        border: "none", borderLeft: active ? "3px solid var(--text)" : "3px solid transparent",
        color: active ? "var(--text)" : "var(--text2)", cursor: "pointer",
        fontSize: 14, fontWeight: active ? 700 : 500, width: "100%", textAlign: "left",
        transition: "all 0.15s",
      }}
    >
      <span style={{ opacity: active ? 1 : 0.7 }}>{icon}</span> {label}
    </button>
  )
}

// ── Skeleton Loader ───────────────────────────────────────────────────────────
function TableSkeleton({ columns }: { columns: number }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid var(--bd)" }}>
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} style={{ padding: "10px 12px" }}>
                <div className="skeleton skeleton-text" style={{ width: "60%", height: 12, marginBottom: 0 }}></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--bd)" }}>
              {Array.from({ length: columns }).map((_, j) => (
                <td key={j} style={{ padding: "14px 12px" }}>
                  <div className="skeleton skeleton-text" style={{ width: j === 0 ? "80%" : "40%", height: 16, marginBottom: 0 }}></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Product Form ──────────────────────────────────────────────────────────────
function ProductForm({
  initial, rowIndex, onSave, onCancel,
}: {
  initial?: Partial<Product>
  rowIndex?: number
  onSave: () => void
  onCancel: () => void
}) {
  const [form, setForm] = useState({
    name: initial?.name ?? "",
    category: initial?.category ?? "",
    description: initial?.description ?? "",
    imageUrl: initial?.imageUrl ?? "",
    price: initial?.price ?? 0,
    handle: initial?.handle ?? "",
    inStock: initial?.inStock ?? true,
    partNumber: initial?.partNumber ?? "",
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: field === "price" ? Number(e.target.value) : e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError("")
    try {
      const res = await fetch("/api/admin/products", {
        method: rowIndex !== undefined ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rowIndex !== undefined ? { rowIndex, ...form } : form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      onSave()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save")
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
      <div className="admin-grid">
        <div>
          <label style={s.label}>Product Name *</label>
          <input style={s.input} value={form.name} onChange={set("name")} required placeholder="Winter Jacket" />
        </div>
        <div>
          <label style={s.label}>Category</label>
          <input style={s.input} value={form.category} onChange={set("category")} placeholder="Apparel" />
        </div>
        <div>
          <label style={s.label}>Part Number</label>
          <input style={s.input} value={form.partNumber} onChange={set("partNumber")} placeholder="e.g. 12015199" />
        </div>
      </div>
      <div>
        <label style={s.label}>Description</label>
        <textarea
          value={form.description} onChange={set("description")} placeholder="Product description..."
          style={{ ...s.input, minHeight: 80, resize: "vertical" }}
        />
      </div>
      <div className="admin-grid">
        <div>
          <label style={s.label}>Image URL</label>
          <input style={s.input} value={form.imageUrl} onChange={set("imageUrl")} placeholder="https://..." />
        </div>
        <div>
          <label style={s.label}>Price (e.g. 600 for $600)</label>
          <input style={s.input} type="number" value={form.price} onChange={set("price")} min="0" placeholder="600" />
        </div>
      </div>
      <div>
        <label style={s.label}>Handle (URL slug — auto-generated if empty)</label>
        <input style={s.input} value={form.handle} onChange={set("handle")} placeholder="winter-jacket" />
      </div>
      <div>
        <label style={s.label}>Availability</label>
        <button
          type="button"
          onClick={() => setForm((f) => ({ ...f, inStock: !f.inStock }))}
          style={{
            display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer",
            background: "none", border: "none", padding: 0,
          }}
        >
          <span style={{
            width: 44, height: 24, borderRadius: 12, position: "relative",
            background: form.inStock ? "var(--acc)" : "var(--bd)",
            transition: "background 0.2s", flexShrink: 0, display: "block",
          }}>
            <span style={{
              position: "absolute", top: 3, left: form.inStock ? 23 : 3,
              width: 18, height: 18, borderRadius: "50%", background: "#fff",
              transition: "left 0.2s", display: "block",
            }} />
          </span>
          <span style={{ color: form.inStock ? "var(--acc)" : "var(--text2)", fontWeight: 600, fontSize: 14 }}>
            {form.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </button>
      </div>
      {error && <div style={{ color: "#ef4444", fontSize: 13, padding: "8px 12px", background: "rgba(239,68,68,0.1)", borderRadius: 8 }}>{error}</div>}
      <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
        <button type="button" onClick={onCancel} style={{ ...s.btn, background: "var(--bg2)", color: "var(--text2)" }}>Cancel</button>
        <button type="submit" disabled={saving} style={{ ...s.btn, background: "var(--text)", color: "var(--bg)", opacity: saving ? 0.7 : 1 }}>
          {saving ? "Saving…" : rowIndex !== undefined ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  )
}

// ── Products Tab ──────────────────────────────────────────────────────────────
function ProductsTab() {
  const [products, setProducts] = useState<(Product & { rowIndex: number })[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<(Product & { rowIndex: number }) | null>(null)

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    const res = await fetch("/api/admin/products")
    const data = await res.json()
    setProducts(data.products ?? [])
    setLoading(false)
  }, [])

  useEffect(() => { fetchProducts() }, [fetchProducts])

  const handleDelete = async (rowIndex: number, name: string) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return
    await fetch("/api/admin/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rowIndex }),
    })
    fetchProducts()
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Products</h2>
        <button onClick={() => { setShowForm(true); setEditing(null) }}
          style={{ ...s.btn, background: "var(--text)", color: "var(--bg)" }}>+ Add Product</button>
      </div>

      {(showForm || editing) && (
        <div style={{ ...s.card, marginBottom: 24 }}>
          <h3 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700 }}>{editing ? "Edit Product" : "New Product"}</h3>
          <ProductForm
            initial={editing ?? undefined}
            rowIndex={editing?.rowIndex}
            onSave={() => { setShowForm(false); setEditing(null); fetchProducts() }}
            onCancel={() => { setShowForm(false); setEditing(null) }}
          />
        </div>
      )}

      <div style={s.card}>
        {loading ? (
          <TableSkeleton columns={6} />
        ) : products.length === 0 ? (
          <div style={{ textAlign: "center", padding: 40, color: "#666" }}>No products yet. Click &quot;Add Product&quot; to get started.</div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--bd)" }}>
                  {["Name", "Part No.", "Category", "Price", "Stock", "Handle", "Actions"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 12px", color: "var(--text2)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...products].reverse().map((p) => (
                  <tr key={p.id} style={{ borderBottom: "1px solid var(--bd)" }}>
                    <td style={{ padding: "14px 12px", fontWeight: 600 }}>{p.name}</td>
                    <td style={{ padding: "14px 12px", color: "var(--text2)", fontFamily: "monospace" }}>{p.partNumber || "—"}</td>
                    <td style={{ padding: "14px 12px", color: "var(--text2)" }}>{p.category || "—"}</td>
                    <td style={{ padding: "14px 12px", color: "var(--text)" }}>{p.price > 0 ? formatPrice(p.price) : "—"}</td>
                    <td style={{ padding: "14px 12px" }}>
                      <span style={{
                        display: "inline-block", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                        background: p.inStock ? "rgba(74,225,131,0.12)" : "rgba(239,68,68,0.1)",
                        color: p.inStock ? "var(--acc)" : "#ef4444",
                      }}>
                        {p.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", color: "#666", fontFamily: "monospace", fontSize: 12 }}>{p.handle}</td>
                    <td style={{ padding: "14px 12px" }}>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button onClick={() => setEditing(p)} style={{ ...s.btn, background: "var(--bg2)", color: "var(--text2)", padding: "6px 12px" }}>Edit</button>
                        <button onClick={() => handleDelete(p.rowIndex, p.name)} style={{ ...s.btn, background: "rgba(239,68,68,0.1)", color: "#ef4444", padding: "6px 12px" }}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Orders Tab ────────────────────────────────────────────────────────────────
const ORDER_STATUSES = ["Processing", "Packed", "Shipped", "In Transit", "Delivered", "Cancelled"]

function OrdersTab() {
  const [orders, setOrders] = useState<(Order & { rowIndex: number })[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<(Order & { rowIndex: number }) | null>(null)
  const [editStatus, setEditStatus] = useState("")
  const [editComments, setEditComments] = useState("")
  const [saving, setSaving] = useState(false)

  const [sendEmail, setSendEmail] = useState(true)

  const fetchOrders = useCallback(async () => {
    setLoading(true)
    const res = await fetch("/api/admin/orders")
    const data = await res.json()
    setOrders(data.orders ?? [])
    setLoading(false)
  }, [])

  useEffect(() => { fetchOrders() }, [fetchOrders])

  const startEdit = (order: Order & { rowIndex: number }) => {
    setEditing(order)
    setEditStatus(order.status)
    setEditComments(order.comments)
    setSendEmail(true) // default to notifying customer
  }

  const saveOrder = async () => {
    if (!editing) return
    setSaving(true)
    const res = await fetch("/api/admin/orders", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rowIndex: editing.rowIndex, status: editStatus, comments: editComments, sendEmail }),
    })
    const data = await res.json()
    setSaving(false)
    setEditing(null)
    if (data.emailSent) alert(`✅ Status updated & email sent to ${editing.email}`)
    else if (sendEmail) alert("⚠️ Status updated, but email could not be sent. Check Gmail credentials in .env.local.")
    fetchOrders()
  }

  const statusColor: Record<string, string> = {
    Processing: "#f59e0b", Packed: "#8b5cf6", Shipped: "#2563eb",
    "In Transit": "#0891b2", Delivered: "#16a34a", Cancelled: "#ef4444",
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Orders</h2>
        <button onClick={fetchOrders} style={{ ...s.btn, background: "var(--bg2)", color: "var(--text2)" }}>↻ Refresh</button>
      </div>

      {editing && (
        <div style={{ ...s.card, marginBottom: 24 }}>
          <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 700 }}>Update Order — {editing.orderId}</h3>
          <div className="admin-grid" style={{ marginBottom: 16 }}>
            <div>
              <label style={s.label}>Status</label>
              <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)} style={{ ...s.input }}>
                {ORDER_STATUSES.map((st) => <option key={st} value={st}>{st}</option>)}
              </select>
            </div>
            <div>
              <label style={s.label}>Comment / Tracking Note</label>
              <input style={s.input} value={editComments} onChange={(e) => setEditComments(e.target.value)} placeholder="e.g. Dispatched via DTDC, tracking #123..." />
            </div>
          </div>
          {/* Email toggle */}
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: 16, color: "var(--text2)", fontSize: 14 }}>
            <input
              type="checkbox"
              checked={sendEmail}
              onChange={(e) => setSendEmail(e.target.checked)}
              style={{ width: 16, height: 16, accentColor: "var(--text)" }}
            />
            <span>📧 Send status update email to <strong style={{ color: "var(--text)" }}>{editing.email}</strong></span>
          </label>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <button onClick={() => setEditing(null)} style={{ ...s.btn, background: "var(--bg2)", color: "var(--text2)" }}>Cancel</button>
            <button onClick={saveOrder} disabled={saving} style={{ ...s.btn, background: "var(--text)", color: "var(--bg)" }}>
              {saving ? "Saving…" : "Update Status"}
            </button>
          </div>
        </div>
      )}

      <div style={s.card}>
        {loading ? (
          <TableSkeleton columns={7} />
        ) : orders.length === 0 ? (
          <div style={{ textAlign: "center", padding: 40, color: "#666" }}>No orders yet.</div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--bd)" }}>
                  {["Order ID", "Customer", "Product", "Amount", "Status", "Actions"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 12px", color: "var(--text2)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...orders].reverse().map((o) => (
                  <tr key={o.orderId} style={{ borderBottom: "1px solid var(--bd)" }}>
                    <td style={{ padding: "14px 12px", fontFamily: "monospace", fontSize: 12, color: "var(--text)" }}>{o.orderId}</td>
                    <td style={{ padding: "14px 12px" }}>
                      <div style={{ fontWeight: 600 }}>{o.customerName}</div>
                      <div style={{ fontSize: 12, color: "#666" }}>{o.email}</div>
                    </td>
                    <td style={{ padding: "14px 12px", color: "var(--text2)", fontSize: 13, maxWidth: 200 }}>{o.product}</td>
                    <td style={{ padding: "14px 12px", fontWeight: 700 }}>{o.amount > 0 ? formatPrice(o.amount) : "—"}</td>
                    <td style={{ padding: "14px 12px" }}>
                      <span style={{
                        padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                        background: `${statusColor[o.status] ?? "#888"}20`,
                        color: statusColor[o.status] ?? "#888",
                      }}>{o.status}</span>
                    </td>
                    <td style={{ padding: "14px 12px" }}>
                      <button onClick={() => startEdit(o)} style={{ ...s.btn, background: "var(--bg2)", color: "var(--text2)", padding: "6px 12px" }}>
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Blogs Tab ─────────────────────────────────────────────────────────────────
function BlogsTab() {
  const [blogs, setBlogs] = useState<(Blog & { rowIndex: number })[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: "", keywords: "", slug: "", publishDate: "", content: "", metaDescription: "", imageUrl: "", published: true })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const fetchBlogs = useCallback(async () => {
    setLoading(true)
    const res = await fetch("/api/admin/blogs")
    const data = await res.json()
    setBlogs(data.blogs ?? [])
    setLoading(false)
  }, [])

  useEffect(() => { fetchBlogs() }, [fetchBlogs])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true); setError("")
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setShowForm(false)
      setForm({ title: "", keywords: "", slug: "", publishDate: "", content: "", metaDescription: "", imageUrl: "", published: true })
      fetchBlogs()
    } catch (err) { setError(err instanceof Error ? err.message : "Failed"); setSaving(false) }
  }

  const handleDelete = async (rowIndex: number, title: string) => {
    if (!confirm(`Delete blog "${title}"?`)) return
    await fetch("/api/admin/blogs", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ rowIndex }) })
    fetchBlogs()
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Blog Posts</h2>
        <button onClick={() => setShowForm(true)} style={{ ...s.btn, background: "var(--text)", color: "var(--bg)" }}>+ New Blog Post</button>
      </div>

      {showForm && (
        <div style={{ ...s.card, marginBottom: 24 }}>
          <h3 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700 }}>New Blog Post</h3>
          <form onSubmit={handleAdd} style={{ display: "grid", gap: 16 }}>
            <div className="admin-grid">
              <div>
                <label style={s.label}>Title *</label>
                <input style={s.input} value={form.title} onChange={set("title")} required placeholder="5 Ways to..." />
              </div>
              <div>
                <label style={s.label}>Slug (auto if empty)</label>
                <input style={s.input} value={form.slug} onChange={set("slug")} placeholder="5-ways-to..." />
              </div>
            </div>
            <div className="admin-grid">
              <div>
                <label style={s.label}>Keywords (comma-separated)</label>
                <input style={s.input} value={form.keywords} onChange={set("keywords")} placeholder="seo, product, tips" />
              </div>
              <div>
                <label style={s.label}>Publish Date</label>
                <input style={s.input} type="date" value={form.publishDate} onChange={set("publishDate")} />
              </div>
            </div>
            <div>
              <label style={s.label}>Image URL (optional)</label>
              <input style={s.input} value={form.imageUrl} onChange={set("imageUrl")} placeholder="https://... (cover image)" />
            </div>
            <div>
              <label style={s.label}>Meta Description</label>
              <input style={s.input} value={form.metaDescription} onChange={set("metaDescription")} placeholder="Short summary for search engines..." />
            </div>
            <div>
              <label style={s.label}>Content</label>
              <textarea value={form.content} onChange={set("content")} placeholder="Blog content here..." style={{ ...s.input, minHeight: 120, resize: "vertical" }} />
            </div>
            {error && <div style={{ color: "#ef4444", fontSize: 13, padding: "8px 12px", background: "rgba(239,68,68,0.1)", borderRadius: 8 }}>{error}</div>}
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
              <button type="button" onClick={() => setShowForm(false)} style={{ ...s.btn, background: "var(--bg2)", color: "var(--text2)" }}>Cancel</button>
              <button type="submit" disabled={saving} style={{ ...s.btn, background: "var(--text)", color: "var(--bg)" }}>{saving ? "Saving…" : "Publish Blog"}</button>
            </div>
          </form>
        </div>
      )}

      <div style={s.card}>
        {loading ? (
          <TableSkeleton columns={5} />
        ) : blogs.length === 0 ? (
          <div style={{ textAlign: "center", padding: 40, color: "#666" }}>No blog posts yet. Click &quot;New Blog Post&quot; to start.</div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--bd)" }}>
                  {["Title", "Slug", "Publish Date", "Keywords", "Status", "Actions"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 12px", color: "var(--text2)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...blogs].reverse().map((b) => (
                  <tr key={b.slug + b.rowIndex} style={{ borderBottom: "1px solid var(--bd)" }}>
                    <td style={{ padding: "14px 12px", fontWeight: 600 }}>{b.title}</td>
                    <td style={{ padding: "14px 12px", color: "#666", fontFamily: "monospace", fontSize: 12 }}>{b.slug}</td>
                    <td style={{ padding: "14px 12px", color: "var(--text2)" }}>{b.publishDate || "—"}</td>
                    <td style={{ padding: "14px 12px", color: "var(--text2)", fontSize: 12 }}>{b.keywords || "—"}</td>
                    <td style={{ padding: "14px 12px" }}>
                      <span style={{
                        padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                        background: b.published ? "rgba(0,0,0,0.15)" : "rgba(136,136,136,0.12)",
                        color: b.published ? "var(--text)" : "#888",
                      }}>{b.published ? "Published" : "Draft"}</span>
                    </td>
                    <td style={{ padding: "14px 12px" }}>
                      <button onClick={() => handleDelete(b.rowIndex, b.title)} style={{ ...s.btn, background: "rgba(239,68,68,0.1)", color: "#ef4444", padding: "6px 12px" }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Inquiries Tab ───────────────────────────────────────────────────────────────
// Displays all customer inquiries submitted from the frontend contact form.
// Includes a built-in reply system that sends emails directly via the server API.
const INQ_STATUSES = ["New", "In Progress", "Replied", "Closed"]
const INQ_COLORS: Record<string, string> = {
  New: "#f59e0b", "In Progress": "#2563eb", Replied: "#16a34a", Closed: "#888",
}

function InquiriesTab() {
  const [inquiries, setInquiries] = useState<(Inquiry & { rowIndex: number })[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  // Reply states for composing emails directly from the dashboard
  const [replyText, setReplyText] = useState("")
  const [isReplying, setIsReplying] = useState(false)

  const fetchInquiries = useCallback(async () => {
    setLoading(true)
    const res = await fetch("/api/admin/inquiries")
    const data = await res.json()
    setInquiries(data.inquiries ?? [])
    setLoading(false)
  }, [])

  useEffect(() => { fetchInquiries() }, [fetchInquiries])

  // Updates the internal sheet status (e.g. marking it "Closed")
  const updateStatus = async (rowIndex: number, status: string) => {
    await fetch("/api/admin/inquiries", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rowIndex, status }),
    })
    fetchInquiries()
  }

  // Submits a reply directly to the customer's email and marks the row as "Replied"
  const handleReply = async (inq: Inquiry & { rowIndex: number }) => {
    if (!replyText.trim()) return
    setIsReplying(true)
    try {
      const res = await fetch("/api/admin/inquiries/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rowIndex: inq.rowIndex,
          email: inq.email,
          name: inq.name,
          subject: inq.subject,
          replyMessage: replyText.trim(),
        }),
      })
      if (res.ok) {
        setReplyText("")
        fetchInquiries()
        alert("Reply sent successfully!")
      } else {
        alert("Failed to send reply.")
      }
    } catch (err) {
      alert("Error sending reply.")
    } finally {
      setIsReplying(false)
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 0 24px 0" }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Inquiries</h2>
        <button onClick={fetchInquiries} style={{ ...s.btn, background: "var(--bg2)", color: "var(--text2)" }}>↻ Refresh</button>
      </div>
      <div style={s.card}>
        {loading ? (
          <TableSkeleton columns={5} />
        ) : inquiries.length === 0 ? (
          <div style={{ textAlign: "center", padding: 40, color: "#666" }}>No inquiries yet.</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[...inquiries].reverse().map((inq) => (
              <div key={inq.id} style={{
                border: `1px solid ${expanded === inq.id ? "rgba(0,0,0,0.2)" : "var(--bd)"}`,
                borderRadius: 12, overflow: "hidden",
              }}>
                <div
                  onClick={() => {
                    if (expanded !== inq.id) {
                      setExpanded(inq.id)
                      setReplyText("") // Reset text on new expand
                    } else {
                      setExpanded(null)
                    }
                  }}
                  style={{ padding: "16px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}
                >
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{inq.subject}</div>
                    <div style={{ fontSize: 13, color: "var(--text2)" }}>
                      {inq.name} &bull; <a href={`mailto:${inq.email}`} style={{ color: "var(--text)" }}>{inq.email}</a>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    <span style={{
                      padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                      background: `${INQ_COLORS[inq.status] ?? "#888"}20`,
                      color: INQ_COLORS[inq.status] ?? "#888",
                    }}>{inq.status}</span>
                    <span style={{ color: "#555", fontSize: 16 }}>{expanded === inq.id ? "▲" : "▼"}</span>
                  </div>
                </div>
                {expanded === inq.id && (
                  <div style={{ padding: "0 20px 20px", borderTop: "1px solid var(--bd)" }}>
                    <div style={{ padding: "14px 16px", background: "var(--bg2)", borderRadius: 10, margin: "16px 0", lineHeight: 1.7, color: "var(--text2)", fontSize: 14 }}>
                      {inq.message}
                    </div>

                    {/* Status Dropdown */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                      <label style={{ ...s.label, margin: 0 }}>Status:</label>
                      <select
                        value={inq.status}
                        onChange={(e) => updateStatus(inq.rowIndex, e.target.value)}
                        style={{ ...s.input, width: "auto", padding: "6px 12px" }}
                      >
                        {INQ_STATUSES.map((st) => <option key={st}>{st}</option>)}
                      </select>
                      <span style={{ fontSize: 12, color: "#555", marginLeft: 8 }}>{inq.submittedAt}</span>
                    </div>

                    {/* Reply Section */}
                    <div style={{ background: "var(--bg)", border: "1px solid var(--bd)", borderRadius: 10, padding: 16 }}>
                      <label style={{ ...s.label, marginBottom: 8 }}>Reply to {inq.name} ({inq.email})</label>
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write your email reply here..."
                        style={{ ...s.input, minHeight: 100, marginBottom: 12, resize: "vertical" }}
                      />
                      <button
                        onClick={() => handleReply(inq)}
                        disabled={!replyText.trim() || isReplying}
                        style={{
                          ...s.btn,
                          background: replyText.trim() && !isReplying ? "var(--text)" : "var(--bd)",
                          color: replyText.trim() && !isReplying ? "var(--bg)" : "#888",
                          opacity: isReplying ? 0.7 : 1,
                        }}
                      >
                        {isReplying ? "Sending Email..." : "Send Reply"}
                      </button>
                    </div>

                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Quotes Tab ────────────────────────────────────────────────────────────────
const QUOTE_STATUSES = ["New", "Reviewing", "Quoted", "Accepted", "Closed"]
const QUOTE_COLORS: Record<string, string> = {
  New: "#f59e0b", Reviewing: "#2563eb", Quoted: "#8b5cf6", Accepted: "#16a34a", Closed: "#888",
}

function QuotesTab() {
  const [quotes, setQuotes] = useState<(Quote & { rowIndex: number })[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  const fetchQuotes = useCallback(async () => {
    setLoading(true)
    const res = await fetch("/api/admin/quotes")
    const data = await res.json()
    setQuotes(data.quotes ?? [])
    setLoading(false)
  }, [])

  useEffect(() => { fetchQuotes() }, [fetchQuotes])

  const updateStatus = async (rowIndex: number, status: string) => {
    await fetch("/api/admin/quotes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rowIndex, status }),
    })
    fetchQuotes()
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Quote Requests</h2>
        <button onClick={fetchQuotes} style={{ ...s.btn, background: "var(--bg2)", color: "var(--text2)" }}>↻ Refresh</button>
      </div>
      <div style={s.card}>
        {loading ? (
          <TableSkeleton columns={6} />
        ) : quotes.length === 0 ? (
          <div style={{ textAlign: "center", padding: 40, color: "#666" }}>No quote requests yet.</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[...quotes].reverse().map((q) => (
              <div key={q.id} style={{
                border: `1px solid ${expanded === q.id ? "rgba(0,0,0,0.2)" : "var(--bd)"}`,
                borderRadius: 12, overflow: "hidden",
              }}>
                <div
                  onClick={() => setExpanded(expanded === q.id ? null : q.id)}
                  style={{ padding: "16px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}
                >
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>
                      {q.name}
                      {q.company && <span style={{ fontWeight: 400, color: "var(--text2)", marginLeft: 8 }}>· {q.company}</span>}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text2)" }}>
                      <a href={`mailto:${q.email}`} style={{ color: "var(--text)" }}>{q.email}</a>
                      {q.phone && <span> · {q.phone}</span>}
                      {q.application && <span> · {q.application}</span>}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    <span style={{
                      padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                      background: `${QUOTE_COLORS[q.status] ?? "#888"}20`,
                      color: QUOTE_COLORS[q.status] ?? "#888",
                    }}>{q.status}</span>
                    <span style={{ color: "#555", fontSize: 16 }}>{expanded === q.id ? "▲" : "▼"}</span>
                  </div>
                </div>
                {expanded === q.id && (
                  <div style={{ padding: "0 20px 20px", borderTop: "1px solid var(--bd)" }}>
                    <div className="admin-grid" style={{ margin: "16px 0", gap: 12 }}>
                      {[
                        { label: "Email", value: q.email },
                        { label: "Phone", value: q.phone || "—" },
                        { label: "Company", value: q.company || "—" },
                        { label: "Application", value: q.application || "—" },
                        { label: "Quantity", value: q.quantity || "—" },
                        { label: "Submitted", value: q.submittedAt || "—" },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <div style={{ fontSize: 11, color: "var(--text2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 3 }}>{label}</div>
                          <div style={{ fontSize: 14, color: "var(--text)" }}>{value}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: "14px 16px", background: "var(--bg2)", borderRadius: 10, marginBottom: 16, lineHeight: 1.7, color: "var(--text2)", fontSize: 14 }}>
                      <div style={{ fontSize: 11, color: "var(--text2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Project Description</div>
                      {q.description}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <label style={{ ...s.label, margin: 0 }}>Status:</label>
                      <select
                        value={q.status}
                        onChange={(e) => updateStatus(q.rowIndex, e.target.value)}
                        style={{ ...s.input, width: "auto", padding: "6px 12px" }}
                      >
                        {QUOTE_STATUSES.map((st) => <option key={st}>{st}</option>)}
                      </select>
                      <span style={{ fontSize: 12, color: "#555", marginLeft: 8 }}>{q.submittedAt}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Stats Cards ───────────────────────────────────────────────────────────────
function StatsTab({ orders: recentOrders }: { orders: Order[] }) {
  const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 })
  const [latestOrders, setLatestOrders] = useState<Order[]>(recentOrders)
  const [settings, setSettings] = useState({ showCertifications: true })

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/products").then((r) => r.json()),
      fetch("/api/admin/orders").then((r) => r.json()),
      fetch(`/api/admin/settings?_t=${Date.now()}`).then((r) => r.json().catch(() => ({}))),
    ]).then(([pd, od, setd]) => {
      const orders: Order[] = od.orders ?? []
      setLatestOrders(orders.slice(-5).reverse())
      setStats({
        products: pd.products?.length ?? 0,
        orders: orders.length,
        revenue: orders.reduce((sum: number, o: Order) => sum + o.amount, 0),
      })
      if (setd && typeof setd.showCertifications === "boolean") {
        setSettings(setd)
      }
    })
  }, [])

  const toggleCertifications = async () => {
    const nextVal = !settings.showCertifications
    setSettings({ ...settings, showCertifications: nextVal })
    await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ showCertifications: nextVal }),
    })
  }

  const STATUS_COLOR: Record<string, string> = {
    Processing: "#f59e0b", Packed: "#8b5cf6", Shipped: "#2563eb",
    "In Transit": "#0891b2", Delivered: "#16a34a", Cancelled: "#ef4444",
  }

  const kpis = [
    {
      label: "TOTAL PRODUCTS",
      value: stats.products,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ),
    },
    {
      label: "ORDERS PROCESSED",
      value: stats.orders,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      label: "TOTAL REVENUE",
      value: stats.revenue > 0 ? formatPrice(stats.revenue) : "$0",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
  ]

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: "0.12em", color: "var(--text)", marginBottom: 12, textTransform: "uppercase" }}>OVERVIEW</div>
        <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "var(--text)" }}>Dashboard</h2>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 32 }}>
        {kpis.map((c) => (
          <div key={c.label} style={{
            ...s.card,
            display: "flex", flexDirection: "column", gap: 16,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: "0.1em", color: "var(--text2)", textTransform: "uppercase" }}>{c.label}</div>
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: "rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{c.icon}</div>
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>{c.value}</div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div style={{ ...s.card }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--text)" }}>Recent Orders</h3>
          <span style={{ fontSize: 12, color: "var(--text)", fontFamily: "monospace", letterSpacing: "0.05em", cursor: "default" }}>VIEW ALL IN ORDERS TAB →</span>
        </div>
        {latestOrders.length === 0 ? (
          <div style={{ textAlign: "center", padding: "32px 0", color: "var(--text2)" }}>No orders yet.</div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--bd)" }}>
                  {["ORDER ID", "CUSTOMER", "PRODUCT", "AMOUNT", "STATUS"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 14px", color: "var(--text2)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "monospace" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {latestOrders.map((o, i) => (
                  <tr key={o.orderId + i} style={{ borderBottom: "1px solid var(--bd)" }}>
                    <td style={{ padding: "14px", fontFamily: "monospace", fontSize: 13, color: "var(--text)", fontWeight: 700 }}>{o.orderId}</td>
                    <td style={{ padding: "14px", fontSize: 14, color: "var(--text)" }}>{o.customerName}</td>
                    <td style={{ padding: "14px", fontSize: 13, color: "#b0ada6", fontStyle: "italic", maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{o.product}</td>
                    <td style={{ padding: "14px", fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{o.amount > 0 ? formatPrice(o.amount) : "—"}</td>
                    <td style={{ padding: "14px" }}>
                      <span style={{
                        padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                        background: `${STATUS_COLOR[o.status] ?? "var(--text2)"}18`,
                        color: STATUS_COLOR[o.status] ?? "var(--text2)",
                        border: `1px solid ${STATUS_COLOR[o.status] ?? "var(--text2)"}33`,
                      }}>{o.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Settings */}
      <div style={{ ...s.card, marginTop: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--text)" }}>Site Settings</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "var(--bg2)", borderRadius: 10, border: "1px solid var(--bd)" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>Certifications Banner</div>
            <div style={{ fontSize: 13, color: "var(--text2)" }}>Show or hide the certifications banner across the site.</div>
          </div>
          <button
            onClick={toggleCertifications}
            style={{
              width: 50, height: 28, borderRadius: 14,
              background: settings.showCertifications ? "#10b981" : "#d1d5db",
              position: "relative", cursor: "pointer", border: "none",
              transition: "background 0.2s", flexShrink: 0,
            }}
          >
            <div style={{
              width: 22, height: 22, borderRadius: "50%", background: "#fff",
              position: "absolute", top: 3, left: settings.showCertifications ? 25 : 3,
              transition: "left 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }} />
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
function SubscribersTab() {
  const [subscribers, setSubscribers] = useState<(Subscriber & { rowIndex: number })[]>([])
  const [loading, setLoading] = useState(true)

  const fetchSubscribers = useCallback(async () => {
    setLoading(true)
    const res = await fetch("/api/admin/subscribers")
    const data = await res.json()
    setSubscribers(data.subscribers ?? [])
    setLoading(false)
  }, [])

  useEffect(() => { fetchSubscribers() }, [fetchSubscribers])

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Newsletter Subscribers</h2>
        <button onClick={fetchSubscribers} style={{ ...s.btn, background: "var(--bg2)", color: "var(--text2)" }}>↻ Refresh</button>
      </div>
      <div style={s.card}>
        {loading ? (
          <TableSkeleton columns={4} />
        ) : subscribers.length === 0 ? (
          <div style={{ textAlign: "center", padding: 40, color: "#666" }}>No subscribers yet.</div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--bd)", textAlign: "left" }}>
                  <th style={{ padding: "10px 12px", color: "var(--text2)", fontWeight: 600 }}>Email</th>
                  <th style={{ padding: "10px 12px", color: "var(--text2)", fontWeight: 600 }}>Source</th>
                  <th style={{ padding: "10px 12px", color: "var(--text2)", fontWeight: 600 }}>Subscribed</th>
                  <th style={{ padding: "10px 12px", color: "var(--text2)", fontWeight: 600 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[...subscribers].reverse().map((sub) => (
                  <tr key={sub.id} style={{ borderBottom: "1px solid var(--bd)" }}>
                    <td style={{ padding: "12px" }}>
                      <a href={`mailto:${sub.email}`} style={{ color: "var(--text)" }}>{sub.email}</a>
                    </td>
                    <td style={{ padding: "12px", color: "var(--text2)", textTransform: "capitalize" }}>{sub.source}</td>
                    <td style={{ padding: "12px", color: "var(--text2)", fontSize: 13 }}>{sub.submittedAt}</td>
                    <td style={{ padding: "12px" }}>
                      <span style={{
                        padding: "3px 10px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                        background: sub.status === "Active" ? "rgba(16,185,129,0.12)" : "rgba(136,136,136,0.12)",
                        color: sub.status === "Active" ? "#10b981" : "#888",
                      }}>
                        {sub.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default function AdminDashboard({ role }: { role: string }) {
  // Determine default tab based on role
  const getDefaultTab = () => {
    if (role === "admin") return "overview"
    if (role === "support") return "inquiries"
    return "orders" // shipping, packaging, payment default to orders
  }

  const [tab, setTab] = useState<"overview" | "products" | "orders" | "blogs" | "inquiries" | "quotes" | "subscribers">(getDefaultTab())
  const [mobileMenu, setMobileMenu] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" })
    router.push("/admin")
  }

  // Role access definitions
  const canSeeOverview = role === "admin"
  const canSeeProducts = role === "admin"
  const canSeeBlogs = role === "admin"
  const canSeeOrders = role === "admin" || role === "shipping" || role === "packaging" || role === "payment"
  const canSeeQuotes = role === "admin" || role === "payment" || role === "support"
  const canSeeInquiries = role === "admin" || role === "support"
  const canSeeSubscribers = role === "admin" || role === "support"

  return (
    <div style={s.page}>
      <style>{`
        @media (max-width: 800px) {
          .admin-sidebar {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }
          .admin-sidebar.open {
            transform: translateX(0);
          }
          .admin-main {
            margin-left: 0 !important;
            padding: 24px 16px !important;
          }
          .admin-hamburger {
            display: flex !important;
          }
          .admin-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .admin-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .admin-hamburger {
          display: none;
          position: fixed;
          top: 16px;
          right: 16px;
          z-index: 50;
          background: var(--cBg);
          border: 1px solid var(--bd);
          border-radius: 8px;
          padding: 10px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* Mobile Hamburger */}
      <button className="admin-hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {mobileMenu ? (
            <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
          ) : (
            <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside style={s.sidebar} className={`admin-sidebar ${mobileMenu ? "open" : ""}`}>
        <div style={{ padding: "24px 20px 16px", borderBottom: "1px solid var(--bd)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <img src="/images/light-logo.webp" alt="Logo" style={{ width: "150px", height: "auto" }} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.01em", textTransform: "capitalize" }}>{role} Panel</div>
              <div style={{ fontSize: 11, color: "var(--text2)", marginTop: 2, fontFamily: "monospace" }}>SHA · Management</div>
            </div>
          </div>
        </div>

        <nav style={{ flex: 1, padding: "12px 0" }}>
          {canSeeOverview && <NavItem icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>} label="Overview" active={tab === "overview"} onClick={() => { setTab("overview"); setMobileMenu(false); }} />}
          {canSeeProducts && <NavItem icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>} label="Products" active={tab === "products"} onClick={() => { setTab("products"); setMobileMenu(false); }} />}
          {canSeeOrders && <NavItem icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>} label="Orders" active={tab === "orders"} onClick={() => { setTab("orders"); setMobileMenu(false); }} />}
          {canSeeBlogs && <NavItem icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>} label="Blog Posts" active={tab === "blogs"} onClick={() => { setTab("blogs"); setMobileMenu(false); }} />}
          {canSeeInquiries && <NavItem icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>} label="Inquiries" active={tab === "inquiries"} onClick={() => { setTab("inquiries"); setMobileMenu(false); }} />}
          {canSeeQuotes && <NavItem icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>} label="Quotes" active={tab === "quotes"} onClick={() => { setTab("quotes"); setMobileMenu(false); }} />}
          {canSeeSubscribers && <NavItem icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>} label="Subscribers" active={tab === "subscribers"} onClick={() => { setTab("subscribers"); setMobileMenu(false); }} />}
        </nav>

        <div style={{ padding: "16px 20px", borderTop: "1px solid var(--bd)" }}>

          <a href="/" target="_blank" style={{ display: "block", color: "var(--text2)", fontSize: 13, marginBottom: 10, textDecoration: "none" }}>
            ↗ View Store
          </a>
          <button onClick={handleLogout} style={{ ...s.btn, background: "transparent", color: "#ef4444", padding: "8px 0", width: "100%", textAlign: "left" }}>
            ← Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={s.main} className="admin-main">
        {canSeeOverview && tab === "overview" && <StatsTab orders={[]} />}
        {canSeeProducts && tab === "products" && <ProductsTab />}
        {canSeeOrders && tab === "orders" && <OrdersTab />}
        {canSeeBlogs && tab === "blogs" && <BlogsTab />}
        {canSeeInquiries && tab === "inquiries" && <InquiriesTab />}
        {canSeeQuotes && tab === "quotes" && <QuotesTab />}
        {canSeeSubscribers && tab === "subscribers" && <SubscribersTab />}
      </main>
    </div>
  )
}
