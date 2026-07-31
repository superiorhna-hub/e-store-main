function IcoShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  )
}

function IcoStar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function IcoTrophy() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
    </svg>
  )
}

function IcoHeadset() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  )
}

const STATS = [
  {
    label: "Quality Assurance",
    sub: "IPC/WHMA-A-620 Class certified",
    icon: <IcoShield />,
  },
  {
    label: "Reliable",
    sub: "99.9% on-time delivery rate",
    icon: <IcoStar />,
  },
  {
    label: "30 Years of Experience",
    sub: "Combined industry expertise",
    icon: <IcoTrophy />,
  },
  {
    label: "Full Support",
    sub: "Dedicated engineering team",
    icon: <IcoHeadset />,
  },
]

export default function Stats() {
  return (
    <section className="stats-bar" style={{ padding: "80px 0", background: "var(--bg2)" }}>
      <div className="W">
        <div className="sHdr sHdr--c rv" style={{ marginBottom: 48 }}>
          <div className="lbl">WHY CHOOSE US</div>
          <h2 className="D2" style={{ marginTop: 16 }}>Built on Reliability</h2>
        </div>
        <div className="stats-bar__grid rv">
          {STATS.map(({ label, sub, icon }, i) => (
            <div className="stats-bar__item" key={label} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="stats-bar__icon">{icon}</div>
              <div className="stats-bar__label">{label}</div>
              <div className="stats-bar__sub">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
