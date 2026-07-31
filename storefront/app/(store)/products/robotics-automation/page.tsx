import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Robotics & Automation Solutions | Superior Harness & Assembly",
  description: "Wire harnesses, cable assemblies, and electromechanical sub-assemblies for robotics and automation systems. High-flex, EMI-shielded, and servo-rated constructions.",
}

const CAPS = [
  { title: "Servo Power Cables", desc: "High-flex servo motor power cables with PUR jacket, fine-stranded conductors, and brake conductor. Connector matched to drive manufacturer specification." },
  { title: "Encoder & Feedback Cables", desc: "Shielded encoder cables with twisted signal pairs, drain wire, and 360° backshell shield termination. Matched to encoder protocol (SSI, EnDat, Hiperface, BiSS)." },
  { title: "Drag-Chain Bundles", desc: "Multi-cable drag-chain bundles configured for energy chain lay. Fixed-end and moving-end geometry per chain specification." },
  { title: "Robot Umbilicals", desc: "Multi-function umbilical cables routing power, signal, pneumatics, and fluids through 6-axis robot arms and SCARA wrists." },
  { title: "EMI Shielding Architecture", desc: "Shield braid, spiral shield, and foil-braid combinations selected per drive EMI specification. 360° termination at backshells." },
  { title: "High-Flex Construction", desc: "Fine-stranded copper conductors, high-flex PUR insulation, and controlled lay construction for 5–10M cycle life." },
]

const SPECS = [
  { k: "Cable Types", v: "Servo power, encoder, bus (EtherCAT, PROFINET, DeviceNet), I/O" },
  { k: "Flex Rating", v: "5–10M cycles at 5× OD bend radius" },
  { k: "Conductor Type", v: "Fine-stranded Class 5/6, rope-lay copper" },
  { k: "Shielding", v: "Braided, spiral, foil-braid, combination" },
  { k: "Connector Brands", v: "Molex, TE, Amphenol, Lemo, M12, custom backshell" },
  { k: "IP Rating", v: "IP67 on request" },
  { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 business days" },
  { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Motion Profile Review", desc: "Bend radius, cycle count, routing path, and flex speed reviewed. Conductor and jacket material specified per profile." },
  { n: "02", title: "Shield Architecture", desc: "Shield type and termination method specified per drive EMI requirement. 360° backshell or pigtail drain per drawing." },
  { n: "03", title: "Cable Prep", desc: "Fine-stranded conductors cut, stripped, and labeled. Shield braid dressed and prepared for termination." },
  { n: "04", title: "Connector Termination", desc: "Servo and encoder connectors crimped and assembled per drive and encoder manufacturer specification." },
  { n: "05", title: "Shield Termination & Dress", desc: "Shield braid terminated at 360° backshell or drain wire. Cable dressed per drag-chain or robot arm routing spec." },
  { n: "06", title: "Electrical Test & Ship", desc: "Continuity, insulation resistance, and shield continuity verified on every unit. Packed to prevent kinking." },
]

const USECASES = [
  { title: "Industrial Robots (6-Axis)", desc: "Servo and encoder cables for 6-axis articulated robots. Umbilical bundles routed through or around the robot body." },
  { title: "SCARA & Delta Robots", desc: "High-cycle servo cables for SCARA arms and delta pick-and-place robots. Tight bend radius and short stroke cycles." },
  { title: "Collaborative Robots", desc: "Lightweight flex cables for cobot joints and sensor integration. Low-outgassing materials for enclosed cobot cells." },
  { title: "Gantry & Linear Axes", desc: "Drag-chain cable bundles for gantry systems, linear servo axes, and automated guided vehicles." },
  { title: "Semiconductor Automation", desc: "High-cleanliness flex cables for wafer handling and probing equipment in cleanroom environments." },
  { title: "Welding Automation", desc: "Welding torch cables and robot interface harnesses for arc and spot welding automation cells." },
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
            Robotics & Automation Solutions
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Harnesses and cable assemblies engineered for robotics: servo cables, encoder cables, drag-chain bundles, and robot umbilicals. High-flex, shielded, and IP-rated.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Advanced Solutions</div>
              <h1 className="pp-hero__h">
                Robotics.
                <span className="muted">Automation.</span>
              </h1>
              <p className="pp-hero__desc">Wiring harnesses and cable assemblies engineered for robotic and automation systems. Servo cables, encoder cables, drag-chain bundles, and robot arm umbilicals.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/servo-encoder-cable-assembly.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">10M+</div><div className="pp-hero__stat-lbl">Flex Cycles</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">EMI Shielded</div><div className="pp-hero__stat-lbl">Available</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP67</div><div className="pp-hero__stat-lbl">Rated Options</div></div>
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
              <div className="pp-meaning__label">What Robotics Wiring Demands</div>
              <h2 className="pp-meaning__h">Motion Envelopes, Cycle Counts, and EMI — All Three.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Robotic systems impose three simultaneous demands on cable assemblies: continuous flex (servo cables and drag-chain bundles bending millions of times), EMI immunity (servo drives generate high-frequency noise that corrupts encoder feedback), and mechanical ruggedness (cables routed through tight bends, around rotating joints, and across gantry axes). Standard cable assemblies fail one or more of these requirements. Our robot and automation assemblies are specified to pass all three.</p>
                <p className="pp-meaning__text">We build servo power cables, encoder feedback cables, robot arm umbilicals, drag-chain cable bundles, and electromechanical assemblies for automation equipment. Material selection, shielding architecture, and connector specification are matched to the servo drive datasheet and robot arm motion profile.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/servo-encoder-cable-assembly.webp" alt="Servo encoder cable assembly" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/drag-chain-linear-axis.webp" alt="Drag chain on linear servo axis" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/robot-umbilical-coil.webp" alt="Robot umbilical coil cable" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Robotics & Automation Solutions Envelope.</h2>
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
            <FAQAccordion label="Robotics & Automation Solutions FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">High-Flex Robotic Harnesses</div>
                    <div className="pp-related-grid__desc">High-cycle flex wire harnesses for robot and automation applications.</div>
                    <Link href="/products/high-flex-robotic-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Electromechanical Assemblies</div>
                    <div className="pp-related-grid__desc">Complete electromechanical sub-assemblies for automation systems.</div>
                    <Link href="/products/electromechanical" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Shielded / Hermetic</div>
                    <div className="pp-related-grid__desc">EMI-shielded cable assemblies for noise-sensitive servo systems.</div>
                    <Link href="/products/shielded-hermetic" className="pp-related-grid__link">Read More →</Link>
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
