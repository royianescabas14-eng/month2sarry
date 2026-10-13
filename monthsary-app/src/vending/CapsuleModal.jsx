import { useEffect, useState } from "react";

export default function CapsuleModal({
  surprise,
  onClose,
  hugsSent,
  onSendHug,
}) {
  const [justSentHug, setJustSentHug] = useState(false);
  const [challengeDone, setChallengeDone] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!surprise) return null;

  const isHugCategory = surprise.categoryId === "hugs";
  const isChallengeCategory = surprise.categoryId === "challenges";

  const handleSendHug = () => {
    onSendHug();
    setJustSentHug(true);
    setTimeout(() => setJustSentHug(false), 1200);
  };

  return (
    <div
      className="vending-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="surprise-title"
    >
      <div
        className="vending-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          "--card-accent": surprise.color,
          "--card-glow": surprise.color + "55",
        }}
      >
        {/* Decorative capsule lid animation */}
        <div className="modal-capsule-header" aria-hidden="true">
          <div className="capsule-half top">
            <span className="burst-sparkle s-1">✨</span>
            <span className="burst-sparkle s-2">💖</span>
            <span className="burst-sparkle s-3">✨</span>
          </div>
          <div className="capsule-reveal-icon">
            <span>{surprise.icon || "💌"}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="modal-content">
          <div className="modal-badge-row">
            <span className="category-pill" style={{ backgroundColor: surprise.color }}>
              {surprise.categoryName || "Surprise"}
            </span>
            {surprise.tag && <span className="tag-pill">{surprise.tag}</span>}
          </div>

          <h2 id="surprise-title" className="surprise-title">
            {surprise.title}
          </h2>

          <div className="surprise-message-box">
            <p className="surprise-message">{surprise.message}</p>
          </div>

          {/* Interactive Feature: Virtual Hugs */}
          {isHugCategory && (
            <div className="hug-interaction-zone">
              <div className={`hug-counter-display ${justSentHug ? "pulse" : ""}`}>
                <span className="hug-emoji" aria-hidden="true">
                  {surprise.hugEmoji || "🫂"}
                </span>
                <span className="hug-count-text">
                  Warm hugs shared: <strong>{hugsSent + 1}</strong>
                </span>
              </div>
              <button
                type="button"
                className={`send-hug-btn ${justSentHug ? "hugging" : ""}`}
                onClick={handleSendHug}
                aria-label="Send another warm virtual hug"
              >
                <span>{justSentHug ? "Holding you tight... 💕" : "Send another warm hug 🫂"}</span>
              </button>
            </div>
          )}

          {/* Interactive Feature: Little Challenges */}
          {isChallengeCategory && (
            <div className="challenge-action-zone">
              <button
                type="button"
                className={`challenge-check-btn ${challengeDone ? "done" : ""}`}
                onClick={() => setChallengeDone(!challengeDone)}
                aria-label="Mark challenge as ready to do"
              >
                <span>{challengeDone ? "Ready for this! 💖" : "Let's do this together! ✨"}</span>
              </button>
            </div>
          )}

          {/* Modal Footer / Close button */}
          <div className="modal-actions">
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              autoFocus
            >
              Back to Vending Machine 💗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
