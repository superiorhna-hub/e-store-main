import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "PCB Assemblies | Superior Harness & Assembly",
  description: "PCB assembly services: SMT, through-hole, mixed technology, and cable-to-PCB assemblies. IPC-A-610 Class 2 and Class 3. Prototype and production.",
}

const CAPS = [
  { title: "SMT Assembly", desc: "0402 and larger component placement. Lead and lead-free solder paste. Nitrogen reflow available for oxidation-sensitive assemblies." },
  { title: "Through-Hole Assembly", desc: "Manual and selective soldering for through-hole components. Wave solder available for high-volume mixed-technology boards." },
  { title: "AOI Inspection", desc: "Automated optical inspection on all production assemblies. 100% coverage of placed components and solder joints." },
  { title: "X-Ray Inspection", desc: "X-ray inspection for BGA, QFN, and hidden-joint verification. Available on all programs." },
  { title: "Functional Test", desc: "In-circuit test and functional test fixture development available for defined-spec boards. JTAG boundary scan on request." },
  { title: "Cable-to-PCB Integration", desc: "PCB assembly and cable harness built and integrated in the same program. Connector, IDC, or solder termination to board." },
]

const SPECS = [
  { k: "Board Size", v: "25 mm × 25 mm to 450 mm × 600 mm" },
  { k: "Layers", v: "1 to 16 layers" },
  { k: "Smallest Component", v: "0402 (SMT) · 0.5 mm pin pitch (THT)" },
  { k: "Solder", v: "SAC305 lead-free · Sn63/Pb37 leaded (on request)" },
  { k: "IPC Standard", v: "IPC-A-610 Class 2 (default) · Class 3 on request" },
  { k: "Inspection", v: "AOI on all boards · X-ray on all BGAs and QFNs" },
  { k: "Prototype Lead Time", v: "5–10 business days" },
  { k: "MOQ", v: "1 board (NPI) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Gerber & BOM Review", desc: "Gerber files, BOM, and assembly drawing reviewed. DFM comments issued within 24 hours." },
  { n: "02", title: "Material Kitting", desc: "Components sourced per BOM. All parts verified against AVL before kitting. No unauthorized substitutions." },
  { n: "03", title: "Paste & Place", desc: "Solder paste screen-printed, components placed per pick-and-place program. Placement verified before reflow." },
  { n: "04", title: "Reflow / Solder", desc: "Reflow profile optimized per board thermal mass. Through-hole soldered after reflow on mixed-technology boards." },
  { n: "05", title: "Inspect", desc: "AOI on 100% of assemblies. X-ray on BGA and QFN. Visual IPC-A-610 inspection." },
  { n: "06", title: "Functional Test & Ship", desc: "Functional test per customer spec. COC, test report, and inspection report included." },
]

const USECASES = [
  { title: "Electromechanical Assemblies", desc: "PCB assemblies integrated with wire harnesses and mechanical housings for finished electromechanical products." },
  { title: "Industrial Controllers", desc: "Control boards for automation equipment, motor drives, and process control systems." },
  { title: "Medical Devices", desc: "IPC Class 3 PCB assemblies for life-critical medical devices with full lot traceability." },
  { title: "Aerospace & Defense", desc: "Class 3 PCB assemblies for avionics, vetronics, and defense systems. ITAR compliance available." },
  { title: "Sensor Modules", desc: "Small-form-factor sensor boards assembled and integrated into cable harness programs." },
  { title: "Prototype Programs", desc: "1–50 piece prototype PCB assemblies with rapid turnaround for NPI validation programs." },
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
            PCB Assemblies
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">PCB assembly — SMT, through-hole, and mixed technology. IPC-A-610 Class 2 and Class 3. Prototype through production. Cable-to-PCB integration available.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Advanced Solutions</div>
              <h1 className="pp-hero__h">
                PCB Assembly.
                <span className="muted">IPC Class 3.</span>
              </h1>
              <p className="pp-hero__desc">Printed circuit board assembly services for prototype and production programs. SMT, through-hole, and mixed technology. Full cable-to-PCB integration for electromechanical assemblies.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/pcb-smt-assembly-closeup.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IPC-A-610</div><div className="pp-hero__stat-lbl">Class 2 & 3</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">SMT + THT</div><div className="pp-hero__stat-lbl">Mixed Tech</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">AOI + X-Ray</div><div className="pp-hero__stat-lbl">Inspection</div></div>
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
              <div className="pp-meaning__label">What PCB Assembly Means Here</div>
              <h2 className="pp-meaning__h">Board-Level Assembly Integrated Into the Harness Program.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">We produce PCB assemblies as standalone builds and as components integrated into larger cable and harness programs. When a customer needs a harness that terminates to a PCB — a sensor interface board, a power distribution board, or a signal conditioning board — we build the PCB assembly and the harness as a single integrated program. This eliminates the coordination overhead of managing separate PCB and harness suppliers.</p>
                <p className="pp-meaning__text">Our PCB assembly capability covers SMT (0402 and larger), through-hole, and mixed-technology boards. IPC-A-610 Class 2 is the production default; Class 3 is available for aerospace, defense, and medical programs. AOI and X-ray inspection are in-house. Functional test fixtures available for boards with defined test points.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/pcb-smt-assembly-closeup.webp" alt="SMT PCB assembly closeup" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/aoi-inspection-pcb.webp" alt="AOI inspection of PCB" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/pcb-cable-integrated.webp" alt="PCB with integrated cable harness" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">PCB Assemblies Envelope.</h2>
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
            <FAQAccordion label="PCB Assemblies FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Electromechanical Assemblies</div>
                    <div className="pp-related-grid__desc">Complete electromechanical assemblies integrating PCBs, harnesses, and hardware.</div>
                    <Link href="/products/electromechanical" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Cable Assembly Overview</div>
                    <div className="pp-related-grid__desc">Cable assemblies to integrate with your PCB.</div>
                    <Link href="/products/cable-assembly" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Prototype Engineering Services</div>
                    <div className="pp-related-grid__desc">NPI and prototype programs with fast-turn PCB and harness builds.</div>
                    <Link href="/products/prototype-npi" className="pp-related-grid__link">Read More →</Link>
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
