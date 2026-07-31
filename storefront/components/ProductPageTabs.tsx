"use client"

import { useState } from "react"
import type { ReactNode } from "react"

interface Tab {
  id: string
  label: string
  content: ReactNode
}

export default function ProductPageTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "")
  const [menuOpen, setMenuOpen] = useState(false)
  const current = tabs.find(t => t.id === active)

  function selectTab(id: string) {
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <div className="ppt-layout">

      {/* Desktop sidebar — hidden on mobile */}
      <aside className="ppt-sidebar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`ppt-btn${active === tab.id ? " active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            <span className="ppt-btn__label">{tab.label}</span>
            <span className="ppt-btn__action">See {tab.label}</span>
            <svg className="ppt-btn__arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        ))}
      </aside>

      {/* Mobile hamburger bar — hidden on desktop */}
      <div className="ppt-mobile-nav">
        <button
          className="ppt-mobile-bar"
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-haspopup="listbox"
        >
          <span className="ppt-mobile-label">{current?.label}</span>
          <svg
            className={`ppt-chevron${menuOpen ? " open" : ""}`}
            width="18" height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {menuOpen && (
          <>
            {/* backdrop to close on outside tap */}
            <div className="ppt-backdrop" onClick={() => setMenuOpen(false)} />
            <div className="ppt-mobile-menu" role="listbox">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  role="option"
                  aria-selected={active === tab.id}
                  className={`ppt-mobile-item${active === tab.id ? " active" : ""}`}
                  onClick={() => selectTab(tab.id)}
                >
                  <span>{tab.label}</span>
                  {active === tab.id && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="ppt-panel">{current?.content}</div>
    </div>
  )
}
