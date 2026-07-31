"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import {
  acceptAllConsent,
  declineAnalyticsConsent,
  getConsent,
  saveConsent,
  type ConsentState,
} from "@/lib/consent"

type ConsentContextValue = {
  consent: ConsentState
  acceptAll: () => void
  declineAnalytics: () => void
  savePreferences: (analytics: boolean) => void
  hasAnalyticsConsent: boolean
  isLoaded: boolean
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>({ decided: false, categories: { essential: true, analytics: false } })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setConsent(getConsent())
    setIsLoaded(true)
  }, [])

  const acceptAll = useCallback(() => setConsent(acceptAllConsent()), [])
  const declineAnalytics = useCallback(() => setConsent(declineAnalyticsConsent()), [])
  const savePreferences = useCallback(
    (analytics: boolean) => setConsent(saveConsent({ essential: true, analytics })),
    []
  )

  return (
    <ConsentContext.Provider
      value={{
        consent,
        acceptAll,
        declineAnalytics,
        savePreferences,
        hasAnalyticsConsent: consent.decided && consent.categories.analytics,
        isLoaded,
      }}
    >
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider")
  return ctx
}
