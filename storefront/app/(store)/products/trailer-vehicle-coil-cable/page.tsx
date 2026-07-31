import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Trailer and Vehicle Coil Cable | Superior Harness & Assembly",
  description: "Trailer and vehicle coiled cable assemblies for brake lights, ABS, and auxiliary power connections. SAE and ISO compliant. Weatherproof PUR construction.",
}

const CAPS = [
  { title: "SAE J560 & ISO 11446 Compliant", desc: "Standard 7-way SAE J560 and ISO trailer plug/socket configurations available as fully assembled coiled cables." },
  { title: "UV & Ozone Resistant PUR", desc: "PUR jacket formulation rated for outdoor UV and ozone exposure. Maintains flexibility at -40°C for cold-weather towing." },
  { title: "Weatherproof Connector Ends", desc: "Overmolded or grommet-sealed connector ends with IP67 or IP69K rating for dirt, dust, and pressure washing." },
  { title: "Road Salt Resistance", desc: "Jacket and connector materials selected for resistance to road salts and de-icing chemicals used in northern climates." },
  { title: "ABS & Air Brake Lines", desc: "Coiled ABS sensor cables and air brake signal cables for heavy commercial vehicle and trailer applications." },
  { title: "Custom Auxiliary Power", desc: "Custom coiled power cables for trailer-mounted accessories: refrigeration, liftgates, and auxiliary lighting." },
]

const SPECS = [
  { k: "Jacket Material", v: "UV-resistant PUR, TPE" },
  { k: "Standard Configurations", v: "SAE J560 7-way, ISO 11446, custom" },
  { k: "Wire Gauge", v: "16 AWG to 10 AWG for power; 22 AWG for signal" },
  { k: "Retracted Length", v: "0.3 m to 0.8 m" },
  { k: "Extended Length", v: "1.5 m to 4.5 m" },
  { k: "Temperature Range", v: "-40°C to +90°C" },
  { k: "IP Rating", v: "IP67 standard; IP69K on request" },
  { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 days" },
]

const PROCESS = [
  { n: "01", title: "Configuration Review", desc: "Trailer standard (SAE/ISO), power requirements, and connector pinout reviewed against application." },
  { n: "02", title: "Material & Gauge Selection", desc: "UV PUR jacket grade confirmed. Power conductor gauges verified for current carrying capacity per SAE J1127." },
  { n: "03", title: "Connector Assembly", desc: "SAE, ISO, or custom connectors assembled and overmolded. Weatherproof boot geometry confirmed." },
  { n: "04", title: "Coil Heat-Set", desc: "Cable coiled and heat-set on mandrel. Cold-temperature retraction tested at -40°C on sample units." },
  { n: "05", title: "Weatherproof & Electrical Test", desc: "IP67 immersion test and electrical continuity test on all units. Hi-pot test on power conductors." },
  { n: "06", title: "COC & Ship", desc: "Test records and certificate of conformance included with every shipment." },
]

const USECASES = [
  { title: "Semi-Truck & Trailer", desc: "SAE J560 7-way coiled umbilicals for class 8 tractor-trailer brake light and ABS connections." },
  { title: "Agricultural Towing", desc: "Coiled implement cables for tractors towing hay equipment, grain carts, and tillage implements." },
  { title: "Recreational Towing", desc: "Coiled trailer cables for boat trailers, RV hitches, and horse trailer electrical connections." },
  { title: "Construction Equipment", desc: "Coiled cables for construction site trailers, lowboy haulers, and portable equipment connections." },
  { title: "Utility & Service Vehicles", desc: "Coiled power and signal cables for utility trailers and service body vehicle connections." },
  { title: "Military Vehicles", desc: "MIL-spec coiled trailer cables for military tactical vehicle towing applications." },
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
            Trailer and Vehicle Coil Cable
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Heavy-duty coiled cable assemblies for trailer connections, towing vehicles, and mobile equipment. SAE J560 and ISO 11446 compliant constructions for brake, ABS, and auxiliary power. Built to survive outdoor weathering and road salt exposure.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Coil / Spiral Cable</div>
              <h1 className="pp-hero__h">
                Road-Ready.
                <span className="muted">Weather-Proof.</span>
                <span className="muted">Retractable..</span>
              </h1>
              <p className="pp-hero__desc">Heavy-duty coiled cable assemblies for trailer connections, towing vehicles, and mobile equipment. SAE J560 and ISO 11446 compliant constructions for brake, ABS, and auxiliary power. Built to survive outdoor weathering and road salt exposure.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet &rarr;</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/trailer-7way-coil-cable.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">SAE J560</div><div className="pp-hero__stat-lbl">Compliant</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP67 / IP69K</div><div className="pp-hero__stat-lbl">Weatherproof</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Road Salt</div><div className="pp-hero__stat-lbl">Resistant</div></div>
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
              <div className="pp-meaning__label">Vehicle and Trailer Coil Cable Construction</div>
              <h2 className="pp-meaning__h">Coiled Cables Engineered for Road Conditions.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Trailer and vehicle coiled cables must handle UV exposure, road salt, temperature swings from -40°C to +90°C, and repeated stretching during trailer coupling and uncoupling. PUR jacket construction is standard for this application because of its resistance to ozone, UV, and road chemicals while maintaining coil spring return through thousands of coupling cycles.</p>
                <p className="pp-meaning__text">We build SAE J560 7-way trailer cables, ISO 11446 brake/ABS assemblies, and custom auxiliary coiled power cables to your specification. Plug and socket options in SAE, ISO, and custom configurations. Weatherproof overmolded ends standard.</p>
              </div>

              <div className="pp-ov-gallery">
                <img src="/images/trailer-7way-coil-cable.webp" alt="SAE J560 7-way trailer coiled cable" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/trailer-coil-cable-truck.webp" alt="Coiled trailer cable between truck and trailer" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/trailer-coil-cable-connectors.webp" alt="Weatherproof trailer coil cable connectors" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Trailer and Vehicle Coil Cable Envelope.</h2>
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
            <FAQAccordion label="Trailer and Vehicle Coil Cable FAQ" heading="Questions Engineers Ask." items={FAQS} />
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
