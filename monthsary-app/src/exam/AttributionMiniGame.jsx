import { useState } from "react";
import { ATTRIBUTION_MINI_GAME } from "./content";

const OPTIONS = [
  { id: "gwenyy", label: "🌸 Gwenyy" },
  { id: "boyfriend", label: "🙋‍♂️ Boyfriend" },
  { id: "both", label: "🫂 Both" },
];

export default function AttributionMiniGame({ onComplete }) {
  const [selections, setSelections] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalScenarios = ATTRIBUTION_MINI_GAME.scenarios.length;
  const answeredCount = Object.keys(selections).length;
  const allAnswered = answeredCount === totalScenarios;

  const handleSelect = (scenarioId, optionId) => {
    setSelections((prev) => ({
      ...prev,
      [scenarioId]: optionId,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="retro-attribution-game" role="region" aria-label="Incident Attribution Protocol">
      <div className="attribution-header">
        <div className="attribution-title-wrap">
          <span className="attribution-icon">⚖️</span>
          <h2 className="attribution-title">{ATTRIBUTION_MINI_GAME.windowTitle}</h2>
        </div>
        <button
          type="button"
          className="game-skip-btn"
          onClick={onComplete}
          aria-label="Skip attribution game"
        >
          [ Skip to Results ⏩ ]
        </button>
      </div>

      <p className="attribution-instruction">{ATTRIBUTION_MINI_GAME.instruction}</p>

      {/* Scenarios List */}
      <div className="scenarios-list" role="group" aria-label="Incident cases">
        {ATTRIBUTION_MINI_GAME.scenarios.map((scen, index) => {
          const currentChoice = selections[scen.id];
          return (
            <div key={scen.id} className="scenario-item-card">
              <div className="scenario-meta">
                <span className="scenario-index">INCIDENT 0{index + 1}</span>
                <p className="scenario-text">"{scen.habit}"</p>
              </div>

              <div className="scenario-buttons-row" role="radiogroup" aria-label={`Responsibility for incident ${index + 1}`}>
                {OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`attribution-opt-btn ${currentChoice === opt.id ? "selected" : ""}`}
                    onClick={() => handleSelect(scen.id, opt.id)}
                    aria-checked={currentChoice === opt.id}
                    role="radio"
                    disabled={isSubmitted}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit / Result Area */}
      <div className="attribution-footer-action">
        {!isSubmitted ? (
          <button
            type="button"
            className="retro-primary-btn submit-attribution-btn"
            disabled={!allAnswered}
            onClick={handleSubmit}
          >
            {allAnswered
              ? "[ SUBMIT CASE FOR VERDICT ⚖️ ]"
              : `[ ASSIGN ALL ITEMS (${answeredCount}/${totalScenarios}) ]`}
          </button>
        ) : (
          <div className="attribution-verdict-box" aria-live="polite">
            <div className="verdict-stamp">OFFICIAL VERDICT</div>
            <p className="verdict-text">{ATTRIBUTION_MINI_GAME.officialResult}</p>
            <button
              type="button"
              className="retro-primary-btn next-cert-btn pulse-glow"
              onClick={onComplete}
              autoFocus
            >
              [ {ATTRIBUTION_MINI_GAME.buttonText} ]
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
