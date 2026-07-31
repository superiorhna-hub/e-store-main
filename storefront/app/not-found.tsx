import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)", padding: "40px 24px" }}>
      <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(0,109,55,0.08)", border: "2px solid rgba(0,109,55,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--acc)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <div className="lbl" style={{ justifyContent: "center", marginBottom: 16 }}>404 Not Found</div>

        <h1 className="D3" style={{ marginBottom: 16 }}>Page not found</h1>

        <p style={{ fontSize: 17, color: "var(--text2)", lineHeight: 1.74, marginBottom: 32 }}>
          We couldn't find the page you're looking for. It might have been moved, or the link you clicked might be broken.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <Link href="/shop" className="btn bp">
            Browse Products
          </Link>
          <Link href="/" className="btn" style={{ background: "transparent", border: "1px solid var(--bd)", color: "var(--text)" }}>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
