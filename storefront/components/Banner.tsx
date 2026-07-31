import Link from "next/link"

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </svg>
  )
}

export default function Banner() {
  return (
    <section className="bnr">
      <div className="bnr__in W">
        <div className="lbl bnr__lbl rv">EXPLORE NOW</div>
        <h2 className="bnr__h D2 rv d1">SHOP COLLECTION</h2>
        <p className="bnr__s rv d2">Explore our latest premium wire harness and cable assembly selections.</p>
        <Link href="/shop" className="rv d3" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#fff", color: "#0A0A0A", borderRadius: "9999px",
          padding: "14px 32px", fontWeight: 700, fontSize: 13,
          letterSpacing: "0.04em", textTransform: "uppercase",
          fontFamily: "var(--font-sora)", textDecoration: "none",
          transition: "background 0.2s",
        }}>
          View Products <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}
