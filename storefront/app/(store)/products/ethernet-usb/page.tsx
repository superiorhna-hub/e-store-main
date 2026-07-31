import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Ethernet & USB Cable Assemblies | Superior Harness & Assembly",
  description: "Custom Cat5e through Cat8 and USB 2.0 through USB-C cable assemblies. Tested for impedance, crosstalk, and continuity.",
}

const CAPS = [
  { title: "Cat5e Through Cat8 Assemblies", desc: "Standard patch and custom-length Ethernet assemblies to Cat5e (100 MHz), Cat6 (250 MHz), Cat6A (500 MHz), and Cat8 (2,000 MHz) specifications. UTP and STP options. RJ45 and Keystone connector terminations." },
  { title: "USB 2.0, 3.x, and USB-C", desc: "USB Type-A, Type-B, Mini, Micro, and USB-C assemblies in standard and custom lengths. USB 2.0, USB 3.0/3.1/3.2 Gen 1 and Gen 2. USB4 with active cable options for lengths over 2 m." },
  { title: "Industrial Ethernet (M12)", desc: "M12 X-coded and D-coded Ethernet connector assemblies for industrial automation, robotics, and harsh-environment networking. IP67 rated with M12 locking connector bodies." },
  { title: "Shielded & Unshielded Options", desc: "UTP for standard commercial environments. STP (S/FTP) with aluminum foil and braid shielding for high-EMI industrial installations. Drain wire terminated at shield ground per your grounding scheme." },
  { title: "Custom Lengths & Colors", desc: "Any custom length with ±2 mm accuracy. Any jacket color for cable management and circuit identification. Booted RJ45 connectors with color-matched or custom-color boots on request." },
  { title: "Electrical Test & Certification", desc: "Ethernet assemblies tested for wire map, continuity, and impedance. Cat6A and Cat8 crosstalk (NEXT) measurement available. USB assemblies tested for continuity, data signal integrity, and correct pin-out." },
]

const SPECS = [
  { k: "Ethernet Standards", v: "Cat5e (100 MHz), Cat6 (250 MHz), Cat6A (500 MHz), Cat8 (2,000 MHz)" },
  { k: "USB Standards", v: "USB 2.0, USB 3.0/3.1/3.2 Gen 1 & 2, USB-C, USB4 (active cable for >2 m)" },
  { k: "Max Data Rate", v: "Cat8: 40 Gbps · USB4: 40 Gbps · USB 3.2 Gen 2×2: 20 Gbps" },
  { k: "Shielding", v: "UTP (unshielded) and S/FTP (foil + braid) options" },
  { k: "Connectors", v: "RJ45, M12 X-coded/D-coded, USB-A/B/C/Mini/Micro, panel-mount options" },
  { k: "Jacket", v: "PVC standard · LSZH for plenum and marine · TPE for flex applications" },
  { k: "Length Range", v: "0.1 m to 100 m · ±2 mm accuracy" },
  { k: "Test Coverage", v: "Wire map, continuity, impedance · NEXT on Cat6A+ assemblies" },
  { k: "Lead Time", v: "Prototype 1–5 days · Production 5–10 business days" },
  { k: "MOQ", v: "1 unit · No production minimum" },
]

const PROCESS = [
  { n: "01", title: "Spec Submission", desc: "Submit cable standard (Cat5e–Cat8, USB type), length, connector type, and quantity. Drawing or sample accepted. Quote within 24 hours." },
  { n: "02", title: "Cable Procurement", desc: "Factory-grade bulk cable procured to specified standard. UL, ETL, or fluke certification on Cat6A and Cat8 runs confirmed before material commitment." },
  { n: "03", title: "Termination", desc: "Cable cut to exact length. Conductors individually terminated per T568B wiring standard (or T568A on request). USB assemblies terminated per USB-IF specification pinout." },
  { n: "04", title: "Connector Assembly", desc: "RJ45 connectors crimped with calibrated die. M12 connectors torqued to specification. USB connectors assembled and stress-relieved per USB-IF mechanical specification." },
  { n: "05", title: "Electrical Test", desc: "Wire map and continuity test on every unit. Impedance spot-check on production lots. Cat6A and Cat8 NEXT measurement on request. USB enumeration test on USB 3.x and USB-C assemblies." },
  { n: "06", title: "Label & Ship", desc: "Cable length, standard, and date code labeled. COC and test report included. Bundles zip-tied or reeled for volume shipments. Same-day ship on standard length in-stock assemblies." },
]

const USECASES = [
  { title: "Data Centers & Server Rooms", desc: "Patch cable assemblies for structured cabling, top-of-rack switch connections, and KVM infrastructure. Cat6A and Cat8 for 10G and 40G applications. Custom lengths for minimal cable management waste." },
  { title: "Industrial Automation", desc: "M12 X-coded Ethernet assemblies for robot arm, servo drive, and industrial switch connections. IP67 rated. Flex-rated cable for drag-chain and moving axis applications." },
  { title: "Medical Devices", desc: "USB and Ethernet assemblies for patient monitoring systems, diagnostic equipment, and data acquisition. LSZH jacket for healthcare environments. Biocompatible materials available." },
  { title: "Defense & Ground Systems", desc: "MIL-grade Ethernet and USB assemblies for vehicle electronics, ground support equipment, and mobile communications. Ruggedized backshell and strain relief. MIL-SPEC connector options." },
  { title: "Test & Measurement", desc: "USB instrument cables for oscilloscopes, power supplies, and data acquisition systems. Custom lengths for ATE rack integration. USB-C and USB 3.2 Gen 2 for high-speed data capture." },
  { title: "Smart Building & AV", desc: "Cat6A and Cat8 assemblies for AV over IP, PoE+ lighting, and building management system infrastructure. LSZH plenum-rated cable for air handling spaces. Custom lengths and color coding." },
]

const FAQS = [
  { q: "What is the difference between Cat6 and Cat6A?", a: "Cat6 supports 1 Gbps to 100 m and 10 Gbps to 55 m. Cat6A supports 10 Gbps to 100 m due to its augmented crosstalk specification — Cat6A is tighter on alien crosstalk between adjacent cables in a bundle. If you are running 10G beyond 55 m or in a high-cable-density installation, Cat6A is the correct specification. Cat8 supports 40 Gbps but only to 30 m — it is designed for data center top-of-rack applications." },
  { q: "Do you build M12 industrial Ethernet assemblies?", a: "Yes. M12 X-coded (Cat6A, 10G) and D-coded (100M) industrial Ethernet connector assemblies are in-house stock. IP67 rated connector bodies. Flex-rated cable for drag-chain and moving axis applications. M12 assemblies are tested for wire map and continuity per the industrial Ethernet standard." },
  { q: "Can you build USB-C assemblies?", a: "Yes — USB-C connector assemblies for USB 2.0, USB 3.1 Gen 1, USB 3.2 Gen 2, and USB4 are all available. USB4 requires active cable electronics for lengths over 2 m — passive cable is limited to 40 Gbps at lengths up to 0.8 m. We specify the correct cable and active/passive configuration based on your length and data rate requirements." },
  { q: "What tests do you run on Ethernet assemblies?", a: "Wire map (all 8 conductors correctly connected), continuity (no open or short), and pair impedance spot-check on every production lot. Cat6A and Cat8 NEXT (near-end crosstalk) measurement is available for certification documentation. All tests performed on calibrated Ethernet tester. Test results included with COC on request." },
  { q: "Can you build to T568A instead of T568B wiring?", a: "Yes — T568A or T568B wiring per your specification. T568B is the default for commercial installations in North America. T568A is required when connecting to existing T568A structured cabling or per network equipment specifications. Crossover wiring (T568A one end, T568B the other) available for legacy equipment interconnects." },
  { q: "Do you build LSZH (low smoke zero halogen) Ethernet cable?", a: "Yes. LSZH jacket cable is available for Cat5e through Cat6A in plenum and non-plenum grades. Required for healthcare environments, marine applications, and European installations. Specify LSZH on the RFQ and we confirm the cable manufacturer's UL or EN 50575 listing." },
]

export default function EthernetUSBPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>Ethernet &amp; USB</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">Custom Cat5e through Cat8 Ethernet and USB 2.0 through USB-C cable assemblies. Any length. Wire map, continuity, and impedance tested. Industrial M12 options.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Ethernet &amp; USB Cable Assemblies</div>
              <h1 className="pp-hero__h">Cat8. USB-C.<span className="muted">40 Gbps.</span><span className="accent">Custom Lengths.</span></h1>
              <p className="pp-hero__desc">Ethernet patch and trunk assemblies Cat5e through Cat8, USB assemblies 2.0 through USB-C, and industrial M12 connectors for harsh environments. Wire map and continuity tested on every unit.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/computer_wiring.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Cat8</div><div className="pp-hero__stat-lbl">Max Standard</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">40 Gbps</div><div className="pp-hero__stat-lbl">Max Data Rate</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">M12</div><div className="pp-hero__stat-lbl">Industrial Option</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Wire Map Tested</div></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What Data Cable Quality Means</div>
          <h2 className="pp-meaning__h">A Miswired Pair Passes<br />Continuity. It Fails at Speed.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">A split pair in a Cat6 cable — where conductors from two different pairs are routed together — has correct continuity at DC and passes at 10 Mbps but fails at 100 Mbps because the pair balance is disrupted. A wire map test catches this; a simple continuity test does not. We run wire map on every Ethernet assembly because the failure mode is data-rate-dependent, not a binary pass/fail at DC.</p>
            <p className="pp-meaning__text">For higher frequency requirements where coaxial cable is appropriate, see <Link href="/products/coaxial-rf-microwave" className="pp-meaning__link">coaxial / RF / microwave</Link>. For EMI-immune optical solutions, see <Link href="/products/fiber-optic-twinax" className="pp-meaning__link">fiber optic & twinax</Link>. For power delivery over cable requiring high-current conductors, see <Link href="/products/power-battery" className="pp-meaning__link">power & battery cables</Link>.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/cat8-cable-rj45.webp" alt="Cat8 ethernet cable with RJ45" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/usb-c-cable-assembly.webp" alt="USB-C cable assembly" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/patch-panel-neat.webp" alt="Patch panel cable management" className="pp-ov-gallery__img" loading="lazy" />
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
          <section className="pp-caps"><div className="pp-caps__inner"><div className="pp-caps__label">Data Cable Capability</div><h2 className="pp-caps__h">Six Ethernet &amp; USB<br />Capabilities.</h2><div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div></div></section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs"><div className="pp-specs__inner"><div className="pp-specs__label">Specification Sheet</div><h2 className="pp-specs__h">Data Cable Envelope.</h2><table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table></div></section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process"><div className="pp-process__inner"><div className="pp-process__label">Data Cable Flow</div><h2 className="pp-process__h">Spec to Wire-Map Tested.</h2><div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div></div></section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases"><div className="pp-usecases__inner"><div className="pp-usecases__label">Application Map</div><h2 className="pp-usecases__h">Six Data Cable<br />Use Cases.</h2><div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div></div></section>
        <section className="pp-verticals"><div className="pp-verticals__inner"><div className="pp-verticals__label">Data Cable Verticals</div><h2 className="pp-verticals__h">Where Data Cables Ship.</h2><div className="pp-verticals-grid"><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Industrial / Factory</div><div className="pp-verticals-grid__desc">M12 industrial Ethernet for robot, servo, and automation system connectivity in harsh environments.</div><Link href="/industries/industrial-factory" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Robotics &amp; Automation</div><div className="pp-verticals-grid__desc">Drag-chain rated Ethernet and USB assemblies for robot arm and linear axis data connections.</div><Link href="/industries/robotics-automation" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Medical Devices</div><div className="pp-verticals-grid__desc">LSZH USB and Ethernet assemblies for healthcare equipment with biocompatible material options.</div><Link href="/industries/medical-devices" className="pp-verticals-grid__link">See Industry →</Link></div></div></div></section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote"><div className="pp-quote__inner"><div className="pp-quote__card"><div className="pp-quote__label">Data Quality Note</div><p className="pp-quote__text">&ldquo;A split pair in a Cat6 cable has continuity at DC and fails at 100 Mbps. A wire map test catches it in 2 seconds. We do not skip the wire map to save 2 seconds per cable — we run it on every unit because that is the only way to guarantee the cable performs at the rated speed, not just at continuity check.&rdquo;</p><div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">Assembly Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div></div></div></section>
        <FAQAccordion label="Data Cable FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related"><div className="pp-related__inner"><div className="pp-related__label">High-Speed Alternatives</div><h2 className="pp-related__h">Signal Integrity Variants.</h2><div className="pp-related-grid"><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10"/><path d="M2 12h20"/></svg><div className="pp-related-grid__title">Fiber Optic &amp; Twinax</div><div className="pp-related-grid__desc">EMI-immune optical assemblies for 100G and 400G data center and telecom interconnects.</div><Link href="/products/fiber-optic-twinax" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49"/></svg><div className="pp-related-grid__title">Coaxial / RF</div><div className="pp-related-grid__desc">High-frequency coaxial assemblies for RF and microwave applications above the Ethernet frequency range.</div><Link href="/products/coaxial-rf-microwave" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg><div className="pp-related-grid__title">Shielded / Hermetic</div><div className="pp-related-grid__desc">High-coverage EMI shielding and hermetic sealing for harsh-environment data cable applications.</div><Link href="/products/shielded-hermetic" className="pp-related-grid__link">Read More →</Link></div></div></div></section>
          </>
        )},
      ]} />
    </div>
  )
}