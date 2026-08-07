import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Industries Served | US Wire Harness & Cable Assembly Manufacturing",
  description:
    "Superior Harness & Assembly provides reliable wire harnesses for North American automotive, medical, EV, robotics, and industrial sectors.",
  keywords: ["medical device wire harness USA", "EV renewable energy wiring Canada", "automotive cable assemblies North America", "robotics automation wiring solutions", "aerospace defense wire processing"],
}

const INDUSTRIES = [
  {
    name: "Automotive",
    img: "/images/automotive.webp",
    eyebrow: "OEM & Tier-1 Supplier",
    desc: "We manufacture high-performance wire harnesses for automotive applications, including engine systems, infotainment, lighting, sensors, and electric vehicle components. Our products are built to withstand vibration, heat, and harsh operating conditions.",
    specs: ["USCAR / SAE J1128 compliant", "High-temp materials", "Kanban & JIT delivery", "Vibration & heat rated"],
  },
  {
    name: "Broadcast",
    img: "/images/broadcast.webp",
    eyebrow: "Signal Integrity Focus",
    desc: "Our cable assemblies are designed for broadcasting systems where signal integrity and reliability are critical. We support studio equipment, field broadcasting units, and communication systems.",
    specs: ["Low-loss signal cable", "Studio & field units", "RF shielded assemblies", "Custom lengths & terminations"],
  },
  {
    name: "Computer Wiring",
    img: "/images/computer_wiring.webp",
    eyebrow: "Data & Connectivity",
    desc: "We provide precision wiring solutions for computer systems, including internal wiring, data cables, and connectivity solutions. Our assemblies ensure efficient signal transmission and long-term reliability.",
    specs: ["High-speed data cables", "Custom backplane wiring", "EMI shielding options", "Compact routing design"],
  },
  {
    name: "Electronics",
    img: "/images/electronics.webp",
    eyebrow: "Consumer & Industrial",
    desc: "We manufacture wire harnesses for a wide range of electronic devices, focusing on compact design, high accuracy, and durability. Ideal for consumer electronics, industrial electronics, and embedded systems.",
    specs: ["Miniature connectors", "High-accuracy assembly", "Consumer & industrial", "Embedded system builds"],
  },
  {
    name: "OEM Appliances",
    img: "/images/oem.webp",
    eyebrow: "OEM Manufacturing",
    desc: "We support OEM manufacturers with customized wiring solutions for appliances such as HVAC systems, kitchen equipment, and industrial machines. Our harnesses are designed for consistent performance and easy integration.",
    specs: ["HVAC & kitchen systems", "Custom color coding", "Easy integration design", "High-volume production"],
  },
  {
    name: "Robotics",
    img: "/images/robotics.webp",
    eyebrow: "Automation & Motion",
    desc: "Our wire harnesses for robotics applications are designed for flexibility, durability, and high-performance movement. We support automation systems, robotic arms, and advanced machinery.",
    specs: ["Continuous-flex rated", "Servo & encoder cables", "Drag-chain compatible", "High-cycle endurance"],
  },
  {
    name: "Environmental",
    img: "/images/environmental.webp",
    eyebrow: "Harsh Conditions",
    desc: "We provide wiring solutions for environmental monitoring and control systems. Our products are built to operate in harsh outdoor conditions, ensuring reliability in extreme temperatures and environments.",
    specs: ["Outdoor-rated materials", "Wide temp range", "IP67/IP68 sealing", "UV & moisture resistant"],
  },
  {
    name: "Solar",
    img: "/images/solar.webp",
    eyebrow: "Renewable Energy",
    desc: "We manufacture cable assemblies for solar energy systems, including panel connections, inverters, and power distribution units. Our products are designed for long-term outdoor use and efficient energy transmission.",
    specs: ["MC4 & custom connectors", "Long-term outdoor use", "Low-loss power cable", "Inverter & BMS wiring"],
  },
  {
    name: "Electric Vehicles (EV)",
    img: "/images/ev.webp",
    eyebrow: "High-Voltage Specialists",
    desc: "We support the EV industry with advanced wiring solutions for battery systems, charging infrastructure, and power distribution. Our harnesses are engineered for safety, efficiency, and high performance.",
    specs: ["HV up to 1000V rated", "SAE J3105 / IEC 62196", "Thermal management", "UL listed materials"],
  },
  {
    name: "Telecommunication",
    img: "/images/telecom.webp",
    eyebrow: "Network & Infrastructure",
    desc: "We provide high-quality cable assemblies for telecommunication systems, ensuring stable signal transmission and durability. Our solutions support networking equipment, communication towers, and data systems.",
    specs: ["Fiber & copper hybrid", "Tower & rack systems", "Data center cabling", "High-density connectors"],
  },
  {
    name: "Medical",
    img: "/images/medical.webp",
    eyebrow: "Life-Critical Applications",
    desc: "We manufacture precision cable assemblies for medical devices where safety and reliability are critical. Our products meet strict quality standards and are designed for sensitive applications.",
    specs: ["Biocompatible materials", "Full lot traceability", "ISO 13485 documentation", "Cleanroom assembly available"],
  },
  {
    name: "Aerospace",
    img: "/images/Aerospsace.webp",
    eyebrow: "Aviation & Defense",
    desc: "Our aerospace wiring solutions are designed to meet high-performance and reliability standards required in aviation and defense applications. We focus on lightweight, durable, and precision-built assemblies.",
    specs: ["MIL-SPEC compliant", "Lightweight construction", "AS9100 aligned", "First-article reports"],
  },
  {
    name: "Construction",
    img: "/images/construction.webp",
    eyebrow: "Heavy Equipment",
    desc: "We supply rugged wire harnesses for construction equipment and heavy machinery. Our products are built to withstand dust, vibration, and extreme working conditions.",
    specs: ["Dust & vibration rated", "Heavy-gauge wiring", "Abrasion-resistant sleeving", "IP65+ sealing"],
  },
  {
    name: "Agricultural",
    img: "/images/agricultural.webp",
    eyebrow: "Farm & Field Equipment",
    desc: "We provide durable wiring solutions for agricultural machinery and equipment. Our harnesses are designed for outdoor use, exposure to moisture, and rough environments.",
    specs: ["Moisture & UV resistant", "Wide temp performance", "Rugged connector systems", "CAN bus integration"],
  },
  {
    name: "Lighting Cables",
    img: "/images/lighting-cables.webp",
    eyebrow: "Commercial & Industrial",
    desc: "We manufacture cable assemblies for lighting systems including commercial, industrial, and architectural applications. Our solutions ensure safe and efficient power distribution.",
    specs: ["UL Listed wiring", "Commercial & industrial", "Architectural lighting", "LED driver wiring"],
  },
  {
    name: "Marine",
    img: "/images/marine.webp",
    eyebrow: "Waterproof & Saltwater Rated",
    desc: "We manufacture wire harnesses and cable assemblies built for the demanding marine environment. Our solutions resist saltwater corrosion, moisture, and UV exposure while meeting ABYC standards for onboard electrical safety.",
    specs: ["Tinned copper conductors", "Saltwater & UV resistant", "ABYC E-11 compliant", "IP68 sealed connectors"],
  },
]


export default function IndustriesPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>

      <style dangerouslySetInnerHTML={{ __html: `
        .ind-card { transition: box-shadow 0.25s, transform 0.25s; }
        .ind-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); transform: translateY(-3px); }
        [data-theme="dark"] .ind-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.4); }
      `}} />

      {/* Inner Banner */}
      <div style={{ paddingTop: 120 }}>
        <section className="inner-banner">
          <div className="W">
            <div className="inner-banner__crumb">
              <Link href="/">Home</Link> <span>/</span> Industries
            </div>
            <div className="inner-banner__eyebrow">Markets We Serve</div>
            <h1 className="D2 inner-banner__h">Precision Interconnects<br />Across Industries</h1>
            <p className="inner-banner__p">
              From automotive OEM programs to life-critical medical devices, we engineer and manufacture interconnect solutions that perform in the most demanding environments.
            </p>
          </div>
        </section>
      </div>


      {/* Industries Grid */}
      <section className="S" style={{ background: "var(--bg)" }}>
        <div className="W">
          <div className="sHdr sHdr--c" style={{ marginBottom: 56 }}>
            <div className="lbl lbl-c" style={{ marginBottom: 14 }}>Who We Serve</div>
            <h2 className="D3">Industries We Serve</h2>
            <p className="Bd" style={{ maxWidth: 580, margin: "18px auto 0" }}>
              Each industry has unique standards, materials, and reliability expectations. Our engineers understand the requirements and build accordingly.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 22,
          }}>
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.name}
                className="ind-card rv"
                style={{
                  background: "var(--cBg)",
                  border: "1px solid var(--bd)",
                  borderRadius: "var(--rL)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transitionDelay: `${Math.min(i * 0.04, 0.4)}s`,
                }}
              >
                {/* Image */}
                <div style={{ height: 180, width: "100%", background: "var(--bg2)", position: "relative", flexShrink: 0 }}>
                  <Image
                    src={ind.img}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 280px"
                    style={{ objectFit: "contain" }}
                    loading={i < 6 ? "eager" : "lazy"}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "22px 24px 26px", flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Eyebrow */}
                  <div style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 9.5,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text2)",
                    marginBottom: 6,
                  }}>
                    {ind.eyebrow}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    marginBottom: 10,
                    color: "var(--text)",
                  }}>
                    {ind.name}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: 13.5, color: "var(--text2)", lineHeight: 1.65, marginBottom: 16 }}>
                    {ind.desc}
                  </p>

                  {/* Spec chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                    {ind.specs.map(s => (
                      <span key={s} style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                        padding: "4px 10px",
                        borderRadius: 9999,
                        background: "var(--bg2)",
                        border: "1px solid var(--bd)",
                        color: "var(--text2)",
                        whiteSpace: "nowrap",
                      }}>
                        {s}
                      </span>
                    ))}
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
          <h2 className="D3 cta__h">Don&apos;t See Your Industry?</h2>
          <p className="cta__s">
            We work with companies across many sectors. Contact us to discuss your specific requirements.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn bp">Talk to an Engineer</Link>
            <Link
              href="/products"
              className="btn"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.22)" }}
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
