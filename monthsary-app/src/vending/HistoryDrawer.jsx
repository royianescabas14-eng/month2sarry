import { useEffect } from "react";
import { GOLDEN_CAPSULE } from "./content";

export default function HistoryDrawer({
  isOpen,
  onClose,
  historyList,
  goldenDiscovered,
  onSelectSurprise,
  onOpenGolden,
  onResetProgress,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="vending-drawer-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Discovered surprises collection"
    >
      <div
        className="vending-drawer-sheet"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <div className="drawer-title-group">
            <span className="drawer-icon">🎁</span>
            <h2 className="drawer-title">Unlocked Surprises</h2>
          </div>
          <button
            type="button"
            className="drawer-close-icon"
            onClick={onClose}
            aria-label="Close collection drawer"
          >
            ✕
          </button>
        </div>

        <p className="drawer-subtitle">
          Revisit any of the little pieces of love you've already found:
        </p>

        <div className="drawer-content-scroll">
          {/* Special Golden Capsule Banner if discovered */}
          {goldenDiscovered && (
            <div
              className="drawer-item golden-item"
              onClick={() => {
                onClose();
                onOpenGolden();
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onClose();
                  onOpenGolden();
                }
              }}
            >
              <span className="drawer-item-icon">🌟</span>
              <div className="drawer-item-info">
                <span className="drawer-item-category">Special Monthsary Gift</span>
                <span className="drawer-item-title">{GOLDEN_CAPSULE.title}</span>
              </div>
              <span className="drawer-item-arrow">Read →</span>
            </div>
          )}

          {historyList.length === 0 && !goldenDiscovered ? (
            <div className="drawer-empty-state">
              <span className="empty-icon">🧸</span>
              <p>No capsules opened yet!</p>
              <p className="empty-sub">Choose any category on the machine to reveal your first surprise.</p>
            </div>
          ) : (
            historyList.map((item) => (
              <div
                key={item.id}
                className="drawer-item"
                style={{ "--item-accent": item.color }}
                onClick={() => onSelectSurprise(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onSelectSurprise(item);
                  }
                }}
              >
                <span className="drawer-item-icon">{item.icon}</span>
                <div className="drawer-item-info">
                  <span className="drawer-item-category">{item.categoryName}</span>
                  <span className="drawer-item-title">{item.title}</span>
                </div>
                <span className="drawer-item-arrow">Open →</span>
              </div>
            ))
          )}
        </div>

        {/* Footer with Reset Option */}
        <div className="drawer-footer">
          <button
            type="button"
            className="drawer-reset-btn"
            onClick={() => {
              if (window.confirm("Do you want to reset your unlocked surprises collection?")) {
                onResetProgress();
              }
            }}
          >
            Reset Progress
          </button>
          <button
            type="button"
            className="drawer-back-btn"
            onClick={onClose}
          >
            Close Collection
          </button>
        </div>
      </div>
    </div>
  );
}
