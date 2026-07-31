import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Signal Coil Cable | Superior Harness & Assembly",
  description: "Shielded signal coiled cables for sensor connections, encoder feedback, data acquisition, and low-voltage instrumentation. Custom conductor count and shielding.",
}

const CAPS = [
  { title: "Coil-Rated Braided Shield", desc: "Shield coverage percentage maintained in coiled state. Shield wire size and weave angle optimized for flex in coiled geometry." },
  { title: "Individually Shielded Pairs", desc: "Individual foil or braid shield on signal pairs within the coiled cable for multi-signal constructions requiring pair-level isolation." },
  { title: "Low-Capacitance Options", desc: "Low-capacitance insulation on signal conductors for analog and high-frequency digital signal pairs." },
  { title: "Twisted Pair Construction", desc: "Signal pairs twisted to specification for common-mode noise rejection in differential signal lines." },
  { title: "Multi-Protocol Support", desc: "Constructions verified for RS-485, CAN bus, EtherCAT, and analog ±10V signal transmission." },
  { title: "Custom Conductor Count", desc: "2 to 20 conductors plus drain wires and shield in a single coiled assembly." },
]

const SPECS = [
  { k: "Jacket Material", v: "PUR (standard), TPE" },
  { k: "Shielding", v: "Overall braid (standard); individual pair foil + drain available" },
  { k: "Shield Coverage", v: "85% min at full extension; verified in coiled state" },
  { k: "Conductor Count", v: "2 to 20 conductors" },
  { k: "Wire Gauge", v: "30 AWG to 22 AWG signal; 22 AWG to 16 AWG power" },
  { k: "Signal Protocols", v: "Analog, RS-485, CAN, EtherCAT, encoder" },
  { k: "Retracted / Extended", v: "To specification" },
  { k: "Lead Time", v: "Prototype: 7–12 days · Production: 14–21 days" },
]

const PROCESS = [
  { n: "01", title: "Signal Architecture Review", desc: "Signal type, shielding requirement, conductor count, and protocol verified before cable design is released." },
  { n: "02", title: "Shield Design for Coil", desc: "Braid weave angle and wire size selected to maintain shield coverage in the coiled state. Foil shields used only on inner pairs." },
  { n: "03", title: "Connector Termination", desc: "Shielded connectors terminated with controlled shield pigtail or 360° backshell termination. Drain wire routing specified." },
  { n: "04", title: "Coil Heat-Set", desc: "Cable wound and heat-set. Shield coverage verified on sample units at both retracted and extended state." },
  { n: "05", title: "Electrical & EMI Test", desc: "Continuity, isolation, and shield continuity tested on all units. Impedance testing on request for controlled-impedance constructions." },
  { n: "06", title: "COC & Ship", desc: "Shield test data included in COC. Packaging maintains coil memory and protects shield integrity during transit." },
]

const USECASES = [
  { title: "Encoder Feedback Cables", desc: "Shielded coiled cables for servo motor encoder feedback connections on CNC machines and robotics." },
  { title: "Sensor Connections", desc: "Coiled signal cables for proximity sensors, pressure transducers, and load cells on industrial equipment." },
  { title: "Data Acquisition", desc: "Multi-conductor shielded coil cables for portable data acquisition systems and instrumentation." },
  { title: "CAN & RS-485 Bus", desc: "Coiled CAN bus and RS-485 cables for field device connections in automation systems." },
  { title: "Test & Measurement", desc: "Coiled shielded cables for benchtop test instruments and portable measurement equipment." },
  { title: "Process Instrumentation", desc: "Coiled analog signal cables for 4–20 mA loop and ±10V process instrumentation." },
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
            Signal Coil Cable
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Shielded coiled signal cables for sensor connections, encoder feedback, analog instrumentation, and low-voltage data acquisition. EMI shielding preserved within the coiled construction. Custom conductor count, gauge, and shielding architecture.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Coil / Spiral Cable</div>
              <h1 className="pp-hero__h">
                Shielded.
                <span className="muted">Signal-Clean.</span>
                <span className="muted">Retractable..</span>
              </h1>
              <p className="pp-hero__desc">Shielded coiled signal cables for sensor connections, encoder feedback, analog instrumentation, and low-voltage data acquisition. EMI shielding preserved within the coiled construction. Custom conductor count, gauge, and shielding architecture.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet &rarr;</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/shielded-signal-coil-cable.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Braided EMI</div><div className="pp-hero__stat-lbl">Shield</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Multi-Conductor</div><div className="pp-hero__stat-lbl">Signal Pairs</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Low Capacitance</div><div className="pp-hero__stat-lbl">Options</div></div>
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
              <div className="pp-meaning__label">Signal Integrity in a Coiled Cable</div>
              <h2 className="pp-meaning__h">Shielded Signal Coil Cables Without Compromise.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Standard coiled cables are designed for power and control. Signal coiled cables require shielding to be effective in the coiled geometry. Braided shield coverage must remain above 85% even in the compressed coil state. Foil shields can crack at the inner coil radius. We design the shielding architecture specifically for the coil construction, not as an afterthought.</p>
                <p className="pp-meaning__text">We build signal coiled cables for encoder feedback, analog sensor connections, CAN bus, RS-485, and custom multi-conductor instrumentation assemblies. Individually shielded pairs within an overall braided shield available for multi-signal constructions.</p>
              </div>

              <div className="pp-ov-gallery">
                <img src="/images/shielded-signal-coil-cable.webp" alt="Shielded signal coil cable with exposed braid" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/encoder-coil-cable-servo.webp" alt="Encoder coil cable on servo motor" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/coil-cable-shielded-pairs.webp" alt="Signal coil cable shielded pairs cross-section" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Signal Coil Cable Envelope.</h2>
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
            <FAQAccordion label="Signal Coil Cable FAQ" heading="Questions Engineers Ask." items={FAQS} />
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
