import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "High-Flex Robotic Harnesses | Superior Harness & Assembly",
  description: "Continuous-flex wire harnesses for robotic arms, drag chains, and high-cycle automation. 10M+ cycle rated, built to your spec.",
}

const CAPS = [
  { title: "Fine-Stranded Conductors", desc: "Rope-lay and fine-stranded copper conductors selected for flex cycle life. Gauge and strand count specified per your flex radius and cycle requirement." },
  { title: "High-Flex Insulation", desc: "TPE, PUR, and silicone insulation options for continuous-flex environments. Material selected per operating temperature and chemical exposure." },
  { title: "Drag-Chain Configuration", desc: "Harnesses configured for controlled lay and fixed-end bend radius per your drag-chain spec. No loose conductors, no random loops." },
  { title: "EMI Shielding Integration", desc: "Braided shield, spiral shield, or foil-braid constructions integrated into the flex harness where EMI immunity is required." },
  { title: "Connector Fretting Resistance", desc: "Connector series and contact plating selected for resistance to fretting corrosion in high-vibration, high-cycle environments." },
  { title: "Cycle Testing", desc: "Flex cycle endurance testing available. Test radius and cycle count per your spec or published conductor datasheet limits." },
]

const SPECS = [
  { k: "Wire Gauge Range", v: "28 AWG to 10 AWG" },
  { k: "Conductor Type", v: "Fine-stranded (Class 5/6), rope-lay copper" },
  { k: "Insulation", v: "TPE, PUR, silicone, PTFE" },
  { k: "Bend Radius", v: "As low as 5× OD for continuous-flex" },
  { k: "Shielding", v: "Braided, spiral, foil-braid, or unshielded" },
  { k: "Connector Series", v: "Molex, TE Connectivity, Amphenol, Lemo, M12, M8" },
  { k: "Lead Time", v: "Prototype: 5–10 days · Production: 7–18 business days" },
  { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Flex Profile Review", desc: "We review your bend radius, cycle count, speed, and routing path. Material recommendations issued with the quote." },
  { n: "02", title: "Conductor Selection", desc: "Fine-stranded or rope-lay conductors specified per flex demand. Insulation and jacket material locked to your environment." },
  { n: "03", title: "Assembly", desc: "Harness assembled with attention to lay direction, bundle geometry, and fixed-end configuration for drag-chain routing." },
  { n: "04", title: "Shield Termination", desc: "Shield braid or foil terminated per drawing — drain wire, backshell clamp, or 360° crimp ring as specified." },
  { n: "05", title: "Electrical Test", desc: "Continuity and isolation confirmed on every unit. Shield continuity and resistance tested separately where specified." },
  { n: "06", title: "Marking & Ship", desc: "Cable marked per your drawing. Packed to prevent kinking during transit. COC included." },
]

const USECASES = [
  { title: "Robotic Arm Umbilicals", desc: "6-axis and SCARA robot cable bundles routed through the arm body. Material and geometry engineered to the arm's full motion envelope." },
  { title: "Drag Chain Cables", desc: "Energy chain harnesses for linear axes, gantries, and transfer systems. Fixed-end and moving-end configuration built per chain spec." },
  { title: "Servo & Encoder Cables", desc: "Power and feedback cables for servo drives. Shielded constructions with connectors selected for fretting resistance at the motor termination." },
  { title: "Collaborative Robots", desc: "Lightweight, flexible harnesses for cobot joints and tool changers. Space-constrained routing and low-outgassing materials available." },
  { title: "Semiconductor Equipment", desc: "High-cycle flex harnesses for wafer handling, probing, and pick-and-place equipment in cleanroom environments." },
  { title: "Medical Robotics", desc: "Sterilizable and autoclave-resistant flex harnesses for surgical robots and diagnostic automation." },
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
            High-Flex Robotic Harnesses
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">High-cycle flex harnesses rated for 10M+ bend cycles. Built for drag chains, robotic arms, and gantry systems. Custom routing and connector selection.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Wire Harness</div>
              <h1 className="pp-hero__h">
                High-Flex.
                <span className="muted">High-Cycle.</span>
              </h1>
              <p className="pp-hero__desc">Wire harnesses engineered for continuous-flex applications: drag chains, robotic arm cables, servo umbilicals, and gantry feeders. Material selection and construction optimized for mechanical longevity.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/robot-arm-cable-routed.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">10M+</div><div className="pp-hero__stat-lbl">Bend Cycles</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">360°</div><div className="pp-hero__stat-lbl">Flex Routing</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Elec. Tested</div></div>
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
              <div className="pp-meaning__label">What Makes a Harness High-Flex</div>
              <h2 className="pp-meaning__h">Construction Determines Cycle Life. Material Selection Is the Work.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">A standard wire harness will fail in a high-cycle flex application within months. Conductor fatigue, insulation cracking, and connector fretting are the failure modes. We prevent them by selecting fine-stranded or rope-lay conductors, high-flex insulation materials (TPE, PUR, silicone), and connectors with proven fretting resistance. The result is a harness rated for the mechanical envelope of your machine, not a generic standard.</p>
                <p className="pp-meaning__text">We build high-flex harnesses for drag-chain systems, robotic arm umbilicals, servo cable assemblies, and gantry feeder cables. If your application requires EMI shielding on top of high-flex construction — as is common in servo and encoder applications — we build the shielded construction into the same assembly program.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/robot-arm-cable-routed.webp" alt="Cable harness routed through robot arm" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/drag-chain-cable-bundle.webp" alt="Cable bundle in drag chain" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/fine-stranded-conductor-macro.webp" alt="Fine-stranded conductor macro" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">High-Flex Robotic Harnesses Envelope.</h2>
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
            <FAQAccordion label="High-Flex Robotic Harnesses FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Custom Wire Harness</div>
                    <div className="pp-related-grid__desc">Standard wire harnesses for non-flex applications.</div>
                    <Link href="/products/custom-wire-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Multi-Branch Wire Harnesses</div>
                    <div className="pp-related-grid__desc">Complex branch topology harnesses for distribution networks.</div>
                    <Link href="/products/multi-branch-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Shielded / Hermetic</div>
                    <div className="pp-related-grid__desc">Shielded cable assemblies for EMI-sensitive robotic applications.</div>
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
