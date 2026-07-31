import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Hi-Flex Robotic Coil Cable | Superior Harness & Assembly",
  description: "High-flex coiled cable assemblies for robotic arms, collaborative robots, and servo-driven automation. Rated for 10M+ flex cycles in coiled configuration.",
}

const CAPS = [
  { title: "Fine-Stranded Hi-Flex Conductors", desc: "Conductor strand count and wire gauge optimized for flex cycle life. Fine stranding reduces metal fatigue in continuous-flex coil applications." },
  { title: "PUR Hi-Flex Jacket", desc: "PUR jacket formulation selected for flex memory and high cycle life rather than general chemical resistance. Maintains coil spring return through 10M+ cycles." },
  { title: "Shielded Bus Protocol Options", desc: "Individually shielded pairs for Ethernet-based protocols (EtherCAT, PROFINET) within the coiled construction. Impedance controlled on request." },
  { title: "Encoder & Power Hybrid", desc: "Single coiled cable combining servo power conductors, brake conductors, and encoder feedback for clean robot arm integration." },
  { title: "Custom Robot Flange Connectors", desc: "M8, M12, RJ45, and circular connectors selected and overmolded to robot OEM specification. Compatible with major cobot platforms." },
  { title: "Service Loop Geometry", desc: "Coil geometry designed as a service loop rather than a stretched extension cable. Coil OD and hang length optimized for robot work envelope." },
]

const SPECS = [
  { k: "Jacket Material", v: "Hi-Flex PUR" },
  { k: "Conductor Count", v: "4 to 25 conductors + drain wires" },
  { k: "Wire Gauge", v: "28 AWG to 16 AWG" },
  { k: "Flex Cycle Rating", v: "5M to 10M+ cycles in coil configuration" },
  { k: "Coil OD", v: "25 mm to 80 mm" },
  { k: "Retracted Length", v: "0.3 m to 1.2 m" },
  { k: "Extended Length", v: "1.0 m to 4.0 m" },
  { k: "Lead Time", v: "Prototype: 7–12 days · Production: 14–21 days" },
]

const PROCESS = [
  { n: "01", title: "Robot Application Review", desc: "Flex cycle requirement, robot protocol, connector type, and geometry constraints reviewed before design." },
  { n: "02", title: "Hi-Flex Cable Selection", desc: "Strand count and PUR grade selected for cycle life. Shielding architecture specified for signal types." },
  { n: "03", title: "Connector & Overmold", desc: "Robot-compatible connectors terminated and overmolded. Overmold geometry provides flex relief, not hard-stop strain relief." },
  { n: "04", title: "Mandrel Coil & Heat-Set", desc: "Cable coiled on mandrel to OD and pitch. Heat-set at temperature and duration optimized for hi-flex PUR." },
  { n: "05", title: "Flex & Dimensional Test", desc: "Sample units flex-cycled at accelerated rate. All units checked for retracted/extended length and coil OD." },
  { n: "06", title: "Robot Compatibility Test & Ship", desc: "Cable assembly verified against robot platform connector footprint. COC with cycle test data shipped with order." },
]

const USECASES = [
  { title: "Collaborative Robot Arms", desc: "Umbilical coil cables for UR, FANUC CRX, ABB YuMi, and other collaborative robot platforms." },
  { title: "SCARA & Cartesian Robots", desc: "Coiled service loops for SCARA pick-and-place robots and Cartesian axis systems." },
  { title: "Linear Servo Axes", desc: "Coiled umbilical cables for linear motor stages and servo-driven gantry systems." },
  { title: "Robot End-Effectors", desc: "Coiled cables supplying power, signals, and pneumatics to robotic grippers and end-of-arm tooling." },
  { title: "Robot Cell Infrastructure", desc: "Cell boundary coil cables providing safe retractable connections between fixed infrastructure and moving robots." },
  { title: "Automated Test Equipment", desc: "Coiled probe cables and measurement leads for automated electrical test systems." },
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
            Hi-Flex Robotic Coil Cable
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">High-flex coiled cable assemblies designed for robotic arm umbilicals, collaborative robot connections, and servo-driven automation where continuous flexing in the coiled state is required alongside retraction functionality.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Coil / Spiral Cable</div>
              <h1 className="pp-hero__h">
                Flex-Rated.
                <span className="muted">Coiled.</span>
                <span className="muted">Robotic-Ready..</span>
              </h1>
              <p className="pp-hero__desc">High-flex coiled cable assemblies designed for robotic arm umbilicals, collaborative robot connections, and servo-driven automation where continuous flexing in the coiled state is required alongside retraction functionality.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet &rarr;</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/robotic-coil-umbilical.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">10M+ Flex</div><div className="pp-hero__stat-lbl">Cycle Rating</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">PUR Hi-Flex</div><div className="pp-hero__stat-lbl">Construction</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Shielded</div><div className="pp-hero__stat-lbl">EMI Rated</div></div>
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
              <div className="pp-meaning__label">Coiled Cables That Flex and Retract Indefinitely</div>
              <h2 className="pp-meaning__h">Hi-Flex Coil Cable for Continuous-Motion Automation.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Standard coiled cables fail prematurely in robotic applications because they are designed for retraction, not continuous flexing. A hi-flex robotic coil cable uses fine-stranded conductors, a PUR jacket with high flex memory, and shielding constructions rated for tens of millions of cycles. The coil geometry provides both retraction function and controlled cable management in the robot cell.</p>
                <p className="pp-meaning__text">We build hi-flex robotic coil cables for collaborative robot arms, SCARA robots, linear axis umbilicals, and servo-axis service loops. Shielded constructions for encoder signals and bus protocols. Hybrid power and signal in a single compact coil.</p>
              </div>

              <div className="pp-ov-gallery">
                <img src="/images/robotic-coil-umbilical.webp" alt="Robotic coiled umbilical cable" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/hiflex-coil-cable-bend.webp" alt="Hi-flex coil cable at tight bend radius" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/cobot-coil-cable-ur5.webp" alt="Collaborative robot with coiled cable umbilical" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Hi-Flex Robotic Coil Cable Envelope.</h2>
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
            <FAQAccordion label="Hi-Flex Robotic Coil Cable FAQ" heading="Questions Engineers Ask." items={FAQS} />
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
