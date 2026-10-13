import { CATEGORIES, GOLDEN_CAPSULE } from "./content";

export default function VendingMachine({
  state,
  onDispenseCategory,
  onDispenseGolden,
  onCollectCapsule,
  onOpenHistory,
  onOpenGoldenDirectly,
  totalSurprises,
}) {
  const isDispensing = Boolean(state.dispensing);
  const isReady = Boolean(state.readyToCollect);
  const discoveredCount = state.discoveredIds.length;

  return (
    <div className="vending-machine-wrapper">
      {/* Top Header & Stats */}
      <div className="vending-top-bar">
        <div className="vending-counter-chip" aria-live="polite">
          <span className="vending-chip-icon">✨</span>
          <span className="vending-chip-text">
            <strong>{discoveredCount}</strong> of <strong>{totalSurprises}</strong> surprises unlocked
          </span>
        </div>

        <button
          type="button"
          className="vending-history-btn"
          onClick={onOpenHistory}
          aria-label={`View your ${state.historyList.length} discovered surprises`}
        >
          <span>🎁</span> Collection ({state.historyList.length})
        </button>
      </div>

      {/* Main Machine Cabinet */}
      <div className="vending-cabinet" role="region" aria-label="The Love Vending Machine">
        {/* Cabinet Marquee / Header */}
        <div className="vending-marquee">
          <div className="marquee-lights left" aria-hidden="true">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </div>
          <div className="marquee-sign">
            <span className="sign-heart">💗</span>
            <span className="sign-title">GWENYY'S LOVE VENDING</span>
            <span className="sign-heart">💗</span>
          </div>
          <div className="marquee-lights right" aria-hidden="true">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </div>
        </div>

        {/* Glass Capsule Showcase Window */}
        <div className="vending-glass-window" aria-label="Capsule display chamber">
          <div className="vending-glass-reflection" aria-hidden="true"></div>

          {/* Floating decorative capsule hearts */}
          <div className="vending-capsule-chamber">
            <div className="chamber-capsule cap-words" title="Words of Love Capsule">
              <span className="cap-heart">💗</span>
              <span className="cap-label">Love</span>
            </div>
            <div className="chamber-capsule cap-hugs" title="Virtual Hugs Capsule">
              <span className="cap-heart">🧡</span>
              <span className="cap-label">Hugs</span>
            </div>
            <div className="chamber-capsule cap-challenges" title="Little Challenges Capsule">
              <span className="cap-heart">💜</span>
              <span className="cap-label">Play</span>
            </div>
            <div className="chamber-capsule cap-promises" title="Our Little Promises Capsule">
              <span className="cap-heart">💙</span>
              <span className="cap-label">Promise</span>
            </div>
            <div className="chamber-capsule cap-mystery" title="Mystery Capsule">
              <span className="cap-heart">💖</span>
              <span className="cap-label">Mystery</span>
            </div>

            {/* Special Golden Capsule placed on a glowing pedestal */}
            <button
              type="button"
              className={`chamber-capsule cap-golden ${state.goldenDiscovered ? "discovered" : ""}`}
              onClick={() => {
                if (!isDispensing && !isReady) {
                  onDispenseGolden();
                } else if (state.goldenDiscovered) {
                  onOpenGoldenDirectly();
                }
              }}
              aria-label="Golden Heart Capsule - Special 4th Monthsary Letter"
              title="Special Golden Capsule (Tap to dispense or read letter)"
            >
              <div className="golden-halo" aria-hidden="true"></div>
              <span className="golden-star-sparkle" aria-hidden="true">✨</span>
              <span className="cap-heart golden-heart">💛</span>
              <span className="cap-label golden-label">Special Letter</span>
            </button>
          </div>

          <div className="chamber-floor" aria-hidden="true">
            <div className="floor-glow"></div>
          </div>
        </div>

        {/* Dispensing Animation Overlay / Spiral Guide */}
        <div className="vending-mid-section">
          <div className="vending-instruction">
            {isDispensing ? (
              <span className="status-text dispensing" aria-live="polite">
                ✨ Dispensing your love capsule... ✨
              </span>
            ) : isReady ? (
              <span className="status-text ready" aria-live="polite">
                👇 Your capsule has arrived! Tap below to open! 💖
              </span>
            ) : (
              <span className="status-text idle">
                Choose a category below to dispense a surprise:
              </span>
            )}
          </div>
        </div>

        {/* Category Keypad / Selector Buttons */}
        <div className="vending-keypad" role="group" aria-label="Capsule categories">
          {Object.values(CATEGORIES).map((cat) => {
            const isSelected = state.dispensing?.categoryId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`vending-cat-btn cat-${cat.id} ${isSelected ? "selected" : ""}`}
                onClick={() => onDispenseCategory(cat.id)}
                disabled={isDispensing || isReady}
                style={{
                  "--cat-color": cat.color,
                  "--cat-bg": cat.accentBg,
                  "--cat-glow": cat.glowColor,
                }}
                aria-label={`Dispense ${cat.name}`}
              >
                <span className="cat-btn-icon" aria-hidden="true">{cat.icon}</span>
                <span className="cat-btn-info">
                  <span className="cat-btn-name">{cat.name}</span>
                  <span className="cat-btn-tagline">{cat.tagline}</span>
                </span>
                <span className="cat-btn-indicator" aria-hidden="true"></span>
              </button>
            );
          })}

          {/* Golden Capsule Quick Button */}
          <button
            type="button"
            className={`vending-cat-btn cat-golden ${state.dispensing?.isGolden ? "selected" : ""}`}
            onClick={onDispenseGolden}
            disabled={isDispensing || isReady}
            style={{
              "--cat-color": GOLDEN_CAPSULE.color,
              "--cat-bg": GOLDEN_CAPSULE.accentBg,
              "--cat-glow": GOLDEN_CAPSULE.glowColor,
            }}
            aria-label="Dispense Special Golden Heart Capsule"
          >
            <span className="cat-btn-icon" aria-hidden="true">🌟</span>
            <span className="cat-btn-info">
              <span className="cat-btn-name">{GOLDEN_CAPSULE.name}</span>
              <span className="cat-btn-tagline">Personal 4th Monthsary Letter 💌</span>
            </span>
            <span className="cat-btn-indicator golden" aria-hidden="true"></span>
          </button>
        </div>

        {/* Collection Drop Chute & Tray */}
        <div className="vending-tray-section">
          <div className="vending-tray-label">COLLECTION SLOT</div>

          <div
            className={`vending-collection-slot ${isReady ? "has-capsule" : ""} ${isDispensing ? "dispensing" : ""}`}
            aria-label="Capsule collection slot"
          >
            {/* Dispensing drop animation element */}
            {isDispensing && (
              <div
                className="dropping-capsule-anim"
                style={{ "--capsule-color": state.dispensing.color }}
                aria-hidden="true"
              >
                <div className="capsule-body-shell">
                  <span className="anim-heart">{state.dispensing.icon}</span>
                </div>
              </div>
            )}

            {/* Ready to collect capsule */}
            {isReady && (
              <button
                type="button"
                className="collected-capsule-btn"
                onClick={onCollectCapsule}
                aria-label="Open your dispensed capsule"
                style={{ "--capsule-color": state.readyToCollect.color }}
              >
                <div className="collected-capsule-shell">
                  <span className="collected-sparkle" aria-hidden="true">✨</span>
                  <span className="collected-icon">{state.readyToCollect.icon}</span>
                  <span className="collected-tap-hint">Tap to open!</span>
                </div>
              </button>
            )}

            {!isDispensing && !isReady && (
              <div className="empty-tray-slot" aria-hidden="true">
                <span className="empty-tray-text">Capsule drops here</span>
              </div>
            )}
          </div>
        </div>

        {/* Machine Base Feet */}
        <div className="vending-cabinet-base" aria-hidden="true">
          <span className="cabinet-foot left"></span>
          <span className="cabinet-foot right"></span>
        </div>
      </div>
    </div>
  );
}
