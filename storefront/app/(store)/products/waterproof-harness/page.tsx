import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Waterproof Wire Harness | Superior Harness & Assembly",
  description: "IP67/IP68-rated sealed wire harnesses. Peripheral seals, wire-level seals, overmolded strain relief. 100% hipot tested.",
}

const CAPS = [
  { title: "Peripheral Connector Seals", desc: "Interfacial seals press into connector housings to block moisture at the connector face. Paired against the mating half per the connector manufacturer's IP rating." },
  { title: "Wire-Level Cavity Seals", desc: "Individual rubber plugs inserted into each conductor cavity seal around the wire jacket. Sized to actual jacket OD — not the nominal spec — to eliminate the pinhole failure mode." },
  { title: "Overmolded Strain Relief", desc: "TPE or PUR overmold applied over the wire-to-connector interface. Provides IP67/IP68 sealing plus mechanical strain relief in one operation using in-house tooling." },
  { title: "IP Immersion Validation", desc: "Submersion test at 1 m for 30 minutes on every new program first article. Production lots sample-tested. Zero tolerance for moisture ingress — no dry continuity workarounds." },
  { title: "Sealed Connector Library", desc: "Active stock of TE Deutsch DT/DTM/DTP, Weatherpack, Molex MX150, Amphenol AT, JST WPJ/WPK series. Cable seals, interfacial seals, and rear-mount boots paired on every build." },
  { title: "100% Hipot Test", desc: "Every waterproof harness hipot-tested at 1,500 V AC for 60 seconds with 0.3 mA leakage gate. Catches the microscopic seal pinholes that pass a dry continuity test and fail in the field." },
]

const SPECS = [
  { k: "IP Ratings", v: "IP54, IP67, IP68 (1 m / 30 min standard, extended on quote)" },
  { k: "Wire Gauge", v: "AWG 26 to AWG 8 · UL 1015, UL 4703, TE Raychem 55A high-temp" },
  { k: "Operating Temperature", v: "−40 °C to +125 °C standard · +200 °C with TE Raychem insulation" },
  { k: "Sealed Connectors", v: "TE Deutsch DT/DTM/DTP, Weatherpack, Molex MX150, Amphenol AT, JST WPJ/WPK" },
  { k: "Sealing Methods", v: "Peripheral seal + cavity plug · Epoxy back-pot · TPE/PUR overmold" },
  { k: "Cable Jackets", v: "TPE 65–95 Shore-A, PVC 80–95 Shore-A, PUR 90 Shore-A for marine" },
  { k: "Immersion Test", v: "1.0 m for 30 min (IP68) · Custom depth and duration on quote" },
  { k: "Hipot Test", v: "1,500 V AC / 60 s / 0.3 mA leakage gate · 100% of units" },
  { k: "Lead Time", v: "Sample 5–7 days (validation included) · Production 10–15 days" },
  { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Spec & DFM", desc: "Submit IP target, temperature range, immersion depth, and connector requirements. Engineering review issued in 24 hours with recommended sealing method." },
  { n: "02", title: "Seal Selection", desc: "Cable seals sized to measured jacket OD, not nominal spec. Interfacial seals matched to connector series. Drain wires and shield grounds routed per drawing." },
  { n: "03", title: "Harness Build", desc: "Wires cut, sealed, crimped, and loaded into connector housings. Wire seals inserted per cavity. Tooling torque specs followed for backshell and strain relief." },
  { n: "04", title: "IP Validation", desc: "First article: 1 m immersion for 30 min, then hipot at 1,500 V AC. Production: 100% hipot, sample immersion per AQL plan." },
  { n: "05", title: "Visual & Dimensional", desc: "All seal positions inspected, strain relief pull-tested, and connector latches verified. Wiring checked against schematic before label and pack." },
  { n: "06", title: "Pack & Ship", desc: "Sealed in poly bag with desiccant for marine and EV programs. COC with IP test report included. Same-day ship on emergency stock orders." },
]

const USECASES = [
  { title: "Marine & Bilge Systems", desc: "IP68 PUR-jacket harnesses with DT04 and DT06 Deutsch mating pairs. UV-stable TPE overmolds. 240-hour salt-fog validated for coastal and offshore deployments." },
  { title: "EV Charging Ports", desc: "IP67 mating plus IP55 retracted on charging gun assemblies. IEC 62196 sealing geometry. Liquid-cooled cable variants for high-power DC fast charge." },
  { title: "Outdoor IoT / Smart City", desc: "IP66/67 enclosure-mount harnesses for cellular gateways, lidar masts, and traffic sensors. M12 X-coded backbone. UV-resistant jacketing for rooftop exposure." },
  { title: "Agricultural Equipment", desc: "IP69K pressure-wash rated for tractors, combines, and sprayer controllers. Deutsch DT series sealed connectors. Operates through −40 °C cold starts." },
  { title: "HVAC & Refrigeration", desc: "IP67 harnesses for outdoor HVAC units, chiller controls, and walk-in cooler door controls. Condensation-rated seals. Low-temp flexible jacket options." },
  { title: "Construction Telematics", desc: "IP68 asset-tracking and telematics harnesses for excavators and articulated haul trucks. Deutsch DTM and J1939 CAN bus wiring with sealed connector topology." },
]

const FAQS = [
  { q: "How do I pick between IP67 and IP68?", a: "IP67 is dust-tight plus 1 m immersion for 30 minutes — covers 80% of outdoor and chassis sensor applications. IP68 is for sustained or repeated immersion beyond IP67 parameters — marine bilge, EV cooling loops, submersible pumps. Quote your actual depth and duration; the spec only sets the floor, not your application envelope." },
  { q: "What is the difference between a cavity plug and a peripheral seal?", a: "A cavity plug (wire seal) seals around each individual conductor inside the connector housing. A peripheral (interfacial) seal seals the connector face against the mating connector. Reliable IP-rated assemblies use both — one without the other leaves a leak path. Our standard process installs both per the connector manufacturer's sealing recommendation." },
  { q: "Do you test every unit or just the first article?", a: "Every waterproof harness is hipot-tested at 1,500 V AC for 60 seconds with a 0.3 mA leakage gate before shipment. Immersion testing is 100% on first-article builds. Production lots are immersion-tested per an AQL sampling plan unless your spec requires 100% immersion — available on request at additional cost." },
  { q: "What connectors do you stock for sealed applications?", a: "Active stock includes TE Deutsch DT/DTM/DTP, GM Weatherpack, Molex MX150 and MX64, Amphenol AT/ATP, JST WPJ/WPK, and Sumitomo HX-090 sealed series. Cable seals, interfacial seals, and rear-mount boots are stocked in paired sets. Custom sealed connectors can be sourced with 2–4 week lead time." },
  { q: "Can you build both waterproof and high-voltage in one harness?", a: "Yes — we run sealed high-voltage harnesses regularly for EV charging ports and battery management systems. The stack combines XLPE insulation with TPE overmold or epoxy back-pot sealing. Hipot parameters increase to match the HV rating. See the high-voltage harness page for voltage and insulation details, then specify both requirements together on your RFQ." },
  // Old: { q: "What is your lead time for a validated waterproof sample?", a: "Sample lead time including IP validation is 5–7 business days. This covers the harness build plus the 30-minute immersion test and hipot. If your program requires 240-hour salt-fog validation, add 10 business days for the test cycle. Production lead time after sample approval is 10–15 business days." },
  { q: "What is your lead time for a validated waterproof sample?", a: "Sample lead time including IP validation is 2–3 weeks. This covers the harness build plus the 30-minute immersion test and hipot. If your program requires 240-hour salt-fog validation, add 10 business days for the test cycle. Production lead time after sample approval is 10–15 business days." },
]

export default function WaterproofHarnessPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>Waterproof Harness</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">IP67/IP68-rated sealed harnesses built with peripheral seals, wire-level cavity plugs, and optional TPE overmold. Every unit hipot-tested at 1,500 V AC. Michigan-based, 5–7 day sample lead time with validation included.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Waterproof Wire Harness</div>
              <h1 className="pp-hero__h">IP67. IP68.<span className="muted">Sealed.</span><span className="accent">Hipot-Verified.</span></h1>
              <p className="pp-hero__desc">Sealed wire harnesses for marine sensors, EV charging ports, outdoor IoT, and washdown equipment. Peripheral seals, cavity plugs, and overmolded strain relief — validation runs in-house, no third-party lab queue.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/waterproof-deutsch-dt.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP68</div><div className="pp-hero__stat-lbl">Top Rating</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">1,500V</div><div className="pp-hero__stat-lbl">Hipot Test</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">−40/+125</div><div className="pp-hero__stat-lbl">Operating °C</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Units Tested</div></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What &quot;Waterproof&quot; Means Here</div>
          <h2 className="pp-meaning__h">IP Rating Is the Floor.<br />Field Life Is the Ceiling.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">IEC 60529 IP ratings describe a 30-minute lab test. A waterproof harness that passes IP67 in the lab can still corrode in the field if the wire seal size is wrong, the cable jacket loses elasticity at −20 °C, or the connector backshell has a tooling-line micro-channel. We build against actual environmental envelopes: temperature swing, UV exposure, chemical contact, and flex count — not just the IP digit.</p>
            <p className="pp-meaning__text">For builds where sealing is the dominant constraint, you are on the right page. If your harness is also high-voltage, see <Link href="/products/high-voltage-harness" className="pp-meaning__link">high-voltage harness</Link> — we stack the two specs. If sealing is delivered through TPE overmold rather than a connector seal, route via <Link href="/products/overmolded-harness" className="pp-meaning__link">overmolded harness</Link>. For the unconstrained custom baseline, see <Link href="/products/custom-wire-harness" className="pp-meaning__link">custom wire harness</Link>.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/waterproof-deutsch-dt.webp" alt="Waterproof Deutsch DT connector" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/ip67-spray-test.webp" alt="IP67 water spray test" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/outdoor-harness-installed.webp" alt="Outdoor waterproof harness installed" className="pp-ov-gallery__img" loading="lazy" />
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
          <div className="pp-caps__label">Sealing Capability Block</div>
          <h2 className="pp-caps__h">Three Tiers of Seal,<br />One Production Line.</h2>
          <div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div>
        </div>
      </section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs">
        <div className="pp-specs__inner">
          <div className="pp-specs__label">Specification Sheet</div>
          <h2 className="pp-specs__h">Waterproof Envelope.</h2>
          <table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table>
        </div>
      </section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process">
        <div className="pp-process__inner">
          <div className="pp-process__label">Validation-First Flow</div>
          <h2 className="pp-process__h">Spec to Sealed &amp; Shipped.</h2>
          <div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div>
        </div>
      </section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases">
        <div className="pp-usecases__inner">
          <div className="pp-usecases__label">Application Map</div>
          <h2 className="pp-usecases__h">Six Waterproof<br />Use Cases.</h2>
          <div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div>
        </div>
      </section>
        <section className="pp-verticals">
        <div className="pp-verticals__inner">
          <div className="pp-verticals__label">Where It Ships</div>
          <h2 className="pp-verticals__h">Waterproof Harness Verticals.</h2>
          <div className="pp-verticals-grid">
            <div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Automotive &amp; EV</div><div className="pp-verticals-grid__desc">EV charging, underbody sensors, door and body control. IP67 chassis, IP68 cooling-loop, IP69K wash-bay.</div><Link href="/industries/automotive-ev" className="pp-verticals-grid__link">See Industry →</Link></div>
            <div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Solar &amp; Energy</div><div className="pp-verticals-grid__desc">UL 4703 PV wire, MC4 connectorization, 25-year UV plus humidity-cycle validated.</div><Link href="/industries/solar-energy" className="pp-verticals-grid__link">See Industry →</Link></div>
            <div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Industrial / Factory</div><div className="pp-verticals-grid__desc">IP69K washdown for food, pharma, and beverage. M12 X-coded backbones for outdoor automation.</div><Link href="/industries/industrial-factory" className="pp-verticals-grid__link">See Industry →</Link></div>
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
            <div className="pp-quote__label">Engineering Note</div>
            <p className="pp-quote__text">&ldquo;The IP digit is the easy part. What kills field reliability is the wrong cable-seal size on a Deutsch DT — the connector passes the lab, but fails at month nine when the jacket shrinks in a Michigan winter. We size every seal against the measured jacket OD, not the spec sheet nominal. That is why our sealed harnesses come back for reorder, not warranty claims.&rdquo;</p>
            <div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">Engineering Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div>
          </div>
        </div>
      </section>
        <FAQAccordion label="Sealing FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related">
        <div className="pp-related__inner">
          <div className="pp-related__label">Stack These On Top</div>
          <h2 className="pp-related__h">Related Harness Variants.</h2>
          <div className="pp-related-grid">
            <div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><div className="pp-related-grid__title">Overmolded Harness</div><div className="pp-related-grid__desc">TPE/PUR liquid-injection overmold — the cleanest path to IP69K and 50K-cycle flex life.</div><Link href="/products/overmolded-harness" className="pp-related-grid__link">Read More →</Link></div>
            <div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg><div className="pp-related-grid__title">High-Voltage Harness</div><div className="pp-related-grid__desc">600V to 1,000V orange-jacket EV and BESS harnesses with 1,500V AC hipot 100% tested.</div><Link href="/products/high-voltage-harness" className="pp-related-grid__link">Read More →</Link></div>
            <div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg><div className="pp-related-grid__title">In-House Testing</div><div className="pp-related-grid__desc">Hipot, immersion tank, and pull-force testing — all in-house, no third-party lab delay.</div><Link href="/capabilities" className="pp-related-grid__link">Read More →</Link></div>
          </div>
        </div>
      </section>
          </>
        )},
      ]} />
    </div>
  )
}