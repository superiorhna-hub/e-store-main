import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Multi-Branch Wire Harnesses | Superior Harness & Assembly",
  description: "Custom multi-branch wire harnesses with Y-splits, star topologies, and 100+ circuit trees. IPC/WHMA-A-620 production. Build-to-print.",
}

const CAPS = [
  { title: "Custom Routing Boards", desc: "Every multi-branch harness is assembled on a dedicated routing board pinned to your exact branch geometry, connector positions, and bend radii." },
  { title: "Multi-Trunk Topology", desc: "Y-splits, star junctions, ring circuits, and 100+ circuit trees are all within standard scope. Complex geometry is documented and repeatable." },
  { title: "Mixed-Gauge Trunks", desc: "Trunk conductors and branch conductors can differ in gauge, insulation type, and color. Material control is tracked per the wire list throughout production." },
  { title: "Loom & Braid Breakout", desc: "Main trunk and individual branches are sleeved independently per your print. Breakout points are taped, heat-shrunken, or molded to spec." },
  { title: "100% Electrical Test", desc: "Every assembly tested on a dedicated fixture. All continuity, resistance, and hi-pot parameters confirmed before shipment. No sampling." },
  { title: "FAI & Documentation", desc: "First article inspection report available on all programs. Traveler, COC, and lot traceability on every order." },
]

const SPECS = [
  { k: "Wire Gauge Range", v: "28 AWG to 2/0 AWG" },
  { k: "Branch Count", v: "2 to 50+ branches per assembly" },
  { k: "Circuit Count", v: "Up to 200+ circuits per harness tree" },
  { k: "Standards", v: "IPC/WHMA-A-620 Class 2 & 3" },
  { k: "Connector Types", v: "Molex, TE Connectivity, Deutsch, Amphenol, JST, custom" },
  { k: "Breakout Protection", v: "Tape, heat-shrink, nylon braid, PET expandable, overmold" },
  { k: "Lead Time", v: "Prototype: 5–10 days · Production: 7–18 business days" },
  { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Drawing Review", desc: "We review your schematic or routing diagram for buildability. DFM comments issued within 24 hours on complex geometries." },
  { n: "02", title: "Board Build", desc: "Custom routing board pinned to your branch lengths, connector locations, and bend radii. Board approved before first unit." },
  { n: "03", title: "Trunk Assembly", desc: "Main trunk conductors cut, stripped, and assembled first. Branch breakout points established per drawing." },
  { n: "04", title: "Branch Routing", desc: "Each branch routed to length, terminated, and sleeved independently before integration into the trunk." },
  { n: "05", title: "Electrical Test", desc: "Dedicated test fixture confirms continuity at every terminal across all branches. Hi-pot available for safety-critical circuits." },
  { n: "06", title: "Inspect & Ship", desc: "Visual inspection per IPC/WHMA-A-620. Labeled, packed, and shipped with COC." },
]

const USECASES = [
  { title: "Automotive Body Control", desc: "Multi-branch harnesses for lighting, door modules, and body control units. Complex topologies with 20+ branches are standard scope." },
  { title: "Industrial Machinery", desc: "Control panel trunk harnesses feeding multiple I/O modules, sensors, and actuators across a machine." },
  { title: "Agricultural Equipment", desc: "Heavy-duty multi-branch harnesses routed through chassis with sealed connectors at each branch terminus." },
  { title: "Robotics Systems", desc: "Multi-circuit trunk harnesses distributing power and signal to multiple axes, sensors, and end-effectors." },
  { title: "Medical Imaging", desc: "Multi-branch cable trees connecting imaging sensors, motors, and control boards with full traceability." },
  { title: "Defense Platforms", desc: "IPC/WHMA-A-620 Class 3 multi-branch assemblies for vetronics and ground vehicle applications." },
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
            Multi-Branch Wire Harnesses
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Complex multi-branch harnesses with any topology — Y-split, star, ring, or hybrid. Routed on custom boards to your drawing. 100% electrically tested.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Wire Harness</div>
              <h1 className="pp-hero__h">
                Multi-Branch.
                <span className="muted">Any Topology.</span>
              </h1>
              <p className="pp-hero__desc">We build multi-branch wire harnesses from simple Y-splits to 100+ circuit star assemblies. Custom routing boards, full IPC/WHMA-A-620 compliance, and 100% electrical test on every unit.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/multi-branch-harness-flat.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">2+</div><div className="pp-hero__stat-lbl">Branches Min</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100+</div><div className="pp-hero__stat-lbl">Circuit Trees</div></div>
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
              <div className="pp-meaning__label">What Multi-Branch Means Here</div>
              <h2 className="pp-meaning__h">Topology Is the Hard Part. We Handle It.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">A multi-branch harness is defined by its geometry: wires leave a common trunk and terminate at two or more distinct endpoints. Every split, every branch length, and every connector location is governed by your drawing — not a default assumption. We build on custom routing boards pinned to your exact branch lengths and tolerances, so the harness installs correctly on the first attempt.</p>
                <p className="pp-meaning__text">Complex topologies with star junctions, ring circuits, and mixed-gauge trunks are standard for us. If your application requires any combination of waterproofing, high voltage, or overmolded strain relief on top of a multi-branch harness, we build that stack as a single assembly program.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/multi-branch-harness-flat.webp" alt="Multi-branch wire harness flat layout" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/harness-routing-board-nails.webp" alt="Harness routing board with nails" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/multi-branch-junction-closeup.webp" alt="Multi-branch junction closeup" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Multi-Branch Wire Harnesses Envelope.</h2>
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
            <FAQAccordion label="Multi-Branch Wire Harnesses FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Custom Wire Harness</div>
                    <div className="pp-related-grid__desc">Single-trunk build-to-print harnesses from 28 AWG through 2/0 AWG.</div>
                    <Link href="/products/custom-wire-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">High-Flex Robotic Harnesses</div>
                    <div className="pp-related-grid__desc">Continuous-flex rated harnesses designed for drag-chain and robotic arm routing.</div>
                    <Link href="/products/high-flex-robotic-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Waterproof Harness</div>
                    <div className="pp-related-grid__desc">Add IP67/IP68 sealed connectors and wire seals to any multi-branch design.</div>
                    <Link href="/products/waterproof-harness" className="pp-related-grid__link">Read More →</Link>
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
