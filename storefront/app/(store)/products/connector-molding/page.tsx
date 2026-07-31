import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Connector Molding Services | Superior Harness & Assembly",
  description: "Custom connector overmolding, insert molding, and potting services. Any connector family, any elastomer, production quantities.",
}

const CAPS = [
  { title: "Over-Connector Overmolding", desc: "TPE, PUR, and silicone overmolding directly over any connector body — circular, rectangular, D-sub, or custom — with cable transition." },
  { title: "Insert Molding", desc: "Brass and stainless steel inserts, threaded bushings, and locking features molded directly into connector overmold bodies." },
  { title: "Potting & Backfill", desc: "Two-part epoxy, polyurethane, and silicone potting of connector enclosures for environmental sealing and vibration resistance." },
  // Old: { title: "In-House Tooling", desc: "Aluminum prototype tools machined in-house for 5–7 day first-article turnaround. Steel production tools for volume programs." },
  { title: "In-House Tooling", desc: "Aluminum prototype tools machined in-house for 2–3 week first-article turnaround. Steel production tools for volume programs." },
  { title: "IP67/IP68 Overmold Design", desc: "Overmold geometry designed to achieve specified IP rating. O-ring grooves, face seals, and wire entry seals integrated into overmold." },
  { title: "High-Volume Production", desc: "Multi-cavity production tools for high-volume connector overmolding. Cycle time optimized for unit cost targets." },
]

const SPECS = [
  { k: "Overmold Materials", v: "TPE (40A–90A), PUR, silicone, PVC, epoxy (potting)" },
  { k: "Connector Families", v: "Any — circular, rectangular, D-sub, USB, RJ45, custom" },
  { k: "IP Rating Achievable", v: "IP54 to IP68 depending on connector and overmold design" },
  { k: "Insert Types", v: "Brass inserts M2–M12, stainless bushings, custom" },
  { k: "Color Options", v: "Any Pantone or RAL" },
  // Old: { k: "Prototype Lead Time", v: "5–7 business days (aluminum tool)" },
  { k: "Prototype Lead Time", v: "2–3 weeks (aluminum tool)" },
  { k: "Production MOQ", v: "100 units with production tooling" },
  { k: "Tooling MOQ", v: "500 units to justify production steel tool" },
]

const PROCESS = [
  { n: "01", title: "DFM Review", desc: "Connector geometry and overmold design reviewed. Draft angles, parting line, and IP sealing approach confirmed." },
  { n: "02", title: "Tool Design", desc: "Prototype aluminum or production steel tool designed around connector geometry. Tool path NC-machined in-house." },
  { n: "03", title: "First Article", desc: "First molded samples submitted for dimensional, hardness, and IP verification. Approval before production." },
  { n: "04", title: "Cable Insert & Mold", desc: "Cable assembly or connector positioned in tool. Overmold material injected. Full encapsulation verified." },
  { n: "05", title: "Post-Mold Inspection", desc: "Visual, dimensional, and pull-test inspection on every unit. Potted assemblies pressure-tested." },
  { n: "06", title: "Pack & Ship", desc: "Assemblies individually bagged and labeled. COC and dimensional report included." },
]

const USECASES = [
  { title: "OEM Product Integration", desc: "Custom-colored and branded connector overmolds for OEM products. Soft-touch and ergonomic geometries." },
  { title: "Industrial Sensors", desc: "M12 and M8 connector overmolding for IP67/IP68 industrial sensor cables." },
  { title: "Medical Devices", desc: "Biocompatible TPE and silicone overmolding for medical connector assemblies. ISO 10993 material traceability." },
  { title: "Automotive", desc: "Connector overmolding for underhood, underfloor, and exterior automotive applications. High-temp materials available." },
  { title: "Defense Systems", desc: "Ruggedized connector overmolds for field equipment. Low-outgassing materials for enclosed environments." },
  { title: "Consumer Electronics", desc: "High-volume connector overmolding for charging cables, audio accessories, and wearables." },
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
            Connector Molding Services
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Custom injection overmolding over any connector body. Strain relief, IP sealing, and branding molded in one shot. Insert molding and potting services also available.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Overmolded Cable Assembly</div>
              <h1 className="pp-hero__h">
                Connector Overmolding.
                <span className="muted">Precision Tooling.</span>
              </h1>
              <p className="pp-hero__desc">Injection overmolding services for connector bodies, cable transitions, and interface assemblies. Any connector family, any elastomer, prototype through production.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/connector-overmold-before-after.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Any Connector</div><div className="pp-hero__stat-lbl">Family</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP54–IP68</div><div className="pp-hero__stat-lbl">Achievable</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Custom Tooling</div><div className="pp-hero__stat-lbl">In-House</div></div>
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
              <div className="pp-meaning__label">What Connector Molding Solves</div>
              <h2 className="pp-meaning__h">A Bare Connector Is a Mechanical Failure Waiting to Happen.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Bare connector terminations — crimp barrels exposed, cable jacket unsupported — are the weakest points in any wiring harness. Overmolding encapsulates the connector body and cable-to-connector transition in a single elastomer part, providing environmental sealing, strain relief, and mechanical protection. The result is an assembly that looks and performs like an integrated product, not an assembly of parts.</p>
                <p className="pp-meaning__text">We provide connector overmolding as a standalone service for customers who supply finished cable assemblies or bare connector sets requiring overmolding. We also provide insert molding (metal hardware molded directly into the connector body) and potting/backfill services for sealed connector enclosures. Prototype tooling and production tooling available.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/connector-overmold-before-after.webp" alt="Connector overmold before and after" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/insert-molding-brass-inserts.webp" alt="Insert molding with brass inserts" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/potted-connector-enclosure.webp" alt="Potted connector enclosure" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Connector Molding Services Envelope.</h2>
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
            <FAQAccordion label="Connector Molding Services FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Overmolded Harness</div>
                    <div className="pp-related-grid__desc">Complete overmolded wire harness assemblies.</div>
                    <Link href="/products/overmolded-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Custom Strain Relief Molding</div>
                    <div className="pp-related-grid__desc">Custom strain relief design and production.</div>
                    <Link href="/products/strain-relief-molding" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Multi-Shot Molded Cable</div>
                    <div className="pp-related-grid__desc">Two-shot multi-material overmolded cable assemblies.</div>
                    <Link href="/products/multi-shot-molded" className="pp-related-grid__link">Read More →</Link>
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
