import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Power & Battery Cable Assemblies | Superior Harness & Assembly",
  description: "High-current power and battery cable assemblies. Lugged terminations, XLPE insulation, 100% resistance test. EV, BESS, and industrial applications.",
}

const CAPS = [
  { title: "High-Current Conductor Selection", desc: "Fine-stranded copper conductors from AWG 10 through 4/0, selected for current density, temperature rating, and flex requirement. Ampacity verified against NEC, UL, and SAE tables for your operating conditions." },
  { title: "Lug & Ring Terminal Termination", desc: "Hydraulic crimp termination on copper compression lugs, ring terminals, and bus bar connectors. Crimp die size matched to conductor stranding for maximum conductor fill and pull-force. Every lug pull-tested after crimp." },
  { title: "XLPE & Silicone Insulation", desc: "XLPE insulation rated to 600V and 1000V for industrial and EV applications. Silicone insulation for high-temperature environments. Insulation voltage rating verified against system working voltage before material selection." },
  { title: "Heat-Shrink & Boot Protection", desc: "Adhesive-lined dual-wall heat-shrink applied over all lug terminations for moisture exclusion and mechanical protection. Colored boots for circuit polarity identification at installation. IP67 boot options available." },
  { title: "100% Resistance Test", desc: "Every power cable assembly resistance-tested before shipment. Termination resistance measured independently to detect high-resistance crimp joints that pass continuity testing but generate heat at operating current." },
  { title: "Safety Label & Documentation", desc: "Circuit polarity, voltage rating, and current capacity labeled per your wiring diagram. COC with resistance measurements and material documentation. UL listed material certs available for code compliance documentation." },
]

const SPECS = [
  { k: "Conductor Range", v: "AWG 10 to 4/0 AWG (copper, fine-stranded or rope-lay)" },
  { k: "Voltage Rating", v: "600V (UL 1015, UL 2251) · 1000V (XLPE, UL 4703) · Custom" },
  { k: "Current Capacity", v: "Per conductor gauge, temperature rating, and routing environment" },
  { k: "Insulation", v: "XLPE (600V/1000V), silicone, EPDM, PUR — UL listed" },
  { k: "Terminations", v: "Copper compression lugs, ring terminals, Anderson SB/SBX, RADSOK, custom" },
  { k: "Jacket", v: "PVC, XLPE, TPE — color-coded per circuit polarity convention" },
  { k: "Protection", v: "Adhesive-lined heat-shrink, IP67 boots, braided armor options" },
  { k: "Test Coverage", v: "100% resistance — termination and total circuit · Hi-pot on request" },
  { k: "Lead Time", v: "Prototype 3–7 days · Production 5–15 days" },
  { k: "MOQ", v: "1 unit · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Current & Thermal Review", desc: "Submit system voltage, continuous current, duty cycle, ambient temperature, and routing environment. Engineering selects conductor, insulation, and termination to meet your thermal and electrical budget." },
  { n: "02", title: "Material & Lug Staging", desc: "Conductor cut to length. Lug size and die verified against conductor stranding. Insulation stripped to precise stripping length per lug manufacturer's installation instruction." },
  { n: "03", title: "Hydraulic Crimp & Pull Test", desc: "Lug crimped with calibrated hydraulic tool at specified die position. Every lug pull-tested per IPC/WHMA-A-620 conductor retention table. Out-of-spec crimps reworked — not shipped." },
  { n: "04", title: "Heat-Shrink & Boot", desc: "Adhesive-lined dual-wall heat-shrink applied over lug shank and insulation transition. Boot or additional jacket applied where routing requires mechanical protection." },
  { n: "05", title: "100% Resistance Test", desc: "End-to-end resistance measured on every assembly. Lug-to-lug connection resistance measured independently. Results compared against calculated reference for the conductor gauge and length." },
  { n: "06", title: "Label & Document", desc: "Voltage rating, circuit ID, and polarity labeled per your wiring diagram. COC with resistance data and material certs. UL compliance statement available." },
]

const USECASES = [
  { title: "EV Battery Pack Interconnects", desc: "Cell group interconnects, module-to-module cables, and BMS sense wiring for EV battery packs. XLPE insulation to 1000V DC. UL 2251 compliant. Resistance matched within the pack." },
  { title: "EV Charging Infrastructure", desc: "AC and DC power cables for Level 2 and DC fast-charge station internal wiring. UL 2251 compliant. 600A capable. Flexible cable options for installation in tight conduit routing." },
  { title: "Energy Storage (BESS)", desc: "Battery energy storage rack power cables, string interconnects, and DC bus wiring. Resistance-matched sets for balanced pack charging. Large-format lug terminations to inverter DC terminals." },
  { title: "Industrial Power Distribution", desc: "Motor feed cables, welding lead assemblies, and generator output cables. XLPE or rubber insulation for industrial flex and temperature requirements. Current up to 1,000A on request." },
  { title: "Solar DC Combiner Wiring", desc: "DC combiner box to inverter power cables. UL 4703 PV wire, 1000V DC rated. MC4 or lug terminations. Resistance-matched string sets for balanced array performance." },
  { title: "Marine & Offshore Power", desc: "Bilge pump, windlass, bow thruster, and shore power cable assemblies. Tinned copper conductors for corrosion resistance. Marine-grade tinned lug terminations to ABYC E-11 standard." },
]

const FAQS = [
  { q: "What conductor sizes do you support?", a: "AWG 10 through 4/0 AWG fine-stranded and rope-lay copper. Fine-stranded conductors are used for applications requiring flex — EV charging cables, motor feeds, and installations where the cable will be moved. Rope-lay conductors for applications requiring maximum flexibility. Conductor selection is based on current capacity at your operating temperature, not just AWG." },
  { q: "Do you resistance-test every power cable?", a: "Yes. Every power cable assembly is resistance-tested before shipment — end-to-end total circuit resistance, and lug-to-conductor termination resistance measured independently. A cold-crimped lug can pass a 1A continuity check and still have 5× the contact resistance of a good crimp at operating current. We measure with enough current to detect resistance anomalies below the continuity test sensitivity." },
  { q: "What terminations do you offer?", a: "Copper compression lugs for bus bar and stud connections. Ring terminals for bolt-down installations. Anderson SB and SBX connectors for high-current disconnectable assemblies. Amphenol RADSOK for pin-and-socket high-current connector applications. We source and work with any high-current connector you specify — lug, socket, or custom." },
  { q: "Can you build XLPE-insulated cables to 1000V?", a: "Yes. XLPE insulation rated to 1000V DC is in-house stock for EV and BESS applications. UL 4703 rated for solar applications, UL 2251 rated for EV charging, and generic XLPE 1000V for industrial use. Insulation voltage rating is verified against your system working voltage before material is committed — we do not apply a 600V-rated insulation to a 1000V system." },
  { q: "What is your lead time for custom power cable assemblies?", a: "3–7 days for prototype builds with in-stock conductor and lug sizes. Production runs of standard power cable assemblies ship in 5–15 business days. Non-standard lugs or specialty connectors add procurement time — typically 3–5 business days for common Anderson, Amphenol, and RADSOK hardware." },
  { q: "Can you build resistance-matched cable sets for battery applications?", a: "Yes. For BESS and EV battery pack applications where resistance matching between parallel strings improves charging balance, we measure each cable assembly and match sets to within ±2% of the target resistance. Matched sets shipped as a labeled group with individual resistance measurements in the documentation package." },
]

export default function PowerBatteryPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>Power &amp; Battery</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">High-current power and battery cable assemblies AWG 10 through 4/0. Lug terminations, XLPE insulation to 1000V, 100% resistance test. Matched sets for EV and BESS applications.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Power &amp; Battery Cable Assemblies</div>
              <h1 className="pp-hero__h">High Current.<span className="muted">Lugged.</span><span className="accent">Resistance-Tested.</span></h1>
              <p className="pp-hero__desc">Power and battery cable assemblies for EV packs, BESS racks, charging infrastructure, and industrial power distribution. Hydraulic lug crimp, XLPE insulation, and 100% resistance measurement on every unit.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/power-db-block.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">1000V</div><div className="pp-hero__stat-lbl">Max Insulation</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">4/0 AWG</div><div className="pp-hero__stat-lbl">Max Conductor</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Resistance Tested</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">±2%</div><div className="pp-hero__stat-lbl">Match Tolerance</div></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What Power Cable Quality Means</div>
          <h2 className="pp-meaning__h">A Bad Crimp Passes Continuity.<br />It Fails at 200 Amps.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">A standard 1A continuity test will pass a cold-crimped lug with 50 milliohms of contact resistance. At 200 amps, that 50 milliohms generates 2 watts of heat at the terminal — enough to degrade the insulation and eventually cause a thermal event. The only way to detect a marginal crimp joint is a resistance measurement with enough resolution to see the difference between a 1 milliohm good crimp and a 50 milliohm marginal crimp.</p>
            <p className="pp-meaning__text">For applications requiring HV insulation on top of high current, see <Link href="/products/high-voltage-harness" className="pp-meaning__link">high-voltage harness</Link> — we stack the orange jacket and hipot test with the power cable construction. For waterproof power cables used in marine and outdoor applications, see <Link href="/products/waterproof-harness" className="pp-meaning__link">waterproof harness</Link> for the IP sealing method that works with heavy-gauge conductors.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/battery-cable-ring-terminals.webp" alt="Battery cable with ring terminals" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/power-cable-large-gauge.webp" alt="Large gauge power cable cross section" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/ev-charging-handle-cable.webp" alt="EV charging handle cable" className="pp-ov-gallery__img" loading="lazy" />
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
          <section className="pp-caps"><div className="pp-caps__inner"><div className="pp-caps__label">Power Cable Capability</div><h2 className="pp-caps__h">Six High-Current<br />Capabilities.</h2><div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div></div></section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs"><div className="pp-specs__inner"><div className="pp-specs__label">Specification Sheet</div><h2 className="pp-specs__h">Power Cable Envelope.</h2><table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table></div></section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process"><div className="pp-process__inner"><div className="pp-process__label">Power Cable Flow</div><h2 className="pp-process__h">Spec to Resistance-Verified.</h2><div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div></div></section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases"><div className="pp-usecases__inner"><div className="pp-usecases__label">Application Map</div><h2 className="pp-usecases__h">Six Power Cable<br />Use Cases.</h2><div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div></div></section>
        <section className="pp-verticals"><div className="pp-verticals__inner"><div className="pp-verticals__label">Power Cable Verticals</div><h2 className="pp-verticals__h">Where Power Cables Ship.</h2><div className="pp-verticals-grid"><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Automotive &amp; EV</div><div className="pp-verticals-grid__desc">EV battery pack interconnects, charging cables, and BMS wiring. XLPE 1000V, resistance matched.</div><Link href="/industries/automotive-ev" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Solar &amp; Energy</div><div className="pp-verticals-grid__desc">DC combiner wiring, BESS interconnects, and string cables. UL 4703 compliant to 1000V.</div><Link href="/industries/solar-energy" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Industrial / Factory</div><div className="pp-verticals-grid__desc">Motor feeds, welding leads, and generator output cables for 480V and 600V industrial systems.</div><Link href="/industries/industrial-factory" className="pp-verticals-grid__link">See Industry →</Link></div></div></div></section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote"><div className="pp-quote__inner"><div className="pp-quote__card"><div className="pp-quote__label">Power Cable Note</div><p className="pp-quote__text">&ldquo;A 4/0 AWG lug crimped with a general-purpose tool instead of the correct die pulls the insulation away from the lug barrel and leaves an air gap. At 300 amps, that gap is a moisture ingress point that corrodes to 200 milliohms in six months. We crimp with the correct die for every conductor size and pull-test every lug before heat-shrink is applied.&rdquo;</p><div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">Power Cable Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div></div></div></section>
        <FAQAccordion label="Power Cable FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related"><div className="pp-related__inner"><div className="pp-related__label">Related Assemblies</div><h2 className="pp-related__h">Power System Variants.</h2><div className="pp-related-grid"><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg><div className="pp-related-grid__title">High Voltage Harness</div><div className="pp-related-grid__desc">Orange-jacket HV harnesses to 1000V DC with HVIL integration and 100% hipot test.</div><Link href="/products/high-voltage-harness" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div className="pp-related-grid__title">Waterproof Power Cables</div><div className="pp-related-grid__desc">IP68-rated power cables for marine, outdoor, and EV charging applications.</div><Link href="/products/waterproof-harness" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/></svg><div className="pp-related-grid__title">Custom Wire Harness</div><div className="pp-related-grid__desc">Full harness assemblies combining power, signal, and control wiring in one build.</div><Link href="/products/custom-wire-harness" className="pp-related-grid__link">Read More →</Link></div></div></div></section>
          </>
        )},
      ]} />
    </div>
  )
}