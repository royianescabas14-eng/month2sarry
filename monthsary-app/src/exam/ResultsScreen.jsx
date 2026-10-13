import { CERTIFICATE_DATA } from "./content";

export default function ResultsScreen({ onOpenCertificate }) {
  return (
    <div className="retro-results-screen" role="region" aria-label="Official Audit Results">
      {/* Top Banner */}
      <div className="results-badge-bar">
        <span className="results-badge-pill">AUDIT STATUS: 100% PASSED</span>
        <span className="results-serial">SYSTEM REGISTRATION #RSB-M5-APPROVED</span>
      </div>

      <div className="results-header">
        <span className="results-trophy-icon" aria-hidden="true">🏆</span>
        <h2 className="results-title">GIRLFRIEND CERTIFICATION REPORT</h2>
        <p className="results-subtitle">
          Official telemetry analysis confirms unprecedented levels of charm and teasing.
        </p>
      </div>

      {/* Candidate Dossier Card */}
      <div className="results-dossier-card">
        <div className="dossier-row-main">
          <span className="dossier-tag">CERTIFIED CANDIDATE:</span>
          <span className="dossier-name">{CERTIFICATE_DATA.recipientName}</span>
        </div>

        <div className="titles-awarded-block">
          <span className="titles-heading">OFFICIAL TITLES CONFERRED:</span>
          <ul className="titles-list">
            {CERTIFICATE_DATA.titlesEarned.map((title, idx) => (
              <li key={idx} className="title-item">
                <span className="title-star">⭐</span>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fake Statistics Grid */}
        <div className="fake-stats-grid" role="group" aria-label="Audited telemetry statistics">
          {CERTIFICATE_DATA.fakeStats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-val">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button to open certificate */}
      <div className="results-action-row">
        <button
          type="button"
          className="retro-primary-btn results-cert-btn pulse-glow"
          onClick={onOpenCertificate}
          autoFocus
        >
          [ VIEW OFFICIAL CERTIFICATE 📜 ]
        </button>
      </div>
    </div>
  );
}
