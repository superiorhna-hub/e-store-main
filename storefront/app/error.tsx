"use client"; // Error boundaries must be Client Components

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)", padding: "40px 24px" }}>
      <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(239,68,68,0.1)", border: "2px solid rgba(239,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <div className="lbl" style={{ justifyContent: "center", marginBottom: 16 }}>Oops! Something went wrong</div>

        <h1 className="D3" style={{ marginBottom: 16 }}>We hit a snag</h1>

        <p style={{ fontSize: 17, color: "var(--text2)", lineHeight: 1.74, marginBottom: 32 }}>
          Sorry about that! It seems like something didn't load quite right on our end.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button onClick={() => reset()} className="btn bp">
            Try Again
          </button>
          <Link href="/" className="btn" style={{ background: "transparent", border: "1px solid var(--bd)", color: "var(--text)" }}>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
