import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Custom Strain Relief Molding | Superior Harness & Assembly",
  description: "Custom injection-molded strain relief for cable assemblies and connectors. TPE, PUR, silicone overmolding in any color, shape, and durometer.",
}

const CAPS = [
  { title: "Material Engineering", desc: "TPE, PUR, silicone, and PVC overmold materials. Durometer selected per flex requirement — 40A for soft strain relief, 85A for rigid protection." },
  // Old: { title: "Rapid Prototype Tooling", desc: "Aluminum prototype tools deliver first molded samples in 5–7 business days. Tool path machined directly from your 3D model." },
  { title: "Rapid Prototype Tooling", desc: "Aluminum prototype tools deliver first molded samples in 2–3 weeks. Tool path machined directly from your 3D model." },
  { title: "Production Tooling", desc: "Steel production molds for high-volume programs. Multi-cavity tools available for cost reduction at volume." },
  { title: "Custom Color Matching", desc: "Overmold color matched to Pantone, RAL, or physical sample. Color consistency maintained within ΔE 2.0 run-to-run." },
  { title: "Insert Molding", desc: "Metal inserts, threaded bushings, and locating features molded directly into the strain relief body." },
  { title: "Over-Connector Molding", desc: "Overmolding directly over the connector body and cable jacket in a single shot. No separate boot component to assemble." },
]

const SPECS = [
  { k: "Overmold Materials", v: "TPE (40A–90A), PUR (70A–95A), silicone, PVC" },
  { k: "Colors", v: "Any Pantone or RAL — black, grey, and white are same-day" },
  { k: "Mold Accuracy", v: "±0.1 mm on prototype tooling, ±0.05 mm production" },
  { k: "Min. Wall Thickness", v: "1.5 mm" },
  { k: "Cable OD Range", v: "2 mm to 30 mm" },
  { k: "Insert Types", v: "Brass inserts, stainless bushings, locating pins" },
  // Old: { k: "Prototype Lead Time", v: "5–7 business days (aluminum tool)" },
  { k: "Prototype Lead Time", v: "2–3 weeks (aluminum tool)" },
  { k: "Production MOQ", v: "250 units with production tooling" },
]

const PROCESS = [
  { n: "01", title: "Design Review", desc: "3D model or drawing reviewed for moldability. Draft angles, wall thickness, and parting line confirmed." },
  { n: "02", title: "Tooling", desc: "Prototype aluminum tool or production steel tool machined. Tool approval sample submitted before production." },
  { n: "03", title: "Material Trial", desc: "First shots molded in specified material and color. Dimensional and hardness verification against drawing." },
  { n: "04", title: "Cable Prep & Insert", desc: "Cable assembly prepared and positioned in tool before overmold shot. Cable anchor position verified." },
  { n: "05", title: "Overmold Shot", desc: "Elastomer injected at controlled pressure and temperature. Full encapsulation with no voids at the cable transition." },
  { n: "06", title: "Inspect & Ship", desc: "Visual inspection and pull test on every unit. COC and dimensional report included on first articles." },
]

const USECASES = [
  { title: "Consumer Products", desc: "Strain relief molding for charging cables, headphone cables, and power adapters. Soft-touch TPE for hand-held products." },
  { title: "Medical Devices", desc: "Custom strain relief for medical cable assemblies. Biocompatible materials available. Cleanroom molding for critical applications." },
  { title: "Industrial Equipment", desc: "Heavy-duty PUR strain relief for plant floor cables. Resistant to cutting oil, coolant, and mechanical abuse." },
  { title: "Aerospace & Defense", desc: "Low-outgassing silicone overmolds for aerospace connector strain relief. MIL-spec material alternatives available." },
  { title: "Automotive", desc: "High-temperature strain relief for underhood cable assemblies. Material selected for 125°C+ continuous exposure." },
  { title: "OEM Branding", desc: "Custom-colored and logo-branded strain reliefs for OEM product integration. Turnkey mold and assembly programs." },
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
            Custom Strain Relief Molding
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Custom injection-molded strain relief in TPE, PUR, or silicone. Any color, durometer, and geometry. Prototyping and production tooling.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Overmolded Cable Assembly</div>
              <h1 className="pp-hero__h">
                Custom Strain Relief.
                <span className="muted">Precision Mold.</span>
              </h1>
              <p className="pp-hero__desc">Custom injection-molded strain relief for cable-to-connector transitions. Any shape, color, and elastomer durometer. Rapid-prototype tooling and production runs.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/tpe-strain-relief-tapered.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">TPE / PUR / Silicone</div><div className="pp-hero__stat-lbl">Materials</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Custom</div><div className="pp-hero__stat-lbl">Color & Shape</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP54+</div><div className="pp-hero__stat-lbl">Achievable</div></div>
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
              <div className="pp-meaning__label">What Custom Strain Relief Adds</div>
              <h2 className="pp-meaning__h">The Transition Zone Is Where Cables Fail.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">The cable-to-connector interface is the highest mechanical stress point in any cable assembly. Without adequate strain relief, repeated bending concentrates at that point and causes conductor fatigue, insulation cracking, and connector body fracture. A properly designed overmolded strain relief distributes the bend radius across a graduated taper, protecting the cable for the full design life of the product.</p>
                // Old: <p className="pp-meaning__text">We design and produce custom strain relief overmolds to your dimensional and material specification. Rapid prototype tooling delivers first parts in 5–7 business days. Production tooling amortizes over volume runs. Material selection — TPE durometer, PUR hardness, or silicone grade — is matched to your flex requirement, operating temperature, and chemical exposure.</p>
                <p className="pp-meaning__text">We design and produce custom strain relief overmolds to your dimensional and material specification. Rapid prototype tooling delivers first parts in 2–3 weeks. Production tooling amortizes over volume runs. Material selection — TPE durometer, PUR hardness, or silicone grade — is matched to your flex requirement, operating temperature, and chemical exposure.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/tpe-strain-relief-tapered.webp" alt="TPE tapered strain relief overmold" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/overmold-mold-tool-pair.webp" alt="Overmold aluminum tool pair" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/strain-relief-color-samples.webp" alt="Strain relief color samples" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Custom Strain Relief Molding Envelope.</h2>
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
            <FAQAccordion label="Custom Strain Relief Molding FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Overmolded Harness</div>
                    <div className="pp-related-grid__desc">Complete overmolded wire harness assemblies with custom strain relief.</div>
                    <Link href="/products/overmolded-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Multi-Shot Molded Cable</div>
                    <div className="pp-related-grid__desc">Two-shot and multi-material overmolding for complex cable assemblies.</div>
                    <Link href="/products/multi-shot-molded" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Connector Molding Services</div>
                    <div className="pp-related-grid__desc">Custom connector overmolding and insert molding services.</div>
                    <Link href="/products/connector-molding" className="pp-related-grid__link">Read More →</Link>
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
