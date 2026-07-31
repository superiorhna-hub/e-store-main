import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "EV & Renewable Energy Solutions | Superior Harness & Assembly",
  description: "Wire harnesses and cable assemblies for EV, solar, wind, and energy storage systems. High-voltage, orange jacket, XLPE, and IEC 62619 compliant constructions.",
}

const CAPS = [
  { title: "XLPE HV Insulation", desc: "XLPE and cross-linked silicone insulated conductors rated for 600V to 1000V DC service at 90°C to 150°C continuous." },
  { title: "Orange HV Jacket", desc: "Orange outer jacket per IEC 62196 and SAE J1673 conventions. Orange conduit and orange shrink tubing for HV identification." },
  { title: "HV Connector Integration", desc: "Amphenol, TE Connectivity, MULTILOCK, and Molex HV connector families. HVIL (High Voltage Interlock Loop) circuits wired per specification." },
  { title: "100% Hipot Testing", desc: "Every HV assembly hipot-tested at 1.5× rated voltage minimum. Test voltage, duration, and leakage current documented per unit." },
  { title: "Battery Interconnects", desc: "Cell-to-cell and module-to-module interconnect cables for EV battery packs and stationary storage. Nickel-plated copper lugs, torqued terminations." },
  { title: "Solar & Wind Harnesses", desc: "PV wire harnesses for string combiners and inverter connections. Wind turbine control harnesses in polyurethane jacketed constructions." },
]

const SPECS = [
  { k: "Voltage Rating", v: "Up to 1000V DC (600V AC)" },
  { k: "Wire Gauge Range", v: "10 AWG to 350 kcmil" },
  { k: "Insulation", v: "XLPE, XLPO, silicone (EV-rated grades)" },
  { k: "Outer Jacket", v: "Orange XLPE, PUR, TPE; black for low-voltage return conductors" },
  { k: "Standards", v: "SAE J1673, IEC 62196, UL 2202, ISO 6722-1" },
  { k: "Hipot Test", v: "100% at 1.5× rated voltage, pass/fail per unit documented" },
  { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 business days" },
  { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "HV Design Review", desc: "Voltage rating, current capacity, routing environment, and connector spec reviewed. HVIL circuit confirmed where required." },
  { n: "02", title: "Material Verification", desc: "XLPE wire and HV connectors verified against approved vendor list. No non-HV-rated material substitutions." },
  { n: "03", title: "Fabrication", desc: "HV conductors cut, stripped, and terminated. Orange jacket applied and sleeved per drawing." },
  { n: "04", title: "Connector Assembly", desc: "HV connectors assembled with per-manufacturer torque and insertion specification. HVIL contacts wired last." },
  { n: "05", title: "Hipot Test", desc: "Every assembly hipot-tested at 1.5× rated voltage. Pass/fail and leakage current recorded per unit on test report." },
  { n: "06", title: "Label & Ship", desc: "HV warning labels applied per drawing. Test report, COC, and packing list included." },
]

const USECASES = [
  { title: "Electric Vehicle Battery Packs", desc: "Cell-to-cell and module-to-module interconnect cables, BMS wiring harnesses, and pack-to-chassis HV cables." },
  { title: "EV Charging Systems", desc: "Charging station cable assemblies, EVSE wiring, and on-board charger input/output harnesses." },
  { title: "Solar Inverter Systems", desc: "PV string harnesses, combiner box assemblies, and DC/AC inverter connection cables. UL 4703 PV wire constructions." },
  { title: "Battery Energy Storage", desc: "HV wiring harnesses for stationary lithium-ion and flow battery energy storage systems." },
  { title: "Wind Turbines", desc: "Control and power harnesses for nacelle wiring, pitch control systems, and tower cable assemblies." },
  { title: "Industrial EV", desc: "HV harnesses for forklifts, automated guided vehicles, and heavy-duty electric vehicles." },
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
            EV & Renewable Energy Solutions
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">High-voltage wire harnesses and cable assemblies for EV, solar, wind, and battery storage. Orange jacket, XLPE insulation, HV connectors, and 100% hipot tested.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Advanced Solutions</div>
              <h1 className="pp-hero__h">
                EV & Renewable.
                <span className="muted">High Voltage.</span>
              </h1>
              <p className="pp-hero__desc">Wire harnesses and cable assemblies for electric vehicles, solar inverters, battery storage systems, and wind turbines. High-voltage rated, hipot tested, and built to your specification.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/ev-hv-orange-cable-assembly.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Up to 1000V</div><div className="pp-hero__stat-lbl">DC Rating</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Hipot Tested</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Orange XLPE</div><div className="pp-hero__stat-lbl">HV Standard</div></div>
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
              <div className="pp-meaning__label">What EV and Renewable Wiring Requires</div>
              <h2 className="pp-meaning__h">High Voltage Demands a Different Set of Rules.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">High-voltage wiring for EV and renewable energy systems is not a gauge-up of standard harness work. It requires XLPE insulation rated for DC voltage and elevated temperature, orange jacket to IEC 62196 and SAE J1673 orange HV cable convention, HV-rated connectors with interlock circuits, and 100% hipot testing at 1.5× rated voltage before shipment. Every one of these requirements has a safety rationale that cannot be relaxed.</p>
                <p className="pp-meaning__text">We build high-voltage harnesses for EV battery interconnects, traction motor cables, charging system wiring, solar combiner box assemblies, battery management system wiring, and wind turbine control harnesses. All HV assemblies include hipot test documentation. HV interlock loop integration is available.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/ev-hv-orange-cable-assembly.webp" alt="EV high-voltage orange cable assembly" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/solar-pv-harness-combiner.webp" alt="Solar PV string harness combiner" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/battery-pack-interconnect.webp" alt="EV battery pack interconnect cables" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">EV & Renewable Energy Solutions Envelope.</h2>
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
            <FAQAccordion label="EV & Renewable Energy Solutions FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">High Voltage Harness</div>
                    <div className="pp-related-grid__desc">Standard HV wire harnesses for industrial and EV applications.</div>
                    <Link href="/products/high-voltage-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Power & Battery Cables</div>
                    <div className="pp-related-grid__desc">Power cables and battery interconnects for high-current applications.</div>
                    <Link href="/products/power-battery" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Custom Wire Harness</div>
                    <div className="pp-related-grid__desc">Build-to-print harnesses for any voltage and application.</div>
                    <Link href="/products/custom-wire-harness" className="pp-related-grid__link">Read More →</Link>
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
