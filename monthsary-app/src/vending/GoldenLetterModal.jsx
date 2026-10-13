import { useEffect } from "react";
import { GOLDEN_CAPSULE } from "./content";

export default function GoldenLetterModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="vending-modal-backdrop golden-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="golden-letter-title"
    >
      <div
        className="golden-envelope-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Golden Wax Seal / Top Ribbon */}
        <div className="golden-seal-header" aria-hidden="true">
          <div className="golden-ribbon-line"></div>
          <div className="golden-wax-seal">
            <span className="seal-star">🌟</span>
          </div>
          <div className="golden-ribbon-line"></div>
        </div>

        {/* Letter Container */}
        <div className="golden-parchment-sheet">
          <div className="golden-letter-badge">{GOLDEN_CAPSULE.badge}</div>

          <h2 id="golden-letter-title" className="golden-letter-title">
            {GOLDEN_CAPSULE.title}
          </h2>

          <p className="golden-letter-salutation">
            {GOLDEN_CAPSULE.salutation}
          </p>

          <div className="golden-letter-body">
            {GOLDEN_CAPSULE.paragraphs.map((p, index) => (
              <p key={index} className="golden-letter-para">
                {p}
              </p>
            ))}
          </div>

          <div className="golden-letter-signoff">
            <p className="signoff-phrase">{GOLDEN_CAPSULE.signoff}</p>
            <p className="signature-name">{GOLDEN_CAPSULE.signature}</p>
          </div>

          {/* Close / Return Button */}
          <div className="golden-modal-actions">
            <button
              type="button"
              className="golden-close-btn"
              onClick={onClose}
              autoFocus
            >
              Keep Close to Heart 💛
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
