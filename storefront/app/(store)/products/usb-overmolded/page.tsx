import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "USB Overmolded Cable Assemblies | Superior Harness & Assembly",
  description: "Custom USB-A, USB-B, USB-C and Micro-USB overmolded cable assemblies. Any length, custom colors, strain relief overmolding. Production quantities.",
}

const CAPS = [
  { title: "All USB Connector Types", desc: "USB-A (Standard, Flat), USB-B, Micro-B, Mini-B, USB-C (2.0, 3.1, 3.2, Gen 2). Any connector combination on a single cable." },
  { title: "Custom Overmold Shape", desc: "Straight, right-angle, and angled overmold geometries. Boot length, diameter, and durometer specified per application." },
  { title: "Cable Construction", desc: "USB 2.0 (data pair + power), USB 3.x (additional SuperSpeed pair sets), and USB4 constructions with proper impedance and shielding." },
  { title: "Custom Color & Branding", desc: "Overmold color matched to Pantone or RAL specification. Printed logo or text molded into boot surface available on production quantities." },
  { title: "Certification Compliance", desc: "USB-IF compliant constructions. Cable impedance, capacitance, and insertion loss tested per USB specification." },
  { title: "Strain Relief Geometry", desc: "Tapered, reinforced, and spring-reinforced strain relief designs available. Boot flexibility matched to application cycle life." },
]

const SPECS = [
  { k: "Connector Types", v: "USB-A, USB-B, Micro-B, Mini-B, USB-C (2.0/3.1/3.2/Gen2)" },
  { k: "Data Speeds", v: "USB 2.0 (480 Mbps) to USB4 (40 Gbps)" },
  { k: "Cable OD", v: "3.5 mm to 7 mm depending on standard and power rating" },
  { k: "Overmold Material", v: "TPE, PVC, TPU, silicone" },
  { k: "Color Options", v: "Black, white, grey, and custom Pantone/RAL match" },
  { k: "Length Range", v: "0.3 m to 5 m standard · custom on request" },
  { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 business days" },
  { k: "MOQ", v: "50 units prototype · 250 units production" },
]

const PROCESS = [
  { n: "01", title: "Spec Review", desc: "USB standard version, connector types, length, and color specified. DFM review flags impedance or shielding concerns." },
  { n: "02", title: "Cable Prep", desc: "Cable cut to length, stripped, and conductors prepared per USB standard. Shielding dressed and terminated to connector body." },
  { n: "03", title: "Connector Termination", desc: "Contacts crimped and inserted into connector housing. Solder cup or SMT termination per connector design." },
  { n: "04", title: "Overmold Injection", desc: "Connector body and cable transition encapsulated in single-shot TPE overmold. Full encapsulation with no parting line gaps." },
  { n: "05", title: "Electrical Test", desc: "Continuity, USB enumeration test, and insertion loss verification per USB specification." },
  { n: "06", title: "Pack & Ship", desc: "Assembled in poly bags or retail packaging. Individual labels with part number and date code. COC included." },
]

const USECASES = [
  { title: "Consumer Electronics", desc: "Charging and data cables for smartphones, tablets, and wearables. OEM color and branding integration available." },
  { title: "Medical Devices", desc: "USB cables for patient monitoring, diagnostic imaging, and powered medical equipment. Biocompatible overmold materials available." },
  { title: "Industrial HMI", desc: "USB cables for HMI panels, barcode scanners, and industrial computers. Rugged construction for plant-floor environments." },
  { title: "Test & Measurement", desc: "USB interface cables for lab instruments and data acquisition systems. Shielded constructions for EMI-sensitive environments." },
  { title: "POS & Kiosk Systems", desc: "High-cycle USB cables for point-of-sale terminals and public-access kiosks. Reinforced strain relief for repeated connect/disconnect cycles." },
  { title: "Audio & AV Equipment", desc: "USB-C and USB-A cables for studio audio interfaces, mixing boards, and AV equipment." },
]

const FAQS = [
  { q: "What is the minimum order quantity?", a: "One unit for prototype and NPI programs. Production orders have no volume minimum — pricing reflects quantity. Prototypes typically ship within 5–10 business days." },
  { q: "How do I submit a drawing for quote?", a: "Email drawings, schematics, or sample parts to info@superiorharness.com, or use the quote form on this site. We accept PDF, DXF, and native CAD formats. Quotes issued within 24 hours." },
  { q: "What quality standards do you work to?", a: "IPC/WHMA-A-620 Class 2 and Class 3 for wire harnesses. IPC-A-610 for PCB assemblies. All assemblies electrically tested 100% before shipment. FAI and COC available on all programs." },
  { q: "Can you reverse-engineer from a sample?", a: "Yes. Send a sample assembly and we generate a wire list or drawing for your approval before production. This is our most common NPI scenario." },
  { q: "Do you offer design-for-manufacture review?", a: "Yes — DFM review is included at no charge with every quote. We flag issues with routing, gauge sizing, connector selection, and testability before any tooling is committed." },
]

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            USB Overmolded Cable Assemblies
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">USB-A, USB-B, USB-C, and Micro-USB overmolded cable assemblies. Custom lengths, colors, and strain relief shapes. Certified USB 2.0 and USB 3.x constructions.</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Overmolded Cable Assembly</div>
              <h1 className="pp-hero__h">
                USB.
                <span className="muted">Overmolded.</span>
              </h1>
              <p className="pp-hero__desc">Custom USB cable assemblies with overmolded strain relief connectors. Any connector combination, any length, any color. USB 2.0, USB 3.x, and USB4 constructions available.</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
                            <div className="pp-hero__img"><img src="/images/usb-c-overmolded-ends.webp" alt="" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} /></div>
              <div className="pp-hero__stats-grid">
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">USB 2/3/4</div><div className="pp-hero__stat-lbl">Certified</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">Custom</div><div className="pp-hero__stat-lbl">Length & Color</div></div>
                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP54+</div><div className="pp-hero__stat-lbl">Rated Options</div></div>
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
              <div className="pp-meaning__label">What USB Overmolding Adds</div>
              <h2 className="pp-meaning__h">Strain Relief That Lasts the Product Life.</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">Injection-molded overmolding encapsulates the connector body and cable transition in a single elastomer part, eliminating the mechanical weak point at the cable entry. The result is a USB cable that can withstand repeated bending, pulling, and twisting at the connector end — the failure mode that kills standard terminated cables. Overmolded USB assemblies are specified wherever the cable is a user-accessible part of a product.</p>
                <p className="pp-meaning__text">We build USB-A, USB-B, USB-B mini, USB-B micro, and USB-C overmolded assemblies in any combination. Cable shielding, twisted-pair data conductors, and power conductor gauges are selected per the USB standard revision. Custom overmold colors, printed branding, and cable sleeve colors are available for OEM product integration.</p>
              </div>
              
              <div className="pp-ov-gallery">
                <img src="/images/usb-c-overmolded-ends.webp" alt="USB-C overmolded cable assembly" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/usb-connector-variety.webp" alt="USB connector type variety" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/usb-overmold-tooling-open.webp" alt="USB overmold injection tool" className="pp-ov-gallery__img" loading="lazy" />
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
              <h2 className="pp-specs__h">USB Overmolded Cable Assemblies Envelope.</h2>
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
          <section className="pp-usecases">
            <div className="pp-usecases__inner">
              <div className="pp-usecases__label">Application Map</div>
              <h2 className="pp-usecases__h">Industries We Serve.</h2>
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
        )},
        { id: "resources", label: "Resources", content: (
          <>
            <section className="pp-quote">
              <div className="pp-quote__inner">
                <div className="pp-quote__card">
                  <div className="pp-quote__label">Operations Note</div>
                  <p className="pp-quote__text">&ldquo;Every assembly we build starts with your specification — not a closest match, not a catalog default. If your drawing has a note, we build to it. If a note is ambiguous, we call before we cut.&rdquo;</p>
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
            <FAQAccordion label="USB Overmolded Cable Assemblies FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Overmolded Harness</div>
                    <div className="pp-related-grid__desc">Multi-conductor overmolded wire harnesses for any connector family.</div>
                    <Link href="/products/overmolded-harness" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Circular Connector Assemblies</div>
                    <div className="pp-related-grid__desc">M8, M12, and circular overmolded connector assemblies for industrial use.</div>
                    <Link href="/products/circular-connector" className="pp-related-grid__link">Read More →</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Custom Strain Relief Molding</div>
                    <div className="pp-related-grid__desc">Custom overmold strain relief design and production for any cable assembly.</div>
                    <Link href="/products/strain-relief-molding" className="pp-related-grid__link">Read More →</Link>
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
