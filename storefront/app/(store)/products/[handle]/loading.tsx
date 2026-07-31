export default function ProductLoading() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero Header Skeleton */}
      <div style={{ background: "var(--bg2)", padding: "120px 0 60px", borderBottom: "1px solid var(--bdM)" }}>
        <div className="W" style={{ display: "flex", justifyContent: "center" }}>
          <div className="skeleton skeleton-text title" style={{ width: 400, height: 48, marginBottom: 0 }}></div>
        </div>
      </div>

      <div className="W" style={{ paddingTop: 60, paddingBottom: 60 }}>
        {/* Product Intro (2-Column) Skeleton */}
        <div className="prod-det-grid" style={{ marginBottom: 80 }}>
          {/* Image Gallery Skeleton */}
          <div>
            <div className="skeleton skeleton-block" style={{ aspectRatio: "4/3", height: "auto", marginBottom: 16 }}></div>
            {/* Thumbnails Skeleton */}
            <div style={{ display: "flex", gap: 12 }}>
              <div className="skeleton skeleton-block" style={{ width: 80, height: 60 }}></div>
              <div className="skeleton skeleton-block" style={{ width: 80, height: 60 }}></div>
              <div className="skeleton skeleton-block" style={{ width: 80, height: 60 }}></div>
            </div>
          </div>

          {/* Right Column Skeleton */}
          <div style={{ paddingTop: 20 }}>
            <div className="skeleton skeleton-text" style={{ width: 100, marginBottom: 16 }}></div>
            
            <div className="skeleton skeleton-text" style={{ width: "100%" }}></div>
            <div className="skeleton skeleton-text" style={{ width: "100%" }}></div>
            <div className="skeleton skeleton-text" style={{ width: "80%", marginBottom: 32 }}></div>

            <div className="skeleton skeleton-text" style={{ width: 200, height: 40, marginBottom: 24 }}></div>

            <div style={{ display: "flex", gap: 12 }}>
              <div className="skeleton skeleton-block" style={{ flex: 1, height: 50, borderRadius: 9999 }}></div>
              <div className="skeleton skeleton-block" style={{ flex: 1, height: 50, borderRadius: 9999 }}></div>
            </div>
          </div>
        </div>

        {/* Specs Table Skeleton */}
        <div className="skeleton skeleton-text" style={{ width: 200, height: 24, marginBottom: 32 }}></div>
        <div className="skeleton skeleton-block" style={{ width: "100%", height: 300 }}></div>
      </div>
    </div>
  )
}
