import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Industrial Coil Cables | Superior Harness & Assembly",
  description: "Heavy-duty industrial coiled cables for factory automation, material handling, and machine tool applications. PUR jacket, oil and abrasion resistant.",
}

const CAPS = [
  { title: "Oil & Coolant Resistant PUR", desc: "PUR jacket formulated for resistance to cutting oils, coolant, hydraulic fluid, and cleaning solvents common in machining environments." },
  { title: "High-Abrasion Construction", desc: "Reinforced jacket wall thickness and reinforced strain relief zones for applications with regular contact against machine surfaces." },
  { title: "EMI Shielded Options", desc: "Braided and foil-braid shielding within the coiled construction for signal cables running near VFDs and servo drives." },
  { title: "Hybrid Power + Signal", desc: "Single coiled cable carrying power conductors and signal conductors. Reduces cable count and simplifies machine integration." },
  { title: "Custom Connector Ends", desc: "M8, M12, circular DIN, and custom overmolded connectors. IP67 sealing on both ends for wet washdown environments." },
  { title: "High-Cycle Rating", desc: "Coil constructions rated for 500,000+ retract/extend cycles at elevated temperature for continuous-duty industrial applications." },
]

const SPECS = [
  { k: "Jacket Material", v: "PUR (standard), TPE chemical-resistant grades" },
  { k: "Conductor Count", v: "2 to 20 conductors" },
  { k: "Wire Gauge", v: "28 AWG to 12 AWG" },
  { k: "Retracted Length", v: "0.2 m to 1.5 m" },
  { k: "Extended Length", v: "0.6 m to 5 m" },
  { k: "Coil OD", v: "30 mm to 90 mm" },
  { k: "Temperature Range", v: "-40°C to +90°C (PUR grade)" },
  { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 days" },
]

const PROCESS = [
  { n: "01", title: "Application Review", desc: "Chemical exposure, flex cycle, temperature, and connector requirements confirmed before material selection." },
  { n: "02", title: "Material Selection", desc: "PUR grade selected for chemical resistance profile. Conductor gauge and strand count matched to current and flex requirements." },
  { n: "03", title: "Connector Termination", desc: "Connectors terminated before coiling. IP-rated connectors potted or overmolded to spec." },
  { n: "04", title: "Coil Heat-Set", desc: "Cable wound on mandrel and heat-set at controlled temperature and time. Coil OD and pitch verified to drawing." },
  { n: "05", title: "Dimensional & Electrical Test", desc: "Retracted/extended length, coil OD verified. Full continuity and hi-pot test on every unit." },
  { n: "06", title: "COC & Ship", desc: "Certificate of conformance included. Coil packed in orientation to maintain memory during transit." },
]

const USECASES = [
  { title: "Machine Tools & CNC", desc: "Coiled cables for servo connections, spindle feedback, and pendant controls on CNC machining centers and lathes." },
  { title: "Material Handling", desc: "Coiled power and control cables for conveyor drives, automated guided vehicles, and overhead cranes." },
  { title: "Stamping & Press", desc: "Vibration-resistant coiled cables for die protection sensors and position feedback in stamping applications." },
  { title: "Welding Automation", desc: "Coiled teach pendant cables and sensor cables for welding robots and positioners." },
  { title: "Factory Pendants", desc: "Coiled cable assemblies for operator control pendants on production machinery." },
  { title: "Washdown Environments", desc: "IP67-rated coiled assemblies for food processing, pharmaceutical, and clean-in-place equipment." },
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
            Industrial Coil Cables
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Heavy-duty coiled cables engineered for factory floors, machine tools, and material handling equipment. PUR construction with high oil resistance, abrasion resistance, and reliable retraction through millions of cycles.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Coil / Spiral Cable</div>
              <h1 className="pp-hero__h">
                Industrial.
                <span className="muted">Tough.</span>
                <span className="muted">Retractable..</span>
              </h1>
              <p className="pp-hero__desc">Heavy-duty coiled cables engineered for factory floors, machine tools, and material handling equipment. PUR construction with high oil resistance, abrasion resistance, and reliable retraction through millions of cycles.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet &rarr;</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/industrial-coil-cable-machine.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">PUR Jacket</div><div className="pp-hero__stat-lbl">Oil Resistant</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">High Cycle</div><div className="pp-hero__stat-lbl">Rated</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP67</div><div className="pp-hero__stat-lbl">Capable</div></div>
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
              <div className="pp-meaning__label">Built for the Factory Floor</div>
              <h2 className="pp-meaning__h">Industrial Coil Cables Endure Where Others Fail.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Industrial coiled cables face conditions that destroy standard cable designs: coolant spray, metal chips, stamping vibration, and repeated dragging across steel surfaces. PUR jacket formulations provide the chemical resistance and cut resistance required. The coil construction itself provides controlled cable management that reduces snag and trip hazards common with loose cable management systems.</p>
                <p className="pp-meaning__text">We build industrial coiled cables to your exact coil OD, retracted length, and connector specification. Shielded constructions for signal cables in high-noise environments. Hybrid power and signal in a single coiled cable for clean machine integration.</p>
              </div>

              <div className="pp-ov-gallery">
                <img src="/images/industrial-coil-cable-machine.webp" alt="Industrial coil cable on CNC machine" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/oil-resistant-pur-coil.webp" alt="Oil-resistant PUR coil cable" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/coil-cable-m12-connector.webp" alt="M12 connector on industrial coil cable" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Industrial Coil Cables Envelope.</h2>
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
            <FAQAccordion label="Industrial Coil Cables FAQ" heading="Questions Engineers Ask." items={FAQS} />
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
