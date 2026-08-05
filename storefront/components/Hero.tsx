"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const SLIDES = [
  { src: "/images/carousel-1.webp", alt: "Wire harness manufacturing" },
  { src: "/images/carousel-2.webp", alt: "Cable assembly production" },
  { src: "/images/carousel-3.webp", alt: "Precision electrical assembly" },
  { src: "/images/trailer-7way-coil-cable.webp", alt: "Wire harness manufacturing" },
  { src: "/images/encoder-coil-cable-servo.webp", alt: "Cable assembly production" },
  { src: "/images/trailer-coil-cable-truck.webp", alt: "Precision electrical assembly" },

]

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const STAT_ICON_STYLE: React.CSSProperties = {
  width: 28, height: 28, borderRadius: 7,
  background: "rgba(11,15,28,0.06)", border: "1px solid #e5e5e5",
  display: "flex", alignItems: "center", justifyContent: "center",
  color: "#555", flexShrink: 0,
}

const STATS_DATA = [
  {
    label: "Quality Assurance",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: "Reliable",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "30+ Yrs. Team Exp.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
      </svg>
    ),
  },
  {
    label: "Full Support",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive(i => (i + 1) % SLIDES.length), 4000)
    return () => clearInterval(t)
  }, [paused])

  return (
    <section className="hero-v2">
      <div className="hero-v2__inner">

        {/* ── Left: content ── */}
        <div className="hero-v2__left">
          <div className="hero-v2__block">
            <h1 className="hero-v2__h1">
              <span className="hero-v2__h1-primary">Precision</span>
              <span className="hero-v2__h1-muted">Wire Harness &</span>
              <span className="hero-v2__h1-muted">Cable Assembly.</span>
            </h1>

            <p className="hero-v2__desc">
              We are a precision-driven custom wire harness and cable assembly manufacturer delivering high-performance solutions across a wide range of industries. With over 30 years of combined industry experience, our team specializes in designing and manufacturing reliable, cost-effective wiring systems tailored to your exact specifications. From low-volume prototyping to high-volume production, we support our customers at every stage — ensuring consistency, durability, and performance in every assembly we produce. Our focus on quality, fast turnaround, and flexible manufacturing allows us to meet the evolving demands of modern industries. Whether you require complex multi-branch harnesses or simple cable assemblies, we provide fully customized solutions built to your drawings, specifications, and application requirements.
            </p>

            <div className="hero-v2__stats">
              {STATS_DATA.map(({ label, icon }) => (
                <div className="hero-v2__stat" key={label}>
                  <div style={STAT_ICON_STYLE}>{icon}</div>
                  <span className="hero-v2__stat-val" style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0em", lineHeight: 1.3 }}>{label}</span>
                </div>
              ))}
            </div>

            <div className="hero-v2__ctabar">
              <Link href="/contact" className="hero-v2__cta-primary">
                Contact Us <ArrowRight />
              </Link>
              <Link href="#quote" className="hero-v2__cta-secondary">
                Request a Quote <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Right: portrait carousel + dots + footer row ── */}
        <div className="hero-v2__right">

          <div
            className="hero-v2__carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {SLIDES.map((slide, i) => (
              <div
                key={slide.src}
                className="hero-v2__carousel-slide"
                style={{ opacity: i === active ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Dots below image */}
          <div className="hero-v2__carousel-dots" role="tablist" aria-label="Carousel slides">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Slide ${i + 1}`}
                className={`hero-v2__carousel-dot${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
