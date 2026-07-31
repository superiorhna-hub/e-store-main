import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Wire Harness & Cable Assembly Services",
  description:
    "Superior Harness & Assembly offers end-to-end contract manufacturing services: engineering support, prototype, production, testing, and supply chain management.",
}

const SERVICES = [
  {
    title: "Contract Manufacturing",
    desc: "Full-service build-to-print and build-to-spec manufacturing of wire harnesses, cable assemblies, and electromechanical subassemblies. Scalable from 10 to 100,000+ units per year.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    highlights: ["Build-to-print & build-to-spec", "NPI to high-volume ramp", "Mixed product lines", "Flexible scheduling"],
  },
  {
    title: "Engineering Support",
    desc: "Design-for-manufacturability reviews, value engineering analysis, and prototype development. Our engineers work alongside your team to optimize assemblies before production commitments.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    highlights: ["DFM/DFA reviews", "Prototype rapid build", "BOM optimization", "Value engineering"],
  },
  {
    title: "Quality & Testing",
    desc: "IPC/WHMA-A-620 compliance with 100% electrical test, pull testing, AOI, and continuity verification on every assembly. Full traceability and first-article inspection reports on request.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    highlights: ["100% electrical test", "Pull force validation", "AOI & vision systems", "Full traceability"],
  },
  {
    title: "Supply Chain Management",
    desc: "Vendor-managed inventory, kanban programs, and just-in-time delivery aligned with your production schedule. We manage the complexity so you can focus on your core business.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    highlights: ["VMI programs", "Kanban replenishment", "Safety stock mgmt", "Emergency same-day ship"],
  },
  {
    title: "Overmolding & Potting",
    desc: "Protective overmolding and potting for connectors, splice points, and cable ends. Custom tooling for unique geometries with IP67/IP68 ratings available for harsh-environment applications.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    highlights: ["Custom mold tooling", "IP67/IP68 rated", "Strain relief design", "High-vibration environments"],
  },
  {
    title: "Marking & Labeling",
    desc: "Laser marking, heat-shrink printing, and custom label application for wire identification, compliance markings, and traceability. Meets MIL-SPEC and commercial standards.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    highlights: ["Laser wire marking", "Heat-shrink labels", "MIL-SPEC compliance", "Full traceability"],
  },
]

const DELIVERY = [
  { label: "Standard", time: "4–6 weeks", desc: "For production orders with firm forecasts." },
  { label: "Expedited", time: "1–3 weeks", desc: "Rush production with tooling on-hand." },
  { label: "Prototype", time: "5–10 days", desc: "First articles and design validation builds." },
]

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Inner Banner */}
      <div style={{ paddingTop: 120 }}>
        <section className="inner-banner">
          <div className="W">
            <div className="inner-banner__crumb">
              <Link href="/">Home</Link> <span>/</span> Services
            </div>
            <div className="inner-banner__eyebrow">What We Offer</div>
            <h1 className="D2 inner-banner__h">End-to-End Manufacturing Services</h1>
            <p className="inner-banner__p">
              From first prototype to high-volume production, we provide complete contract manufacturing services — with engineering, quality, and supply chain under one roof.
            </p>
          </div>
        </section>
      </div>

      {/* Services Grid */}
      <section className="sec">
        <div className="W">
          <div className="sHdr sHdr--c" style={{ marginBottom: 56 }}>
            <div className="lbl lbl-c" style={{ marginBottom: 14 }}>Our Services</div>
            <h2 className="D3">Full-Spectrum Support</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}>
            {SERVICES.map(({ title, desc, icon, highlights }) => (
              <div key={title} style={{
                background: "var(--bg2)",
                border: "1px solid var(--bd)",
                borderRadius: "var(--rL)",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transition: "box-shadow 0.25s",
              }}>
                <div style={{ color: "var(--text)", opacity: 0.8 }}>{icon}</div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    marginBottom: 10,
                    color: "var(--text)",
                  }}>{title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text2)" }}>{desc}</p>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6, marginTop: "auto" }}>
                  {highlights.map(h => (
                    <li key={h} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: "var(--text2)",
                    }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Times */}
      <section className="sec sec-bg2">
        <div className="W">
          <div className="sHdr sHdr--c" style={{ marginBottom: 56 }}>
            <div className="lbl lbl-c" style={{ marginBottom: 14 }}>Delivery</div>
            <h2 className="D3">Typical Lead Times</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--bd)", border: "1px solid var(--bd)", borderRadius: 10, overflow: "hidden" }}>
            {DELIVERY.map(({ label, time, desc }) => (
              <div key={label} style={{
                background: "var(--bg)",
                padding: "40px 32px",
                textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text2)",
                  marginBottom: 12,
                }}>{label}</div>
                <div style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  fontSize: 36,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: 12,
                  color: "var(--text)",
                }}>{time}</div>
                <div style={{ fontSize: 13.5, color: "var(--text2)" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="W">
          <h2 className="D3 cta__h">Let&apos;s Build Something Together</h2>
          <p className="cta__s">Tell us about your project and we&apos;ll respond within one business day with a detailed quote.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn bp">Get in Touch</Link>
            <Link href="/capabilities" className="btn" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.22)" }}>View Capabilities</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
