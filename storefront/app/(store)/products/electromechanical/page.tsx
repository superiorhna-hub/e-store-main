import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Electromechanical Assemblies | Superior Harness & Assembly",
  description: "Electromechanical assembly services: wire harnesses, PCBs, motors, sensors, and mechanical hardware integrated into finished sub-assemblies and full products.",
}

const CAPS = [
  { title: "Wire Harness Integration", desc: "Build-to-print wire harnesses fabricated in-house and integrated directly into the electromechanical assembly." },
  { title: "PCB Assembly", desc: "SMT and through-hole PCB assembly integrated with harness and mechanical components in a single program." },
  { title: "Mechanical Sub-Assembly", desc: "Bracket, enclosure, and hardware sub-assembly. Sheet metal, machined, and molded components from your supply base integrated." },
  { title: "Motor & Actuator Integration", desc: "DC motors, stepper motors, solenoids, and linear actuators wired and integrated per drawing." },
  { title: "Sensor & Transducer Integration", desc: "Pressure, temperature, proximity, and motion sensors wired, calibrated, and integrated per application specification." },
  { title: "Functional System Test", desc: "Completed assembly tested for electrical function, mechanical operation, and environmental performance per your test specification." },
]

const SPECS = [
  { k: "Assembly Types", v: "Box-build, sub-assembly, cable-PCB integration, chassis wiring" },
  { k: "Harness Integration", v: "Up to 200+ circuit wire harnesses in-house" },
  { k: "PCB Integration", v: "SMT, through-hole, IPC-A-610 Class 2 & 3" },
  { k: "Mechanical Integration", v: "Customer-supplied or third-party sourced mechanical components" },
  { k: "Test Capability", v: "Electrical functional, hipot, environmental (per customer spec)" },
  { k: "Standards", v: "IPC-A-610, IPC/WHMA-A-620, UL 508A awareness" },
  { k: "Lead Time", v: "Prototype: 10–15 days · Production: 15–30 business days" },
  { k: "MOQ", v: "1 unit (NPI) · Production pricing at volume" },
]

const PROCESS = [
  { n: "01", title: "BOM & Drawing Review", desc: "Complete BOM, assembly drawings, and test specification reviewed. DFM and DFA comments issued within 48 hours." },
  { n: "02", title: "Material Kitting", desc: "All electrical, mechanical, and hardware components kitted per BOM. No substitutions without approval." },
  { n: "03", title: "Sub-Assembly Build", desc: "Wire harness, PCB, and mechanical sub-assemblies built to their individual drawings before integration." },
  { n: "04", title: "Integration Assembly", desc: "All sub-assemblies integrated into final assembly per assembly drawing and sequence." },
  { n: "05", title: "Functional Test", desc: "Completed assembly tested per functional test specification. Electrical, mechanical, and environmental parameters recorded." },
  { n: "06", title: "Label & Ship", desc: "Assembly labeled per your requirements. COC, test report, and packing list included." },
]

const USECASES = [
  { title: "Industrial Equipment OEMs", desc: "Complete electromechanical sub-assemblies for machine tool, packaging, and material handling equipment." },
  { title: "Medical Devices", desc: "Cable-PCB-sensor integration for diagnostic and therapeutic medical devices. Full lot traceability and Class 3 capability." },
  { title: "Defense Systems", desc: "Box-build assemblies for ground vehicle, shipboard, and portable defense systems." },
  { title: "Robotics & Automation", desc: "Electromechanical assemblies for robot joints, servo axes, and end-of-arm tooling." },
  { title: "Energy Systems", desc: "Battery management sub-assemblies, inverter wiring modules, and sensor integration for energy storage systems." },
  { title: "Test & Measurement", desc: "Complete test fixture and measurement system assemblies integrating sensing hardware and signal conditioning electronics." },
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
            Electromechanical Assemblies
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Complete electromechanical assemblies combining wire harnesses, PCBs, motors, sensors, and mechanical hardware. Box-build, sub-assembly, and finished product integration.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Advanced Solutions</div>
              <h1 className="pp-hero__h">
                Electromechanical.
                <span className="muted">Box Build.</span>
              </h1>
              <p className="pp-hero__desc">We build electromechanical assemblies that combine wire harnesses, PCBs, actuators, sensors, and mechanical hardware into finished sub-assemblies and box-build products.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/box-build-open-enclosure.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Box Build</div><div className="pp-hero__stat-lbl">Capability</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">PCB + Harness</div><div className="pp-hero__stat-lbl">Integrated</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Functionally Tested</div></div>
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
              <div className="pp-meaning__label">What Electromechanical Assembly Means</div>
              <h2 className="pp-meaning__h">One Supplier From Wire Gauge to Finished Product.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">An electromechanical assembly is any product that combines electrical and mechanical components — typically a wire harness or cable, a PCB or sensor, and a mechanical enclosure or structure — into a finished assembly that can be installed or deployed directly. Sourcing these from separate suppliers creates coordination overhead, mismatched interfaces, and accountability gaps. We integrate them into a single program.</p>
                <p className="pp-meaning__text">Our electromechanical assembly capability covers wire harness fabrication, PCB assembly, mechanical sub-assembly, and final integration. We build to your drawings, BOMs, and assembly instructions. Functional testing at the completed assembly level verifies electrical and mechanical performance before shipment.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/box-build-open-enclosure.webp" alt="Open box-build electromechanical enclosure" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/sub-assembly-wiring.webp" alt="Electromechanical sub-assembly wiring" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/functional-test-assembly.webp" alt="Functional test of electromechanical assembly" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Electromechanical Assemblies Envelope.</h2>
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
            <FAQAccordion label="Electromechanical Assemblies FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">PCB Assemblies</div>
                    <div className="pp-related-grid__desc">PCB assembly services for integration into electromechanical products.</div>
                    <Link href="/products/pcb-assemblies" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Custom Wire Harness</div>
                    <div className="pp-related-grid__desc">Build-to-print wire harnesses for any electromechanical product.</div>
                    <Link href="/products/custom-wire-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Robotics & Automation Solutions</div>
                    <div className="pp-related-grid__desc">Specialized wiring and cable solutions for robotic systems.</div>
                    <Link href="/products/robotics-automation" className="pp-related-grid__link">Read More →</Link>
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
