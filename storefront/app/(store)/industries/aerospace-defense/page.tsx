import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Aerospace & Defense Wire Harnesses | Superior Harness & Assembly",
  description: "MIL-SPEC wire harnesses and cable assemblies for aerospace, aviation, and defense applications. ITAR registered, shielded, and hermetically sealed configurations.",
}

const CAPABILITIES = [
  "MIL-SPEC rated wire and connector materials",
  "ITAR registered manufacturing facility",
  "Hermetically sealed connector assemblies",
  "High-coverage EMI/RFI braided shielding",
  "Wide temperature range: -65°C to +200°C",
  "Vibration and altitude-rated assembly configurations",
  "Full IPC/WHMA-A-620 Class III manufacturing",
]

const PRODUCTS = [
  { name: "Shielded / Hermetic", href: "/products/shielded-hermetic" },
  { name: "High Voltage Harness", href: "/products/high-voltage-harness" },
  { name: "Custom Wire Harness", href: "/products/custom-wire-harness" },
  { name: "Coaxial / RF / Microwave", href: "/products/coaxial-rf-microwave" },
]

export default function AerospaceDefensePage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ paddingTop: 120 }}>
        <section className="inner-banner">
          <div className="W">
            <div className="inner-banner__crumb">
              <Link href="/">Home</Link> <span>/</span>
              <Link href="/industries"> Industries</Link> <span>/</span>
              Aerospace &amp; Defense
            </div>
            <div className="inner-banner__eyebrow">Industry</div>
            <h1 className="D2 inner-banner__h">Aerospace &amp; Defense</h1>
            <p className="inner-banner__p">
              MIL-SPEC wire harnesses and cable assemblies for aerospace, aviation, and defense programs — manufactured to the highest reliability standards with ITAR compliance.
            </p>
          </div>
        </section>
      </div>

      <section className="sec">
        <div className="W">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="prod-showcase-row">
            <div style={{ position: "relative", height: 420, borderRadius: 12, overflow: "hidden", background: "var(--bg3)" }}>
              <Image src="/images/Aerospsace.webp" alt="Aerospace Defense Wire Harness" fill style={{ objectFit: "contain" }} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div>
              <div className="lbl" style={{ marginBottom: 16 }}>Aviation & Defense</div>
              <h2 className="D3" style={{ marginBottom: 20 }}>Mission-Critical Reliability</h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text2)", marginBottom: 28 }}>
                Aerospace and defense cable assemblies must perform flawlessly under extreme temperature, altitude, vibration, and EMI conditions. We manufacture to IPC/WHMA-A-620 Class III standards using MIL-SPEC materials, with hermetic sealing and high-coverage shielding for the most demanding military and aerospace applications.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {CAPABILITIES.map(c => (
                  <li key={c} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--text2)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2, color: "#c0392b" }}><polyline points="20 6 9 17 4 12"/></svg>
                    {c}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="#quote" className="btn bp">Request Quote</Link>
                <Link href="/capabilities" className="btn" style={{ background: "transparent", border: "1.5px solid var(--bd)", color: "var(--text)" }}>Our Capabilities</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-bg2">
        <div className="W">
          <div className="sHdr sHdr--c" style={{ marginBottom: 40 }}>
            <div className="lbl lbl-c" style={{ marginBottom: 12 }}>Relevant Products</div>
            <h2 className="D3">Products for Aerospace &amp; Defense</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {PRODUCTS.map(({ name, href }) => (
              <Link key={href} href={href} style={{ display: "block", padding: "20px 24px", background: "var(--bg)", borderRadius: 10, border: "1px solid var(--bd)", fontWeight: 600, fontSize: 14 }}>
                {name}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8, display: "inline" }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="W">
          <h2 className="D3 cta__h">Defense or Aerospace Program?</h2>
          <p className="cta__s">Share your MIL-SPEC requirements and program details — we&apos;re ITAR registered and ready.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn bp">Contact Us</Link>
            <Link href="/industries" className="btn" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.22)" }}>All Industries</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
