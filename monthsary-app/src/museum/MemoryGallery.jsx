import { useState, useMemo } from "react";

const CATEGORY_LABELS = {
  "early-days":      "Early Days 🌱",
  "our-adventures":  "Our Adventures ⚔️",
  "recent-memories": "Recent Memories 🏛️",
};

// Shows image or a dignified placeholder if file is missing
function CardImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);
  const filename = src.split("/").pop();

  if (hasError) {
    return (
      <div className="card-image-fallback">
        <div className="fallback-icon" aria-hidden="true">🖼️</div>
        <div className="fallback-filename">{filename}</div>
        <div className="fallback-hint">Place in public/images/month6/</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="card-screenshot"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

function ExhibitCard({ screenshot, onClick, categoryLabel }) {
  return (
    <div
      className="scrapbook-card"
      role="button"
      tabIndex={0}
      aria-label={`View exhibit: ${screenshot.caption || screenshot.alt}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="card-image-wrapper">
        <CardImage src={screenshot.src} alt={screenshot.alt} />
      </div>
      <div className="card-details">
        <div className="card-meta-row">
          {categoryLabel && (
            <span className="card-category-tag">{categoryLabel}</span>
          )}
          {screenshot.date && (
            <span className="card-date">{screenshot.date}</span>
          )}
        </div>
        {screenshot.caption && (
          <p className="card-caption">"{screenshot.caption}"</p>
        )}
      </div>
    </div>
  );
}

export default function MemoryGallery({
  screenshots,
  categories,
  onOpenLightbox,
  onGoToClosing,
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return screenshots;
    return screenshots.filter((s) => s.category === activeCategory);
  }, [screenshots, activeCategory]);

  const countByCategory = useMemo(() => {
    const map = { all: screenshots.length };
    categories.forEach(({ id }) => {
      if (id !== "all") {
        map[id] = screenshots.filter((s) => s.category === id).length;
      }
    });
    return map;
  }, [screenshots, categories]);

  const handleCardClick = (screenshotId) => {
    const index = filtered.findIndex((s) => s.id === screenshotId);
    onOpenLightbox(index);
  };

  return (
    <div className="museum-gallery-view">
      {/* Gallery Header */}
      <div className="gallery-header-section">
        <h1 className="gallery-main-title">Exhibition Hall</h1>
        <p className="gallery-sub-title">
          A curated collection of our time together · Click any exhibit to view
        </p>

        {/* Wing / Category Filter */}
        <div className="gallery-category-bar" role="group" aria-label="Filter by wing">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`category-tab-btn${activeCategory === cat.id ? " active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              id={`museum-cat-${cat.id}`}
            >
              {cat.icon} {cat.label}
              <span className="category-count-badge">
                {countByCategory[cat.id] ?? 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Exhibit Grid */}
      {filtered.length > 0 ? (
        <div className="scrapbook-grid">
          {filtered.map((screenshot) => (
            <ExhibitCard
              key={screenshot.id}
              screenshot={screenshot}
              categoryLabel={
                activeCategory === "all"
                  ? CATEGORY_LABELS[screenshot.category]
                  : undefined
              }
              onClick={() => handleCardClick(screenshot.id)}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "80px 20px", color: "rgba(245,240,232,0.3)" }}>
          <p style={{ fontSize: "2.5rem", marginBottom: 12 }}>🖼️</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic" }}>
            No exhibits in this wing yet.
          </p>
        </div>
      )}

      {/* Footer — End of Exhibition */}
      <div className="gallery-footer-bar">
        <p className="closing-prompt-text">You've reached the end of our collection.</p>
        <button
          type="button"
          id="museum-goto-closing-btn"
          className="goto-closing-btn"
          onClick={onGoToClosing}
        >
          🏛️ Visit the Exit Hall
        </button>
      </div>
    </div>
  );
}
