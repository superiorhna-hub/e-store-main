import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Coil / Spiral Cable Solutions | Superior Harness & Assembly",
  description: "Custom coiled and spiral cable assemblies. Any coil OD, extended length, and retraction ratio. PUR, TPE, and PVC jacket materials.",
}

const CAPS = [
  { title: "PUR, TPE & PVC Coiling", desc: "Primary jacket material selected per coil memory, flex cycle, operating temperature, and chemical resistance requirement." },
  { title: "Custom Coil Geometry", desc: "Coil OD, pitch, retracted length, extended length, and lead length specified to your drawing. Geometry stable over service life." },
  { title: "Multi-Conductor & Shielded", desc: "2 to 25+ conductors in a single coiled cable. Braided, spiral, or foil-braid shielding available within the coil construction." },
  { title: "Overmolded Connectors", desc: "Straight and right-angle overmolded strain relief on both ends. Connector family matched to application." },
  { title: "High-Cycle Flex Rating", desc: "PUR coil constructions rated for 500,000+ retract/extend cycles. Test data available on standard cable constructions." },
  { title: "Custom Color & Marking", desc: "Jacket color in any standard or custom color. Printed cable marking available on straight lead sections." },
]

const SPECS = [
  { k: "Jacket Material", v: "PUR (preferred), TPE, PVC" },
  { k: "Conductor Count", v: "2 to 25 conductors" },
  { k: "Wire Gauge Range", v: "28 AWG to 14 AWG" },
  { k: "Retracted Length", v: "0.15 m to 1.5 m" },
  { k: "Extended Length", v: "0.5 m to 5 m (3:1 to 4:1 ratio typical)" },
  { k: "Coil OD", v: "25 mm to 90 mm" },
  { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 business days" },
  { k: "MOQ", v: "25 units prototype · 100 units production" },
]

const PROCESS = [
  { n: "01", title: "Coil Spec Review", desc: "Retracted length, extended length, coil OD, and connector types confirmed. Material selected per flex and temperature requirement." },
  { n: "02", title: "Cable Prep", desc: "Straight cable cut to process length and stripped at both ends. Conductors labeled per drawing." },
  { n: "03", title: "Connector Termination", desc: "Connectors terminated on both ends of the straight cable before coiling." },
  { n: "04", title: "Coil Forming", desc: "Cable wound on mandrel to specified OD and pitch, heat-set in oven at controlled temperature and duration." },
  { n: "05", title: "Dimensional Check", desc: "Retracted length, extended length, coil OD, and lead lengths verified against drawing tolerance." },
  { n: "06", title: "Electrical Test & Ship", desc: "Continuity and isolation test on every unit. COC included. Packed in coil orientation to maintain memory." },
]

const USECASES = [
  { title: "Handheld Tools & Scanners", desc: "Coiled cables for barcode scanners, portable test equipment, and handheld industrial tools. Extends to reach, retracts to store." },
  { title: "Vehicle & Truck Equipment", desc: "Coiled power and signal cables for truck-mounted equipment, trailers, and service connections." },
  { title: "Telephone & Communication", desc: "Coiled handset cords and coiled communication cables for headsets and panel-mount phones." },
  { title: "Service Loops", desc: "Machine coiled service loops providing controlled cable management with flex for maintenance access." },
  { title: "Safety Equipment", desc: "Coiled cables for fall arrest systems, safety lanyard sensors, and equipment tethering." },
  { title: "Medical Equipment", desc: "Coiled cables for diagnostic probes and handheld medical devices. Biocompatible PUR options available." },
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
            Coil / Spiral Cable Solutions
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Custom coiled cable assemblies in PUR, TPE, or PVC. Any retracted/extended length ratio, coil OD, and connector type. High-cycle flex rated.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Cable Assembly</div>
              <h1 className="pp-hero__h">
                Coiled.
                <span className="muted">Retractable.</span>
              </h1>
              <p className="pp-hero__desc">Custom coiled and spiral cable assemblies for applications requiring retractable reach: handheld tools, handsets, service loops, and cable management. Any length, any connector.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/ur-coiled-cable-extended.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Custom Ratio</div><div className="pp-hero__stat-lbl">Retract/Extend</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">PUR/TPE/PVC</div><div className="pp-hero__stat-lbl">Materials</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">High-Cycle</div><div className="pp-hero__stat-lbl">Flex Rated</div></div>
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
              <div className="pp-meaning__label">What Makes a Coiled Cable Different</div>
              <h2 className="pp-meaning__h">Coil Geometry and Memory Are Material Properties.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">A coiled cable is not a standard cable wound around a form. The coil geometry — pitch, diameter, and retraction memory — is set during a heat-forming process applied to a cable with the correct base material and wall thickness. PUR is the preferred jacket material for coiled cables because its elastic memory allows reliable retraction to the free state. TPE and PVC coils are also available where cost or chemical resistance is the primary driver.</p>
                <p className="pp-meaning__text">We build coiled cable assemblies from 2-conductor power cables to 25-conductor data and signal cables with shielding. Connector types range from straight entry to overmolded right-angle boots. Custom coil diameter, retracted length, extended length, and hang length (leads at each end) are all specified to your drawing.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/ur-coiled-cable-extended.webp" alt="PUR coiled cable extended" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/coiled-cable-handheld-scanner.webp" alt="Coiled cable on handheld scanner" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/coil-cable-variety.webp" alt="Coil cable variety" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Coil / Spiral Cable Solutions Envelope.</h2>
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
                      <div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <FAQAccordion label="Coil / Spiral Cable Solutions FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Cable Assembly Overview</div>
                    <div className="pp-related-grid__desc">Full range of cable assembly types and constructions.</div>
                    <Link href="/products/cable-assembly" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Overmolded Harness</div>
                    <div className="pp-related-grid__desc">Overmolded connector terminations for coiled cable ends.</div>
                    <Link href="/products/overmolded-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">High-Flex Robotic Harnesses</div>
                    <div className="pp-related-grid__desc">Continuous-flex cable construction for high-cycle automation.</div>
                    <Link href="/products/high-flex-robotic-harness" className="pp-related-grid__link">Read More →</Link>
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
