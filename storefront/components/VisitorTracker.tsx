"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { useConsent } from "@/context/consent-context"

export default function VisitorTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { hasAnalyticsConsent } = useConsent()
  const lastTracked = useRef("")

  useEffect(() => {
    if (!hasAnalyticsConsent) return

    const key = `${pathname}?${searchParams.toString()}`
    if (lastTracked.current === key) return
    lastTracked.current = key

    const params = new URLSearchParams(searchParams.toString())

    fetch("/api/visitor-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: pathname,
        referrer: document.referrer || "",
        utmSource: params.get("utm_source") ?? "",
        utmMedium: params.get("utm_medium") ?? "",
        utmCampaign: params.get("utm_campaign") ?? "",
      }),
    }).catch(() => {})
  }, [pathname, searchParams, hasAnalyticsConsent])

  return null
}
