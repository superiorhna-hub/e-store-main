function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const FEATS = [
  { t: "In-House Engineering",  d: "Our design-assist engineers optimize every harness for manufacturability, cost, and reliability before production begins." },
  { t: "Full Process Control",  d: "Cut, strip, crimp, overmold, and test — every step happens under one roof with complete traceability." },
  { t: "Crimp Validation",      d: "Pull-testing and cross-section analysis verify every termination to IPC/WHMA-A-620 Class acceptance criteria." },
  { t: "Quick Turnaround",      d: "Scalable production cells and managed inventory deliver some of the shortest lead times in the industry." },
  { t: "Highest Quality",       d: "A relentless commitment to quality, backed by continuous improvement and rigorous testing at every level." },
]

export default function WhyUs() {
  return (
    <section className="sec" style={{ background: "var(--bg)" }}>
      <div className="W">
        <div className="why-grid rv">
          {/* Left image */}
          <div className="why-media" style={{ position: "relative", background: "var(--bg3)" }}>
            <img
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200"
              alt="Engineering and manufacturing"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Right list */}
          <div className="rv rv-d1">
            <div className="lbl" style={{ marginBottom: 16 }}>Why Choose Us</div>
            <h2 className="D3" style={{ marginBottom: 36, letterSpacing: "-0.02em" }}>
              Why Partners Choose<br />Superior Harness
            </h2>
            <div className="why-list">
              {FEATS.map(({ t, d }) => (
                <div className="why-item" key={t}>
                  <div className="why-item__ico"><CheckIcon /></div>
                  <div>
                    <div className="why-item__t">{t}</div>
                    <div className="why-item__d">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
