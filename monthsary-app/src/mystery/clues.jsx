import { useEffect, useState } from "react";
import { checkAnswer, flipCard, isWon, newMemoryGame, resolveMismatch, solvedMemoryGame } from "./game";

const MISMATCH_DELAY_MS = 900;

function Reveal({ clue }) {
  return (
    <div className="m-paper m-reveal">
      <p className="m-evidence-tag">
        <span aria-hidden="true">{clue.evidence.icon}</span> {clue.evidence.title} unlocked
      </p>
      <h3>{clue.reveal.heading}</h3>
      <p>{clue.reveal.text}</p>
    </div>
  );
}

function NextButton({ id, onNext }) {
  return (
    <div className="m-actions">
      <button type="button" className="m-btn" onClick={onNext}>
        {id < 3 ? "Next clue" : "Go to the evidence board"}
      </button>
    </div>
  );
}

function ClueTitle({ id, text }) {
  return (
    <h2 id={`m-clue-${id}`} className="m-h2" tabIndex={-1} data-autofocus>
      {text}
    </h2>
  );
}

/* ---------- Clue 1: multiple choice ---------- */
export function ChoiceClue({ id, data, solved, onSolve, onNext }) {
  const [picked, setPicked] = useState(solved ? data.correctIndex : null);
  const [hintOpen, setHintOpen] = useState(false);
  const wrong = picked !== null && picked !== data.correctIndex;

  function choose(index) {
    if (solved) return;
    setPicked(index);
    if (index === data.correctIndex) onSolve(id);
  }

  return (
    <section className="m-screen" aria-labelledby={`m-clue-${id}`}>
      <p className="m-kicker">{data.label}</p>
      <ClueTitle id={id} text={data.question} />

      <div className="m-choices" role="group" aria-label="Answer choices">
        {data.choices.map((choice, i) => {
          const right = solved && i === data.correctIndex;
          const bad = !solved && picked === i && i !== data.correctIndex;
          return (
            <button
              key={i}
              type="button"
              className={`m-choice${right ? " is-right" : ""}${bad ? " is-wrong" : ""}`}
              onClick={() => choose(i)}
              disabled={solved && !right}
            >
              {choice.text}
            </button>
          );
        })}
      </div>

      <div className="m-feedback" role="status" aria-live="polite">
        {wrong && (
          <p className="m-bad">
            <strong>Not quite.</strong> {data.choices[picked].wrongHint}
          </p>
        )}
        {solved && <p className="m-good">{data.correctFeedback}</p>}
      </div>

      {!solved && (
        <>
          <button
            type="button"
            className="m-btn ghost small"
            aria-expanded={hintOpen}
            onClick={() => setHintOpen((v) => !v)}
          >
            {hintOpen ? "Hide hint" : "Need a hint?"}
          </button>
          {hintOpen && <p className="m-hint">{data.hint}</p>}
        </>
      )}

      {solved && (
        <>
          <Reveal clue={data} />
          <NextButton id={id} onNext={onNext} />
        </>
      )}
    </section>
  );
}

/* ---------- Clue 2: word puzzle ---------- */
export function WordClue({ id, data, solved, onSolve, onNext }) {
  const [value, setValue] = useState(solved ? data.answers[0] : "");
  const [status, setStatus] = useState("idle"); // idle | empty | wrong
  const [hintOpen, setHintOpen] = useState(false);

  function submit(event) {
    event.preventDefault(); // no page reload
    if (solved) return;
    if (!value.trim()) return setStatus("empty");
    if (checkAnswer(value, data.answers)) {
      setStatus("idle");
      onSolve(id);
    } else {
      setStatus("wrong");
    }
  }

  return (
    <section className="m-screen" aria-labelledby={`m-clue-${id}`}>
      <p className="m-kicker">{data.label}</p>
      <ClueTitle id={id} text={data.prompt} />
      <p className="m-scramble" aria-label={`Puzzle: ${data.scrambled}`}>
        {data.scrambled}
      </p>

      <form className="m-form" onSubmit={submit} noValidate>
        <label htmlFor={`m-answer-${id}`} className="m-label">
          Your answer
        </label>
        <div className="m-form-row">
          <input
            id={`m-answer-${id}`}
            className="m-input"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setStatus("idle");
            }}
            disabled={solved}
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
          />
          <button type="submit" className="m-btn" disabled={solved}>
            Check answer
          </button>
        </div>
      </form>

      <div className="m-feedback" role="status" aria-live="polite">
        {status === "empty" && <p className="m-bad">{data.emptyFeedback}</p>}
        {status === "wrong" && <p className="m-bad">{data.wrongFeedback}</p>}
        {solved && <p className="m-good">{data.correctFeedback}</p>}
      </div>

      {!solved && (
        <>
          <button
            type="button"
            className="m-btn ghost small"
            aria-expanded={hintOpen}
            onClick={() => setHintOpen((v) => !v)}
          >
            {hintOpen ? "Hide hint" : "Need a hint?"}
          </button>
          {hintOpen && <p className="m-hint">{data.hint}</p>}
        </>
      )}

      {solved && (
        <>
          <Reveal clue={data} />
          <NextButton id={id} onNext={onNext} />
        </>
      )}
    </section>
  );
}

/* ---------- Clue 3: memory matching ---------- */
export function MemoryClue({ id, data, solved, onSolve, onNext }) {
  const [game, setGame] = useState(() =>
    solved ? solvedMemoryGame(data.pairs) : newMemoryGame(data.pairs)
  );
  const won = isWon(game, data.pairs);
  const pairById = Object.fromEntries(data.pairs.map((p) => [p.id, p]));

  // unlock the evidence once both pairs are matched
  useEffect(() => {
    if (won && !solved) onSolve(id);
  }, [won, solved, onSolve, id]);

  // flip a mismatched pair back after a short pause
  useEffect(() => {
    if (!game.locked) return undefined;
    const timer = setTimeout(() => setGame(resolveMismatch), MISMATCH_DELAY_MS);
    return () => clearTimeout(timer);
  }, [game.locked]);

  function newAttempt() {
    setGame(newMemoryGame(data.pairs)); // shuffles again
  }

  let status = "";
  if (game.locked) status = "Not a match. Look closely and try again.";
  else if (won) status = "Both pairs found.";
  else if (game.matched.length > 0) status = `Pair found. ${game.matched.length} of ${data.pairs.length}.`;

  return (
    <section className="m-screen" aria-labelledby={`m-clue-${id}`}>
      <p className="m-kicker">{data.label}</p>
      <ClueTitle id={id} text={data.instruction} />

      <div className="m-grid">
        {game.cards.map((card, i) => {
          const pair = pairById[card.pairId];
          const matched = game.matched.includes(card.pairId);
          const up = matched || game.revealed.includes(i);
          return (
            <button
              key={card.key}
              type="button"
              className={`m-card${up ? " is-up" : ""}${matched ? " is-matched" : ""}`}
              onClick={() => setGame((g) => flipCard(g, i))}
              disabled={matched}
              aria-label={up ? pair.label : `Card ${i + 1}, face down`}
            >
              <span className="m-card-inner" aria-hidden="true">
                <span className="m-face back">?</span>
                <span className="m-face front">
                  <span className="m-card-emoji">{pair.emoji}</span>
                  <span className="m-card-label">{pair.label}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="m-feedback" role="status" aria-live="polite">
        {status && <p className={game.locked ? "m-bad" : "m-good"}>{status}</p>}
        {solved && won && <p className="m-good">{data.correctFeedback}</p>}
      </div>

      {!solved && (
        <button type="button" className="m-btn ghost small" onClick={newAttempt}>
          Shuffle and start over
        </button>
      )}

      {solved && (
        <>
          <Reveal clue={data} />
          <NextButton id={id} onNext={onNext} />
        </>
      )}
    </section>
  );
}