import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Overmolded Coil Cable Solutions | Superior Harness & Assembly",
  description: "Overmolded coiled cable assemblies with integrated strain relief, connector boots, and breakout overmolds. Custom colors and materials.",
}

const CAPS = [
  { title: "Tapered Flex Relief Boots", desc: "Boot geometry tapered from rigid at the connector to flexible at the cable. Taper angle engineered to match cable OD and flex requirement." },
  { title: "Through-Molded IP Sealing", desc: "Overmold material flowed through and around the connector shell to seal the cable entry. IP67 capable without separate grommet seals." },
  { title: "Custom Tooling Ownership", desc: "Tooling built to your part number. Stored and maintained at our facility. Tooling cost amortized into production pricing on request." },
  { title: "Color Branding", desc: "Boot color in any standard or Pantone-matched color. Two-shot overmolding for dual-color boots is available." },
  { title: "Angled & Ergonomic Ends", desc: "Right-angle boots, angled entry connectors, and ergonomic grip shapes for handheld device applications." },
  { title: "Breakout Overmolds", desc: "Y-body and multi-way breakout overmolds for coiled cables splitting into multiple branch connections." },
]

const SPECS = [
  { k: "Overmold Material", v: "TPE (standard), PUR, nylon, polypropylene" },
  { k: "Boot Entry Angle", v: "Straight, 45°, 90° available" },
  { k: "IP Rating", v: "IP67 through-molded standard" },
  { k: "Color Options", v: "Standard colors or Pantone-matched" },
  { k: "Tooling Lead Time", v: "New tool: 2–3 weeks; repeat orders from stock tooling" },
  { k: "Production MOQ", v: "100 units with tooling; lower quantities at prototype rate" },
  { k: "Coil Integration", v: "All coil OD and retracted/extended lengths" },
  { k: "Certification", v: "COC standard; UL or VDE recognized on request" },
]

const PROCESS = [
  { n: "01", title: "Overmold Design Review", desc: "Boot geometry, material, color, and IP requirement defined. Parting line and gate location reviewed with customer." },
  { n: "02", title: "Tool Design & Build", desc: "Aluminum or steel tool designed in CAD and machined. Sample shots and dimensional check before production approval." },
  { n: "03", title: "Cable & Connector Prep", desc: "Coiled cable built and connector terminated before overmolding. Connector held in tool fixture during injection." },
  { n: "04", title: "Injection Overmolding", desc: "TPE or PUR injected over connector and cable entry. Flash removed and boot inspected for voids and completeness." },
  { n: "05", title: "Pull-Out & IP Test", desc: "Connector pull-out force tested. IP67 test on sealed ends. Electrical test on every unit." },
  { n: "06", title: "COC & Ship", desc: "Tooling records, COC, and IP test results shipped with production order documentation." },
]

const USECASES = [
  { title: "Handheld Device Cables", desc: "Overmolded coil cables for barcode scanners, portable test equipment, and handheld industrial tools." },
  { title: "Medical Device Connections", desc: "Ergonomic overmolded boots for medical probes and patient monitoring leads." },
  { title: "Industrial Pendant Cables", desc: "Ruggedized overmolded coil cables for machine operator pendants and control devices." },
  { title: "Consumer Electronics", desc: "Aesthetic overmolded coil cables for consumer product charging and accessory cables." },
  { title: "Outdoor Equipment", desc: "IP67 overmolded coil cables for outdoor power tools and agricultural equipment." },
  { title: "Telecom & Headsets", desc: "Soft-touch overmolded coil cables for professional headsets and communication devices." },
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
            Overmolded Coil Cable Solutions
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Coiled cable assemblies with overmolded connector ends, integrated strain relief boots, and custom breakout overmolds. Overmolding adds environmental protection, mechanical strain relief, and product identity to standard coiled cable constructions.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Coil / Spiral Cable</div>
              <h1 className="pp-hero__h">
                Overmolded.
                <span className="muted">Protected.</span>
                <span className="muted">Retractable..</span>
              </h1>
              <p className="pp-hero__desc">Coiled cable assemblies with overmolded connector ends, integrated strain relief boots, and custom breakout overmolds. Overmolding adds environmental protection, mechanical strain relief, and product identity to standard coiled cable constructions.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet &rarr;</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/overmolded-coil-boot-closeup.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Custom Boot</div><div className="pp-hero__stat-lbl">Geometry</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP67 Capable</div><div className="pp-hero__stat-lbl">Sealing</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Any Connector</div><div className="pp-hero__stat-lbl">Overmolded</div></div>
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
              <div className="pp-meaning__label">Why Overmold the Ends of a Coil Cable</div>
              <h2 className="pp-meaning__h">Overmolded Strain Relief Extends Coil Cable Life.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">The failure point of a coiled cable is almost always at the transition between the straight lead section and the coiled section, or at the connector termination. Overmolding this transition zone with a tapered TPE or PUR boot distributes the bending stress over a longer length, eliminating the sharp bend radius that causes premature conductor fatigue. Well-designed overmold geometry increases cable life by a factor of 3–5× in high-cycle applications.</p>
                <p className="pp-meaning__text">We design and build custom overmold tooling for coiled cable assemblies. Straight and angled boots, bayonet locking features, ergonomic grip geometry, and custom brand colors are all achievable. IP67 sealing at the connector interface is standard with through-molded connector bodies.</p>
              </div>

              <div className="pp-ov-gallery">
                <img src="/images/overmolded-coil-boot-closeup.webp" alt="Overmolded coil cable TPE boot closeup" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/coil-cable-overmold-before-after.webp" alt="Coil cable overmold before and after" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/overmolded-coil-color-options.webp" alt="Overmolded coil cable color options" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Overmolded Coil Cable Solutions Envelope.</h2>
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
            <FAQAccordion label="Overmolded Coil Cable Solutions FAQ" heading="Questions Engineers Ask." items={FAQS} />
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
