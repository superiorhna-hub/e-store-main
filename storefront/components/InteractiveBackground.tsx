"use client"

import { useRef, useEffect, useState } from 'react'

export function InteractiveBackground({ bg = 'var(--bg)' }: { bg?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  // Track the pending rAF handle so we never queue more than one write per frame
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const isNear = e.clientY >= rect.top - 500 && e.clientY <= rect.bottom + 500
      if (!isNear) return

      // Cancel any pending frame before scheduling a new one — ensures at most
      // one DOM write per paint cycle regardless of raw event frequency.
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) return
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        ref.current.style.setProperty('--x', `${x}px`)
        ref.current.style.setProperty('--y', `${y}px`)
        rafRef.current = null
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="interactive-bg"
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 0,
        overflow: 'hidden',
        background: bg,
        pointerEvents: 'none',
      }}
    >
      {/* Base faint grid */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(var(--bdM) 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
          opacity: 0.5,
        }}
      />
      {/* Highlighted grid on hover */}
      {mounted && (
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'radial-gradient(var(--text) 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
            opacity: 0.4,
            WebkitMaskImage: 'radial-gradient(circle 350px at var(--x, 50%) var(--y, 50%), black, transparent)',
            maskImage: 'radial-gradient(circle 350px at var(--x, 50%) var(--y, 50%), black, transparent)',
          }}
        />
      )}

      {/* Fading borders at top and bottom to blend smoothly into page */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, var(--bg), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to top, var(--bg), transparent)' }} />
    </div>
  )
}
