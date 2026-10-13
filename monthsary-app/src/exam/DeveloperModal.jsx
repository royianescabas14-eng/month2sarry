import { Link } from "react-router-dom";
import { DEVELOPER_NOTES } from "./content";

export default function DeveloperModal({ onReplay, backTo = "/month/5" }) {
  const { summaryPoints, personalMessage } = DEVELOPER_NOTES;

  return (
    <div className="retro-developer-modal" role="region" aria-label="Developer Notes & Monthsary Letter">
      <div className="dev-notes-notepad">
        {/* Notepad Header Bar */}
        <div className="notepad-header">
          <span className="notepad-icon">📝</span>
          <h2 className="notepad-filename">{DEVELOPER_NOTES.windowTitle}</h2>
        </div>

        {/* System Summary Block */}
        <div className="dev-summary-box">
          <p className="summary-intro">After extensive testing, this application has determined that:</p>
          <ul className="summary-bullets">
            {summaryPoints.map((point, idx) => (
              <li key={idx} className="summary-point-item">
                <span className="bullet-arrow">👉</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Heartfelt Personal Letter */}
        <div className="dev-letter-paper">
          <div className="letter-header-group">
            <span className="letter-badge">MONTH 5 MESSAGE 💌</span>
            <h3 className="letter-salutation">{personalMessage.salutation}</h3>
          </div>

          <div className="letter-body-content">
            {personalMessage.paragraphs.map((p, idx) => (
              <p key={idx} className="letter-paragraph">{p}</p>
            ))}
          </div>

          <div className="letter-signoff-block">
            <p className="letter-closing">{personalMessage.closing}</p>
            <p className="letter-signature">{personalMessage.signature}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="dev-actions-row">
          <button
            type="button"
            className="retro-secondary-btn replay-exam-btn"
            onClick={onReplay}
          >
            🔄 REPLAY EXAM
          </button>

          <Link to="/" className="retro-primary-btn return-cal-btn">
            📅 RETURN TO CALENDAR 🏠
          </Link>
        </div>

        <div className="dev-sub-actions">
          <Link to={backTo} className="retro-text-link">
            ← Return to Month 5 Page
          </Link>
        </div>
      </div>
    </div>
  );
}
