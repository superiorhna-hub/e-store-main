import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Products | Superior Harness & Assembly",
  description: "Explore the full range of precision wire harnesses, cable assemblies, battery cables, solar assemblies, PCB assemblies, coil cables, and EV connectors we manufacture.",
}

const PRODUCTS = [
  {
    id: "wire-harness",
    title: "Wire Harnessing",
    img: "/images/custom-wire-harness.webp",
    desc: "Our custom wire harnesses are built to your exact specifications — from prototype through high-volume production. We support a wide range of gauges, connectors, and environmental ratings to meet the demands of virtually any industry.",
    capabilities: ["Gauge range: 28 AWG – 2/0 AWG", "Custom lengths & routing", "Multi-conductor bundles", "Loom, braid & conduit protection", "UL & USCAR compliant materials"],
    href: "/products/custom-wire-harness",
  },
  {
    id: "cable-assembly",
    title: "Cable Assembly",
    img: "/images/cable-loom.webp",
    desc: "From simple two-wire cables to complex multi-branch assemblies, we build to your prints with precision crimping, overmolding, and full electrical test. All assemblies are tested for continuity and proper termination before shipment.",
    capabilities: ["Multi-conductor & coaxial", "Custom overmolded ends", "Full continuity testing", "Shielded & unshielded options", "IP-rated configurations"],
    href: "/products/cable-assembly",
  },
  {
    id: "battery-cable",
    title: "Battery Cable Assemblies",
    img: "/images/power-db-block.webp",
    desc: "High-current battery cable assemblies designed for reliability and safety in demanding applications. We manufacture battery interconnects, charging cables, and power distribution harnesses with proper insulation and termination for your voltage and amperage requirements.",
    capabilities: ["High-current capacity", "Flexible & rigid configurations", "Lug & custom terminal options", "Heat-shrink & boot insulation", "EV & industrial battery systems"],
    href: "/products/power-battery",
  },
  {
    id: "solar-cable",
    title: "Solar Cable Assemblies",
    img: "/images/solar.webp",
    desc: "Solar-grade cable assemblies built for long-term outdoor performance. We supply panel-to-panel, panel-to-inverter, and BMS wiring using UV-resistant, weatherproof materials rated for decades of exposure.",
    capabilities: ["MC4 & custom connector options", "UV & weather resistant", "Low-loss conductor selection", "Inverter & BMS wiring", "Rooftop & ground-mount systems"],
    href: "/products/fiber-optic-twinax",
  },
  {
    id: "pcb-assembly",
    title: "PCB Assembly",
    img: "/images/pcb.webp",
    desc: "Precision PCB assembly services for prototype and production volumes. Our team handles component sourcing, soldering (SMT & through-hole), inspection, and functional testing to deliver boards that perform exactly as designed.",
    capabilities: ["SMT & through-hole", "IPC Class II & III standards", "Component sourcing support", "AOI & functional test", "Prototype through production"],
    href: "/products/ethernet-usb",
  },
  {
    id: "coil-cables",
    title: "Coil Cables",
    img: "/images/wires.webp",
    desc: "Coiled cables designed for retractile applications where flexible reach and neat coil-back are essential. Ideal for handsets, tool tethers, and equipment requiring extended reach without cable management issues.",
    capabilities: ["Custom retraction lengths", "Single & multi-conductor", "Various jacket materials", "Custom connector options", "Tight coil tolerances"],
    href: "/products/coaxial-rf-microwave",
  },
  {
    id: "ev-cables",
    title: "EV Cables & Connectors",
    img: "/images/ev.webp",
    desc: "High-voltage cabling and connector assemblies designed specifically for electric vehicle applications. We manufacture BMS interconnects, charging port assemblies, and motor/inverter wiring that meet stringent EV safety and performance requirements.",
    capabilities: ["HV up to 1000V rated", "SAE J3105 / IEC 62196 compliant", "Thermal management rated", "UL listed materials", "Custom HV connector assemblies"],
    href: "/products/high-voltage-harness",
  },
]

export default function ProductsPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Inner Banner */}
      <div style={{ paddingTop: 120 }}>
        <section className="inner-banner">
          <div className="W">
            <div className="inner-banner__eyebrow">What We Manufacture</div>
            <h1 className="D2 inner-banner__h">Our Products</h1>
            <p className="inner-banner__p">
              A complete range of precision interconnect solutions — engineered, manufactured, and tested under one roof in Michigan.
            </p>
          </div>
        </section>
      </div>

      {/* Products List */}
      <section className="sec">
        <div className="W">
          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {PRODUCTS.map(({ id, title, img, desc, capabilities, href }, idx) => (
              <div
                key={id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 64,
                  alignItems: "center",
                  direction: idx % 2 === 1 ? "rtl" : "ltr",
                }}
                className="prod-showcase-row"
              >
                {/* Image */}
                <div style={{ direction: "ltr", position: "relative", height: 360, borderRadius: 12, overflow: "hidden", background: "var(--bg3)" }}>
                  <Image
                    src={img}
                    alt={title}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div style={{ direction: "ltr" }}>
                  <div className="lbl" style={{ marginBottom: 16 }}>Manufactured In-House</div>
                  <h2 className="D3" style={{ marginBottom: 20 }}>{title}</h2>
                  <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text2)", marginBottom: 28 }}>{desc}</p>

                  {/* Capabilities list */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                    {capabilities.map(cap => (
                      <li key={cap} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text2)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--text)" }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Link href={href} className="btn bp">Learn More</Link>
                    <Link href="#quote" className="btn" style={{ background: "transparent", border: "1.5px solid var(--bd)", color: "var(--text)" }}>Request Quote</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="W">
          <h2 className="D3 cta__h">Don&apos;t See What You Need?</h2>
          <p className="cta__s">We build to your specs. Share your requirements and we&apos;ll respond with a quote within one business day.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn bp">Contact Us</Link>
            <Link href="/shop" className="btn" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.22)" }}>Browse Online Shop</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
