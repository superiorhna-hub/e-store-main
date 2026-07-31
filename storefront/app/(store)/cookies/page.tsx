import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Superior Harness & Assembly.",
}

export default function CookiesPage() {
  return (
    <main style={{ paddingTop: 120, paddingBottom: 100, background: "var(--bg)" }}>
      <div className="W" style={{ maxWidth: 800 }}>
        <h1 className="D2" style={{ marginBottom: 24 }}>Cookie Policy</h1>
        <p style={{ color: "var(--text2)", marginBottom: 40 }}>Last Updated: June 2026</p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 24, lineHeight: 1.7, color: "var(--text)" }}>
          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>1. What Are Cookies</h2>
            <p style={{ color: "var(--text2)" }}>
              Cookies are small text files stored on your device when you visit our website. They help us
              provide core functionality, remember your preferences, and — with your consent — understand
              how visitors use our site so we can improve our services and marketing.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>2. Your Consent Choices</h2>
            <p style={{ color: "var(--text2)" }}>
              When you first visit our site, a cookie consent banner lets you choose between{" "}
              <strong>Essential Only</strong> and <strong>Accept All</strong>. Essential cookies are always
              active because the site cannot function without them. Analytics cookies are only loaded if you
              click Accept All.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>3. Cookies We Set</h2>
            <p style={{ color: "var(--text2)" }}>
              <strong>Essential Cookies:</strong> Required for site operation — including theme preferences
              (dark/light mode), shopping cart state, and admin session management. These cannot be disabled
              while using the site.<br /><br />
              <strong>Analytics Cookies (optional):</strong> If you accept all cookies, we load Google Analytics
              to collect anonymized data such as pages visited, time on site, and referral sources. This data
              helps us understand visitor behavior and plan future marketing campaigns.<br /><br />
              <strong>Account Cookies:</strong> If you log in (e.g. order tracking via Google OAuth), session
              cookies are used to keep you authenticated.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>4. How We Use Tracking Data</h2>
            <p style={{ color: "var(--text2)" }}>
              With your consent, analytics data may be used to: measure website performance, identify popular
              products and content, understand traffic sources (including UTM campaign tags), and inform email
              marketing and outreach strategies. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>5. Other Ways We Capture Visitor Information</h2>
            <p style={{ color: "var(--text2)" }}>
              Beyond cookies, we collect contact information when you voluntarily submit it through our
              contact form, quote request form, newsletter signup, or checkout process. This information is
              stored securely and used for customer support, order fulfillment, and — with your permission —
              marketing communications.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>6. Managing Your Preferences</h2>
            <p style={{ color: "var(--text2)" }}>
              You can change your cookie preference at any time by clearing your browser&apos;s local storage
              for this site — the consent banner will reappear on your next visit. You can also unsubscribe
              from marketing emails using the link in any newsletter we send.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
