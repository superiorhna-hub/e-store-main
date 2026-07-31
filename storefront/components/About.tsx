import Link from "next/link"

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="sec" style={{ background: "var(--bg)" }}>
      <div className="W">
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <h2 className="D2 rv d1" style={{ marginBottom: 32, textTransform: "uppercase" }}>
            ABOUT
          </h2>
          <p className="Bd rv d2" style={{ marginBottom: 18 }}>
            We are a custom wire harness manufacturer committed to delivering high-quality, reliable, and fully customized wiring solutions. With a team that brings over 30 years of combined experience in the wire harness industry, we understand the importance of precision, durability, and performance in every project we undertake.
          </p>
          <p className="Bd rv d2" style={{ marginBottom: 18 }}>
            We specialize in low to medium volume production with flexible minimum order quantities, allowing us to support startups, OEMs, and large-scale manufacturers alike. Our approach is centered around understanding your exact requirements and delivering products that meet your technical specifications, timelines, and budget.
          </p>
          <p className="Bd rv d2" style={{ marginBottom: 38 }}>
            From concept to completion, we work closely with our clients to ensure every wire harness and cable assembly is built to perform in its intended environment. Our commitment to quality and customer satisfaction makes us a trusted partner for businesses looking for dependable wiring solutions.
          </p>
          <Link href="/about" className="btn bod rv d3">
            Learn More <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
