export default function StoreLoading() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero Skeleton */}
      <div className="skeleton skeleton-block" style={{ height: 600, borderRadius: 0 }}></div>

      {/* Stats Skeleton */}
      <div className="W" style={{ padding: "80px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="skeleton skeleton-text" style={{ width: 120, height: 60 }}></div>
          <div className="skeleton skeleton-text" style={{ width: 120, height: 60 }}></div>
          <div className="skeleton skeleton-text" style={{ width: 120, height: 60 }}></div>
          <div className="skeleton skeleton-text" style={{ width: 120, height: 60 }}></div>
        </div>
      </div>

      {/* Featured Products Skeleton */}
      <div className="W" style={{ paddingBottom: 80 }}>
        <div className="skeleton skeleton-text title" style={{ width: 300, height: 40, margin: "0 auto 40px" }}></div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 24
        }}>
          {Array.from({ length: 4 }).map((_, i) => (
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
  )
}
