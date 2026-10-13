import { NOTICE_DATA } from "./content";

export default function NoticeScreen({ onStartExam }) {
  return (
    <div className="retro-notice-screen" role="region" aria-label="Official Notice">
      <div className="notice-stamp-seal" aria-hidden="true">
        <span>TOP SECRET</span>
        <span className="stamp-sub">RSB AUDIT</span>
      </div>

      <div className="notice-header-bar">
        <span className="notice-icon">⚠️</span>
        <h2 className="notice-title">{NOTICE_DATA.title}</h2>
        <span className="notice-ref">{NOTICE_DATA.refCode}</span>
      </div>

      <div className="notice-message-box">
        <p className="notice-salutation">{NOTICE_DATA.salutation}</p>
        <p className="notice-intro">{NOTICE_DATA.intro}</p>
      </div>

      {/* Official Registry Table */}
      <div className="notice-dossier-table" role="table" aria-label="Candidate file details">
        {NOTICE_DATA.details.map((item, idx) => (
          <div key={idx} className="dossier-row" role="row">
            <span className="dossier-label" role="rowheader">{item.label}:</span>
            <span className="dossier-value" role="cell">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="notice-disclaimer">
        <span className="disclaimer-icon">💡</span>
        <span>
          <strong>OFFICIAL ADVISORY:</strong> No emotional damage will occur during this exam. All answers lead to mutual lambing.
        </span>
      </div>

      <div className="notice-actions">
        <button
          type="button"
          className="retro-primary-btn notice-start-btn pulse-hover"
          onClick={onStartExam}
          autoFocus
        >
          [ {NOTICE_DATA.buttonText} 🚀 ]
        </button>
      </div>
    </div>
  );
}
