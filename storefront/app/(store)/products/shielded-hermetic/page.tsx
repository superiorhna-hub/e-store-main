import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Shielded & Hermetic Cable Assemblies | Superior Harness & Assembly",
  description: "Shielded and hermetically sealed cable assemblies for EMI-sensitive and pressure-rated applications in aerospace, defense, and industrial environments.",
}

const CAPS = [
  { title: "High-Coverage Shielding", desc: "Tinned-copper braid up to 98% coverage, aluminum foil, and combination shielding for broadband EMI/RFI protection in noisy environments." },
  { title: "Hermetic & Epoxy Sealing", desc: "Glass-to-metal seals and specialized epoxy potting for vacuum chambers, high-pressure, and fluid-submersion applications." },
  { title: "Custom Shield Termination", desc: "Shield drain wires routed per your grounding scheme — terminated to connector shells, pigtails with ring terminals, or isolated pins." },
  { title: "Triaxial & Quadrax Cables", desc: "Precision assemblies for applications requiring high common-mode rejection, including test & measurement and aerospace avionics." },
  { title: "MIL-SPEC & ITAR Compliant", desc: "Built with MIL-DTL connectors and M22759 wire. Fully ITAR-registered facility for defense and aerospace programs." },
  { title: "Leak & Transfer Impedance Test", desc: "Optional helium leak testing for hermetic assemblies and transfer impedance characterization for critical EMI/EMC applications." },
]

const SPECS = [
  { k: "Shield Types", v: "Braid (tinned copper, silver-plated), foil, spiral, combination" },
  { k: "Shield Coverage", v: "Up to 98% braid coverage" },
  { k: "Hermetic Seal", v: "Glass-to-metal, specialized epoxy potting" },
  { k: "Pressure Rating", v: "Built to application requirement (vacuum to high-PSI)" },
  { k: "Standards", v: "MIL-SPEC, IPC/WHMA-A-620 Class 3 available" },
  { k: "Test Coverage", v: "100% continuity, hipot, optional leak test" },
  { k: "Lead Time", v: "Prototype 3–7 days · Production 5–15 days" },
  { k: "MOQ", v: "1 unit (prototype) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Requirement Review", desc: "Submit your EMI shielding, environmental sealing, and pressure requirements. Engineering verifies material selection and termination methods." },
  { n: "02", title: "Cable & Material Prep", desc: "Shielded cable stripped to dimension. Shielding combed or folded back per termination spec. Connectors and potting compounds staged." },
  { n: "03", title: "Shield Termination", desc: "Braids and foils terminated via solder sleeve, banding, or mechanical crimp to ensure 360-degree EMI integrity." },
  { n: "04", title: "Sealing & Potting", desc: "Connectors potted or glass-sealed per environmental requirements. Curing cycles strictly monitored for hermetic integrity." },
  { n: "05", title: "Electrical & Leak Test", desc: "100% continuity and hipot testing. Assemblies requiring hermeticity undergo pressure decay or helium leak testing." },
  { n: "06", title: "Pack & Ship", desc: "COC, test data, and material traceability included. Shipped in ESD or specialized packaging for aerospace components." },
]

const USECASES = [
  { title: "Aerospace & Defense", desc: "MIL-SPEC shielded assemblies for avionics, radar, and electronic warfare systems requiring high EMI immunity and altitude rating." },
  { title: "Vacuum & Semiconductor", desc: "Hermetically sealed feedthroughs and cable assemblies for vacuum chambers and semiconductor capital equipment." },
  { title: "Subsea & Marine", desc: "High-pressure sealed assemblies for underwater ROVs, sonar systems, and marine sensor networks." },
  { title: "Test & Measurement", desc: "Triaxial and heavily shielded cables for sensitive instrumentation, minimizing noise floor in data acquisition." },
  { title: "Industrial & Factory", desc: "Shielded cables for VFD motor drives and factory automation to prevent EMI interference with low-voltage sensors." },
  { title: "Medical Imaging", desc: "Shielded arrays for MRI and ultrasound equipment requiring pristine signal integrity in high-RF environments." },
]

const FAQS = [
  { q: "What shield coverage do you provide?", a: "We provide up to 98% coverage with tinned-copper braid. For high-frequency applications, we use combination shielding (aluminum foil + braid) to cover both low and high-frequency interference." },
  { q: "How do you test hermetic seals?", a: "Depending on your specification, we use pressure decay testing or helium leak testing. Test results and leak rates are documented and provided with the COC." },
  { q: "Can you do custom drain wire routing?", a: "Yes. Shield drain wires can be terminated exactly to your schematic — tied to the connector shell for 360-degree grounding, routed to a specific pin, or left as a pigtail with a ring terminal for chassis ground." },
  { q: "Are MIL-SPEC components available?", a: "Yes. We are an ITAR-registered facility experienced in sourcing and assembling MIL-DTL series connectors and MIL-W/M22759 aerospace wire." },
  { q: "What potting materials do you use?", a: "We select potting compounds based on the operating environment — epoxies for rigid hermeticity, polyurethanes for moisture resistance, and silicones for high-temperature flexibility." },
  { q: "Do you build triaxial cables?", a: "Yes, we terminate triaxial cables for test and measurement applications requiring driven shields for high common-mode rejection." },
]

export default function ShieldedHermeticPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>Shielded &amp; Hermetic</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">High-coverage EMI shielded and hermetically sealed cable assemblies for aerospace, defense, and industrial environments. Built to MIL-SPEC or commercial standards.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Shielded &amp; Hermetic Cables</div>
              <h1 className="pp-hero__h">EMI Immune.<span className="muted">Pressure Rated.</span><span className="accent">Zero Leakage.</span></h1>
              <p className="pp-hero__desc">Cable assemblies designed for the harshest electromagnetic and physical environments. Up to 98% braid coverage, 360-degree shield termination, and hermetic sealing for vacuum and high-pressure applications.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/shielded-signal-cable-1.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">98%</div><div className="pp-hero__stat-lbl">Max Shielding</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">360°</div><div className="pp-hero__stat-lbl">Termination</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Leak</div><div className="pp-hero__stat-lbl">Tested</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">ITAR</div><div className="pp-hero__stat-lbl">Registered</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What Shielding Means Here</div>
          <h2 className="pp-meaning__h">A Broken Shield is an Antenna.<br />Termination is Everything.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">Using high-quality shielded cable is only half the battle. If the shield is improperly terminated at the connector—leaving gaps or pigtails that are too long—the shield becomes an antenna that radiates or absorbs EMI. We utilize 360-degree banding, precision solder sleeves, and proper drain wire routing to ensure your signal integrity is protected from end to end.</p>
            <p className="pp-meaning__text">For applications requiring RF signal routing, see <Link href="/products/coaxial-rf-microwave" className="pp-meaning__link">coaxial / RF / microwave</Link>. For assemblies requiring total environmental sealing without pressure differentials, see <Link href="/products/waterproof-harness" className="pp-meaning__link">waterproof harnesses</Link>. For high-speed data requiring absolute EMI immunity, see <Link href="/products/fiber-optic-twinax" className="pp-meaning__link">fiber optic & twinax</Link>.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/hermetic-connector-glass.webp" alt="Hermetic glass-to-metal sealed connector" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/braided-shield-termination.webp" alt="Braided shield termination" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/mil-spec-circular-connector.webp" alt="MIL-spec circular connector" className="pp-ov-gallery__img" loading="lazy" />
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
          <section className="pp-caps"><div className="pp-caps__inner"><div className="pp-caps__label">Shielding Capability Block</div><h2 className="pp-caps__h">Six Shielded &amp; Hermetic<br />Capabilities.</h2><div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div></div></section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs"><div className="pp-specs__inner"><div className="pp-specs__label">Specification Sheet</div><h2 className="pp-specs__h">Shielded / Hermetic Envelope.</h2><table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table></div></section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process"><div className="pp-process__inner"><div className="pp-process__label">Production Flow</div><h2 className="pp-process__h">Spec to Tested Cable.<br />Six Steps.</h2><div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div></div></section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases"><div className="pp-usecases__inner"><div className="pp-usecases__label">Application Map</div><h2 className="pp-usecases__h">Six Shielded Use Cases.</h2><div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div></div></section>
        <section className="pp-verticals"><div className="pp-verticals__inner"><div className="pp-verticals__label">Where It Ships</div><h2 className="pp-verticals__h">Shielded Verticals.</h2><div className="pp-verticals-grid"><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Aerospace &amp; Defense</div><div className="pp-verticals-grid__desc">MIL-SPEC assemblies for radar, avionics, and EW systems. ITAR registered facility.</div><Link href="/industries/aerospace-defense" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Industrial / Factory</div><div className="pp-verticals-grid__desc">EMI-immune cabling for automated factory equipment and variable frequency drives.</div><Link href="/industries/industrial-factory" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Medical Devices</div><div className="pp-verticals-grid__desc">Heavily shielded assemblies for MRI and ultrasound diagnostic imaging equipment.</div><Link href="/industries/medical-devices" className="pp-verticals-grid__link">See Industry →</Link></div></div></div></section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote"><div className="pp-quote__inner"><div className="pp-quote__card"><div className="pp-quote__label">Engineering Note</div><p className="pp-quote__text">&ldquo;Hermetic sealing is unforgiving. A microscopic void in the potting compound or a poorly wetted glass-to-metal seal will inevitably lead to a leak under pressure or vacuum. We monitor curing profiles and verify with strict leak testing because visual inspection is never enough for hermeticity.&rdquo;</p><div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">Advanced Assembly Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div></div></div></section>
        <FAQAccordion label="Shielded / Hermetic FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related"><div className="pp-related__inner"><div className="pp-related__label">Related Assemblies</div><h2 className="pp-related__h">Performance Variants.</h2><div className="pp-related-grid"><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg><div className="pp-related-grid__title">Coaxial / RF Assemblies</div><div className="pp-related-grid__desc">High-frequency coaxial assemblies with precision SMA, N-type, and BNC termination.</div><Link href="/products/coaxial-rf-microwave" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div className="pp-related-grid__title">Waterproof Harnesses</div><div className="pp-related-grid__desc">IP67/IP68 sealed assemblies for marine, outdoor, and heavy equipment environments.</div><Link href="/products/waterproof-harness" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg><div className="pp-related-grid__title">Ethernet &amp; USB</div><div className="pp-related-grid__desc">Shielded Cat6A, Cat8, and USB assemblies for data integrity in noisy industrial settings.</div><Link href="/products/ethernet-usb" className="pp-related-grid__link">Read More →</Link></div></div></div></section>
          </>
        )},
      ]} />
    </div>
  )
}