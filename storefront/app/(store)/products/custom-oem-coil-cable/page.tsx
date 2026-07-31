import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Custom OEM Coil Cable Assemblies | Superior Harness & Assembly",
  description: "Custom OEM coiled cable assemblies to your drawing. Any retraction ratio, connector, coil OD, and jacket material. Prototype to production volumes.",
}

const CAPS = [
  { title: "Drawing-to-Part Builds", desc: "We build to your PDF, DXF, or native CAD drawing. GD&T characteristics captured on first article inspection report." },
  { title: "Sample Reverse Engineering", desc: "Send a sample assembly. We generate a wire list and drawing for your approval before building to spec." },
  { title: "DFM Review Included", desc: "DFM review at no charge with every quote. We flag connector selection, strain relief, coil OD, and testability issues." },
  { title: "Any Connector Type", desc: "Any commercial or custom connector type. We have no connector brand restriction and source to your BOM." },
  { title: "Full Material Traceability", desc: "Cable, connector, and overmold material lot traceability recorded for every production run. Available on request." },
  { title: "Consistent Production Certification", desc: "COC on every shipment. PPAP Level 1–3 available for automotive and tier-1 OEM programs." },
]

const SPECS = [
  { k: "Build Basis", v: "Customer drawing, sample, or co-developed spec" },
  { k: "Conductor Count", v: "2 to 30 conductors" },
  { k: "Jacket Material", v: "PUR, TPE, PVC — per OEM spec" },
  { k: "Coil OD", v: "20 mm to 100 mm" },
  { k: "Retracted Length", v: "To drawing" },
  { k: "Extended Length", v: "To drawing" },
  { k: "Certification", v: "COC standard; PPAP on request" },
  { k: "Lead Time", v: "NPI: 7–14 days · Production: 14–28 days" },
]

const PROCESS = [
  { n: "01", title: "Drawing or Sample Review", desc: "Customer drawing or sample reviewed. Questions raised before quoting. DFM concerns flagged in quote response." },
  { n: "02", title: "First Article Build", desc: "First article built to drawing. Full dimensional and electrical inspection recorded on FAIR report." },
  { n: "03", title: "Customer Approval", desc: "FAIR and samples submitted to customer for approval. Any corrections incorporated before production release." },
  { n: "04", title: "Production Release", desc: "Approved FAIR stored. Production router and inspection plan created for production quantities." },
  { n: "05", title: "Production Build & QC", desc: "Production built to released router. In-process inspection at each stage. 100% electrical test before ship." },
  { n: "06", title: "COC & Ship", desc: "Certificate of conformance, lot records, and (if required) PPAP documentation shipped with every order." },
]

const USECASES = [
  { title: "Industrial Equipment OEMs", desc: "Coiled cable assemblies for machine builder OEM programs supplying industrial automation and processing equipment." },
  { title: "Medical Device OEMs", desc: "Custom coiled cables for medical device OEMs requiring full regulatory documentation and material traceability." },
  { title: "Automotive Tier-1 Suppliers", desc: "PPAP-supported coiled cable programs for automotive tier-1 suppliers and OEM tooling and equipment." },
  { title: "Consumer Electronics OEMs", desc: "Custom coiled cables for consumer product OEMs with specific aesthetic and performance requirements." },
  { title: "Defense Contractors", desc: "Coiled cable assemblies to MIL-spec for defense equipment OEMs and prime contractors." },
  { title: "Startup & NPI Programs", desc: "Single-piece prototypes to full production for startup companies and new product introduction programs." },
]

const FAQS = [
  { q: "What is the minimum order quantity?", a: "One unit for prototype and NPI programs. Production orders have no volume minimum — pricing reflects quantity. Prototypes typically ship within 5–10 business days." },
  { q: "How do I submit a drawing for quote?", a: "Email drawings, schematics, or sample parts to info@superiorharness.com, or use the quote form on this site. We accept PDF, DXF, and native CAD formats. Quotes issued within 24 hours." },
  { q: "What quality standards do you work to?", a: "IPC/WHMA-A-620 Class 2 and Class 3 for wire harnesses. IPC-A-610 for PCB assemblies. All assemblies electrically tested 100% before shipment. FAI and COC available on all programs." },
  { q: "Can you reverse-engineer from a sample?", a: "Yes. Send a sample assembly and we generate a wire list or drawing for your approval before production. This is our most common NPI scenario." },
  { q: "Do you offer design-for-manufacture review?", a: "Yes — DFM review is included at no charge with every quote. We flag issues with routing, gauge sizing, connector selection, and testability before any tooling is committed." },
]

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            Custom OEM Coil Cable Assemblies
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Fully custom OEM coiled cable assemblies built to your drawing or sample. Any coil geometry, connector, jacket material, and conductor configuration. NPI support through full production with consistent first-article approval process.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Coil / Spiral Cable</div>
              <h1 className="pp-hero__h">
                Your Spec.
                <span className="muted">Your Connectors.</span>
                <span className="muted">Custom Coil..</span>
              </h1>
              <p className="pp-hero__desc">Fully custom OEM coiled cable assemblies built to your drawing or sample. Any coil geometry, connector, jacket material, and conductor configuration. NPI support through full production with consistent first-article approval process.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet &rarr;</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/custom-coil-cable-variety.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Any Connector</div><div className="pp-hero__stat-lbl">Type</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Drawing or</div><div className="pp-hero__stat-lbl">Sample Match</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">NPI to</div><div className="pp-hero__stat-lbl">Production</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">&lt;24 H</div><div className="pp-hero__stat-lbl">Quote Reply</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
            <div className="pp-meaning__inner">
              <div className="pp-meaning__label">OEM Custom Coil Cable Engineering</div>
              <h2 className="pp-meaning__h">We Build What You Design — Exactly.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Custom OEM coil cable assembly programs begin with your drawing, sketch, or sample part. We reverse-engineer or review your design, issue a DFM report identifying any manufacturability concerns, and build a first article for your approval before production begins. Every dimension on your drawing becomes a controlled characteristic on our inspection record.</p>
                <p className="pp-meaning__text">From single-piece NPI builds to production orders of thousands, the process does not change. Same first article approval, same inspection records, same COC. We support OEM programs with consistent documentation, stable lead times, and direct engineering contacts.</p>
              </div>

              <div className="pp-ov-gallery">
                <img src="/images/oem-coil-cable-drawing.webp" alt="Engineer reviewing custom coil cable drawing" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/custom-coil-cable-variety.webp" alt="Custom OEM coil cable assembly variety" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/first-article-coil-inspection.webp" alt="First article coil cable inspection" className="pp-ov-gallery__img" loading="lazy" />
              </div>
              <div className="pp-ov-divider" />
              <div className="pp-ov-section-label">Key Specifications</div>
              <div className="pp-ov-keyspecs">
                {SPECS.slice(0, 4).map(s => (
                  <div key={s.k} className="pp-ov-spec">
                    <div className="pp-ov-spec__k">{s.k}</div>
                    <div className="pp-ov-spec__v">{s.v}</div>
                  </div>
                ))}
              </div>
              <div className="pp-ov-section-label">Core Capabilities</div>
              <div className="pp-ov-caps-preview">
                {CAPS.slice(0, 3).map(c => (
                  <div key={c.title} className="pp-ov-cap">
                    <div className="pp-ov-cap__title">{c.title}</div>
                    <div className="pp-ov-cap__desc">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )},
        { id: "capabilities", label: "Capabilities", content: (
          <section className="pp-caps">
            <div className="pp-caps__inner">
              <div className="pp-caps__label">Manufacturing Capability Block</div>
              <h2 className="pp-caps__h">Six Processes.<br />One Assembly.</h2>
              <div className="pp-caps-grid">
                {CAPS.map(c => (
                  <div key={c.title} className="pp-caps-grid__cell">
                    <svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                    <div className="pp-caps-grid__title">{c.title}</div>
                    <div className="pp-caps-grid__desc">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs">
            <div className="pp-specs__inner">
              <div className="pp-specs__label">Specification Sheet</div>
              <h2 className="pp-specs__h">Custom OEM Coil Cable Assemblies Envelope.</h2>
              <table className="pp-spec-table">
                <tbody>
                  {SPECS.map(s => (
                    <tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process">
            <div className="pp-process__inner">
              <div className="pp-process__label">Production Flow</div>
              <h2 className="pp-process__h">Spec to Ship.<br />Six Steps.</h2>
              <div className="pp-process-grid">
                {PROCESS.map(p => (
                  <div key={p.n} className="pp-process-grid__cell">
                    <div className="pp-process-grid__num">{p.n}</div>
                    <div className="pp-process-grid__title">{p.title}</div>
                    <div className="pp-process-grid__desc">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )},
        { id: "applications", label: "Applications", content: (
          <section className="pp-usecases">
            <div className="pp-usecases__inner">
              <div className="pp-usecases__label">Application Map</div>
              <h2 className="pp-usecases__h">Industries We Serve.</h2>
              <div className="pp-usecases-grid">
                {USECASES.map(u => (
                  <div key={u.title} className="pp-usecases-grid__cell">
                    <div className="pp-usecases-grid__title">{u.title}</div>
                    <div className="pp-usecases-grid__desc">{u.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )},
        { id: "resources", label: "Resources", content: (
          <>
            <section className="pp-quote">
              <div className="pp-quote__inner">
                <div className="pp-quote__card">
                  <div className="pp-quote__label">Operations Note</div>
                  <p className="pp-quote__text">&ldquo;Every assembly we build starts with your specification — not a closest match, not a catalog default. If your drawing has a note, we build to it. If a note is ambiguous, we call before we cut.&rdquo;</p>
                  <div className="pp-quote__attr">
                    <div className="pp-quote__avatar">SHA</div>
                    <div>
                      <div className="pp-quote__name">Production Team</div>
                      <div className="pp-quote__role">Superior Harness &amp; Assembly &middot; Canton, MI</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <FAQAccordion label="Custom OEM Coil Cable Assemblies FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Coil / Spiral Cable Solutions</div>
                    <div className="pp-related-grid__desc">Full range of coil cable types and constructions.</div>
                    <Link href="/products/coil-spiral-cable" className="pp-related-grid__link">Read More &rarr;</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Overmolded Cable Assembly</div>
                    <div className="pp-related-grid__desc">Overmolded connector terminations with custom strain relief.</div>
                    <Link href="/products/overmolded-harness" className="pp-related-grid__link">Read More &rarr;</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Custom Wire Harness</div>
                    <div className="pp-related-grid__desc">Custom wire harness assemblies for any application.</div>
                    <Link href="/products/custom-wire-harness" className="pp-related-grid__link">Read More &rarr;</Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        )},
      ]} />
    </div>
  )
}
