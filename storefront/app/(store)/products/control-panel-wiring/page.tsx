import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Control Panel Wiring Assemblies | Superior Harness & Assembly",
  description: "Custom control panel wiring assemblies and machine wiring harnesses. Built to your panel layout, ladder diagram, or schematic. IPC/WHMA-A-620 production.",
}

const CAPS = [
  { title: "Ferrule & Ring Termination", desc: "End-sleeve ferrules, ring terminals, fork terminals, and blade terminals crimped to your torque and pull-force specification." },
  { title: "Wire Labeling", desc: "Heat-shrink printed labels, pre-printed sleeves, or wire markers applied per your numbering scheme — NEMA, IEC, or custom." },
  { title: "DIN Rail & Terminal Block Termination", desc: "Wires terminated directly to DIN rail terminal blocks per your panel layout. Block type and pitch matched to your BOM." },
  { title: "Conduit & Duct Routing", desc: "Wire bundles dressed through cable duct, conduit, or spiral wrap per panel layout. Tie-wrap and strain-relief positions per drawing." },
  { title: "Inter-Panel Cable Assemblies", desc: "Multi-conductor cables and harnesses connecting separate panels or control enclosures. Connectors, glands, and conduit as specified." },
  { title: "Documentation Package", desc: "Wire list, COC, and point-to-point test report included. As-built drawing available on request." },
]

const SPECS = [
  { k: "Wire Gauge Range", v: "22 AWG to 4/0 AWG" },
  { k: "Insulation", v: "THHN, MTW, SIS, XLPE, PVC" },
  { k: "Standards", v: "IPC/WHMA-A-620, NFPA 79, UL 508A awareness" },
  { k: "Termination Types", v: "Ferrule, ring, fork, blade, direct terminal block" },
  { k: "Labeling", v: "Heat-shrink printed, pre-printed sleeve, wrap-around marker" },
  { k: "Connector Options", v: "Amp CPC, Deutsch, Molex, custom gland/conduit fitting" },
  { k: "Lead Time", v: "Prototype: 5–10 days · Production: 7–21 business days" },
  { k: "MOQ", v: "1 panel set · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Drawing Intake", desc: "Panel layout, ladder diagram, and wire list received. DFM review confirms gauge sizing, ferrule selection, and label format." },
  { n: "02", title: "Material Kitting", desc: "Wire, ferrules, terminals, labels, duct, and connectors kitted per BOM. No substitutions without written approval." },
  { n: "03", title: "Cut & Label", desc: "Wires cut to length and labeled per your scheme before assembly. Print verification step confirms every label against wire list." },
  { n: "04", title: "Terminate & Dress", desc: "Ferrules and terminals crimped, wires routed through duct and conduit, dressed and tied per panel layout drawing." },
  { n: "05", title: "Point-to-Point Test", desc: "Every wire continuity verified against the wire list. Resistance and isolation spot-checked per your spec." },
  { n: "06", title: "Pack & Ship", desc: "Assemblies packed flat or on a carrier to prevent label damage. Wire list and COC included in shipment." },
]

const USECASES = [
  { title: "Machine Tool Controls", desc: "Control panel wiring for CNC machines, presses, and assembly equipment. Built to NFPA 79 and UL 508A panel standards." },
  { title: "Process Automation", desc: "PLC and DCS panel wiring for process control applications. Termination to terminal blocks, I/O modules, and field devices." },
  { title: "Motor Control Centers", desc: "MCC wiring assemblies for motor starter and VFD panels. Heavy gauge power wiring with labeled and tested inter-panel cables." },
  { title: "OEM Equipment", desc: "Repeatable panel wiring kits for OEM machine builders. Same labeled assembly every unit — eliminates per-panel field wiring variability." },
  { title: "Field Retrofit", desc: "Replacement wiring assemblies for panel retrofits. Matched to original wire list with updated labels and modern ferrule termination." },
  { title: "Custom Enclosures", desc: "Wiring harnesses for custom enclosure builds including NEMA 4X, IP66, and explosion-proof applications." },
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
            Control Panel Wiring Assemblies
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Control panel wiring harnesses and inter-panel cable assemblies built to your schematic or layout drawing. Labeled, dressed, and ready to install.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Wire Harness</div>
              <h1 className="pp-hero__h">
                Panel-Ready.
                <span className="muted">Install-Ready.</span>
              </h1>
              <p className="pp-hero__desc">We build control panel wiring assemblies — from single wire bundles to full inter-panel harness sets — per your layout drawing or schematic. Every wire labeled, every terminal torqued, ready to bolt in.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/control-panel-wiring-neat.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">1</div><div className="pp-hero__stat-lbl">Unit Min</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Labeled</div></div>
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
              <div className="pp-meaning__label">What Control Panel Wiring Means</div>
              <h2 className="pp-meaning__h">Wired to Your Diagram. Labeled. Ready to Install.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Control panel wiring assemblies are not generic harnesses — they are built to the specific layout, wire gauge, ferrule type, and terminal block assignment shown in your panel drawing or ladder diagram. Every wire is cut to length, ferrule-crimped or ring-terminated, labeled with your wire number scheme, and dressed per your routing specification.</p>
                <p className="pp-meaning__text">We supply finished wiring assemblies for new panel builds, retrofit programs, and panel replication projects. If you need the same panel wired repeatedly — across a machine build program or a field replacement stock program — we produce consistent, labeled assemblies to your standard.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/control-panel-wiring-neat.webp" alt="Neat control panel wiring on DIN rail" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/ferrule-crimping-closeup.webp" alt="Ferrule crimped wire ends" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/wire-labels-numbered.webp" alt="Numbered heat-shrink wire labels" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Control Panel Wiring Assemblies Envelope.</h2>
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
            <FAQAccordion label="Control Panel Wiring Assemblies FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Custom Wire Harness</div>
                    <div className="pp-related-grid__desc">Standard wire harnesses for chassis and equipment wiring.</div>
                    <Link href="/products/custom-wire-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Multi-Branch Wire Harnesses</div>
                    <div className="pp-related-grid__desc">Complex multi-drop harnesses for distribution from a single trunk.</div>
                    <Link href="/products/multi-branch-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Electromechanical Assemblies</div>
                    <div className="pp-related-grid__desc">Complete electromechanical assemblies including wiring, hardware, and housings.</div>
                    <Link href="/products/electromechanical" className="pp-related-grid__link">Read More →</Link>
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
