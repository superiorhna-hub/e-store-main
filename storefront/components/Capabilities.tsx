import Link from "next/link"
import Image from "next/image"

const CAPS = [
  {
    n: "01",
    title: "Automatic Cut and Strip",
    desc: "We utilize automated wire cutting and stripping machines to ensure precise lengths and clean stripping of insulation. This process improves consistency, reduces errors, and increases production efficiency.",
    img: "/images/automatic-cut-and-strip.webp",
  },
  {
    n: "02",
    title: "Crimping with Press and Terminal Applicators",
    desc: "Our crimping process uses high-precision presses and applicators to ensure strong, reliable electrical connections. This guarantees consistent quality and long-term durability in every wire harness.",
    img: "/images/terminal-application.webp",
  },
  {
    n: "03",
    title: "Ultrasonic Splicing",
    desc: "We use ultrasonic welding technology to create strong, reliable wire splices without the need for soldering. This method ensures excellent conductivity, reduced resistance, and long-lasting performance.",
    img: "/images/ultrasonic-splicing.webp",
  },
  {
    n: "04",
    title: "Over Molding",
    desc: "Custom mold design for your connector and cable geometry, to add protective layer of material around connectors and cable assemblies, providing relief from harsh environmental conditions and enhanced durabilities.",
    img: "/images/over-molding.webp",
  },
]

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </svg>
  )
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="sec sec-bg2">
      <div className="W">
        <div className="sHdr sHdr--c rv" style={{ marginBottom: 48 }}>
          <div className="lbl lbl-c" style={{ marginBottom: 14 }}>CAPABILITIES</div>
          <h2 className="D3 rv d1" style={{ marginBottom: 18 }}>Everything Under One Roof</h2>
          <p className="Bd rv d2" style={{ maxWidth: 680, margin: "0 auto" }}>
            From design-assist engineering through final functional test, we control the full process in-house — so quality, lead time, and accountability never get handed off.
          </p>
        </div>

        <div className="caps-row rv d2">
          {CAPS.map(({ n, title, desc, img }) => (
            <div className="caps-cell" key={n}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 8, overflow: "hidden", marginBottom: 24 }}>
                <Image
                  src={img}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
              <div className="caps-cell__n">{n}</div>
              <div className="caps-cell__t">{title}</div>
              <div className="caps-cell__d">{desc}</div>
            </div>
          ))}
        </div>

        <div className="center rv d3" style={{ marginTop: 40, textAlign: "center" }}>
          <Link href="/capabilities" className="btn bod">
            View All Capabilities <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
