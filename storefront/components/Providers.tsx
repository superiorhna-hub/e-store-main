"use client"

import { Suspense } from "react"
import { SessionProvider } from "next-auth/react"
import { CartProvider } from "@/context/cart-context"
import { ConsentProvider } from "@/context/consent-context"
import CookieConsent from "@/components/CookieConsent"
import Analytics from "@/components/Analytics"
import VisitorTracker from "@/components/VisitorTracker"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>
        <ConsentProvider>
          {children}
          <CookieConsent />
          <Analytics />
          <Suspense fallback={null}>
            <VisitorTracker />
          </Suspense>
        </ConsentProvider>
      </CartProvider>
    </SessionProvider>
  )
}
