import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Fiber Optic & Twinax Cable Assemblies | Superior Harness & Assembly",
  description: "Single-mode and multi-mode fiber optic assemblies. LC, SC, MPO/MTP termination. OTDR tested. Twinax for short-reach 25G/100G.",
}

const CAPS = [
  { title: "Single-Mode & Multi-Mode Fiber", desc: "OS2 single-mode for long-distance, high-bandwidth applications. OM3, OM4, and OM5 multi-mode for data center short-run applications. Fiber type selected based on your distance and wavelength requirements." },
  { title: "LC, SC, ST, MPO/MTP Termination", desc: "LC duplex and single, SC, ST, FC, and MPO/MTP connector termination. MPO/MTP polarity Type A, B, and C. Pin and pinless MPO on request. PC, UPC, and APC polish on all applicable connector types." },
  { title: "Ribbon Fiber & High-Density MPO", desc: "Ribbon fiber assemblies for structured cabling and data center trunk cable deployment. 12-fiber and 24-fiber MPO/MTP trunk assemblies for high-density cassette panels." },
  { title: "OTDR Testing", desc: "Optical time-domain reflectometer testing available for single-mode assemblies. Splice loss, return loss, and fiber continuity characterized. Test results in industry-standard OTDR report format." },
  { title: "Insertion Loss Measurement", desc: "Insertion loss measured per IEC 61300-3-4 on all assemblies where certification is required. Pass/fail to TIA-568 or your specified loss budget. Results provided with COC for system commissioning documentation." },
  { title: "Direct Attach Twinax (DAC)", desc: "Direct attach copper twinax cables for 10G, 25G, 40G, and 100G switch-to-switch and switch-to-NIC connections. SFP+, QSFP+, QSFP28 connector options. Lengths from 0.5 m to 7 m active cable." },
]

const SPECS = [
  { k: "Fiber Types", v: "OS2 single-mode · OM3, OM4, OM5 multi-mode" },
  { k: "Connectors", v: "LC, SC, ST, FC, MPO/MTP (12F, 24F), E2000 — PC, UPC, APC polish" },
  { k: "Wavelength Support", v: "850 nm (OM3/OM4), 1310 nm / 1550 nm (OS2), CWDM/DWDM wavelengths" },
  { k: "Insertion Loss", v: "LC UPC: ≤0.35 dB · MPO APC: ≤0.35 dB · SC UPC: ≤0.35 dB" },
  { k: "Return Loss", v: "PC: ≥26 dB · UPC: ≥50 dB · APC: ≥60 dB" },
  { k: "OTDR Testing", v: "Available on single-mode assemblies — IEC 61300-3-4 procedure" },
  { k: "Twinax (DAC)", v: "SFP+, QSFP+, QSFP28 · 10G, 25G, 40G, 100G · 0.5–7 m" },
  { k: "Length Range", v: "0.5 m to 1,000 m fiber · 0.5 m to 7 m DAC twinax" },
  { k: "Lead Time", v: "Standard 1–5 days · MPO trunk 5–10 days · DAC 3–7 days" },
  { k: "MOQ", v: "1 unit · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Link Budget Review", desc: "Submit fiber type, connector type, length, and loss budget. Engineering verifies that the selected fiber and connector combination meets your link budget including connector insertion loss." },
  { n: "02", title: "Fiber Preparation", desc: "Fiber cable cut to length. Buffer or jacket stripped to dimension. Fiber cleaved for direct termination or prepared for splice." },
  { n: "03", title: "Connector Termination", desc: "Connector epoxied, cured, and polished per IEC 61300-3-4 procedure. End-face geometry verified on interferometric surface profiler. PC, UPC, or APC geometry confirmed before insertion loss test." },
  { n: "04", title: "End-Face Inspection", desc: "100% end-face inspection on fiber interferometric microscope. Scratches, chips, and contamination detected and rejected before loss measurement. IEC 61300-3-35 cleanliness standard applied." },
  { n: "05", title: "Insertion Loss & IL Test", desc: "Insertion loss measured per IEC 61300-3-4 on calibrated light source and power meter. MPO assemblies measured on polarity-verified test set. Results logged per assembly serial number." },
  { n: "06", title: "OTDR & Documentation", desc: "OTDR trace on single-mode assemblies on request. COC with IL test data. OTDR report in standard format for system commissioning. Pass/fail against TIA-568 or your loss budget." },
]

const USECASES = [
  { title: "Data Center Structured Cabling", desc: "OM4 LC duplex assemblies for server rack to switch connections. MPO/MTP trunk assemblies for cassette panel deployment. OS2 for long-run inter-row and inter-building links." },
  { title: "Telecom & Carrier Networks", desc: "OS2 single-mode assemblies for central office, outside plant, and DWDM amplifier interconnects. APC connectors for low return-loss applications." },
  { title: "Industrial Fiber Networks", desc: "Hardened fiber assemblies for industrial switches, motor drives, and process control networks. Armored fiber cable options for mechanical protection in plant floor environments." },
  { title: "Defense & Military", desc: "Tactical fiber assemblies for field communication, radar feed, and vehicle communications systems. MIL-SPEC ruggedized connector options. TEMPEST-compatible assemblies on request." },
  { title: "Medical Imaging", desc: "Fiber assemblies for endoscope light guides and surgical imaging systems. Biocompatible jacketing options. High-purity fiber for imaging quality requirements." },
  { title: "Direct Attach (DAC) for HPC", desc: "QSFP28 100G and QSFP-DD 400G direct attach copper twinax for HPC cluster interconnects and AI training infrastructure. Low latency versus AOC. Custom lengths for optimized rack-scale routing." },
]

const FAQS = [
  { q: "When should I use single-mode vs multi-mode fiber?", a: "Multi-mode (OM3, OM4, OM5) supports higher bandwidth at shorter distances — OM4 supports 100G up to 150 m and 400G up to 100 m at 850 nm. Single-mode (OS2) supports the same bandwidth to virtually unlimited distance and is required for runs beyond 150 m or for CWDM/DWDM wavelength multiplexing. Multi-mode costs less for transceivers at short distances; single-mode is the standard for any run longer than a building floor." },
  { q: "What is the difference between UPC and APC polish?", a: "UPC (ultra physical contact) has a flat face geometry — return loss ≥50 dB. APC (angled physical contact) has an 8° angled face — return loss ≥60 dB. APC is required for long-haul single-mode and DWDM systems where reflections degrade system performance. UPC is standard for multi-mode and general single-mode applications. APC and UPC connectors are physically incompatible — use consistent polish within a link." },
  { q: "Do you test fiber assemblies for insertion loss?", a: "Yes — insertion loss is measured on every fiber assembly using calibrated light source and power meter per IEC 61300-3-4. Pass/fail is applied against TIA-568 Class 1 limits (≤0.35 dB per connector for LC and SC) or your specified loss budget. Test results are included with the COC. OTDR measurement is available on single-mode assemblies for systems requiring splice loss characterization." },
  { q: "What MPO polarity types do you support?", a: "Type A (straight), Type B (flipped), and Type C (pair-flipped) polarity all supported. Pin and pinless MPO on request. Polarity is documented on the assembly COC and verified on our MPO polarity test set before shipment. Polarity errors are the most common installation failure point on MPO trunk systems — we verify before the assemblies leave our floor." },
  { q: "What are DAC twinax cables and when should I use them?", a: "Direct attach copper (DAC) twinax cables connect SFP+, QSFP+, or QSFP28 ports directly with a passive copper cable assembly — no transceiver optics required. They are lower cost and lower latency than active optical cables for lengths up to 5 m. For lengths over 5 m or applications requiring EMI immunity, active optical cable (AOC) or fiber is the correct solution. We build both DAC and AOC assemblies." },
  { q: "Can you build armored fiber cable assemblies?", a: "Yes. Interlocked steel or aluminum armored fiber cable is available for plant floor, outdoor, and direct burial applications requiring mechanical protection against crushing, rodent damage, and dig-in. Armored cable assemblies are terminated with standard LC, SC, or MPO connectors — the armor affects the cable construction, not the connector." },
]

export default function FiberOpticTwinaxPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>Fiber Optic &amp; Twinax</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">Single-mode and multi-mode fiber optic assemblies. LC, SC, MPO/MTP termination. 100% insertion loss tested per IEC 61300-3-4. Twinax DAC for 10G–400G short-reach applications.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Fiber Optic &amp; Twinax</div>
              <h1 className="pp-hero__h">Single-Mode.<span className="muted">Multi-Mode.</span><span className="accent">Precision Polished.</span></h1>
              <p className="pp-hero__desc">Fiber optic assemblies for data center, telecom, industrial, defense, and medical imaging applications. 100% insertion loss tested. MPO/MTP trunk assemblies, armored fiber, and DAC twinax cables available.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/shielded-signal-cable-2.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">OS2/OM5</div><div className="pp-hero__stat-lbl">Fiber Types</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">≤0.35 dB</div><div className="pp-hero__stat-lbl">Insertion Loss</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">MPO/MTP</div><div className="pp-hero__stat-lbl">Trunk Capable</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">400G</div><div className="pp-hero__stat-lbl">DAC Support</div></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What Fiber Quality Means Here</div>
          <h2 className="pp-meaning__h">End-Face Contamination<br />Is the Top Failure Mode.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">Sixty percent of fiber optic link failures trace back to dirty or damaged fiber end faces — not broken cable, not faulty transceivers. A particle of dust 1 micron in diameter at the fiber core interface can attenuate a 10G signal by 3 dB and saturate a 100G receiver. We inspect every fiber end face on an IEC 61300-3-35 compliant interferometric microscope before insertion loss measurement — visual inspection alone does not detect sub-micron contamination.</p>
            <p className="pp-meaning__text">For applications where EMI immunity is required but optical fiber is not practical — short rack-to-rack runs requiring flexibility — see <Link href="/products/ethernet-usb" className="pp-meaning__link">Ethernet & USB</Link> for shielded Cat6A. For RF applications in the same frequency range, see <Link href="/products/coaxial-rf-microwave" className="pp-meaning__link">coaxial / RF / microwave</Link>. For high-current power applications that often run parallel to fiber in infrastructure projects, see <Link href="/products/power-battery" className="pp-meaning__link">power & battery cables</Link>.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/fiber-optic-lc-connectors.webp" alt="LC fiber optic connectors" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/twinax-dac-cable.webp" alt="Twinax DAC cable with SFP+" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/fiber-optic-bundle.webp" alt="Fiber optic cable bundle" className="pp-ov-gallery__img" loading="lazy" />
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
          <section className="pp-caps"><div className="pp-caps__inner"><div className="pp-caps__label">Fiber Capability Block</div><h2 className="pp-caps__h">Six Fiber Assembly<br />Capabilities.</h2><div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10"/><path d="M2 12h20"/><path d="M12 2v20"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div></div></section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs"><div className="pp-specs__inner"><div className="pp-specs__label">Specification Sheet</div><h2 className="pp-specs__h">Fiber Optic Envelope.</h2><table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table></div></section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process"><div className="pp-process__inner"><div className="pp-process__label">Fiber Production Flow</div><h2 className="pp-process__h">Spec to IL-Tested.</h2><div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div></div></section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases"><div className="pp-usecases__inner"><div className="pp-usecases__label">Application Map</div><h2 className="pp-usecases__h">Six Fiber Use Cases.</h2><div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div></div></section>
        <section className="pp-verticals"><div className="pp-verticals__inner"><div className="pp-verticals__label">Fiber Verticals</div><h2 className="pp-verticals__h">Where Fiber Ships.</h2><div className="pp-verticals-grid"><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Industrial / Factory</div><div className="pp-verticals-grid__desc">Armored industrial fiber for harsh-environment switch and process control network connections.</div><Link href="/industries/industrial-factory" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Aerospace &amp; Defense</div><div className="pp-verticals-grid__desc">Tactical and avionics fiber assemblies with MIL-SPEC ruggedized connectors. ITAR registered.</div><Link href="/industries/aerospace-defense" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Medical Devices</div><div className="pp-verticals-grid__desc">Endoscope, imaging, and data acquisition fiber assemblies with biocompatible jacketing.</div><Link href="/industries/medical-devices" className="pp-verticals-grid__link">See Industry →</Link></div></div></div></section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote"><div className="pp-quote__inner"><div className="pp-quote__card"><div className="pp-quote__label">Fiber Quality Note</div><p className="pp-quote__text">&ldquo;A fiber end face that passes a 200× visual inspection can still fail an IL test if there is a sub-micron scratch in the mode field diameter area. We inspect every fiber on an interferometric surface profiler — not a handheld scope — before we run the IL measurement. That is the only way to guarantee the assembly loss is from the connector design, not from a handling artifact.&rdquo;</p><div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">Fiber Assembly Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div></div></div></section>
        <FAQAccordion label="Fiber Optic FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related"><div className="pp-related__inner"><div className="pp-related__label">High-Speed Alternatives</div><h2 className="pp-related__h">Related Assemblies.</h2><div className="pp-related-grid"><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg><div className="pp-related-grid__title">Ethernet &amp; USB</div><div className="pp-related-grid__desc">Cat6A and Cat8 copper assemblies for 10G/40G short-reach applications where fiber is not required.</div><Link href="/products/ethernet-usb" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49"/></svg><div className="pp-related-grid__title">Coaxial / RF</div><div className="pp-related-grid__desc">High-frequency coaxial assemblies for RF applications where coax is specified over fiber.</div><Link href="/products/coaxial-rf-microwave" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg><div className="pp-related-grid__title">Shielded / Hermetic</div><div className="pp-related-grid__desc">EMI-shielded cable assemblies for applications requiring copper with high interference rejection.</div><Link href="/products/shielded-hermetic" className="pp-related-grid__link">Read More →</Link></div></div></div></section>
          </>
        )},
      ]} />
    </div>
  )
}