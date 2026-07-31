"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import CertsBanner from "@/components/CertsBanner"

export default function CertificationsClient({ show }: { show: boolean }) {
  const router = useRouter()
  const [phase, setPhase] = useState<"initial" | "redirecting">("initial")

  useEffect(() => {
    if (!show) {
      const t1 = setTimeout(() => {
        setPhase("redirecting")
      }, 3500) // Show coming soon for 3.5 seconds
      
      const t2 = setTimeout(() => {
        router.push("/")
      }, 5500) // 2 seconds later, actually redirect

      return () => { clearTimeout(t1); clearTimeout(t2) }
    }
  }, [show, router])

  if (!show) {
    return (
      <main style={{ 
        minHeight: "100vh", background: "var(--bg)", 
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" 
      }}>
        <div style={{
          textAlign: "center", padding: 40, maxWidth: 500
        }}>
          {phase === "initial" ? (
            <div style={{ animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%", background: "rgba(0,0,0,0.05)",
                display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px"
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h1 className="D3" style={{ marginBottom: 16 }}>Certifications Coming Soon</h1>
              <p style={{ color: "var(--text2)", fontSize: 16, lineHeight: 1.6 }}>We are currently updating our compliance documentation and certificates. Check back shortly!</p>
            </div>
          ) : (
            <div style={{ animation: "fadeIn 0.8s ease-out forwards" }}>
              <p style={{ color: "var(--textM)", fontSize: 16, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Redirecting you to the home page...
              </p>
              <div style={{ 
                width: 32, height: 32, border: "2.5px solid var(--bd)", 
                borderTopColor: "var(--text)", borderRadius: "50%", 
                margin: "24px auto 0", animation: "spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite" 
              }} />
            </div>
          )}
          
          <style>{`
            @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes spin { 100% { transform: rotate(360deg); } }
          `}</style>
        </div>
      </main>
    )
  }

  // The actual certifications page
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ height: "100px", background: "var(--bg)" }} />
      <section style={{ padding: "60px 0 40px", textAlign: "center" }}>
        <div className="W">
          <div className="sHdr sHdr--c rv">
            <div className="lbl">QUALITY & COMPLIANCE</div>
            <h1 className="D2" style={{ marginTop: 16 }}>Our Certifications</h1>
            <p className="Bd" style={{ maxWidth: 600, margin: "16px auto 0", color: "var(--text2)" }}>
              We adhere to the strictest industry standards to guarantee the reliability, safety, and performance of every wire harness and cable assembly we manufacture.
            </p>
          </div>
        </div>
      </section>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <CertsBanner />
      </div>
    </main>
  )
}
