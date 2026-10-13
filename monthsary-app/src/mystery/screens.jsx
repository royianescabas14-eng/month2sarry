import { useState } from "react";
import { Link } from "react-router-dom";
import { CASE_FILE, CLUES, FINAL } from "./content";
import { CLUE_IDS, allSolved, nextClue, solvedCount } from "./state";

/* ---------- Screen 1: secret case file ---------- */
export function CaseScreen({ count, onStart, onReset }) {
  const started = count > 0;

  function confirmReset() {
    if (window.confirm("Start over? Your clues and evidence will be cleared.")) onReset();
  }

  return (
    <section className="m-screen" aria-labelledby="m-case-title">
      <p className="m-stamp">{CASE_FILE.stamp}</p>
      <h1 id="m-case-title" className="m-title" tabIndex={-1} data-autofocus>
        {CASE_FILE.title}
      </h1>

      <div className="m-paper">
        <p className="m-greeting">{CASE_FILE.greeting}</p>
        {CASE_FILE.welcome.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <p className="m-progress-line">
        Clues found: <strong>{count}/{CLUE_IDS.length}</strong>
      </p>

      <div className="m-actions">
        <button type="button" className="m-btn" onClick={onStart}>
          {started ? CASE_FILE.continueLabel : CASE_FILE.startLabel}
        </button>
        {started && (
          <button type="button" className="m-btn ghost" onClick={confirmReset}>
            Start over
          </button>
        )}
      </div>
    </section>
  );
}

/* ---------- Screen 5: evidence board ---------- */
export function BoardScreen({ state, onContinue, onClose }) {
  const [openId, setOpenId] = useState(null);
  const done = allSolved(state);
  const next = nextClue(state);

  return (
    <section className="m-screen" aria-labelledby="m-board-title">
      <h2 id="m-board-title" className="m-h2" tabIndex={-1} data-autofocus>
        Evidence board
      </h2>
      <p className="m-lede">
        {done
          ? "Every clue is in. The case is ready to close."
          : `${solvedCount(state)} of ${CLUE_IDS.length} pieces of evidence collected.`}
      </p>

      <ul className="m-evidence-list">
        {CLUE_IDS.map((id) => {
          const clue = CLUES[id];
          const unlocked = state.solved[id] === true;
          const open = unlocked && openId === id;
          return (
            <li key={id} className={`m-evidence${unlocked ? " is-unlocked" : " is-locked"}`}>
              <button
                type="button"
                className="m-evidence-btn"
                disabled={!unlocked}
                aria-expanded={unlocked ? open : undefined}
                aria-controls={open ? `m-ev-${id}` : undefined}
                onClick={() => setOpenId(open ? null : id)}
              >
                <span className="m-evidence-icon" aria-hidden="true">
                  {unlocked ? clue.evidence.icon : "🔒"}
                </span>
                <span className="m-evidence-name">{clue.evidence.title}</span>
                <span className="m-evidence-state">{unlocked ? (open ? "Hide" : "Open") : "Locked"}</span>
              </button>
              {open && (
                <div id={`m-ev-${id}`} className="m-paper m-evidence-body">
                  <h3>{clue.reveal.heading}</h3>
                  <p>{clue.reveal.text}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="m-actions">
        {done ? (
          <button type="button" className="m-btn" onClick={onClose}>
            {state.closed ? "View the final reveal" : "Close the case"}
          </button>
        ) : (
          <button type="button" className="m-btn" onClick={onContinue}>
            {next ? "Continue investigation" : "Back to the case file"}
          </button>
        )}
      </div>
    </section>
  );
}

/* ---------- Screen 6: final reveal ---------- */
export function FinalScreen({ onBoard }) {
  return (
    <section className="m-screen m-final" aria-labelledby="m-final-title">
      <h2 id="m-final-title" className="m-closed-stamp" tabIndex={-1} data-autofocus>
        {FINAL.stampText}
      </h2>
      <p className="m-lede">{FINAL.message}</p>

      <article className="m-paper m-letter">
        <h3>{FINAL.letterTitle}</h3>
        {FINAL.letter.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="m-signoff">
          {FINAL.signOff}
          <br />
          {FINAL.from}
        </p>
      </article>

      <figure className="m-keepsake">
        <svg className="m-heart" viewBox="0 0 24 24" role="img" aria-label="A glowing heart">
          <path
            fill="currentColor"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
        <figcaption>
          <strong className="m-keepsake-title">{FINAL.keepsake.title}</strong>
          <span className="m-keepsake-for">For {CASE_FILE.recipient}</span>
          <span>{FINAL.keepsake.text}</span>
        </figcaption>
      </figure>

      <div className="m-actions">
        <button type="button" className="m-btn ghost" onClick={onBoard}>
          Back to the evidence board
        </button>
        <Link to="/" className="m-btn">
          Monthsary calendar
        </Link>
      </div>
    </section>
  );
}