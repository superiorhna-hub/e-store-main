import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Coaxial / RF / Microwave Cable Assemblies | Superior Harness & Assembly",
  description: "High-frequency coaxial, RF, and microwave cable assemblies DC to 40+ GHz. SMA, N-type, BNC, TNC termination. VSWR characterized.",
}

const CAPS = [
  { title: "Low-Loss Coaxial Cable Selection", desc: "RG, LMR, PTFE semi-rigid, and phase-stable cable types selected to match your frequency, insertion loss budget, and flex requirement. We stock and work with Belden, Times Microwave, and Huber+Suhner cable." },
  { title: "Precision RF Connector Termination", desc: "SMA, N-type, BNC, TNC, SMP, 2.92mm, 2.4mm, and 1.85mm connector termination. Solder and crimp termination methods per connector design. Torque-spec controlled at assembly to prevent VSWR degradation." },
  { title: "Phase-Matched Cable Sets", desc: "Phase-matched cable sets for antenna arrays, phased-array radar, and beamforming applications. Electrical length matched to ±1° phase at your frequency on request. Sets shipped with measured phase data." },
  { title: "Semi-Rigid & Hand-Formable", desc: "Semi-rigid PTFE-dielectric coaxial cable formed to your 3D routing path. Hand-formable versions for applications requiring field repositionability. Custom-length sets available." },
  { title: "Network Analyzer Characterization", desc: "Insertion loss and VSWR characterization data provided with assemblies where required. Measurements performed on calibrated vector network analyzer. S-parameter data in Touchstone format on request." },
  { title: "EMI Shielded Cable Assemblies", desc: "High-coverage tinned-copper braid at 90–98% coverage for EMI-sensitive signal lines. Triaxial cable assemblies for high-common-mode-rejection requirements in test and measurement applications." },
]

const SPECS = [
  { k: "Frequency Range", v: "DC to 40+ GHz (connector and cable dependent)" },
  { k: "Cable Types", v: "RG-58/174/316/402, LMR-100/200/400, PTFE semi-rigid, hand-formable" },
  { k: "Connectors", v: "SMA, N-type, BNC, TNC, SMP, 2.92mm, 2.4mm, 1.85mm, custom" },
  { k: "Termination", v: "Solder (silver-plated), crimp, compression — per connector specification" },
  { k: "VSWR", v: "Per connector and cable specification · Characterized on calibrated VNA on request" },
  { k: "Insertion Loss", v: "Per cable type and length · S-parameter data in Touchstone format available" },
  { k: "Shielding", v: "95–98% braid coverage standard · Triaxial available for high-CMR applications" },
  { k: "Phase Matching", v: "±1° at specified frequency · Measured set data included" },
  { k: "Lead Time", v: "Prototype 3–7 days · Production 5–15 days" },
  { k: "MOQ", v: "1 unit (prototype) · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Frequency & Loss Budget", desc: "Submit your frequency range, insertion loss budget, VSWR requirement, and connector type. Engineering selects cable and connector combination to meet your RF specification." },
  { n: "02", title: "Cable Preparation", desc: "Coaxial cable cut to length, dielectric trimmed to dimension, and center conductor prepared per connector solder or crimp drawing. Semi-rigid cable formed to your 3D routing path." },
  { n: "03", title: "Connector Termination", desc: "Connector soldered or crimped per manufacturer's procedure and torque specification. Inner conductor protrusion measured per connector design. No visual assumption — dimensional verification." },
  { n: "04", title: "VNA Characterization", desc: "Assemblies measured on calibrated vector network analyzer. Insertion loss and VSWR verified against your requirement. Phase measured on phase-matched sets. Data recorded per assembly serial number." },
  { n: "05", title: "Visual Inspection", desc: "Connector condition, solder fillet quality, outer conductor termination, and cable jacket integrity inspected per IPC/WHMA-A-620. Torque mark applied to connector mating interface." },
  { n: "06", title: "Data Package & Ship", desc: "COC with VNA characterization data (on request). S-parameter files in Touchstone format. Phase-matched sets shipped as a labeled group with individual measured data." },
]

const USECASES = [
  { title: "Test & Measurement", desc: "Interconnect cables for spectrum analyzers, signal generators, oscilloscopes, and network analyzers. Phase-stable construction for characterization work. DC to 40 GHz capability." },
  { title: "Defense & Radar", desc: "MIL-SPEC RG-type and PTFE semi-rigid cable assemblies for radar, electronic warfare, and communications systems. ITAR-registered facility. Phase-matched array feed cables." },
  { title: "Broadcast & Studio", desc: "BNC and N-type video and audio interconnects for broadcast infrastructure, production switchers, and routing systems. 75Ω and 50Ω impedance options." },
  { title: "Satellite & Telecom", desc: "N-type and SMA assemblies for antenna feedlines, LNA interconnects, and base station internal RF routing. Low-loss LMR-400 and HELIAX options for long-run applications." },
  { title: "Medical Imaging", desc: "Coaxial cable assemblies for ultrasound transducer arrays and MRI gradient coil wiring. PTFE insulation for biocompatibility. Phase-matched transducer element cables." },
  { title: "Semiconductor & ATE", desc: "Semi-rigid and precision flexible coaxial assemblies for ATE probe cards, wafer-level test systems, and RF semiconductor characterization. 2.4mm and 2.92mm connector options." },
]

const FAQS = [
  { q: "What frequency range do your RF cable assemblies cover?", a: "DC to 40 GHz with standard SMA and 2.92mm (K) connectors. 2.4mm connectors extend to 50 GHz and 1.85mm (V) connectors to 67 GHz. The cable type limits the upper frequency — we select the cable based on your frequency, loss budget, and flex requirement and confirm the usable bandwidth with the quote." },
  { q: "Do you provide VNA characterization data?", a: "Yes. Insertion loss and VSWR characterization on a calibrated vector network analyzer is available for RF assemblies where data is required. S-parameter data is provided in Touchstone (SNP) format for direct import into RF simulation tools. Measurement frequency range and calibration frequency are specified on the data sheet." },
  { q: "Can you build phase-matched cable sets?", a: "Yes. Phase-matched cable sets are available for antenna arrays, phased-array radar, and beamforming applications. Electrical length is matched to ±1° at your specified frequency. Each cable in the set is measured individually and shipped with the measured phase data. Matching tolerance tighter than ±1° is achievable on request with longer production lead time." },
  { q: "What is the difference between semi-rigid and hand-formable coax?", a: "Semi-rigid coaxial cable uses a solid outer conductor (typically bare copper) and holds the shape it is formed to permanently. It is the most dimensionally stable option for fixed RF paths. Hand-formable coaxial cable uses a stranded or spiral outer conductor and can be repositioned in the field without cracking. Semi-rigid is preferred where long-term phase stability is critical. Hand-formable is used where field routing changes may be needed." },
  { q: "What connector torque specification do you use?", a: "Connector torque is applied per the connector manufacturer's torque specification, which varies by connector type, material, and mating interface size. For SMA stainless, 3–5 in-lb is standard. For N-type, 15 in-lb. A torque mark is applied to the connector mating interface so under-torque is detectable during incoming inspection. We do not hand-tighten and check — we use a calibrated torque driver on every assembly." },
  { q: "Can you build with both standard and custom connectors?", a: "Standard RF connectors (SMA, N, BNC, TNC, SMP, and frequency-specific types) are in-house stock. Custom RF connectors can be built from customer-supplied hardware or sourced to your part number. We require a mechanical drawing and electrical specification for any non-standard connector to verify compatibility with the cable selection and termination method." },
]

export default function CoaxialRFMicrowavePage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>Coaxial / RF / Microwave</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">High-frequency coaxial cable assemblies DC to 40+ GHz. SMA, N-type, BNC, TNC, 2.92mm, 2.4mm termination. VSWR characterized on calibrated VNA. Phase-matched sets available.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Coaxial / RF / Microwave</div>
              <h1 className="pp-hero__h">DC to 40 GHz.<span className="muted">VSWR Characterized.</span><span className="accent">Precision Terminated.</span></h1>
              <p className="pp-hero__desc">High-frequency cable assemblies for test & measurement, defense, broadcast, telecom, and medical imaging. Low-loss cable selection, precision connector termination, and VNA characterization on request.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/shielded-signal-cable-1.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">40+ GHz</div><div className="pp-hero__stat-lbl">Frequency Range</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">VNA</div><div className="pp-hero__stat-lbl">Characterized</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">±1°</div><div className="pp-hero__stat-lbl">Phase Match</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">1 Pc</div><div className="pp-hero__stat-lbl">Min. Order</div></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What Precision Termination Means Here</div>
          <h2 className="pp-meaning__h">VSWR Is a Measurement,<br />Not a Marketing Claim.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">An RF cable assembly terminated without dimensional verification of the inner conductor protrusion will have a VSWR bump at the connector interface that does not show up in a DC continuity test — only in a VNA sweep at frequency. The difference between a 1.3:1 VSWR and a 1.05:1 VSWR at 10 GHz is the difference between a cable assembly that meets your system noise figure and one that limits your receiver sensitivity. We measure — we do not assume.</p>
            <p className="pp-meaning__text">For RF assemblies requiring EMI shielding in parallel with signal routing, see <Link href="/products/shielded-hermetic" className="pp-meaning__link">shielded cable assemblies</Link> for high-coverage braid options. For Ethernet and USB data assemblies with less stringent RF requirements, see <Link href="/products/ethernet-usb" className="pp-meaning__link">Ethernet & USB</Link>. For fiber optic alternatives where EMI immunity is required without frequency constraints, see <Link href="/products/fiber-optic-twinax" className="pp-meaning__link">fiber optic & twinax</Link>.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/coaxial-hero.webp" alt="Coaxial RF cable assemblies" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/rf-cable-sma-bnc.webp" alt="SMA and BNC RF connectors" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/coaxial-cross-section.webp" alt="Coaxial cable cross section" className="pp-ov-gallery__img" loading="lazy" />
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
          <section className="pp-caps"><div className="pp-caps__inner"><div className="pp-caps__label">RF Capability Block</div><h2 className="pp-caps__h">Six RF Assembly<br />Capabilities.</h2><div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div></div></section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs"><div className="pp-specs__inner"><div className="pp-specs__label">Specification Sheet</div><h2 className="pp-specs__h">RF Cable Assembly Envelope.</h2><table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table></div></section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process"><div className="pp-process__inner"><div className="pp-process__label">RF Production Flow</div><h2 className="pp-process__h">Spec to VNA-Verified.</h2><div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div></div></section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases"><div className="pp-usecases__inner"><div className="pp-usecases__label">Application Map</div><h2 className="pp-usecases__h">Six RF Use Cases.</h2><div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div></div></section>
        <section className="pp-verticals"><div className="pp-verticals__inner"><div className="pp-verticals__label">RF Verticals</div><h2 className="pp-verticals__h">Six RF Markets.</h2><div className="pp-verticals-grid"><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Aerospace &amp; Defense</div><div className="pp-verticals-grid__desc">MIL-SPEC coaxial and phase-matched radar and EW cable assemblies. ITAR registered.</div><Link href="/industries/aerospace-defense" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Medical Devices</div><div className="pp-verticals-grid__desc">Ultrasound transducer and imaging coaxial arrays with biocompatible materials.</div><Link href="/industries/medical-devices" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Industrial / Factory</div><div className="pp-verticals-grid__desc">Industrial wireless infrastructure and field instrument RF cabling for factory automation.</div><Link href="/industries/industrial-factory" className="pp-verticals-grid__link">See Industry →</Link></div></div></div></section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote"><div className="pp-quote__inner"><div className="pp-quote__card"><div className="pp-quote__label">RF Engineering Note</div><p className="pp-quote__text">&ldquo;An SMA connector torqued 2 in-lb below spec introduces a mating interface gap that shows up as a VSWR bump at 8 GHz. A center conductor trimmed 0.1 mm too long produces a capacitive discontinuity that rolls off gain above 12 GHz. These are not assembly defects — they are dimensional deviations that only a VNA measurement at frequency will catch.&rdquo;</p><div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">RF Assembly Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div></div></div></section>
        <FAQAccordion label="RF Cable FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related"><div className="pp-related__inner"><div className="pp-related__label">Related Assemblies</div><h2 className="pp-related__h">Signal Integrity Variants.</h2><div className="pp-related-grid"><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2"/><path d="M12 8v4l3 3"/></svg><div className="pp-related-grid__title">Fiber Optic &amp; Twinax</div><div className="pp-related-grid__desc">EMI-immune high-speed interconnects for data center, telecom, and industrial applications.</div><Link href="/products/fiber-optic-twinax" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg><div className="pp-related-grid__title">Shielded / Hermetic</div><div className="pp-related-grid__desc">High-coverage EMI-shielded and hermetically-sealed assemblies for harsh-environment RF applications.</div><Link href="/products/shielded-hermetic" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg><div className="pp-related-grid__title">Ethernet &amp; USB</div><div className="pp-related-grid__desc">Cat5e through Cat8 and USB assemblies for lower-frequency data applications up to 40 Gbps.</div><Link href="/products/ethernet-usb" className="pp-related-grid__link">Read More →</Link></div></div></div></section>
          </>
        )},
      ]} />
    </div>
  )
}