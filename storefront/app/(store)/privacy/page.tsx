import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Superior Harness & Assembly.",
}

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: 120, paddingBottom: 100, background: "var(--bg)" }}>
      <div className="W" style={{ maxWidth: 800 }}>
        <h1 className="D2" style={{ marginBottom: 24 }}>Privacy Policy</h1>
        <p style={{ color: "var(--text2)", marginBottom: 40 }}>Last Updated: May 2026</p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 24, lineHeight: 1.7, color: "var(--text)" }}>
          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>1. Introduction</h2>
            <p style={{ color: "var(--text2)" }}>
              Superior Harness & Assembly ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>2. Data We Collect</h2>
            <p style={{ color: "var(--text2)" }}>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              <br /><br />
              • <strong>Identity Data</strong> includes first name, last name, username or similar identifier.<br />
              • <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.<br />
              • <strong>Financial Data</strong> includes payment card details (processed securely via our third-party payment gateways like Stripe).<br />
              • <strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>3. How We Use Your Data</h2>
            <p style={{ color: "var(--text2)" }}>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              <br /><br />
              • Where we need to perform the contract we are about to enter into or have entered into with you.<br />
              • Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.<br />
              • Where we need to comply with a legal obligation.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>4. Data Security</h2>
            <p style={{ color: "var(--text2)" }}>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>5. Contact Us</h2>
            <p style={{ color: "var(--text2)" }}>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br /><br />
              Superior Harness &amp; Assembly<br />
              {/* Old: Canton, Michigan 48187 */}
              3179 Black Gap Rd, Chambersburg, PA 17202<br />
              {/* Old: Email: pateltushar1987@gmail.com */}
              Email: info@superiorharness.com<br />
              {/* Old: Phone: +91 7348910249 */}
              Phone: +1 (734) 891-0248
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
