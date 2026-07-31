import Link from "next/link"
import Image from "next/image"

const INDUSTRIES = [
  { name: "Automotive",        img: "/images/automotive.webp",        eyebrow: "OEM & Tier-1 Supplier",        slug: "automotive-ev" },
  { name: "Broadcast",         img: "/images/broadcast.webp",         eyebrow: "Signal Integrity Focus",       slug: "broadcast" },
  { name: "Computer Wiring",   img: "/images/computer_wiring.webp",   eyebrow: "Data & Connectivity",          slug: "computer-wiring" },
  { name: "Electronics",       img: "/images/electronics.webp",       eyebrow: "Consumer & Industrial",        slug: "electronics" },
  { name: "OEM Appliances",    img: "/images/oem.webp",               eyebrow: "OEM Manufacturing",            slug: "oem-appliances" },
  { name: "Robotics",          img: "/images/robotics.webp",          eyebrow: "Automation & Motion",          slug: "robotics-automation" },
  { name: "Environmental",     img: "/images/environmental.webp",     eyebrow: "Harsh Conditions",             slug: "environmental" },
  { name: "Solar",             img: "/images/solar.webp",             eyebrow: "Renewable Energy",             slug: "solar-energy" },
  { name: "Electric Vehicles", img: "/images/ev.webp",                eyebrow: "High-Voltage Specialists",     slug: "automotive-ev" },
  { name: "Telecommunication", img: "/images/telecom.webp",           eyebrow: "Network & Infrastructure",     slug: "telecom" },
  { name: "Medical",           img: "/images/medical.webp",           eyebrow: "Life-Critical Applications",   slug: "medical-devices" },
  { name: "Aerospace",         img: "/images/Aerospsace.webp",        eyebrow: "Aviation & Defense",           slug: "aerospace-defense" },
  { name: "Construction",      img: "/images/construction.webp",      eyebrow: "Heavy Equipment",              slug: "construction" },
  { name: "Agricultural",      img: "/images/agricultural.webp",      eyebrow: "Farm & Field Equipment",       slug: "agricultural" },
  { name: "Lighting",          img: "/images/lighting-cables.webp",   eyebrow: "Commercial & Industrial",      slug: "lighting" },
]

// Duplicate for seamless loop — animation translates by exactly -50%
const DOUBLED = [...INDUSTRIES, ...INDUSTRIES]

export default function IndustriesStrip() {
  return (
    <section className="istrip-section">
      {/* Section header */}
      <div className="W" style={{ marginBottom: 48 }}>
        <div className="sHdr">
          <div className="lbl" style={{ marginBottom: 12 }}>Industries We Serve</div>
          <h2 className="D3">Precision Interconnects<br />Across Every Sector</h2>
        </div>
      </div>

      {/* Scrolling strip with fade-out edges */}
      <div className="istrip-outer">
        <div className="istrip-track">
          {DOUBLED.map((ind, i) => (
            <Link
              key={i}
              href="/industries"
              className="istrip-card"
              aria-label={ind.name}
              tabIndex={i >= INDUSTRIES.length ? -1 : undefined}
            >
              <div className="istrip-img">
                <Image
                  src={ind.img}
                  alt={ind.name}
                  fill
                  sizes="400px"
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                />
              </div>
              <div className="istrip-body">
                <div className="istrip-eyebrow">{ind.eyebrow}</div>
                <div className="istrip-name">{ind.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="W" style={{ marginTop: 48, textAlign: "center" }}>
        <Link href="/industries" className="btn bod">
          View All Industries →
        </Link>
      </div>
    </section>
  )
}
