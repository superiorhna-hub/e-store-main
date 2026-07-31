import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Cable Assembly | Superior Harness & Assembly",
  description: "Custom cable assemblies — multi-conductor, coaxial, shielded, and overmolded. 100% continuity and resistance tested.",
}

const CAPS = [
  { title: "Multi-Conductor Assemblies", desc: "2-conductor through 200-conductor cable assemblies built to your schematic. Any conductor arrangement, jacket color, and branch topology. From simple paired cable to complex spider assemblies." },
  { title: "Coaxial & RF Termination", desc: "Precision coaxial cable termination for signal-integrity-critical applications. BNC, SMA, N-type, and custom RF connectors. Insertion loss characterized on request." },
  { title: "Shielded Cable Assemblies", desc: "Braided and foil-shielded cable assemblies with proper drain wire routing and shield termination. Shielded twisted pair for differential signals requiring EMI immunity." },
  { title: "Overmolded Strain Relief", desc: "In-house TPE and PUR overmold tooling for sealed, strain-relieved cable ends. IP67/IP68 rated. Pull-force validated per IPC/WHMA-A-620 on every unit." },
  { title: "Crimp & Solder Termination", desc: "Precision crimp termination on production equipment with pull-test verification. Solder sleeve and IDC termination available for applications where crimp tooling is unavailable." },
  { title: "100% Electrical Test", desc: "Every cable assembly tested for continuity, resistance, and correct polarity before shipment. Hi-pot testing available. Test fixtures dedicated to each part number — no adapter chains." },
]

const SPECS = [
  { k: "Cable Types", v: "Multi-conductor, coaxial, shielded twisted pair, flat ribbon, custom" },
  { k: "Conductor Range", v: "AWG 32 to AWG 4/0" },
  { k: "Connector Brands", v: "Molex, TE, Amphenol, JST, Deutsch, Hirose, ITT Cannon, custom" },
  { k: "Terminations", v: "Crimp, solder sleeve, IDC, welded splice, screw terminal" },
  { k: "Shielding", v: "Tinned-copper braid (85–98%), aluminum foil + drain, combination" },
  { k: "Overmold", v: "TPE, PUR, Nylon — in-house tooling, IP67/IP68 rated" },
  { k: "Test Coverage", v: "100% continuity, resistance, polarity · Hi-pot on request" },
  { k: "Lead Time", v: "Prototype: 3–7 days · Production: 5–15 business days" },
  { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Drawing Submission", desc: "Submit schematic, BOM, or sample cable. DFM review included — we flag connector availability, gauge compatibility, and routing issues before build." },
  { n: "02", title: "Material Kitting", desc: "All wire, cable, connectors, and accessories kitted per BOM. Non-stock items sourced with confirmed availability before build start." },
  { n: "03", title: "Termination & Assembly", desc: "Cable cut to length, conductors stripped and terminated per drawing. Shield drain routed and terminated. Overmold or boot applied where specified." },
  { n: "04", title: "100% Electrical Test", desc: "Every assembly tested on a dedicated fixture: continuity, resistance, and polarity. Hi-pot testing applied to rated insulation circuits." },
  { n: "05", title: "Visual Inspection", desc: "Visual inspection per IPC/WHMA-A-620. Connector orientation, latch engagement, label position, and overall assembly geometry verified." },
  { n: "06", title: "Pack & Ship", desc: "COC and packing slip with every shipment. ESD-safe packaging on request. Same-day ship available on emergency orders from in-stock assemblies." },
]

const USECASES = [
  { title: "Industrial Control Systems", desc: "Control panel wiring, sensor cables, and actuator signal cables for PLC and DCS systems. Oil-resistant jackets and screened twisted pair for signal integrity." },
  { title: "Test & Measurement", desc: "Instrument interconnect cables for oscilloscopes, data acquisition, and RF test systems. Precision termination, characterized insertion loss, and phase-matched sets on request." },
  { title: "Medical Devices", desc: "Patient monitoring, imaging, and diagnostic instrument cable assemblies. Biocompatible materials, full lot traceability, and IEC 60601 compliance awareness." },
  { title: "Defense & Aerospace", desc: "MIL-SPEC cable assemblies for avionics, ground support equipment, and communications systems. IPC/WHMA-A-620 Class 3. ITAR-registered facility." },
  { title: "Data Centers & Networking", desc: "Patch cables, trunk assemblies, and custom interconnect cables for server, switch, and storage infrastructure. Cat5e through Cat8, fiber optic options." },
  { title: "Consumer Electronics", desc: "Charging cables, data transfer cables, and accessory wiring for consumer products. High-volume production with branded overmold geometry and custom color matching." },
]

const FAQS = [
  { q: "What cable types do you assemble?", a: "We assemble multi-conductor, coaxial, shielded twisted pair (STP), flat ribbon, and custom cable constructions. If you can specify the cable by UL type, manufacturer part number, or physical description, we can source and terminate it. We maintain stock of common UL 1015, UL 2464, Belden, and Lapp cable types for short lead-time assembly." },
  { q: "Can you match a cable assembly from a sample?", a: "Yes. Send a sample cable assembly — cut, split, or otherwise. We will identify the cable construction, measure the conductor count and gauge, identify the connector series, and produce a wire list for your approval before building a prototype. This is our most common NPI scenario." },
  { q: "Do you handle both crimp and solder termination?", a: "Both. Crimp is the production default for high-volume cable assemblies — repeatable, pull-test verifiable, and faster than solder. Solder sleeve termination is available for applications where a specific connector requires solder, or for low-volume specialty assemblies. IDC termination is available for ribbon cable and punch-down applications." },
  { q: "What is your test coverage on cable assemblies?", a: "100% continuity and polarity check on every unit. Resistance measurement on power circuits. Hi-pot testing available and recommended for assemblies with voltage-rated insulation. Test fixtures are dedicated to each part number — we do not use generic adapters that introduce measurement uncertainty." },
  { q: "Can you do shielded cable assemblies?", a: "Yes. Braided tinned-copper at 85–98% coverage and aluminum foil plus drain wire are both in-house capabilities. Shield drain wire is routed and terminated per your schematic — either to a connector shell, a dedicated drain pin, or a pigtail for chassis ground. Transfer impedance characterization is available on high-performance EMC applications." },
  { q: "What lead times can you hit for production cable assemblies?", a: "Standard production lead time is 5–15 business days depending on material availability. Common Molex, TE, Amphenol, and JST connector assemblies on stock cable can typically ship within 5–7 days. Non-stock cable and exotic connectors add procurement lead time — we confirm availability with the quote." },
]

export default function CableAssemblyPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>Cable Assembly</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">Custom cable assemblies — multi-conductor, coaxial, shielded, and overmolded. Built to your drawing or sample. 100% continuity and resistance tested before shipment.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Cable Assembly</div>
              <h1 className="pp-hero__h">Any Cable.<span className="muted">Any Connector.</span><span className="accent">Build-to-Print.</span></h1>
              <p className="pp-hero__desc">From 2-conductor signal cables to complex multi-branch assemblies — built to your drawings, BOMs, or samples. Crimp, solder, and IDC termination. 100% electrically tested before shipment.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/cable-loom.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Continuity Tested</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">24 Hr</div><div className="pp-hero__stat-lbl">Quote Reply</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">1 Pc</div><div className="pp-hero__stat-lbl">Min. Order</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP68</div><div className="pp-hero__stat-lbl">Sealed Options</div></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What Cable Assembly Means Here</div>
          <h2 className="pp-meaning__h">Your Schematic Is the Build Order.<br />The Test Fixture Is the Proof.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">A cable assembly is not a catalog item with a label swap. It is a specific combination of cable construction, conductor count, termination method, connector orientation, and jacketing that is correct for exactly one application. Any deviation — wrong gauge, wrong crimp height, wrong connector orientation — creates a failure mode that does not show up on the assembly floor but shows up in the field. We build from your schematic, not a closest-match substitution.</p>
            <p className="pp-meaning__text">For applications requiring RF performance, see <Link href="/products/coaxial-rf-microwave" className="pp-meaning__link">coaxial / RF / microwave</Link> — coaxial assemblies are termination-method and VSWR validated. For medical cable assemblies requiring IEC 60601 compliance and lot traceability, see <Link href="/products/medical-cable-assemblies" className="pp-meaning__link">medical cable assemblies</Link>. For power cables with lugged terminations, see <Link href="/products/power-battery" className="pp-meaning__link">power & battery</Link>.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/cable-assembly-variety.webp" alt="Cable assembly variety" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/cable-assembly-test-fixture.webp" alt="Cable assembly test fixture" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/connector-types-lineup.webp" alt="Connector types lineup" className="pp-ov-gallery__img" loading="lazy" />
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
          <section className="pp-caps"><div className="pp-caps__inner"><div className="pp-caps__label">Cable Assembly Capability Block</div><h2 className="pp-caps__h">Six Termination<br />Capabilities.</h2><div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div></div></section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs"><div className="pp-specs__inner"><div className="pp-specs__label">Specification Sheet</div><h2 className="pp-specs__h">Cable Assembly Envelope.</h2><table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table></div></section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process"><div className="pp-process__inner"><div className="pp-process__label">Production Flow</div><h2 className="pp-process__h">Spec to Tested Cable.<br />Six Steps.</h2><div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div></div></section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases"><div className="pp-usecases__inner"><div className="pp-usecases__label">Application Map</div><h2 className="pp-usecases__h">Six Cable Assembly<br />Use Cases.</h2><div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div></div></section>
        <section className="pp-verticals"><div className="pp-verticals__inner"><div className="pp-verticals__label">Where It Ships</div><h2 className="pp-verticals__h">Cable Assembly Verticals.</h2><div className="pp-verticals-grid"><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Industrial / Factory</div><div className="pp-verticals-grid__desc">Control system, sensor, and actuator cables for PLC, DCS, and motion control applications.</div><Link href="/industries/industrial-factory" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Aerospace &amp; Defense</div><div className="pp-verticals-grid__desc">MIL-SPEC cable assemblies for avionics, ground support, and communications. IPC Class 3.</div><Link href="/industries/aerospace-defense" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Robotics &amp; Automation</div><div className="pp-verticals-grid__desc">Flex-rated servo and encoder cables routed for drag-chain and robotic arm applications.</div><Link href="/industries/robotics-automation" className="pp-verticals-grid__link">See Industry →</Link></div></div></div></section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote"><div className="pp-quote__inner"><div className="pp-quote__card"><div className="pp-quote__label">Production Note</div><p className="pp-quote__text">&ldquo;Every cable assembly has a correct way to terminate it and a dozen ways that look correct but are not. Crimp height set 0.1 mm low on a 22 AWG terminal passes a pull test on the floor and fails at 50°C in the field. We set crimp height by conductor cross-section, not by part number, and we pull-test every critical termination before it goes in the connector.&rdquo;</p><div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">Assembly Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div></div></div></section>
        <FAQAccordion label="Cable Assembly FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related"><div className="pp-related__inner"><div className="pp-related__label">Related Assemblies</div><h2 className="pp-related__h">Specialized Variants.</h2><div className="pp-related-grid"><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg><div className="pp-related-grid__title">Coaxial / RF Assemblies</div><div className="pp-related-grid__desc">DC to 40+ GHz coaxial cable assemblies with precision SMA, N-type, and BNC termination.</div><Link href="/products/coaxial-rf-microwave" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg><div className="pp-related-grid__title">Medical Cable Assemblies</div><div className="pp-related-grid__desc">Life-critical cable assemblies with IEC 60601 compliance, biocompatible materials, and full lot traceability.</div><Link href="/products/medical-cable-assemblies" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg><div className="pp-related-grid__title">Power &amp; Battery Cables</div><div className="pp-related-grid__desc">High-current power and battery cables with lug terminations for industrial and EV applications.</div><Link href="/products/power-battery" className="pp-related-grid__link">Read More →</Link></div></div></div></section>
          </>
        )},
      ]} />
    </div>
  )
}