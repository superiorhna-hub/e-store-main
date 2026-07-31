export type ConsentCategories = {
  essential: true
  analytics: boolean
}

export type ConsentState = {
  decided: boolean
  categories: ConsentCategories
}

const STORAGE_KEY = "cookie_consent_v2"

const DEFAULT: ConsentState = {
  decided: false,
  categories: { essential: true, analytics: false },
}

export function getConsent(): ConsentState {
  if (typeof window === "undefined") return DEFAULT
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT
    const parsed = JSON.parse(raw) as ConsentState
    return {
      decided: !!parsed.decided,
      categories: { essential: true, analytics: !!parsed.categories?.analytics },
    }
  } catch {
    return DEFAULT
  }
}

export function saveConsent(categories: ConsentCategories): ConsentState {
  const state: ConsentState = { decided: true, categories: { essential: true, analytics: categories.analytics } }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  return state
}

export function acceptAllConsent(): ConsentState {
  return saveConsent({ essential: true, analytics: true })
}

export function declineAnalyticsConsent(): ConsentState {
  return saveConsent({ essential: true, analytics: false })
}
