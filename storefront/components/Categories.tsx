import Link from "next/link"
import Image from "next/image"

const CATS = [
  {
    name: "Wire Harnesses",
    sub: "Custom OEM & small-batch wiring",
    href: "/products?category=wire-harnesses",
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80",
  },
  {
    name: "Cable Assemblies",
    sub: "Multi-industry connector builds",
    href: "/products?category=cable-assemblies",
    img: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?w=600&q=80",
  },
  {
    name: "PCB Assemblies",
    sub: "SMT & through-hole boards",
    href: "/products?category=pcb-assemblies",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    name: "OEM Solutions",
    sub: "White goods, robotics & medical",
    href: "/products?category=oem-solutions",
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
  },
]

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </svg>
  )
}

export default function Categories() {
  return (
    <section id="categories" className="S" style={{ background: "var(--bg2)" }}>
      <div className="W">
        <div className="sHdr sHdr--c rv">
          <div className="lbl">SHOP BY CATEGORY</div>
          <h2 className="D2" style={{ marginTop: 16 }}>Our Product Categories</h2>
        </div>
        <div className="catG">
          {CATS.map((c, i) => (
            <Link
              key={c.name}
              href={c.href}
              className="catC rv"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <Image src={c.img} alt={c.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
              <div className="catC__ov" />
              <div className="catC__info">
                <div className="catC__name">{c.name}</div>
                <div className="catC__sub">{c.sub}</div>
              </div>
              <div className="catC__arr">
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
