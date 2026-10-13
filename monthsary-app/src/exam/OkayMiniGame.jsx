import { useState } from "react";
import { OKAY_MINI_GAME } from "./content";

export default function OkayMiniGame({ onComplete }) {
  const [clickedIds, setClickedIds] = useState([]);
  const [activePopup, setActivePopup] = useState(null);
  const isResolved = clickedIds.length >= OKAY_MINI_GAME.resolvedThreshold;

  const handleClickBubble = (bubble) => {
    if (!clickedIds.includes(bubble.id)) {
      setClickedIds((prev) => [...prev, bubble.id]);
    }
    setActivePopup({
      bubbleText: bubble.text,
      message: bubble.popup,
    });
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="retro-okay-game" role="region" aria-label="Okay.exe Diagnostics">
      <div className="game-alert-banner">
        <span className="alert-icon">⚠️</span>
        <div className="alert-text-group">
          <h2 className="alert-title">{OKAY_MINI_GAME.windowTitle}</h2>
          <span className="alert-sub">{OKAY_MINI_GAME.subtitle}</span>
        </div>
        <button
          type="button"
          className="game-skip-btn"
          onClick={onComplete}
          aria-label="Skip Okay mini-game"
        >
          [ Skip Mini-game ⏩ ]
        </button>
      </div>

      <p className="game-instruction">{OKAY_MINI_GAME.instruction}</p>

      {/* Interactive Chat Bubbles Area */}
      <div className="okay-bubbles-container" role="group" aria-label="Okay bubble choices">
        {OKAY_MINI_GAME.bubbles.map((bubble) => {
          const wasClicked = clickedIds.includes(bubble.id);
          return (
            <button
              key={bubble.id}
              type="button"
              className={`okay-bubble-btn ${wasClicked ? "clicked" : "pulse-bubble"}`}
              onClick={() => handleClickBubble(bubble)}
              aria-label={`Test interpretation: ${bubble.text}`}
            >
              <span className="bubble-quote-icon">💬</span>
              <span className="bubble-label">"{bubble.text}"</span>
              {wasClicked && <span className="bubble-check-icon">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Diagnosis Progress Bar */}
      <div className="okay-progress-panel">
        <span className="progress-info">
          Analyzed: {clickedIds.length} / {OKAY_MINI_GAME.resolvedThreshold} required samples
        </span>
        <div className="retro-progress-track">
          <div
            className="retro-progress-fill"
            style={{
              width: `${Math.min(100, Math.round((clickedIds.length / OKAY_MINI_GAME.resolvedThreshold) * 100))}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Resolution Card when threshold is met */}
      {isResolved && (
        <div className="okay-resolution-card" aria-live="polite">
          <div className="resolution-error-banner">
            <span className="error-sign">🚨</span>
            <span className="error-text">{OKAY_MINI_GAME.errorBanner}</span>
          </div>
          <p className="resolution-diagnosis">{OKAY_MINI_GAME.finalDiagnosis}</p>
          <div className="resolution-action">
            <button
              type="button"
              className="retro-primary-btn continue-game-btn pulse-glow"
              onClick={onComplete}
              autoFocus
            >
              [ {OKAY_MINI_GAME.continueButton} ➡️ ]
            </button>
          </div>
        </div>
      )}

      {/* Glitch / Popup Dialog */}
      {activePopup && !isResolved && (
        <div
          className="retro-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="bubble-popup-title"
        >
          <div className="retro-popup-window popup-small">
            <div className="popup-titlebar">
              <span id="bubble-popup-title" className="popup-title">
                PARSER RESULT // "{activePopup.bubbleText}"
              </span>
              <button
                type="button"
                className="popup-close-btn"
                onClick={handleClosePopup}
                aria-label="Dismiss alert"
              >
                ✕
              </button>
            </div>
            <div className="popup-body">
              <div className="popup-icon-warning">⚠️</div>
              <p className="popup-alert-text">{activePopup.message}</p>
            </div>
            <div className="popup-footer">
              <button
                type="button"
                className="retro-primary-btn"
                onClick={handleClosePopup}
                autoFocus
              >
                [ OK / ACKNOWLEDGE ]
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
