import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "High Voltage Wire Harness | Superior Harness & Assembly",
  description: "HV wire harnesses up to 1000V DC for EV, BESS, and industrial power systems. Orange jacket, XLPE insulation, 100% hipot tested.",
}

const CAPS = [
  { title: "HV-Rated Insulation", desc: "XLPE, silicone, and EPDM insulation rated to 600V, 1000V, and 2000V AC. All wire selections matched to the system voltage, temperature rating, and flex requirement of your application." },
  { title: "Orange Jacketing", desc: "SAE J1654 orange jacket applied to all HV circuits per industry convention. Flame-retardant, UV-stable, and rated for the full operating temperature of the system." },
  { title: "Braided EMI Shielding", desc: "Tinned-copper braid at 85–98% coverage for HV traction cables requiring EMI control. Foil shield with drain wire available for signal lines running parallel to HV conductors." },
  { title: "HV Interlock (HVIL) Loop", desc: "High-voltage interlock loop wired per SAE J1742 and your system architecture. Interlock continuity verified independently of the HV circuits before shipment." },
  { title: "100% Hipot Test", desc: "Every high-voltage harness tested at 2× working voltage plus 1000V AC for 60 seconds minimum. Leakage gate set per IPC/WHMA-A-620 and your system dielectric specification." },
  { title: "UL Listed Materials", desc: "Wire, connectors, and insulation materials selected from UL-listed and SAE J3105 / IEC 62196 compliant stock. Material certs and compliance documentation available with first article." },
]

const SPECS = [
  { k: "Voltage Rating", v: "Up to 1000V DC / 600V AC (system voltage, not test voltage)" },
  { k: "Hipot Test Voltage", v: "2× working voltage + 1000V AC, 60 s minimum, 0.3 mA gate" },
  { k: "Wire Insulation", v: "XLPE (600V/1000V), silicone (600V), EPDM (600V) — UL listed" },
  { k: "Jacket Color", v: "Orange (SAE J1654 default) · Custom colors on quote" },
  { k: "Shielding", v: "Tinned-copper braid 85–98% coverage · Foil + drain available" },
  { k: "HV Connectors", v: "TE HVA series, Amphenol RADSOK, Anderson SB/SBX, custom" },
  { k: "Standards", v: "SAE J3105, IEC 62196, UL 2251, IPC/WHMA-A-620 Class 3" },
  { k: "Lead Time", v: "Prototype 5–10 days · Production 10–20 business days" },
  { k: "HVIL Integration", v: "SAE J1742 interlock loop wiring on request" },
  { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "System Voltage Review", desc: "Submit system voltage, current, duty cycle, and routing environment. Engineering confirms wire gauge, insulation voltage rating, and connector selection before build." },
  { n: "02", title: "Material Verification", desc: "All HV wire, terminals, and connectors verified against voltage and temperature ratings. UL certs pulled and filed with job traveler before cutting." },
  { n: "03", title: "HV Harness Build", desc: "Conductors cut, terminated, routed, and shielded per drawing. HVIL loop wired in the same operation. Orange jacket and conduit protection applied." },
  { n: "04", title: "100% Hipot Test", desc: "Every circuit hipot-tested at 2× working voltage + 1000V AC for 60 s minimum. Leakage gate set to your spec or 0.3 mA IPC default. Results logged per unit." },
  { n: "05", title: "Continuity & HVIL Check", desc: "Full continuity of all circuits including HVIL loop verified independently after hipot. Any anomaly holds the unit — no shipment without written disposition." },
  { n: "06", title: "Pack & Document", desc: "COC with hipot test log, material certs, and compliance statement shipped with each lot. HV safety labels applied per SAE J1654. Orange-flagged packaging." },
]

const USECASES = [
  { title: "EV Traction & Battery", desc: "Battery pack interconnects, motor/inverter traction cables, and auxiliary HV wiring for BEV and PHEV platforms. SAE J3105 compliant, orange jacket, full HVIL." },
  { title: "EV Charging Infrastructure", desc: "DC fast-charge station internal wiring and vehicle-side cable assemblies. IEC 62196 and UL 2251 compliance. Liquid-cooled conductor options for high-power charge." },
  { title: "Energy Storage Systems", desc: "BESS rack-level interconnects and string combiner wiring. 1000V DC rated, fuse-integrated options. Thermal management routing for enclosed battery enclosures." },
  { title: "Industrial Power Distribution", desc: "Drive feed cables, servo power wiring, and bus bar jumpers for 480V and 600V industrial systems. Oil-resistant jacket options for machine tool environments." },
  { title: "Solar Inverter Wiring", desc: "DC combiner-to-inverter wiring and transformer interconnects. UL 4703 and UL 2251 compliant. Single-point grounding topology per your system design." },
  { title: "Medical High-Voltage", desc: "X-ray generator and imaging system HV cable assemblies. Silicone insulation rated to 140 kV on custom builds. Full dielectric test and documentation package." },
]

const FAQS = [
  { q: "What voltage can you build to?", a: "Our standard HV product covers up to 1000V DC (system voltage). Hipot test voltage is 2× working voltage plus 1000V AC as a minimum. For specialized applications up to 140 kV (medical imaging, X-ray), we build with silicone insulation and custom test equipment. Submit your voltage and current requirements with the RFQ and we confirm the insulation and connector selection." },
  { q: "Does orange jacketing satisfy SAE requirements?", a: "Orange jacketing per SAE J1654 is required for high-voltage circuits in passenger vehicles as a visual hazard indicator. It does not substitute for insulation voltage rating — the insulation must be independently rated for the system voltage. We apply orange jacket over XLPE or silicone insulation rated to your working voltage as two separate functions." },
  { q: "What connectors do you use for HV applications?", a: "We stock and work with TE HVA series, Amphenol RADSOK, Anderson SB/SBX, and Molex Mega-Fit for standard EV voltages. For specialized applications, we source HV connectors from your AVL or specify them in the engineering review. High-voltage connector mating pairs are always tested together as a system, not as individual components." },
  { q: "Can you integrate an HVIL loop in the same harness?", a: "Yes — HVIL (high-voltage interlock loop) wiring is integrated into the same harness assembly per SAE J1742 and your system architecture. The HVIL loop is wired, verified, and documented separately from the HV power circuits to ensure loop integrity is independently confirmed before shipment." },
  { q: "What is your hipot test procedure?", a: "Every high-voltage harness is hipot-tested at 2× the system working voltage plus 1000V AC, applied for a minimum of 60 seconds per IPC/WHMA-A-620. The leakage current gate defaults to 0.3 mA unless your spec is more stringent. Test results are logged per unit serial number and provided in the COC. We do not sample-test HV harnesses — 100% coverage, every unit." },
  { q: "Do you provide material certifications for HV applications?", a: "Yes. Material certificates for wire, insulation, connectors, and jacketing are filed with the job traveler and available for customer review. UL listing numbers and voltage/temperature ratings are documented for each material. Compliance statements referencing SAE J3105, IEC 62196, and UL 2251 are included in the COC on request." },
]

export default function HighVoltageHarnessPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>High Voltage Harness</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">HV wire harnesses up to 1000V DC. Orange jacket, XLPE insulation, HVIL loop integration, 100% hipot at 2× working voltage + 1,000V AC. SAE J3105 and IEC 62196 compliant.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">High Voltage Wire Harness</div>
              <h1 className="pp-hero__h">600V. 800V. 1000V DC.<span className="muted">Hipot-Tested.</span><span className="accent">Every Unit.</span></h1>
              <p className="pp-hero__desc">High-voltage harnesses for EV traction, BESS, charging infrastructure, and industrial power. Orange jacket, XLPE insulation, HVIL loop wiring, and 100% dielectric test before every shipment.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/high-voltage-wiring-harness.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">1000V</div><div className="pp-hero__stat-lbl">Max DC Rating</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Orange</div><div className="pp-hero__stat-lbl">SAE J1654 Jacket</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Hipot Tested</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">HVIL</div><div className="pp-hero__stat-lbl">Loop Ready</div></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What High Voltage Means Here</div>
          <h2 className="pp-meaning__h">High Voltage Means<br />Zero Tolerance for Defect.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">A high-voltage harness that fails in an EV traction system or a BESS rack does not generate a warranty claim — it generates a safety incident. Every material, termination, and test parameter must be traceable to a voltage and temperature rating before the first unit ships. Orange jacket is a visual indicator, not an insulation rating. XLPE insulation at 1000V is the real protection, and the hipot test is the only way to verify it at the assembly level.</p>
            <p className="pp-meaning__text">If your application is also waterproof, see <Link href="/products/waterproof-harness" className="pp-meaning__link">waterproof harness</Link> — we stack IP sealing and HV insulation in a single build. For sealed high-current battery cables with lugged terminations, see <Link href="/products/power-battery" className="pp-meaning__link">power & battery cables</Link>. For the baseline custom harness without HV requirements, see <Link href="/products/custom-wire-harness" className="pp-meaning__link">custom wire harness</Link>.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/hv-orange-harness.webp" alt="High voltage orange harness" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/hipot-test-setup.webp" alt="Hipot dielectric withstand test" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/hv-battery-interconnect.webp" alt="HV battery interconnect cables" className="pp-ov-gallery__img" loading="lazy" />
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
          <section className="pp-caps"><div className="pp-caps__inner"><div className="pp-caps__label">HV Manufacturing Capability</div><h2 className="pp-caps__h">Six HV Processes.<br />One Certified Line.</h2><div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div></div></section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs"><div className="pp-specs__inner"><div className="pp-specs__label">Specification Sheet</div><h2 className="pp-specs__h">High Voltage Envelope.</h2><table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table></div></section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process"><div className="pp-process__inner"><div className="pp-process__label">HV Production Flow</div><h2 className="pp-process__h">Spec to Hipot-Verified.</h2><div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div></div></section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases"><div className="pp-usecases__inner"><div className="pp-usecases__label">Application Map</div><h2 className="pp-usecases__h">Six HV Use Cases.</h2><div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div></div></section>
        <section className="pp-verticals"><div className="pp-verticals__inner"><div className="pp-verticals__label">Where It Ships</div><h2 className="pp-verticals__h">HV Harness Verticals.</h2><div className="pp-verticals-grid"><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Automotive &amp; EV</div><div className="pp-verticals-grid__desc">EV traction, HVIL loop, orange-jacket body harnesses, and charging port wiring.</div><Link href="/industries/automotive-ev" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Solar &amp; Energy</div><div className="pp-verticals-grid__desc">DC combiner-to-inverter wiring and BESS rack interconnects to 1000V DC.</div><Link href="/industries/solar-energy" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Industrial / Factory</div><div className="pp-verticals-grid__desc">480V and 600V industrial drive feeds, servo power wiring, and transformer jumpers.</div><Link href="/industries/industrial-factory" className="pp-verticals-grid__link">See Industry →</Link></div></div></div></section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote"><div className="pp-quote__inner"><div className="pp-quote__card"><div className="pp-quote__label">Safety Note</div><p className="pp-quote__text">&ldquo;Orange jacket tells someone not to touch it. XLPE insulation at 1000V is what actually protects them. Hipot test is the only assembly-level proof that the insulation is intact after crimping, routing, and connectorization. We test every unit because sampling does not find the one defect that matters.&rdquo;</p><div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">Engineering Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div></div></div></section>
        <FAQAccordion label="HV Harness FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related"><div className="pp-related__inner"><div className="pp-related__label">Stack These On Top</div><h2 className="pp-related__h">Related Variants.</h2><div className="pp-related-grid"><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div className="pp-related-grid__title">Waterproof + HV Stack</div><div className="pp-related-grid__desc">Sealed high-voltage harnesses with IP67/IP68 rating stacked on top of 1000V insulation.</div><Link href="/products/waterproof-harness" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg><div className="pp-related-grid__title">Power &amp; Battery Cables</div><div className="pp-related-grid__desc">High-current battery interconnects with lug terminations for BESS and EV pack assemblies.</div><Link href="/products/power-battery" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg><div className="pp-related-grid__title">In-House Testing</div><div className="pp-related-grid__desc">Hipot station rated to 5,000V AC. Pull-force and resistance testing on every HV unit.</div><Link href="/capabilities" className="pp-related-grid__link">Read More →</Link></div></div></div></section>
          </>
        )},
      ]} />
    </div>
  )
}