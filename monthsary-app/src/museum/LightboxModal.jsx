import { useState, useEffect, useCallback } from "react";

const CATEGORY_LABELS = {
  "early-days":      "Early Days 🌱",
  "our-adventures":  "Our Adventures ⚔️",
  "recent-memories": "Recent Memories 🏛️",
};

function LightboxImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);
  const filename = src.split("/").pop();

  if (hasError) {
    return (
      <div className="lightbox-fallback-box">
        <div style={{ fontSize: "3rem", marginBottom: 12, opacity: 0.4 }}>🖼️</div>
        <p style={{ color: "var(--museum-parchment)", fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
          Exhibit not found
        </p>
        <p style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "var(--museum-gold)", marginTop: 6 }}>
          {filename}
        </p>
        <p style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.4)", marginTop: 8 }}>
          Place file in: <code>public/images/month6/</code>
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="lightbox-img"
      onError={() => setHasError(true)}
    />
  );
}

export default function LightboxModal({
  screenshots,
  currentIndex,
  onChangeIndex,
  onClose,
}) {
  const total   = screenshots.length;
  const current = screenshots[currentIndex];

  const goPrev = useCallback(() => {
    onChangeIndex((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onChangeIndex]);

  const goNext = useCallback(() => {
    onChangeIndex((currentIndex + 1) % total);
  }, [currentIndex, total, onChangeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft")  goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext, onClose]);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!current) return null;

  const categoryLabel = CATEGORY_LABELS[current.category];

  return (
    <div
      className="museum-lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Exhibit viewer"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="museum-lightbox-content">
        {/* Close */}
        <button
          type="button"
          className="lightbox-close-btn"
          aria-label="Close viewer"
          onClick={onClose}
          id="museum-lightbox-close"
        >
          ✕
        </button>

        {/* Image Stage — gold-framed */}
        <div className="lightbox-image-stage">
          {/* Prev */}
          {total > 1 && (
            <button
              type="button"
              className="lightbox-nav-btn prev"
              aria-label="Previous exhibit"
              onClick={goPrev}
              id="museum-lightbox-prev"
            >
              ‹
            </button>
          )}

          <LightboxImage src={current.src} alt={current.alt} />

          {/* Next */}
          {total > 1 && (
            <button
              type="button"
              className="lightbox-nav-btn next"
              aria-label="Next exhibit"
              onClick={goNext}
              id="museum-lightbox-next"
            >
              ›
            </button>
          )}
        </div>

        {/* Museum Placard */}
        <div className="lightbox-info-panel">
          <div className="lightbox-counter-row">
            <span>Exhibit {currentIndex + 1} of {total}</span>
            {categoryLabel && (
              <>
                <span aria-hidden="true">·</span>
                <span>{categoryLabel}</span>
              </>
            )}
          </div>
          {current.caption && (
            <p className="lightbox-caption">"{current.caption}"</p>
          )}
          {current.date && (
            <p className="lightbox-date">📅 {current.date}</p>
          )}
        </div>
      </div>
    </div>
  );
}
