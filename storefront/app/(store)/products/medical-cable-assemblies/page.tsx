import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Medical Cable Assemblies | Superior Harness & Assembly",
  description: "Life-critical medical cable assemblies with IEC 60601 compliance, biocompatible materials, and full lot traceability.",
}

const CAPS = [
  { title: "IEC 60601 Compliance Awareness", desc: "Assembly processes aligned to IEC 60601-1 requirements for patient-connected and non-patient-connected cable assemblies. Material selection and test parameters documented to support your regulatory submission." },
  { title: "Biocompatible Materials", desc: "PVC, silicone, TPE, and ETFE insulation options with biocompatibility data on file. Latex-free construction standard. Patient-contact grade materials available with ISO 10993 testing documentation." },
  { title: "Full Lot Traceability", desc: "Every component — wire, connector, overmold compound — traced by lot number from incoming inspection through shipment. Traceability records retained for 10 years and available on demand." },
  { title: "Kink-Resistant Constructions", desc: "Stranded fine-wire conductors and flexible jacket compounds selected for durability in repeated coiling, bending, and dragging use patterns typical of clinical environments." },
  { title: "Connector Sterilization Compatibility", desc: "EtO and autoclave-compatible connector and jacket materials available for instruments requiring terminal or pre-use sterilization. Material compatibility verified against your sterilization protocol." },
  { title: "100% Electrical Test & Documentation", desc: "Every assembly 100% tested for continuity, resistance, and hi-pot per IEC 60601 dielectric requirements. Test records generated per unit and included in the shipment documentation package." },
]

const SPECS = [
  { k: "Safety Standards", v: "IEC 60601-1 (awareness), ISO 13485-aligned production, IPC/WHMA-A-620 Class 3" },
  { k: "Patient Contact Materials", v: "Biocompatible PVC, silicone, TPE — ISO 10993 data on file" },
  { k: "Sterilization Compatibility", v: "EtO, autoclave, gamma — material verification per your protocol" },
  { k: "Traceability", v: "Component lot-level trace from incoming to ship · 10-year record retention" },
  { k: "Wire Gauge Range", v: "AWG 30 to AWG 14 · Fine-stranded for flex life" },
  { k: "Connectors", v: "LEMO, Amphenol CPC, ODU MEDI-SNAP, DIN, and custom medical series" },
  { k: "Electrical Test", v: "100% continuity, resistance, and hi-pot per IEC 60601-1 dielectric requirement" },
  { k: "Lead Time", v: "Prototype 5–10 days · Production 10–20 business days" },
  { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Regulatory Review", desc: "Submit intended use, patient contact class, and applicable standards. Engineering flags material requirements and test parameters against your regulatory submission needs." },
  { n: "02", title: "Material Selection & Verification", desc: "Wire, jacket, connector, and overmold materials selected with biocompatibility data confirmed. Incoming inspection per lot with documentation before build start." },
  { n: "03", title: "Controlled Build", desc: "Assembly performed in clean work environment under traveler control. Every operation documented. Conductor count, color code, and polarity verified at each stage." },
  { n: "04", title: "100% Electrical Test", desc: "Continuity, resistance, and hi-pot per IEC 60601-1 dielectric test voltage for the patient contact class. Every unit tested with results recorded per serial number." },
  { n: "05", title: "Visual & Dimensional Inspection", desc: "Visual inspection per IPC/WHMA-A-620 Class 3. Cable geometry, connector orientation, label legibility, and overmold integrity verified on every unit." },
  { n: "06", title: "Documentation Package & Ship", desc: "COC with test records, material lot traceability, and compliance statement. Regulatory submission documentation package available on request." },
]

const USECASES = [
  { title: "Patient Monitoring", desc: "ECG lead wires, SpO2 probes, and vital signs monitoring cables. Fine-stranded conductors for flex life. Snap and clip connector options to IEC 60601-1 patient isolation class." },
  { title: "Surgical Instruments", desc: "Electrosurgical and powered instrument cable assemblies. Silicone jacket for autoclave compatibility. LEMO and ODU MEDI-SNAP connector options." },
  { title: "Diagnostic Imaging", desc: "Ultrasound transducer and X-ray equipment cable assemblies. Coaxial cable arrays and multi-conductor assemblies with precision connector alignment." },
  { title: "Infusion & Fluid Delivery", desc: "Pump control and sensor cable assemblies for infusion systems. Chemical-resistant jacket options. Patient-contact grade materials for bedside equipment." },
  { title: "Dental Equipment", desc: "Handpiece cord assemblies with soft-touch TPE overmold. Autoclave and chemical disinfectant resistance. Color-coded for instrument identification." },
  { title: "Rehabilitation & Therapy", desc: "Electrical stimulation and therapy device cable assemblies. Long flex life for repeated coiling. ESD-safe and latex-free construction for patient safety." },
]

const FAQS = [
  { q: "Do you manufacture to ISO 13485?", a: "Our production processes are aligned to ISO 13485 quality principles including lot traceability, documented inspection, and controlled material records. We are not ISO 13485 certified as a standalone entity — our medical customers typically integrate our assemblies into their ISO 13485-certified device manufacturing process. We provide the documentation and traceability required to support your certification." },
  { q: "What biocompatible materials do you work with?", a: "We work with PVC compounds, silicone, TPE, ETFE, and PTFE insulation and jacketing materials with biocompatibility data on file. Patient-contact grade materials are selected with ISO 10993 testing documentation available. All materials are latex-free as standard. Specific formulation data is provided with the first-article documentation package." },
  { q: "Can you build for autoclave sterilization?", a: "Yes. Silicone-insulated assemblies are compatible with steam autoclave sterilization at 121–134°C. LEMO and ODU MEDI-SNAP connectors with stainless steel shells and autoclave-rated seal materials are available. We verify material compatibility against your sterilization protocol — cycle temperature, pressure, and number of cycles — before material selection is finalized." },
  { q: "What traceability do you provide?", a: "Complete lot-level traceability from incoming raw material through shipment. Every component — wire lot, connector lot, overmold compound batch — recorded against the assembly serial number. Records retained for 10 years minimum and available in electronic format on request. First-article and production lot records provided with COC." },
  { q: "What electrical tests do you run on medical cable assemblies?", a: "100% continuity and resistance testing on every assembly. Hi-pot testing at the IEC 60601-1 dielectric test voltage for your patient contact class — typically 1,500V AC for Type B and Type BF, 4,000V AC for Type CF applied parts. Test voltage and leakage gate set per your specification. Results documented per unit serial number." },
  { q: "Can you support a regulatory submission package?", a: "Yes. We provide assembly drawings, material lot traceability records, electrical test results, biocompatibility data on file, and IEC 60601-1 test voltage documentation as part of the first-article package. This is specifically designed to support your FDA 510(k) or CE technical file submission. Custom documentation formats available on request." },
]

export default function MedicalCableAssembliesPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>Medical Cable Assemblies</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">Life-critical medical cable assemblies built to IEC 60601-1 requirements. Biocompatible materials, full lot traceability, and 100% hi-pot test documentation. Supports FDA and CE submission packages.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Medical Cable Assemblies</div>
              <h1 className="pp-hero__h">IEC 60601.<span className="muted">Lot-Traced.</span><span className="accent">100% Hipot.</span></h1>
              <p className="pp-hero__desc">Life-critical cable assemblies for patient monitoring, surgical instruments, diagnostic imaging, and therapy devices. Biocompatible materials, full traceability, and regulatory submission documentation support.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/medical-cable.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IEC 60601</div><div className="pp-hero__stat-lbl">Compliance Aware</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Lot Trace</div><div className="pp-hero__stat-lbl">Full Traceability</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Hipot Tested</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">10 Yr</div><div className="pp-hero__stat-lbl">Record Retention</div></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What Medical Means Here</div>
          <h2 className="pp-meaning__h">Life-Critical Quality Is<br />a Process, Not a Label.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">A medical cable assembly that passes IEC 60601-1 dielectric testing but has an untraced material lot or an undocumented process deviation is not a compliant medical component — it is a liability. The difference between a medical cable assembly and a standard cable assembly is not the materials alone; it is the documented evidence that every material is correct, every test was performed, and every record is retrievable when your regulatory body asks for it.</p>
            <p className="pp-meaning__text">We build medical assemblies with lot traceability on every component, 100% electrical test with documented results, and a first-article package designed to feed directly into your regulatory submission. If your application requires waterproof medical cable assemblies for surgical environments, we stack IP sealing on top — see <Link href="/products/waterproof-harness" className="pp-meaning__link">waterproof harness</Link> for the combined spec.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/medical-device-cable.webp" alt="Medical device cable assembly" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/cleanroom-cable-assembly.webp" alt="Cleanroom cable assembly" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/biocompatible-cable-coil.webp" alt="Biocompatible cable coil" className="pp-ov-gallery__img" loading="lazy" />
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
          <section className="pp-caps"><div className="pp-caps__inner"><div className="pp-caps__label">Medical Assembly Capability</div><h2 className="pp-caps__h">Six Medical-Grade<br />Capabilities.</h2><div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div></div></section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs"><div className="pp-specs__inner"><div className="pp-specs__label">Specification Sheet</div><h2 className="pp-specs__h">Medical Cable Envelope.</h2><table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table></div></section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process"><div className="pp-process__inner"><div className="pp-process__label">Controlled Production Flow</div><h2 className="pp-process__h">Regulatory-Ready.<br />Every Lot.</h2><div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div></div></section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases"><div className="pp-usecases__inner"><div className="pp-usecases__label">Application Map</div><h2 className="pp-usecases__h">Six Medical<br />Use Cases.</h2><div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div></div></section>
        <section className="pp-verticals"><div className="pp-verticals__inner"><div className="pp-verticals__label">Medical Verticals</div><h2 className="pp-verticals__h">Built for These<br />Medical Markets.</h2><div className="pp-verticals-grid"><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Medical Devices</div><div className="pp-verticals-grid__desc">Class II and III medical device cable assemblies for FDA 510(k) and CE technical file submissions.</div><Link href="/industries/medical-devices" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Robotics &amp; Automation</div><div className="pp-verticals-grid__desc">Surgical robot arm and instrument wiring with biocompatible materials and flex-life construction.</div><Link href="/industries/robotics-automation" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Aerospace &amp; Defense</div><div className="pp-verticals-grid__desc">Field medical equipment and aeromedical cable assemblies with MIL-SPEC and IPC Class 3 standards.</div><Link href="/industries/aerospace-defense" className="pp-verticals-grid__link">See Industry →</Link></div></div></div></section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote"><div className="pp-quote__inner"><div className="pp-quote__card"><div className="pp-quote__label">Quality Note</div><p className="pp-quote__text">&ldquo;In medical manufacturing, the documentation is not overhead — it is the product. A cable assembly without traceable lot records, a test voltage certificate, and a signed COC is not a compliant medical component regardless of how well it was built. We engineer the documentation package to match the assembly build, not as an afterthought.&rdquo;</p><div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">Quality Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div></div></div></section>
        <FAQAccordion label="Medical Cable FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related"><div className="pp-related__inner"><div className="pp-related__label">Related Assemblies</div><h2 className="pp-related__h">Medical Variants.</h2><div className="pp-related-grid"><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div className="pp-related-grid__title">Waterproof + Medical</div><div className="pp-related-grid__desc">IP-sealed medical cable assemblies for surgical and fluid-exposure environments.</div><Link href="/products/waterproof-harness" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><div className="pp-related-grid__title">Overmolded Medical Cables</div><div className="pp-related-grid__desc">Soft-touch TPE overmold on handpiece and monitoring cables. Autoclave-compatible options.</div><Link href="/products/overmolded-harness" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22l9-4.5V7L12 2 3 7v10.5L12 22z"/></svg><div className="pp-related-grid__title">Prototype / NPI</div><div className="pp-related-grid__desc">Medical device prototype builds with full documentation for regulatory submission support.</div><Link href="/products/prototype-npi" className="pp-related-grid__link">Read More →</Link></div></div></div></section>
          </>
        )},
      ]} />
    </div>
  )
}