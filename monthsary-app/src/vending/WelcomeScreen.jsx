import { Link } from "react-router-dom";
import { VENDING_INTRO } from "./content";

export default function WelcomeScreen({ onEnter, backTo }) {
  return (
    <div className="vending-welcome-card" data-autofocus tabIndex="-1">
      <div className="vending-welcome-badge">{VENDING_INTRO.badge}</div>
      <div className="vending-welcome-machine-icon" aria-hidden="true">
        <span className="vending-icon-sparkle sparkle-1">✨</span>
        <span className="vending-icon-sparkle sparkle-2">💖</span>
        <span className="vending-icon-sparkle sparkle-3">✨</span>
        <div className="vending-welcome-dome">
          <span className="vending-heart-capsule pink">💗</span>
          <span className="vending-heart-capsule gold">💛</span>
          <span className="vending-heart-capsule purple">💜</span>
          <span className="vending-heart-capsule peach">🧡</span>
          <span className="vending-heart-capsule blue">💙</span>
        </div>
      </div>

      <h1 className="vending-welcome-title">{VENDING_INTRO.title}</h1>
      <p className="vending-welcome-tagline">“{VENDING_INTRO.tagline}”</p>
      <p className="vending-welcome-desc">{VENDING_INTRO.description}</p>

      <div className="vending-welcome-actions">
        <button
          type="button"
          className="vending-start-btn"
          onClick={onEnter}
          aria-label="Enter the love vending machine"
        >
          {VENDING_INTRO.buttonText}
        </button>

        <Link to={backTo} className="vending-back-link">
          ← Back to Month 4
        </Link>
      </div>
    </div>
  );
}
