export default function ShopLoading() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ paddingTop: 120 }}>
        <section className="inner-banner">
          <div className="W">
            <div className="inner-banner__eyebrow">Online Store</div>
            <h1 className="D2 inner-banner__h">Shop Our Products</h1>
            <p className="inner-banner__p">
              Browse and order from our catalog of wire harnesses, cable assemblies, and electromechanical builds — engineered and manufactured under one roof.
            </p>
          </div>
        </section>
      </div>

      <div className="W shop-container" style={{ paddingTop: 56, paddingBottom: 80, display: "flex", gap: 32 }}>
        {/* Sidebar Skeleton */}
        <aside style={{ width: 260, flexShrink: 0, display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div className="skeleton skeleton-text" style={{ width: 80, height: 16, marginBottom: 16 }}></div>
            <div className="skeleton skeleton-text" style={{ width: "100%", height: 40 }}></div>
          </div>
          <div>
            <div className="skeleton skeleton-text" style={{ width: 80, height: 16, marginBottom: 16 }}></div>
            <div className="skeleton skeleton-text" style={{ width: "80%", height: 24 }}></div>
            <div className="skeleton skeleton-text" style={{ width: "60%", height: 24 }}></div>
            <div className="skeleton skeleton-text" style={{ width: "70%", height: 24 }}></div>
            <div className="skeleton skeleton-text" style={{ width: "85%", height: 24 }}></div>
          </div>
        </aside>

        {/* Grid Skeleton */}
        <div style={{ flex: 1 }}>
          {/* Top Bar Skeleton */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
            <div className="skeleton skeleton-text" style={{ width: 120, height: 20 }}></div>
            <div className="skeleton skeleton-text" style={{ width: 150, height: 36 }}></div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 24
          }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <div className="skeleton skeleton-block" style={{ height: 240, marginBottom: 16 }}></div>
                <div className="skeleton skeleton-text" style={{ width: "80%" }}></div>
                <div className="skeleton skeleton-text" style={{ width: "40%", marginBottom: 16 }}></div>
                <div className="skeleton skeleton-text" style={{ width: "100%", height: 36, marginTop: "auto" }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
