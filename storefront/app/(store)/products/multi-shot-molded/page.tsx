import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Multi-Shot Molded Cable Assemblies | Superior Harness & Assembly",
  description: "Two-shot and multi-shot injection molded cable assemblies. Hard/soft overmolding, co-injection, and sequential overmold programs for complex cable designs.",
}

const CAPS = [
  { title: "Two-Shot Tooling", desc: "Rotating-core two-shot molds for sequential overmolding. First-shot core removed and second-shot material injected without demolding the part." },
  { title: "Bi-Material Combinations", desc: "ABS+TPE, PC+TPE, PA+TPU, and custom material pairs. Material adhesion validated before production tooling commit." },
  { title: "Over-Connector Molding", desc: "Multi-shot overmolding directly over connector bodies and cable jackets. Connector geometry incorporated into first-shot tool design." },
  { title: "Color-in-Color", desc: "Inner and outer shot in different colors — no painting, no coating. Color stable for product life." },
  { title: "Insert Molding Integration", desc: "Metal inserts, threaded fasteners, and EMI shielding elements incorporated into multi-shot construction." },
  { title: "Prototype & Production", desc: "Rapid prototype tooling in 7–10 business days. Production steel tooling with multi-cavity for volume programs." },
]

const SPECS = [
  { k: "Shot Count", v: "2-shot standard · 3-shot on request" },
  { k: "First Shot Materials", v: "ABS, PC, PA, PC/ABS, PP" },
  { k: "Second Shot Materials", v: "TPE, TPU, silicone, PUR" },
  { k: "Part Accuracy", v: "±0.15 mm on prototype · ±0.08 mm production" },
  { k: "Cable OD Range", v: "3 mm to 25 mm" },
  { k: "Color Matching", v: "Per Pantone or RAL for each shot" },
  { k: "Prototype Lead Time", v: "7–10 business days" },
  { k: "Production MOQ", v: "500 units" },
]

const PROCESS = [
  { n: "01", title: "Design Review", desc: "Two-shot moldability review — draft, parting line, first-shot geometry, and bond line confirmed for both materials." },
  { n: "02", title: "First-Shot Tool", desc: "First-shot aluminum or steel tool machined. First-shot samples approved before second-shot tool commitment." },
  { n: "03", title: "Second-Shot Tool", desc: "Second-shot cavity designed around approved first-shot geometry. Tool approval sample submitted." },
  { n: "04", title: "Cable Prep & Insert", desc: "Cable assembly prepared and positioned in first-shot tool. Conductor and connector anchor locations set." },
  { n: "05", title: "Sequential Overmold", desc: "First shot molded, part transferred to second-shot position, second material injected. Bond line integrity checked." },
  { n: "06", title: "Test & Ship", desc: "Pull test, dimensional check, and visual inspection on every assembly. COC and FAI report included." },
]

const USECASES = [
  { title: "Medical Hand-Pieces", desc: "Dual-durometer overmolding for surgical and diagnostic hand-pieces. Rigid outer structure with soft ergonomic grip zone." },
  { title: "Consumer Electronics", desc: "Two-shot cable connectors with hard outer housing and soft strain relief. No separate boot required." },
  { title: "Industrial Controls", desc: "Cable grips and push-button connectors with hard protective shell and soft operator grip surface." },
  { title: "Automotive Charging", desc: "EV charging connector overmolds with UV-stable outer and soft TPE grip and strain relief." },
  { title: "Power Tools", desc: "Cable entry overmolds for power tools combining rigid strain relief support with vibration-damping inner layer." },
  { title: "Marine & Outdoor", desc: "UV-stable outer shell with sealed inner for marine and outdoor cable assemblies requiring IP68 rating." },
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
            Multi-Shot Molded Cable Assemblies
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Two-shot and multi-shot overmolded cable assemblies. Hard outer shell + soft inner strain relief. Sequential overmolding for complex geometries.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Overmolded Cable Assembly</div>
              <h1 className="pp-hero__h">
                Multi-Shot.
                <span className="muted">One Assembly.</span>
              </h1>
              <p className="pp-hero__desc">Two-shot and multi-shot injection molded cable assemblies. Combine hard structural overmold with soft strain relief in a single part — no bonding, no assembly steps.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/two-shot-overmold-hard-soft.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">2+ Shot</div><div className="pp-hero__stat-lbl">Capability</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Bi-material</div><div className="pp-hero__stat-lbl">Construction</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP67+</div><div className="pp-hero__stat-lbl">Achievable</div></div>
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
              <div className="pp-meaning__label">What Multi-Shot Molding Adds</div>
              <h2 className="pp-meaning__h">Two Materials. One Mold. One Assembly.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Multi-shot injection molding combines two or more materials in sequential mold shots without removing the part between shots. The result is a single overmolded part with material properties that cannot be achieved in a single shot: a rigid ABS or PA outer shell providing structural support with a soft TPE inner layer providing strain relief and grip. This eliminates secondary bonding operations and produces a part with better material adhesion and tighter tolerances.</p>
                <p className="pp-meaning__text">We build two-shot overmolded cable assemblies for applications where single-material overmolds cannot meet both structural and flex requirements. Common combinations include rigid PC/ABS outer with TPE strain relief, UV-stable outer with soft-touch inner, and dual-durometer constructions for industrial cable grips and medical hand-pieces.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/two-shot-overmold-hard-soft.webp" alt="Two-shot hard/soft overmold cable" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/two-shot-mold-rotating-core.webp" alt="Two-shot rotating core injection mold" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/dual-durometer-grip-cable.webp" alt="Dual-durometer cable grip" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">Multi-Shot Molded Cable Assemblies Envelope.</h2>
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
            <FAQAccordion label="Multi-Shot Molded Cable Assemblies FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Custom Strain Relief Molding</div>
                    <div className="pp-related-grid__desc">Single-shot overmold strain relief for cable assemblies.</div>
                    <Link href="/products/strain-relief-molding" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Overmolded Harness</div>
                    <div className="pp-related-grid__desc">Standard single-shot overmolded wire harness assemblies.</div>
                    <Link href="/products/overmolded-harness" className="pp-related-grid__link">Read More →</Link>
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
