"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in")
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    const observeAll = () => {
      document.querySelectorAll(".rv:not(.in)").forEach((el) => {
        io.observe(el)
      })
    }

    // Initial check
    observeAll()

    // Watch for new elements added to the DOM (like on page navigation)
    const mo = new MutationObserver(() => {
      observeAll()
    })

    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [pathname])

  return null
}
