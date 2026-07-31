import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Aviation Coil Cables | Superior Harness & Assembly",
  description: "Aviation-grade coiled cable assemblies for aircraft ground support, avionics test, and airfield equipment. MIL-spec wire options, lightweight construction.",
}

const CAPS = [
  { title: "MIL-Spec Wire Options", desc: "MIL-W-22759 and MIL-C-17 compliant wire available within coiled assembly for aviation programs requiring traceability." },
  { title: "Wide Temperature Range", desc: "Jacket and insulation materials selected for operation from -55°C to +125°C to match aviation environment specifications." },
  { title: "Lightweight Construction", desc: "Thin-wall insulation and lightweight jacket options for weight-sensitive aviation and UAV applications." },
  { title: "Circular MIL Connectors", desc: "MIL-DTL-38999, MIL-DTL-26482, and other circular MIL connectors assembled and overmolded to coil ends." },
  { title: "Fire & Smoke Requirements", desc: "Jacket material flame retardancy and smoke generation data available. FAR 25.853 compliant materials on request." },
  { title: "Aviation Documentation", desc: "Material certs, C of C, traceability records, and FAA 8130-3 tag (for applicable parts) available for aviation programs." },
]

const SPECS = [
  { k: "Wire Type", v: "Commercial PUR (standard); MIL-W-22759 on request" },
  { k: "Temperature Range", v: "-55°C to +125°C" },
  { k: "Connector Options", v: "MIL-DTL-38999, MIL-DTL-26482, D-Sub, custom" },
  { k: "Conductor Count", v: "2 to 20 conductors" },
  { k: "Weight Rating", v: "Standard; lightweight thin-wall insulation option" },
  { k: "Flame Rating", v: "VW-1; FAR 25.853 materials on request" },
  { k: "Documentation", v: "COC standard; FAA 8130-3 on applicable parts" },
  { k: "Lead Time", v: "Prototype: 10–15 days · Production: 20–30 days" },
]

const PROCESS = [
  { n: "01", title: "Aviation Requirements Review", desc: "Temperature range, applicable MIL-spec, connector type, and documentation requirements reviewed before quoting." },
  { n: "02", title: "Wire & Material Selection", desc: "MIL-spec or commercial wire selected per program requirement. Jacket material confirmed for temperature and flame rating." },
  { n: "03", title: "Connector Assembly", desc: "MIL circular connectors or custom connectors assembled with correct insert arrangement and contact type per drawing." },
  { n: "04", title: "Coil Heat-Set", desc: "Cable coiled and heat-set. Low-temperature retraction verified at -55°C on sample units." },
  { n: "05", title: "Electrical & Environmental Test", desc: "Continuity, isolation, and hi-pot test. Temperature cycling on qualification lots. All results recorded." },
  { n: "06", title: "Aviation Documentation & Ship", desc: "COC, material certs, lot traceability, and FAA 8130-3 (if applicable) packaged with shipment." },
]

const USECASES = [
  { title: "Ground Support Equipment", desc: "Coiled cable assemblies for aircraft ground power units, hydraulic test rigs, and maintenance equipment." },
  { title: "Avionics Test Stations", desc: "Coiled test cables for avionics bench test equipment and ATE systems." },
  { title: "Cockpit Handsets", desc: "Coiled handset cords for aircraft crew communications and cockpit voice communication systems." },
  { title: "Airfield Lighting & Comm", desc: "Coiled cable assemblies for airfield lighting control, NAVAID connections, and communications." },
  { title: "UAV & Drone Systems", desc: "Lightweight coiled cables for UAV ground control stations, tethered drones, and payload connections." },
  { title: "Defense Aviation", desc: "MIL-spec coiled cable assemblies for military aircraft programs and defense ground support equipment." },
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
            Aviation Coil Cables
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Aviation-grade coiled cable assemblies for aircraft ground support equipment, avionics test stations, and airfield infrastructure. MIL-spec wire options, lightweight insulation, and wide operating temperature range from -55°C to +125°C.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Coil / Spiral Cable</div>
              <h1 className="pp-hero__h">
                Aviation-Grade.
                <span className="muted">Lightweight.</span>
                <span className="muted">Retractable..</span>
              </h1>
              <p className="pp-hero__desc">Aviation-grade coiled cable assemblies for aircraft ground support equipment, avionics test stations, and airfield infrastructure. MIL-spec wire options, lightweight insulation, and wide operating temperature range from -55°C to +125°C.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet &rarr;</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/aviation-coil-cable-mil-connector.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">MIL-Spec</div><div className="pp-hero__stat-lbl">Wire Options</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">-55°C to</div><div className="pp-hero__stat-lbl">+125°C</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Lightweight</div><div className="pp-hero__stat-lbl">Construction</div></div>
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
              <div className="pp-meaning__label">Aviation-Grade Coil Cable Standards</div>
              <h2 className="pp-meaning__h">Coiled Cables Built for Aviation Environments.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Aviation coiled cables operate across an extreme temperature range, must be lightweight to minimize aircraft weight penalty, and must meet fire and smoke generation requirements for any cabin or equipment bay use. MIL-W-22759 and MIL-C-17 compliant wire constructions are available within the coiled cable assembly. Jacket materials selected for aviation chemical resistance.</p>
                <p className="pp-meaning__text">We build aviation coiled cables for ground support equipment, avionics bench test, cockpit handset cords, and airfield communications. Circular MIL connectors, D-Sub, and custom configurations. Documentation for aircraft program use available on request.</p>
              </div>

              <div className="pp-ov-gallery">
                <img src="/images/aviation-coil-cable-mil-connector.webp" alt="Aviation coil cable with MIL-DTL-38999 connector" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/ground-support-coil-cable.webp" alt="Ground support coiled cable at aircraft" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/lightweight-aviation-coil.webp" alt="Lightweight aviation coil cable assembly" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Aviation Coil Cables Envelope.</h2>
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
            <FAQAccordion label="Aviation Coil Cables FAQ" heading="Questions Engineers Ask." items={FAQS} />
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
