import { useEffect, useState } from "react";
import { BOOT_LOGS } from "./content";

export default function BootScreen({ onComplete }) {
  const [visibleCount, setVisibleCount] = useState(1);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (visibleCount < BOOT_LOGS.length) {
      const currentLog = BOOT_LOGS[visibleCount - 1];
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, currentLog.delay || 300);
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => {
        setIsFinished(true);
      }, 400);
      return () => clearTimeout(endTimer);
    }
  }, [visibleCount]);

  const handleSkip = () => {
    setVisibleCount(BOOT_LOGS.length);
    setIsFinished(true);
  };

  return (
    <div className="retro-boot-terminal" role="region" aria-label="System Boot Sequence">
      <div className="terminal-header">
        <span className="terminal-brand">RELATIONSHIP SYSTEMS BUREAU v5.0</span>
        <button
          type="button"
          className="terminal-skip-btn"
          onClick={handleSkip}
          aria-label="Skip boot sequence"
        >
          [ SKIP BOOT ⏩ ]
        </button>
      </div>

      <div className="terminal-body" aria-live="polite">
        <div className="terminal-ascii-art" aria-hidden="true">
{`   _____ _____ ____        ____   _____ 
  |  __ \\_   _/ __ \\      |  _ \\ / ____|
  | |__) || | | |  | |___ | |_) | (___  
  |  _  / | | | |  | / __||  _ < \\___ \\ 
  | | \\ \\_| |_| |__| \\__ \\| |_) |____) |
  |_|  \\_\\_____\\____/|___/|____/|_____/ `}
        </div>

        <div className="terminal-logs-list">
          {BOOT_LOGS.slice(0, visibleCount).map((log, index) => (
            <div key={index} className={`terminal-log-row log-${log.type}`}>
              <span className="log-prefix">&gt;&gt;</span>
              <span className="log-text">{log.text}</span>
            </div>
          ))}
          {!isFinished && (
            <div className="terminal-cursor-row">
              <span className="log-prefix">&gt;&gt;</span>
              <span className="terminal-cursor" aria-hidden="true">█</span>
            </div>
          )}
        </div>
      </div>

      <div className="terminal-footer">
        {isFinished ? (
          <button
            type="button"
            className="terminal-launch-btn pulse-glow"
            onClick={onComplete}
            autoFocus
          >
            [ OPEN APPLICATION 💻 ]
          </button>
        ) : (
          <div className="terminal-progress-bar-wrap">
            <div
              className="terminal-progress-fill"
              style={{ width: `${Math.round((visibleCount / BOOT_LOGS.length) * 100)}%` }}
            ></div>
            <span className="terminal-progress-text">
              INITIALIZING: {Math.round((visibleCount / BOOT_LOGS.length) * 100)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
