const CERTS = [
  "IPC/WHMA-A-620",
  "UL Recognized",
  "RoHS Compliant",
  "ITAR Registered",
  "ISO 13485 Capable",
]

export default function CertsBanner() {

  return (
    <section className="certs-banner">
      <div className="W">
        <div className="certs-banner__eyebrow rv">Quality &amp; Compliance</div>
        <h2 className="certs-banner__h rv d1">
          Certified to the Standards<br />Your Industry Demands
        </h2>
        <div className="certs-banner__badges rv d2">
          {CERTS.map(c => (
            <span className="certs-banner__badge" key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
