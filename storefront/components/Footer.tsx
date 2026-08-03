import Link from "next/link"
import NewsletterButton from "@/components/NewsletterButton"

function IcoPin() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function IcoPhone() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
function IcoMail() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>
    </svg>
  )
}
function IcoFB() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/>
    </svg>
  )
}
function IcoX() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
function IcoIn() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
    </svg>
  )
}
function IcoInsta() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm3.98-10.169a1.44 1.44 0 1 1 0 2.881 1.44 1.44 0 0 1 0-2.881z"/>
    </svg>
  )
}
function IcoArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

const IND_COL1 = [
  { label: "Automotive", href: "/industries" },
  { label: "Broadcast", href: "/industries" },
  { label: "Computer Wiring", href: "/industries" },
  { label: "Electronics", href: "/industries" },
  { label: "OEM Appliances", href: "/industries" },
  { label: "Robotics", href: "/industries/robotics-automation" },
  { label: "Environmental", href: "/industries" },
  { label: "Solar Energy", href: "/industries/solar-energy" },
]

const IND_COL2 = [
  { label: "Electric Vehicles", href: "/industries/automotive-ev" },
  { label: "Telecommunication", href: "/industries" },
  { label: "Medical", href: "/industries/medical-devices" },
  { label: "Aerospace", href: "/industries/aerospace-defense" },
  { label: "Construction", href: "/industries" },
  { label: "Agricultural", href: "/industries" },
  { label: "Lighting Cables", href: "/industries" },
  { label: "Marine", href: "/industries" },
]

export default function Footer() {
  return (
    <footer className="ft">
      <div className="W">
        <div className="ft__g">
          {/* Brand */}
          <div>
            <div className="ft__brand">SUPERIOR HARNESS &amp; ASSEMBLY</div>
            <p className="ft__desc">
              Precision wire harness and cable assembly manufacturing for the automotive, medical, robotics, EV, and industrial sectors — built to your exact specifications since day one.
            </p>
                        {/*
            <div className="ft__soc">
              <a href="https://facebook.com" className="ft__sb" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><IcoFB /></a>
              <a href="https://x.com" className="ft__sb" aria-label="X" target="_blank" rel="noopener noreferrer"><IcoX /></a>
              <a href="https://linkedin.com" className="ft__sb" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><IcoIn /></a>
              <a href="https://instagram.com" className="ft__sb" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><IcoInsta /></a>
            </div>
            */}

          </div>

          {/* Quick Links */}
          <div>
            <div className="ft__ch">Company</div>
            <div className="ft__lks">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/shop">Shop Products</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Industries — both columns under one heading */}
          <div>
            <div className="ft__ch">Industries We Serve</div>
            <div className="ft__ind-grid">
              <div className="ft__lks">
                {IND_COL1.map(({ label, href }) => (
                  <Link key={label} href={href}>{label}</Link>
                ))}
                <Link href="/industries" className="ft__view-all-mob">View all industries &rarr;</Link>
              </div>
              <div className="ft__lks">
                {IND_COL2.map(({ label, href }) => (
                  <Link key={label} href={href}>{label}</Link>
                ))}
              </div>
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <div className="ft__ch">Get in Touch</div>
            <div className="ft__contact-info" style={{ color: "rgba(255,255,255,0.48)" }}>
              <div>
                <IcoPin />
                {/* Old: <span>Canton, Michigan 48187</span> */}
                <span>3179 Black Gap Rd, Chambersburg, PA 17202</span>
              </div>
              <div>
                <IcoPhone />
                {/* Old: <span>+91 7348910249</span> */}
                <span>+1 734 891 0248</span>
              </div>
              <div>
                <IcoMail />
                {/* Old: <span>pateltushar1987@gmail.com</span> */}
                <span>info@superiorharness.com</span>
              </div>
            </div>
            <div className="ft__actions">
              <Link href="#quote" className="ft__quote-btn">
                Request a Quote <IcoArrow />
              </Link>
              <NewsletterButton />
            </div>
          </div>
        </div>

        <div className="ft__btm">
          <div className="ft__copy">© {new Date().getFullYear()} Superior Harness &amp; Assembly. All rights reserved.</div>
          <div className="ft__bls">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
