import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Superior Harness & Assembly.",
}

export default function TermsPage() {
  return (
    <main style={{ paddingTop: 120, paddingBottom: 100, background: "var(--bg)" }}>
      <div className="W" style={{ maxWidth: 800 }}>
        <h1 className="D2" style={{ marginBottom: 24 }}>Terms of Service</h1>
        <p style={{ color: "var(--text2)", marginBottom: 40 }}>Last Updated: May 2026</p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 24, lineHeight: 1.7, color: "var(--text)" }}>
          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>1. Agreement to Terms</h2>
            <p style={{ color: "var(--text2)" }}>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Superior Harness & Assembly if you do not agree to take all of the terms and conditions stated on this page.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>2. Intellectual Property Rights</h2>
            <p style={{ color: "var(--text2)" }}>
              Other than the content you own, under these Terms, Superior Harness & Assembly and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>3. Restrictions</h2>
            <p style={{ color: "var(--text2)" }}>
              You are specifically restricted from all of the following:
              <br /><br />
              • Publishing any Website material in any other media.<br />
              • Selling, sublicensing, and/or otherwise commercializing any Website material.<br />
              • Publicly performing and/or showing any Website material.<br />
              • Using this Website in any way that is or may be damaging to this Website.<br />
              • Using this Website in any way that impacts user access to this Website.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>4. Limitation of Liability</h2>
            <p style={{ color: "var(--text2)" }}>
              In no event shall Superior Harness & Assembly, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Superior Harness & Assembly, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>5. Governing Law & Jurisdiction</h2>
            <p style={{ color: "var(--text2)" }}>
              These Terms will be governed by and interpreted in accordance with the laws of the State of Michigan, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Michigan for the resolution of any disputes.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
