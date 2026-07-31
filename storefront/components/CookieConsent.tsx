"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useConsent } from "@/context/consent-context"

function CookieIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="1.2" fill="#fff" />
      <circle cx="14" cy="9" r="1" fill="#fff" />
      <circle cx="11" cy="14" r="1.1" fill="#fff" />
      <circle cx="15.5" cy="13" r="0.9" fill="#fff" />
      <path d="M16 8.5c1.2-0.3 2.2-1.1 2.8-2.2" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function Toggle({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean
  disabled?: boolean
  onChange?: (v: boolean) => void
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      className={`cc-toggle${checked ? " cc-toggle--on" : ""}${disabled ? " cc-toggle--locked" : ""}`}
    >
      <span className="cc-toggle__thumb">
        {checked && (
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6l3 3 5-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </button>
  )
}

export default function CookieConsent() {
  const { consent, acceptAll, declineAnalytics, savePreferences, isLoaded } = useConsent()
  const [customizeOpen, setCustomizeOpen] = useState(false)
  const [analyticsDraft, setAnalyticsDraft] = useState(false)

  useEffect(() => {
    if (customizeOpen) {
      setAnalyticsDraft(consent.categories.analytics)
    }
  }, [customizeOpen, consent.categories.analytics])

  if (!isLoaded) return null
  if (consent.decided && !customizeOpen) return null

  function handleSavePreferences() {
    savePreferences(analyticsDraft)
    setCustomizeOpen(false)
  }

  function handleRejectOptional() {
    declineAnalytics()
    setCustomizeOpen(false)
  }

  return (
    <>
      {customizeOpen && (
        <div className="cc-overlay" onClick={() => setCustomizeOpen(false)}>
          <div
            className="cc-modal"
            role="dialog"
            aria-label="Customize cookies"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="cc-modal__title">Customize Cookies</h2>
            <p className="cc-modal__subtitle">Toggle which categories you allow.</p>

            <div className="cc-category cc-category--locked">
              <Toggle checked disabled />
              <div>
                <div className="cc-category__label">Strictly Necessary</div>
                <div className="cc-category__desc">
                  Session, security, form submission. Cannot be disabled.
                </div>
              </div>
            </div>

            <div className="cc-category">
              <Toggle checked={analyticsDraft} onChange={setAnalyticsDraft} />
              <div>
                <div className="cc-category__label">Analytics (GA4)</div>
                <div className="cc-category__desc">
                  Anonymous traffic and behavior data — helps us improve.
                </div>
              </div>
            </div>

            <div className="cc-modal__actions">
              <button type="button" className="cc-btn cc-btn--outline" onClick={handleRejectOptional}>
                Reject Optional
              </button>
              <button type="button" className="cc-btn cc-btn--primary" onClick={handleSavePreferences}>
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {!consent.decided && (
        <div className="cc-banner" role="dialog" aria-label="Cookie consent">
          <div className="cc-banner__inner W">
            <div className="cc-banner__info">
              <div className="cc-banner__icon">
                <CookieIcon />
              </div>
              <div>
                <div className="cc-banner__title">Cookie Notice</div>
                <p className="cc-banner__text">
                  We use cookies for analytics (GA4) only. Necessary cookies always on. Read{" "}
                  <Link href="/cookies" className="cc-banner__link">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="cc-banner__actions">
              <button
                type="button"
                className="cc-btn cc-btn--outline"
                onClick={() => setCustomizeOpen(true)}
              >
                Customize
              </button>
              <button type="button" className="cc-btn cc-btn--outline" onClick={declineAnalytics}>
                Necessary Only
              </button>
              <button type="button" className="cc-btn cc-btn--primary" onClick={acceptAll}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
