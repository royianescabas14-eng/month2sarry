import { BUREAU_CONFIG } from "./content";

export default function RetroDesktop({
  title = BUREAU_CONFIG.appName,
  subtitle = BUREAU_CONFIG.appSubtitle,
  currentStage,
  onMinimize,
  onMaximize,
  onClose,
  children,
}) {
  return (
    <div className="retro-desktop-viewport" role="region" aria-label="Relationship Systems Bureau Desktop">
      {/* Desktop Wallpaper Overlay & CRT scanline effect */}
      <div className="desktop-scanlines" aria-hidden="true"></div>

      {/* Retro Desktop Icons (side bar on desktop, hidden or compact on mobile) */}
      <aside className="retro-desktop-icons" aria-label="Desktop shortcuts">
        <div className="desktop-icon" title="My Computer (Relationship Systems)">
          <div className="icon-graphic">🖥️</div>
          <span className="icon-caption">My Bureau</span>
        </div>
        <div className="desktop-icon" title="Chat Logs (Okay Analysis)">
          <div className="icon-graphic">📁</div>
          <span className="icon-caption">Okay_Logs</span>
        </div>
        <div className="desktop-icon" title="Chicken Anatomical Observation">
          <div className="icon-graphic">📄</div>
          <span className="icon-caption">Chicken.txt</span>
        </div>
        <div className="desktop-icon" title="Mobile Legends Tactics">
          <div className="icon-graphic">🎮</div>
          <span className="icon-caption">ML_Team.exe</span>
        </div>
        <div className="desktop-icon" title="Albion Silver Vault">
          <div className="icon-graphic">⚔️</div>
          <span className="icon-caption">Albion.sav</span>
        </div>
        <div className="desktop-icon" title="Recycle Bin for Boyfriend Excuses">
          <div className="icon-graphic">🗑️</div>
          <span className="icon-caption">Excuses</span>
        </div>
      </aside>

      {/* Main Retro Application Window */}
      <main className="retro-window-container">
        <div className="retro-window" role="dialog" aria-labelledby="retro-window-title">
          {/* Classic Window Titlebar */}
          <div className="retro-titlebar">
            <div className="titlebar-left">
              <span className="titlebar-app-icon" aria-hidden="true">💖</span>
              <div className="titlebar-text-group">
                <h1 id="retro-window-title" className="titlebar-title">{title}</h1>
                {subtitle && <span className="titlebar-subtitle">{subtitle}</span>}
              </div>
            </div>

            <div className="titlebar-controls" aria-label="Window controls">
              <button
                type="button"
                className="window-btn btn-minimize"
                onClick={onMinimize}
                aria-label="Minimize application"
                title="Minimize"
              >
                _
              </button>
              <button
                type="button"
                className="window-btn btn-maximize"
                onClick={onMaximize}
                aria-label="Maximize application"
                title="Maximize"
              >
                □
              </button>
              <button
                type="button"
                className="window-btn btn-close"
                onClick={onClose}
                aria-label="Close application"
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Window Menu Bar */}
          <nav className="retro-menubar" aria-label="Application menu">
            <span className="menu-item">File</span>
            <span className="menu-item">Assessment</span>
            <span className="menu-item">Lambing_Tools</span>
            <span className="menu-item">Help</span>
            <span className="menu-stage-indicator">
              STATUS: {currentStage ? currentStage.toUpperCase() : "ACTIVE"}
            </span>
          </nav>

          {/* Window Body / Client Area */}
          <div className="retro-window-body">
            {children}
          </div>

          {/* Window Status Bar */}
          <footer className="retro-statusbar" aria-label="System status">
            <span className="status-item">
              <span className="status-dot"></span> RSB OS v5.0
            </span>
            <span className="status-item">Candidate: {BUREAU_CONFIG.candidateName}</span>
            <span className="status-item hide-on-mobile">Memory: 100% Lambing</span>
            <span className="status-item hide-on-mobile">Mode: Strictly Romantic & Chaotic</span>
          </footer>
        </div>
      </main>

      {/* Retro Bottom Taskbar */}
      <footer className="retro-taskbar" aria-label="Desktop taskbar">
        <button type="button" className="taskbar-start-btn" aria-label="System Start Menu">
          <span className="start-icon">💗</span>
          <span className="start-label">Start</span>
        </button>

        <div className="taskbar-tasks">
          <div className="taskbar-tab active">
            <span className="tab-icon">💻</span>
            <span className="tab-label">GIRLFRIEND CERTIFICATION EXAM.exe</span>
          </div>
        </div>

        <div className="taskbar-tray" aria-label="System tray">
          <span className="tray-item" title="Sound: Online">🔊</span>
          <span className="tray-item" title="Connection: Soulbonded">📶</span>
          <span className="tray-clock">M5:20 AM</span>
        </div>
      </footer>
    </div>
  );
}
