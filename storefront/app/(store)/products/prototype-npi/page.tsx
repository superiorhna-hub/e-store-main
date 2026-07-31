import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Wire Harness Prototype / NPI | Superior Harness & Assembly",
  description: "1-piece wire harness prototypes in 3–7 days. DFM review, FAI report, and direct path to production. IPC/WHMA-A-620.",
}

const CAPS = [
  { title: "1-Unit MOQ", desc: "No minimum order on prototype builds. One unit built to the same process, materials, and test standards as a production run of 10,000. The prototype is the proof, not a placeholder." },
  { title: "24-Hour RFQ Turnaround", desc: "Submit drawings, BOMs, or samples. Quote issued within 24 hours with material cost, lead time, and a DFM flag list if applicable. No consultant review — direct from engineering." },
  { title: "DFM Review Included", desc: "Every NPI build includes a design-for-manufacturability review at no charge. We flag unroutable geometries, non-standard connector orientations, and cost-reduction opportunities before cutting the first wire." },
  { title: "Same Process as Production", desc: "Prototype harnesses run on the same automated cut-and-strip equipment, crimp presses, and test fixtures as production lots. The prototype is not hand-built — it is built to the production standard from day one." },
  { title: "FAI Report on Request", desc: "First-article inspection report per AS9102 or your internal format available on all NPI programs. FAI documents dimensional, material, and electrical conformance on the first article before production authorization." },
  { title: "Direct Scale Path", desc: "NPI programs transition directly to production with the same drawing, BOM, and traveler. No re-tooling, no re-qualification. The NPI fixture becomes the production fixture for the same part number." },
]

const SPECS = [
  { k: "MOQ", v: "1 unit — no prototype minimum" },
  { k: "Prototype Lead Time", v: "3–7 business days from drawing approval" },
  { k: "DFM Review", v: "Included at no charge — results in 24 hours" },
  { k: "FAI Report", v: "AS9102 format or customer format — available on all programs" },
  { k: "Standards", v: "IPC/WHMA-A-620 Class 2 & 3 — same as production" },
  { k: "Test Coverage", v: "100% continuity — same fixture used in production" },
  { k: "Scale Path", v: "Direct — same drawing, BOM, and traveler as production" },
  { k: "Quote Turnaround", v: "Within 24 hours of drawing or sample submission" },
  { k: "Iterations", v: "Unlimited design iterations — each treated as a new NPI build" },
  { k: "Documentation", v: "COC, traveler, and FAI report shipped with first article" },
]

const PROCESS = [
  { n: "01", title: "Submit Drawing or Sample", desc: "Email drawings, BOMs, or sample parts. Any format accepted — PDF, DXF, native CAD, or a competitor part with a wire-out note." },
  { n: "02", title: "DFM Review & Quote", desc: "Engineering reviews geometry, material availability, and terminal compatibility. Quote and DFM flag list issued within 24 hours." },
  { n: "03", title: "Material Procurement", desc: "All wire, terminals, connectors, and hardware ordered to the BOM. No substitutions without written approval — same rule as production." },
  { n: "04", title: "Prototype Build", desc: "Built on production equipment using the same cut, strip, crimp, and routing processes. Traveler follows the job through every operation." },
  { n: "05", title: "100% Electrical Test", desc: "Every prototype tested on a dedicated continuity fixture. Same pass criteria as production. Hipot and pull-force available on request." },
  { n: "06", title: "FAI & Ship", desc: "FAI report generated if requested. COC issued. Prototype shipped with all test results and material documentation for engineering review." },
]

const USECASES = [
  { title: "Engineering Validation (EVT)", desc: "First builds for engineering validation of a new wire harness design. DFM feedback and dimensional verification before DVT tooling commitment." },
  { title: "Design Validation (DVT)", desc: "Prototype builds for environmental, vibration, and electrical validation. Same materials and processes as production — results are applicable to the production qualification." },
  { title: "Competitive Replacement", desc: "Reverse-engineer a competitor harness or field-returned unit for a drop-in replacement. Sample provided, wire list generated, prototype shipped for fitment check." },
  { title: "Regulatory Submission", desc: "FAI-documented prototype for UL, CSA, CE, or FDA regulatory submission. Full material traceability and test documentation for the submission package." },
  { title: "Production Pilot Run", desc: "Pilot production run of 5–25 units to validate assembly process, tooling, and test fixture before releasing to full production volume." },
  { title: "Customer Sample Request", desc: "Production-quality sample for customer approval before PO release. Built to the final production drawing with COC and test report for customer quality review." },
]

const FAQS = [
  { q: "How fast can you build a prototype?", a: "3–7 business days from drawing approval. Standard material (UL 1015 wire, common Molex/TE/Deutsch connectors) is in-house and does not add to lead time. Non-stock material typically adds 2–5 business days. Submit the RFQ and we will confirm the exact lead time with material availability confirmed." },
  { q: "Do you do DFM review on every NPI?", a: "Yes — DFM review is included at no charge on every NPI build. We review for routable geometry, correct terminal-to-wire combinations, connector orientation, and any BOM items that will cause production delay. DFM results are issued with the quote, not as a separate deliverable, so you have both in one document." },
  { q: "Is a prototype built to production standards?", a: "Yes. We do not hand-build prototypes on a bench with manual tools. Every prototype runs on the same automated cut-and-strip equipment, crimp presses set to the same height and force parameters, and test fixtures used in production. The prototype result is predictive of the production result — that is the only way NPI is useful." },
  { q: "What is included in the FAI report?", a: "Our FAI report follows AS9102 format: dimensional check of all lengths and branch points, material verification against BOM, electrical test results, and visual inspection per IPC/WHMA-A-620. Custom formats are accepted — if your company has an internal FAI template, send it with the RFQ and we will complete it." },
  { q: "Can I iterate on the design and get another prototype?", a: "Yes — each design iteration is treated as a new NPI build with the same 3–7 day lead time. There is no limit on iterations. We recommend submitting the revised drawing with a red-line markup showing the changes so we can target the DFM review on the delta rather than reviewing the entire drawing again." },
  { q: "What happens to the prototype fixture when we go to production?", a: "The prototype test fixture becomes the production fixture for the same part number. There is no re-tooling or re-qualification step between NPI and production. The drawing, BOM, and traveler used in NPI are the production documents — we update revision levels as needed and release to production without a separate qualification gate." },
]

export default function PrototypeNPIPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>Prototype / NPI</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">1-piece wire harness prototypes in 3–7 business days. DFM review at no charge. FAI report on request. Same process and test standards as production.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Wire Harness Prototype / NPI</div>
              <h1 className="pp-hero__h">1 Piece.<span className="muted">3 Days.</span><span className="accent">Production Standard.</span></h1>
              <p className="pp-hero__desc">Wire harness prototypes and NPI builds with DFM review, FAI reporting, and a direct path to production. Built on production equipment from day one — no hand-built bench samples.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Drawing →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/automatic-cut-and-strip.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">1 Pc</div><div className="pp-hero__stat-lbl">Min. Order</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">3–7 Days</div><div className="pp-hero__stat-lbl">Lead Time</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">DFM</div><div className="pp-hero__stat-lbl">Review Included</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">FAI</div><div className="pp-hero__stat-lbl">Report Available</div></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What NPI Means Here</div>
          <h2 className="pp-meaning__h">A Prototype That Predicts<br />Production. Nothing Less.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">A prototype built on a bench by hand with manual crimp tools is not a production prototype — it is a geometry check. The failure modes that show up in production (inconsistent crimp height, routing interference, connector orientation errors) will not show up in a hand-built sample. We run prototypes on production equipment using the same process parameters because the NPI result must predict the production result. If it does not, the prototype is not useful.</p>
            <p className="pp-meaning__text">Our NPI process feeds directly into production without a re-qualification step. The drawing, BOM, and traveler used in the NPI build are the production documents. The test fixture used on the prototype is the production fixture. You do not pay to qualify twice. If your program requires a specific production type (waterproof, high-voltage, or overmolded), see the respective pages — all NPI programs follow the same direct-to-production path.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/prototype-harness-bench.webp" alt="Prototype harness on workbench" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/first-article-measurement.webp" alt="First article inspection measurement" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/npi-drawing-review.webp" alt="NPI drawing review" className="pp-ov-gallery__img" loading="lazy" />
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
          <section className="pp-caps"><div className="pp-caps__inner"><div className="pp-caps__label">NPI Capability Block</div><h2 className="pp-caps__h">Six NPI Capabilities.</h2><div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22l9-4.5V7L12 2 3 7v10.5L12 22z"/><path d="M12 22V12M3 7l9 5 9-5"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div></div></section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs"><div className="pp-specs__inner"><div className="pp-specs__label">NPI Program Details</div><h2 className="pp-specs__h">Prototype Envelope.</h2><table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table></div></section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process"><div className="pp-process__inner"><div className="pp-process__label">NPI Flow</div><h2 className="pp-process__h">Drawing to First Article.<br />Six Steps.</h2><div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div></div></section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases"><div className="pp-usecases__inner"><div className="pp-usecases__label">NPI Use Cases</div><h2 className="pp-usecases__h">Six NPI Scenarios.</h2><div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div></div></section>
        <section className="pp-verticals"><div className="pp-verticals__inner"><div className="pp-verticals__label">NPI For</div><h2 className="pp-verticals__h">Any Industry.</h2><div className="pp-verticals-grid"><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Automotive &amp; EV</div><div className="pp-verticals-grid__desc">EVT and DVT prototype harnesses for EV program launches. USCAR and SAE materials in-house.</div><Link href="/industries/automotive-ev" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Medical Devices</div><div className="pp-verticals-grid__desc">Regulatory-submission samples with full FAI and material documentation for FDA and CE filings.</div><Link href="/industries/medical-devices" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Robotics &amp; Automation</div><div className="pp-verticals-grid__desc">Servo and encoder harness prototypes routed for robot arm and drag-chain geometry validation.</div><Link href="/industries/robotics-automation" className="pp-verticals-grid__link">See Industry →</Link></div></div></div></section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote"><div className="pp-quote__inner"><div className="pp-quote__card"><div className="pp-quote__label">NPI Note</div><p className="pp-quote__text">&ldquo;We get calls from engineers who built a hand-crimped bench sample, sent it to production, and found out at 1,000 units that the routing was unachievable at speed. Our NPI process catches that before you cut purchase orders. The DFM review is not optional — it is the reason your production start goes smoothly.&rdquo;</p><div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">NPI Engineering Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div></div></div></section>
        <FAQAccordion label="NPI FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related"><div className="pp-related__inner"><div className="pp-related__label">Start With NPI, Scale To</div><h2 className="pp-related__h">Production Variants.</h2><div className="pp-related-grid"><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/></svg><div className="pp-related-grid__title">Custom Wire Harness</div><div className="pp-related-grid__desc">Full production volume custom harnesses built to the same drawing and BOM as your NPI build.</div><Link href="/products/custom-wire-harness" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div className="pp-related-grid__title">Waterproof Harness</div><div className="pp-related-grid__desc">NPI builds for sealed harnesses include IP validation in the 5–7 day sample lead time.</div><Link href="/products/waterproof-harness" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg><div className="pp-related-grid__title">High Voltage Harness</div><div className="pp-related-grid__desc">HV prototypes include hipot test and material documentation for regulatory submission support.</div><Link href="/products/high-voltage-harness" className="pp-related-grid__link">Read More →</Link></div></div></div></section>
          </>
        )},
      ]} />
    </div>
  )
}