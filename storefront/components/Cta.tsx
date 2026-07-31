import Link from "next/link"

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </svg>
  )
}

export default function Cta() {
  return (
    <section id="cta" className="cta">
      <div className="W">
        <h2 className="D3 cta__h rv">
          Ready to put your next program<br />in reliable hands?
        </h2>
        <p className="cta__s rv d1">
          Send us your print or describe your application — we&apos;ll respond with a quote within two business days.
        </p>
        <Link href="#quote" className="btn cta-fill rv d2" style={{
          background: "#fff", borderRadius: "6px",
          padding: "14px 32px", fontWeight: 700, fontSize: 13,
          letterSpacing: "0.04em", textTransform: "uppercase",
          fontFamily: "var(--font-sora)",
          display: "inline-flex", alignItems: "center", gap: 8,
          transition: "background 0.2s, transform 0.2s",
        }}>
          Request a Quote <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}
