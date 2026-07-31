import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Circular Connector Cable Assemblies | Superior Harness & Assembly",
  description: "Custom circular connector cable assemblies: M8, M12, MIL-DTL-38999, Amphenol, Lemo, Fischer, and more. Overmolded and standard termination.",
}

const CAPS = [
  { title: "Full Circular Connector Families", desc: "M8, M12, MIL-DTL-38999 Series I–IV, Amphenol PT, Lemo, Fischer, and custom shell sizes. Any pin count and contact arrangement." },
  { title: "Precision Contact Insertion", desc: "Every contact crimped per connector manufacturer specification and inserted into the correct cavity position. Insertion verified with a go/no-go probe." },
  { title: "IP67/IP68 Sealing", desc: "O-ring face seals, wire seals, and back-potting completed per connector IP rating requirement. No seal omissions." },
  { title: "Overmolded Strain Relief", desc: "Single-shot TPE or PUR overmold encapsulating backshell and cable for rugged field applications." },
  { title: "Metal Backshell Termination", desc: "Machined or cast metal backshell assembly with cable clamp, EMI braid termination, and jackscrew or bayonet coupling." },
  { title: "100% Contact Test", desc: "Every assembly tested for continuity at every contact, insertion force, and environmental seal integrity." },
]

const SPECS = [
  { k: "Connector Families", v: "M8, M12, MIL-DTL-38999 (Series I–IV), Amphenol PT, Lemo, Fischer" },
  { k: "Contact Count", v: "2 to 128 contacts per connector" },
  { k: "Contact Types", v: "Crimp, solder, press-fit" },
  { k: "IP Rating", v: "IP67, IP68, IP69K available" },
  { k: "Shell Material", v: "Zinc alloy, stainless steel, aluminium, composite" },
  { k: "Cable Types", v: "Multi-conductor, shielded, high-flex, armored" },
  { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 business days" },
  { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Connector & Contact Spec", desc: "Connector family, pin count, coding, and contact size confirmed. Contact crimp tooling verified before first article." },
  { n: "02", title: "Cable Prep", desc: "Cable stripped to length, conductors dressed, and shield prepared per connector and environmental requirement." },
  { n: "03", title: "Contact Crimp & Insert", desc: "Contacts crimped per manufacturer spec and inserted per cavity assignment. Every cavity position verified with probe." },
  { n: "04", title: "Seal & Backshell", desc: "Wire seals and O-rings installed. Backshell or overmold applied and torqued or cured per spec." },
  { n: "05", title: "Electrical & IP Test", desc: "Continuity at all contacts, resistance, and environmental seal inspection. IP pressure test on sealed assemblies." },
  { n: "06", title: "Label & Ship", desc: "Part number label, lot code, and COC included. Connector mating caps fitted to protect seals in transit." },
]

const USECASES = [
  { title: "Factory Automation", desc: "M8 and M12 sensor cables, actuator cables, and fieldbus assemblies for production line automation equipment." },
  { title: "Aerospace & Defense", desc: "MIL-DTL-38999 assemblies for avionics, vetronics, and ground support equipment. Class 3 IPC/WHMA-A-620 production." },
  { title: "Medical Equipment", desc: "Lemo and Fischer circular assemblies for surgical instruments, imaging systems, and diagnostic devices." },
  { title: "Oil & Gas", desc: "IP68 circular connector assemblies for subsea, downhole, and wellhead instrumentation." },
  { title: "Mobile Equipment", desc: "Heavy-duty circular connectors for off-highway vehicles, construction machinery, and agricultural equipment." },
  { title: "Test & Measurement", desc: "Precision circular connector assemblies for test fixtures, environmental chambers, and measurement instrumentation." },
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
            Circular Connector Cable Assemblies
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">M8, M12, MIL-spec, and custom circular connector cable assemblies. Overmolded or backshell termination. Any pin count, coding, and contact configuration.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Overmolded Cable Assembly</div>
              <h1 className="pp-hero__h">
                Circular.
                <span className="muted">Precision.</span>
              </h1>
              <p className="pp-hero__desc">Circular connector cable assemblies for industrial, defense, and medical applications. M8, M12, MIL-DTL-38999, Lemo, Fischer, Amphenol, and custom circular families. Overmolded or backshell.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/m12-sensor-cable-pair.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">M8 to 127mm</div><div className="pp-hero__stat-lbl">Shell Sizes</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP67/IP68</div><div className="pp-hero__stat-lbl">Rated</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Tested</div></div>
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
              <div className="pp-meaning__label">Why Circular Connectors Demand Precision</div>
              <h2 className="pp-meaning__h">Contact Count and IP Rating Are Set at Assembly Time.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Circular connector assemblies are defined by two parameters that cannot be corrected after assembly: contact arrangement and environmental sealing. Every contact must be correctly crimped and inserted in the precise cavity position — a single transposed contact causes a field failure. Every seal must be properly seated for the IP rating to hold. Our production process treats these as zero-defect requirements with 100% verification.</p>
                <p className="pp-meaning__text">We build assemblies across the full circular connector family: M8 and M12 (A, B, D, X, S coding) for industrial sensors and actuators; MIL-DTL-38999 Series I–IV for aerospace and defense; Lemo and Fischer for medical and instrumentation; Amphenol PT and MS circular for industrial and military. Overmolded strain relief or machined metal backshell per application.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/m12-sensor-cable-pair.webp" alt="M12 circular connector cable pair" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/mil-38999-connector-assembly.webp" alt="MIL-DTL-38999 circular connector" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/circular-connector-pin-insert.webp" alt="Circular connector pin insertion" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Circular Connector Cable Assemblies Envelope.</h2>
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
            <FAQAccordion label="Circular Connector Cable Assemblies FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Overmolded Harness</div>
                    <div className="pp-related-grid__desc">General overmolded wire harnesses for any connector family.</div>
                    <Link href="/products/overmolded-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Waterproof Harness</div>
                    <div className="pp-related-grid__desc">Sealed wire harnesses for outdoor and washdown environments.</div>
                    <Link href="/products/waterproof-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Medical Cable Assemblies</div>
                    <div className="pp-related-grid__desc">Medical-grade cable assemblies with biocompatible materials.</div>
                    <Link href="/products/medical-cable-assemblies" className="pp-related-grid__link">Read More →</Link>
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
