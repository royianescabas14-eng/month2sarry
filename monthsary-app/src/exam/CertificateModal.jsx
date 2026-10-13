import { CERTIFICATE_DATA } from "./content";

export default function CertificateModal({ onOpenDeveloperNotes }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="retro-certificate-view" role="region" aria-label="Certificate of Girlfriend Excellence">
      {/* Printable Certificate Frame */}
      <div className="certificate-frame printable-area" id="printable-certificate">
        {/* Ornate corner borders */}
        <div className="cert-corner top-left" aria-hidden="true">╔</div>
        <div className="cert-corner top-right" aria-hidden="true">╗</div>
        <div className="cert-corner bottom-left" aria-hidden="true">╚</div>
        <div className="cert-corner bottom-right" aria-hidden="true">╝</div>

        <div className="cert-inner-border">
          <header className="cert-header">
            <span className="cert-bureau-title">{CERTIFICATE_DATA.bureauName}</span>
            <span className="cert-sub-division">{CERTIFICATE_DATA.subBureau}</span>
            <h1 className="cert-main-title">{CERTIFICATE_DATA.title}</h1>
          </header>

          <div className="cert-body">
            <p className="cert-intro-text">THIS OFFICIALLY CERTIFIES THAT</p>
            <div className="cert-recipient-name">{CERTIFICATE_DATA.recipientName}</div>
            <p className="cert-statement">{CERTIFICATE_DATA.bodyText}</p>

            <ul className="cert-authorizations-list">
              {CERTIFICATE_DATA.authorizations.map((item, idx) => (
                <li key={idx} className="cert-auth-item">
                  <span className="auth-bullet">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <footer className="cert-footer">
            <div className="cert-issuer-block">
              <span className="cert-sig-line">__________________________</span>
              <span className="cert-issuer-text">{CERTIFICATE_DATA.issuedBy}</span>
              <span className="cert-status-badge">{CERTIFICATE_DATA.status}</span>
            </div>

            {/* Official Gold/Mint Stamp Seal */}
            <div className="cert-official-seal" aria-label="Official Seal: Officially Unofficial">
              <div className="seal-circle">
                <span className="seal-stars">★ ★ ★</span>
                <span className="seal-center-text">{CERTIFICATE_DATA.sealText}</span>
                <span className="seal-year">MONTH 5</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="certificate-toolbar no-print">
        <button
          type="button"
          className="retro-secondary-btn print-cert-btn"
          onClick={handlePrint}
          title="Print or save as PDF"
        >
          🖨️ Print / Save Certificate
        </button>

        <button
          type="button"
          className="retro-primary-btn next-dev-btn pulse-glow"
          onClick={onOpenDeveloperNotes}
          autoFocus
        >
          [ READ DEVELOPER POPUP ✉️ ]
        </button>
      </div>
    </div>
  );
}
