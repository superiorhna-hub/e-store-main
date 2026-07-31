import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Medical Coiled Cable Assembly | Superior Harness & Assembly",
  description: "Biocompatible medical coiled cable assemblies for diagnostic devices, patient monitoring, and handheld medical tools. UL/RoHS compliant PUR construction.",
}

const CAPS = [
  { title: "Biocompatible PUR Jacket", desc: "Jacket materials selected for biocompatibility and resistance to IPA, bleach solutions, and quaternary ammonium disinfectants used in clinical settings." },
  { title: "IEC 60601 Strain Relief", desc: "Overmolded strain relief boots designed and tested to IEC 60601-1 requirements for cable pull-out force and bend strain." },
  { title: "Shielded Signal Conductors", desc: "Individual conductor shielding and overall braided shield for EMI sensitive patient monitoring leads and diagnostic signal cables." },
  { title: "Custom Coil Geometry", desc: "Coil OD, retracted length, extended length, and lead lengths to your drawing. Geometry stable through service life." },
  { title: "RoHS & REACH Documentation", desc: "Full material compliance documentation for regulatory submissions. UL-listed wire available on request." },
  { title: "Disinfectant Test Data", desc: "Standard constructions tested against common hospital disinfectants for jacket integrity and markings retention." },
]

const SPECS = [
  { k: "Jacket Material", v: "Biocompatible PUR, TPE grades" },
  { k: "Conductor Count", v: "2 to 15 conductors" },
  { k: "Wire Gauge", v: "30 AWG to 22 AWG" },
  { k: "Retracted Length", v: "0.15 m to 1.0 m" },
  { k: "Extended Length", v: "0.5 m to 3.5 m" },
  { k: "Coil OD", v: "20 mm to 55 mm" },
  { k: "Compliance", v: "RoHS, REACH; UL-listed wire available" },
  { k: "Lead Time", v: "Prototype: 7–12 days · Production: 14–21 days" },
]

const PROCESS = [
  { n: "01", title: "Clinical Requirements Review", desc: "Cleaning protocol, flex cycle, connector type, and regulatory requirements reviewed before design begins." },
  { n: "02", title: "Biocompatible Material Selection", desc: "Jacket material selected for disinfectant resistance and biocompatibility profile. Conductor gauge for signal or power requirement." },
  { n: "03", title: "Connector Termination", desc: "Medical connectors (Lemo, ODU, or custom) terminated and overmolded with IEC 60601 compliant strain relief." },
  { n: "04", title: "Heat-Set Coil Forming", desc: "Cable coiled on mandrel and heat-set. Coil OD and retraction ratio verified to drawing." },
  { n: "05", title: "Electrical & Pull-Out Test", desc: "Continuity, isolation, and strain relief pull-out force tested per IEC 60601-1. Results recorded on COC." },
  { n: "06", title: "Compliance Documentation & Ship", desc: "Certificate of conformance, material compliance declaration, and test records shipped with each order." },
]

const USECASES = [
  { title: "Diagnostic Probes", desc: "Coiled cables for ultrasound transducers, ECG leads, and handheld diagnostic devices." },
  { title: "Patient Monitoring", desc: "Coiled patient lead cables for bedside monitors, portable monitoring units, and telemetry devices." },
  { title: "Handheld Surgical Tools", desc: "Coiled cable assemblies for powered surgical handpieces and electrosurgical unit connections." },
  { title: "Endoscopy", desc: "Compact coiled cables for endoscopy light source connections and accessory port cables." },
  { title: "Laboratory Equipment", desc: "Coiled cables for bench-top analyzers, pipettes, and laboratory automation equipment." },
  { title: "Point-of-Care Devices", desc: "Coiled assemblies for portable POC diagnostic devices and handheld clinical analyzers." },
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
            Medical Coiled Cable Assembly
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Medical-grade coiled cable assemblies for diagnostic devices, patient monitoring equipment, and handheld clinical tools. Biocompatible PUR jackets, disinfectant-resistant, and built to IEC 60601 strain relief requirements.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Coil / Spiral Cable</div>
              <h1 className="pp-hero__h">
                Clean.
                <span className="muted">Biocompatible.</span>
                <span className="muted">Retractable..</span>
              </h1>
              <p className="pp-hero__desc">Medical-grade coiled cable assemblies for diagnostic devices, patient monitoring equipment, and handheld clinical tools. Biocompatible PUR jackets, disinfectant-resistant, and built to IEC 60601 strain relief requirements.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet &rarr;</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/medical-coil-cable-white.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Biocompatible</div><div className="pp-hero__stat-lbl">PUR Jacket</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IEC 60601</div><div className="pp-hero__stat-lbl">Strain Relief</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Disinfectant</div><div className="pp-hero__stat-lbl">Resistant</div></div>
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
              <div className="pp-meaning__label">Medical-Grade Coil Cable Construction</div>
              <h2 className="pp-meaning__h">Coiled Cables Built to Clinical Standards.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Medical coiled cables must survive repeated cleaning with hospital disinfectants, maintain coil memory through thousands of daily use cycles, and meet IEC 60601 requirements for strain relief and electrical safety. PUR jacket materials with biocompatible formulations provide the chemical resistance and flex memory required without shedding particles or degrading under standard cleaning protocols.</p>
                <p className="pp-meaning__text">We build medical coiled cables for diagnostic probes, patient monitoring leads, handheld scanners, and clinical device connections. Custom coil OD, retracted length, and connector types. Shielded constructions for signal integrity. RoHS and REACH compliance documentation available.</p>
              </div>

              <div className="pp-ov-gallery">
                <img src="/images/medical-coil-cable-white.webp" alt="Medical coiled cable assembly" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/iec-60601-strain-relief.webp" alt="IEC 60601 overmolded strain relief boot" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/medical-coil-cable-probe.webp" alt="Medical coil cable connected to probe" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Medical Coiled Cable Assembly Envelope.</h2>
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
            <FAQAccordion label="Medical Coiled Cable Assembly FAQ" heading="Questions Engineers Ask." items={FAQS} />
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
