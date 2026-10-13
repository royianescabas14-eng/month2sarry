import { useCallback, useEffect, useReducer, useRef } from "react";
import { Link } from "react-router-dom";
import "./mystery.css";
import { CASE_FILE, CLUES } from "./content";
import { CLUE_IDS, canAccess, loadState, reducer, saveState, solvedCount } from "./state";
import { BoardScreen, CaseScreen, FinalScreen } from "./screens";
import { ChoiceClue, MemoryClue, WordClue } from "./clues";

const CLUE_COMPONENTS = { 1: ChoiceClue, 2: WordClue, 3: MemoryClue };

export default function MysterySection({ backTo = "/" }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);
  const rootRef = useRef(null);
  const mounted = useRef(false);

  // Whatever is saved, only show a screen the person has actually earned.
  const screen = canAccess(state, state.screen) ? state.screen : "case";
  const count = solvedCount(state);

  const go = useCallback((target) => dispatch({ type: "goto", screen: target }), []);
  const solve = useCallback((clue) => dispatch({ type: "solve", clue }), []);

  useEffect(() => {
    saveState(state);
  }, [state]);

  // move keyboard / screen-reader focus to the new screen's heading
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    rootRef.current?.querySelector("[data-autofocus]")?.focus();
  }, [screen]);

  let body;
  if (screen === "case") {
    body = (
      <CaseScreen
        count={count}
        onStart={() => dispatch({ type: "start" })}
        onReset={() => dispatch({ type: "reset" })}
      />
    );
  } else if (screen === "board") {
    body = (
      <BoardScreen
        state={state}
        onContinue={() => dispatch({ type: "start" })}
        onClose={() => dispatch({ type: "close" })}
      />
    );
  } else if (screen === "final") {
    body = <FinalScreen onBoard={() => go("board")} />;
  } else {
    const id = Number(screen.slice(4));
    const Clue = CLUE_COMPONENTS[id];
    body = (
      <Clue
        key={id}
        id={id}
        data={CLUES[id]}
        solved={state.solved[id] === true}
        onSolve={solve}
        onNext={() => go(id < CLUE_IDS.length ? `clue${id + 1}` : "board")}
      />
    );
  }

  return (
    <div className="mystery" ref={rootRef}>
      <header className="m-header">
        <span className="m-header-id">Case {CASE_FILE.caseNumber}</span>
        <span className="m-count" aria-label={`${count} of ${CLUE_IDS.length} clues found`}>
          Clues {count}/{CLUE_IDS.length}
        </span>
      </header>

      {body}

      <footer className="m-footer">
        {screen !== "case" && screen !== "board" && screen !== "final" && (
          <button type="button" className="m-link" onClick={() => go("board")}>
            Evidence board
          </button>
        )}
        {screen !== "case" && (
          <button type="button" className="m-link" onClick={() => go("case")}>
            Case file
          </button>
        )}
        <Link to={backTo} className="m-link">
          Back to Month 3
        </Link>
      </footer>
    </div>
  );
}