import { useState } from "react";
import { Link } from "react-router-dom";
import "./museum.css";
import {
  JOURNAL_CONFIG,
  CATEGORIES,
  SCREENSHOTS,
  CLOSING_CONFIG,
} from "./galleryData";
import MemoryGallery from "./MemoryGallery";
import LightboxModal from "./LightboxModal";

// Shared navigation bar
function MuseumTopNav({ currentView, onViewChange }) {
  return (
    <nav className="museum-top-nav">
      <div className="museum-brand-title">
        <span className="museum-emblem">🏛️</span>
        <span>The Museum of Us</span>
      </div>
      <div className="museum-shared-links">
        {currentView === "gallery" && (
          <button
            type="button"
            className="museum-nav-link secondary"
            onClick={() => onViewChange("opening")}
          >
            ← Entrance
          </button>
        )}
        {currentView === "closing" && (
          <button
            type="button"
            className="museum-nav-link secondary"
            onClick={() => onViewChange("gallery")}
          >
            ← Gallery
          </button>
        )}
        <Link to="/month/6/words" className="museum-nav-link romantic">
          💌 Love Letter
        </Link>
        <Link to="/month/6/gift" className="museum-nav-link gift">
          🎁 Gift
        </Link>
        <Link to="/" className="museum-nav-link secondary">
          🏠 Home
        </Link>
      </div>
    </nav>
  );
}

// Opening / Grand Entrance Screen
function OpeningScreen({ onOpen }) {
  return (
    <div className="museum-opening-screen">
      <div className="journal-book-cover">
        {/* Ornate corner accents */}
        <span className="journal-corner top-left"    aria-hidden="true" />
        <span className="journal-corner top-right"   aria-hidden="true" />
        <span className="journal-corner bottom-left" aria-hidden="true" />
        <span className="journal-corner bottom-right"aria-hidden="true" />

        <div className="journal-badge-pill">
          🖼️ {JOURNAL_CONFIG.badge}
        </div>

        <h1 className="journal-title">{JOURNAL_CONFIG.title}</h1>
        <p className="journal-subtitle">{JOURNAL_CONFIG.subtitle}</p>

        <div className="journal-divider" aria-hidden="true">✦</div>

        <div className="journal-intro-scroll">
          {JOURNAL_CONFIG.welcomeParagraphs.map((p, i) => (
            <p key={i} className="journal-intro-p">{p}</p>
          ))}
        </div>

        <button
          type="button"
          id="museum-open-journal-btn"
          className="journal-open-btn"
          onClick={onOpen}
        >
          {JOURNAL_CONFIG.openButtonText}
        </button>
      </div>
    </div>
  );
}

// Closing / Exit Hall Screen
function ClosingScreen({ onBackToGallery, backTo }) {
  const hasFinalShot = Boolean(CLOSING_CONFIG.finalScreenshot);

  return (
    <div className="museum-closing-screen">
      <div className="closing-journal-scroll">
        <span className="journal-corner top-left"    aria-hidden="true" />
        <span className="journal-corner top-right"   aria-hidden="true" />
        <span className="journal-corner bottom-left" aria-hidden="true" />
        <span className="journal-corner bottom-right"aria-hidden="true" />

        <div className="closing-crest-icon" aria-hidden="true">🏛️</div>

        <h1 className="closing-title">{CLOSING_CONFIG.title}</h1>

        <div className="journal-divider" aria-hidden="true">✦</div>

        {hasFinalShot && (
          <div className="final-screenshot-frame">
            <img
              src={CLOSING_CONFIG.finalScreenshot}
              alt="Final memory exhibit"
              className="final-screenshot-img"
            />
            {CLOSING_CONFIG.finalCaption && (
              <p className="final-screenshot-caption">
                {CLOSING_CONFIG.finalCaption}
              </p>
            )}
          </div>
        )}

        <div className="closing-text-card">
          {CLOSING_CONFIG.paragraphs.map((p, i) => (
            <p key={i} className="closing-p">{p}</p>
          ))}
        </div>

        <div className="closing-actions-grid">
          <button
            type="button"
            id="museum-back-to-gallery-btn"
            className="closing-btn secondary"
            onClick={onBackToGallery}
          >
            ← Back to Gallery
          </button>
          <div className="closing-shared-row">
            <Link to={backTo} className="closing-btn primary">
              💌 Love Letter
            </Link>
            <Link to="/" className="closing-btn secondary">
              🏠 Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Root component
export default function MuseumSection({ backTo = "/month/6" }) {
  const [view, setView] = useState("opening");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleOpenGallery  = () => setView("gallery");
  const handleGoClosing    = () => setView("closing");
  const handleBackGallery  = () => setView("gallery");
  const handleOpenLightbox = (index) => setLightboxIndex(index);
  const handleCloseLightbox= () => setLightboxIndex(null);

  return (
    <div className="museum-container">
      {/* Dark marble texture overlay */}
      <div className="museum-ambient-backdrop" aria-hidden="true" />

      {/* Sticky top nav */}
      <MuseumTopNav currentView={view} onViewChange={setView} />

      {/* Screens */}
      {view === "opening" && (
        <OpeningScreen onOpen={handleOpenGallery} />
      )}

      {view === "gallery" && (
        <MemoryGallery
          screenshots={SCREENSHOTS}
          categories={CATEGORIES}
          onOpenLightbox={handleOpenLightbox}
          onGoToClosing={handleGoClosing}
          lightboxIndex={lightboxIndex}
          onCloseLightbox={handleCloseLightbox}
        />
      )}

      {view === "closing" && (
        <ClosingScreen
          onBackToGallery={handleBackGallery}
          backTo={backTo}
        />
      )}

      {/* Lightbox at root level */}
      {view === "gallery" && lightboxIndex !== null && (
        <LightboxModal
          screenshots={SCREENSHOTS}
          currentIndex={lightboxIndex}
          onChangeIndex={setLightboxIndex}
          onClose={handleCloseLightbox}
          categories={CATEGORIES}
        />
      )}
    </div>
  );
}
