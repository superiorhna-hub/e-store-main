import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Custom Wire Harness | Superior Harness & Assembly",
  description: "Build-to-print custom wire harnesses from 28 AWG through 2/0 AWG. IPC/WHMA-A-620 production. 100% continuity tested.",
}

const CAPS = [
  { title: "Automated Cut & Strip", desc: "Computerized cutting and stripping machines deliver exact lengths and clean insulation removal for every conductor, from 28 AWG through 2/0 AWG, at production volume." },
  { title: "Precision Crimping", desc: "400+ terminal configurations run in-house. Every crimp pull-tested per IPC/WHMA-A-620 — conductor retention values documented for critical circuits." },
  { title: "Multi-Branch Routing", desc: "Any topology: single-drop, Y-branch, star, and 100+ circuit harness trees. Routed on custom boards per your drawing. No shortcuts in complex geometry." },
  { title: "Loom & Braid Protection", desc: "Nylon braid, PET expandable, split loom, and conduit options. Taped breaks at specified intervals. Grommets, pass-throughs, and edge protection fitted to print." },
  { title: "100% Continuity Test", desc: "Every harness tested against a dedicated fixture before shipment. Continuity, resistance, and hi-pot testing available. No sampling — 100% test coverage." },
  { title: "Documentation Package", desc: "COC, traveler, and first-article inspection report on request. AS9102 FAI available for aerospace and defense programs. Full lot traceability." },
]

const SPECS = [
  { k: "Wire Gauge Range", v: "28 AWG to 2/0 AWG (UL 1015, UL 1283, XLPE, silicone options)" },
  { k: "Conductor Count", v: "1 to 200+ conductors per harness" },
  { k: "Standards", v: "IPC/WHMA-A-620 Class 2 & 3, USCAR, SAE J1128" },
  { k: "Connector Brands", v: "Molex, TE Connectivity, Amphenol, JST, Deutsch, Sumitomo, custom" },
  { k: "Termination Methods", v: "Crimp, solder sleeve, IDC, welded splice" },
  { k: "Jacketing & Protection", v: "PVC, XLPE, nylon braid, PET expandable, split loom, corrugated conduit" },
  { k: "Lead Time", v: "Prototype: 3–7 days · Production: 5–15 business days" },
  { k: "MOQ", v: "1 unit (NPI/prototype) · No volume minimum for production" },
]

const PROCESS = [
  { n: "01", title: "Receive Drawing", desc: "Submit your schematic, BOM, or sample part. DFM review included at no charge — we flag issues before tooling." },
  { n: "02", title: "Material Build Kit", desc: "Wire, terminals, connectors, and hardware kitted per bill of materials. No substitutions without written approval." },
  { n: "03", title: "Fabrication", desc: "Cut, strip, crimp, route, and lace to your drawing on custom assembly boards. Traveler follows every job." },
  { n: "04", title: "100% Electrical Test", desc: "Every unit tested on a dedicated fixture — continuity, resistance, and hi-pot per your spec or IPC/WHMA-A-620 default." },
  { n: "05", title: "Inspection & Label", desc: "Visual inspection per IPC/WHMA-A-620. Part number, revision, lot, and date code labeled per your requirements." },
  { n: "06", title: "Pack & Ship", desc: "ESD-safe or standard packaging. COC and packing slip included. Same-day ship available on emergency orders." },
]

const USECASES = [
  { title: "Automotive OEM", desc: "Body control, lighting, sensor, and infotainment harnesses. USCAR-compliant materials. Kanban and JIT delivery programs available." },
  { title: "Medical Devices", desc: "Life-critical assemblies with full lot traceability and biocompatible jacket options. IEC 60601 and ISO 13485 awareness built in." },
  { title: "Industrial Machinery", desc: "Control panel wiring, motor feeds, and machine tool harnesses. Oil-resistant and high-temp insulation options for plant floor environments." },
  { title: "EV & Energy Storage", desc: "Battery interconnects and HV traction wiring. Orange jacket, XLPE insulation, hipot-tested. HV interlock loop integration available." },
  { title: "Robotics & Automation", desc: "Servo and encoder cables routed for drag-chain and robotic arm applications. Continuous-flex rated constructions for high-cycle environments." },
  { title: "Defense & Aerospace", desc: "IPC/WHMA-A-620 Class 3 production. AS9102 FAI available. ITAR-registered facility. MIL-SPEC wire and connector materials on hand." },
]

const FAQS = [
  { q: "What wire gauges do you run?", a: "We run 28 AWG through 2/0 AWG. Our automated cut-and-strip equipment handles gauges from 28–12 AWG with repeatable accuracy. Larger gauges are cut and stripped manually to the same standard. UL 1015, UL 1283, XLPE, silicone, and Teflon insulation are all available." },
  { q: "What is the minimum order quantity?", a: "One unit for prototypes and NPI programs. Production orders have no volume minimum — we run short-run, medium-run, and high-volume programs on the same line with the same quality process. Pricing reflects volume." },
  { q: "What connector brands do you stock?", a: "We maintain active stock of Molex, TE Connectivity, Amphenol, JST, Deutsch DT/DTM, and Sumitomo series. Custom connector types can be sourced — typically 3–5 business days on standard parts. Provide your part number and we confirm availability with the quote." },
  { q: "How do I submit a drawing for quote?", a: "Email drawings, schematics, or sample parts to info@superiorharness.com, or use the quote form on this site. We accept PDF, DXF, Gerber, and native CAD formats. BOM format is flexible — we work from your standard. Quotes typically issued within 24 hours." },
  { q: "What electrical tests do you perform?", a: "Standard test is 100% continuity using a dedicated test fixture. Resistance testing and hi-pot testing are available and recommended for safety-critical circuits. Test parameters default to IPC/WHMA-A-620 unless your spec calls out otherwise. First-article test reports are available on all programs." },
  { q: "Can you reverse-engineer a harness without drawings?", a: "Yes. Send a sample harness and we will generate a wire list and drawing for your approval before production. This is our most common NPI scenario — many customers come to us with a competitor sample or a field-removed unit and need it reproduced." },
]

export default function CustomWireHarnessPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            Custom Wire Harness
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">Build-to-print wire harnesses from 28 AWG through 2/0 AWG. IPC/WHMA-A-620 production, 100% continuity tested Quote within 24 hours.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Custom Wire Harness</div>
              <h1 className="pp-hero__h">
                Build-to-Print.
                <span className="muted">Any Gauge.</span>
                              </h1>
              <p className="pp-hero__desc">We manufacture custom wire harnesses to your drawings, samples, or specifications — prototype through high-volume production. Same quality process regardless of quantity.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/cable-harness.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">28–2/0</div><div className="pp-hero__stat-lbl">AWG Range</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Continuity Tested</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">1 Pc</div><div className="pp-hero__stat-lbl">Min. Order</div></div>
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
          <div className="pp-meaning__label">What &quot;Build-to-Print&quot; Means Here</div>
          <h2 className="pp-meaning__h">Your Drawing Is the Standard. Nothing Else Qualifies.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">A build-to-print harness means the drawing governs every dimension, material, and test criteria — not a catalog default, not what we have in stock, not what is easier to route. If your print specifies a 22 AWG GXL conductor in blue with a 1.5 mm Deutsch DT04-2P terminal at 48 mm ± 1 mm, that is exactly what ships. Deviation requires written approval. That is the only way to produce a harness that will install and perform consistently across a production run.</p>
            <p className="pp-meaning__text">If you need waterproofing on top of a custom harness, see the <Link href="/products/waterproof-harness" className="pp-meaning__link">waterproof harness</Link> page — we stack the specs. If your application is high-voltage, the <Link href="/products/high-voltage-harness" className="pp-meaning__link">high-voltage harness</Link> page covers insulation ratings and hipot requirements. For the unconstrained custom baseline with full drawing control, you are in the right place.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/wire-harness-multi-branch.webp" alt="Multi-branch wire harness" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/crimp-terminal-closeup.webp" alt="Precision crimp terminals" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/harness-routing-board.webp" alt="Harness routing board" className="pp-ov-gallery__img" loading="lazy" />
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
          <h2 className="pp-specs__h">Custom Wire Harness Envelope.</h2>
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
          <>
        <section className="pp-usecases">
        <div className="pp-usecases__inner">
          <div className="pp-usecases__label">Application Map</div>
          <h2 className="pp-usecases__h">Six Industries.<br />One Harness Shop.</h2>
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
        <section className="pp-verticals">
        <div className="pp-verticals__inner">
          <div className="pp-verticals__label">Where It Ships</div>
          <h2 className="pp-verticals__h">Custom Harness Verticals.</h2>
          <div className="pp-verticals-grid">
            <div className="pp-verticals-grid__cell">
              <div className="pp-verticals-grid__title">Automotive &amp; EV</div>
              <div className="pp-verticals-grid__desc">Engine systems, body control, lighting, and EV traction wiring. USCAR-compliant. Kanban delivery available.</div>
              <Link href="/industries/automotive-ev" className="pp-verticals-grid__link">See Industry →</Link>
            </div>
            <div className="pp-verticals-grid__cell">
              <div className="pp-verticals-grid__title">Medical Devices</div>
              <div className="pp-verticals-grid__desc">Life-critical assemblies with biocompatible materials, full traceability, and IEC 60601 awareness.</div>
              <Link href="/industries/medical-devices" className="pp-verticals-grid__link">See Industry →</Link>
            </div>
            <div className="pp-verticals-grid__cell">
              <div className="pp-verticals-grid__title">Industrial / Factory</div>
              <div className="pp-verticals-grid__desc">Control panel, machine tool, and heavy equipment harnesses. Oil-resistant and high-temp options.</div>
              <Link href="/industries/industrial-factory" className="pp-verticals-grid__link">See Industry →</Link>
            </div>
          </div>
        </div>
      </section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote">
        <div className="pp-quote__inner">
          <div className="pp-quote__card">
            <div className="pp-quote__label">Operations Note</div>
            <p className="pp-quote__text">&ldquo;Every harness we build starts with your drawing — not a catalog item, not a closest match. If your print has a note, we build to it. If a note is ambiguous, we call before we cut. That is the only way to produce a harness that installs on the first attempt and holds up in the field.&rdquo;</p>
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
        <section className="pp-specs" style={{ padding: "80px 0", background: "var(--bg2)" }}>
        <div className="pp-specs__inner">
          <div className="pp-specs__label">Facility Overview</div>
          <h2 className="pp-specs__h">Precision Equipment.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginTop: 40 }}>
            <div style={{ position: "relative", height: 280, borderRadius: 8, overflow: "hidden" }}>
              <img src="/images/automatic-cut-and-strip.webp" alt="Automatic Cut and Strip" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
            </div>
            <div style={{ position: "relative", height: 280, borderRadius: 8, overflow: "hidden" }}>
              <img src="/images/terminal-application.webp" alt="Terminal Application" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
            </div>
            <div style={{ position: "relative", height: 280, borderRadius: 8, overflow: "hidden" }}>
              <img src="/images/in-house-testing.webp" alt="In-House Testing" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>
        <FAQAccordion label="Wire Harness FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related">
        <div className="pp-related__inner">
          <div className="pp-related__label">Stack These On Top</div>
          <h2 className="pp-related__h">Related Harness Variants.</h2>
          <div className="pp-related-grid">
            <div className="pp-related-grid__cell">
              <svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <div className="pp-related-grid__title">Waterproof Harness</div>
              <div className="pp-related-grid__desc">Sealed wire harnesses for marine, outdoor, and washdown applications. IP67/IP68-rated peripheral and wire seals.</div>
              <Link href="/products/waterproof-harness" className="pp-related-grid__link">Read More →</Link>
            </div>
            <div className="pp-related-grid__cell">
              <svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <div className="pp-related-grid__title">High Voltage Harness</div>
              <div className="pp-related-grid__desc">600V to 1000V EV and industrial harnesses with orange jacket, XLPE insulation, and 100% hipot test.</div>
              <Link href="/products/high-voltage-harness" className="pp-related-grid__link">Read More →</Link>
            </div>
            <div className="pp-related-grid__cell">
              <svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><path d="M16 8l4 0 3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <div className="pp-related-grid__title">Prototype / NPI</div>
              <div className="pp-related-grid__desc">1-piece prototype builds in 3–7 days with DFM review, FAI reporting, and direct path to production.</div>
              <Link href="/products/prototype-npi" className="pp-related-grid__link">Read More →</Link>
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