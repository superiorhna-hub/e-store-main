"use client"

import { useState } from "react"

interface FAQItem {
  q: string
  a: string
}

export default function FAQAccordion({ label, heading, items }: { label: string; heading: string; items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="pp-faq">
      <div className="pp-faq__inner">
        <div className="pp-faq__label">{label}</div>
        <h2 className="pp-faq__h">{heading}</h2>
        {items.map((item, i) => (
          <div key={i} className="pp-faq__item">
            <button className="pp-faq__q" onClick={() => setOpen(open === i ? null : i)}>
              <span className="pp-faq__q-num">Q.{String(i + 1).padStart(2, "0")}</span>
              <span className="pp-faq__q-text">{item.q}</span>
              <span className="pp-faq__q-icon">{open === i ? "×" : "+"}</span>
            </button>
            {open === i && <div className="pp-faq__a">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
