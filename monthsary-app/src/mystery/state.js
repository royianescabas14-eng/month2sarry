// Progress state for the Month 3 mystery. Pure functions only, no React.

export const STORAGE_KEY = "monthsary.month3.case003.v1";
export const CLUE_IDS = [1, 2, 3];
export const SCREENS = ["case", "clue1", "clue2", "clue3", "board", "final"];

export function initialState() {
  return { screen: "case", solved: { 1: false, 2: false, 3: false }, closed: false };
}

export const solvedCount = (s) => CLUE_IDS.filter((id) => s.solved[id]).length;
export const allSolved = (s) => solvedCount(s) === CLUE_IDS.length;
export const nextClue = (s) => CLUE_IDS.find((id) => !s.solved[id]) ?? null;

// A screen is only reachable when its requirements are met. Content is
// unlocked by solving clues, never by getting to a screen.
export function canAccess(s, screen) {
  switch (screen) {
    case "case":
    case "board":
    case "clue1":
      return true;
    case "clue2":
      return s.solved[1] === true;
    case "clue3":
      return s.solved[1] === true && s.solved[2] === true;
    case "final":
      return allSolved(s) && s.closed === true;
    default:
      return false;
  }
}

// Turns anything read from storage into a valid state.
export function sanitizeState(raw) {
  if (!raw || typeof raw !== "object") return initialState();
  const solved = raw.solved && typeof raw.solved === "object" ? raw.solved : {};
  const s1 = solved[1] === true;
  const s2 = s1 && solved[2] === true; // clues must be solved in order
  const s3 = s2 && solved[3] === true;
  const next = { screen: "case", solved: { 1: s1, 2: s2, 3: s3 }, closed: false };
  next.closed = allSolved(next) && raw.closed === true;
  next.screen =
    typeof raw.screen === "string" && SCREENS.includes(raw.screen) && canAccess(next, raw.screen)
      ? raw.screen
      : "case";
  return next;
}

export function reducer(state, action) {
  switch (action.type) {
    case "goto":
      return SCREENS.includes(action.screen) && canAccess(state, action.screen)
        ? { ...state, screen: action.screen }
        : state;
    case "start": {
      const n = nextClue(state);
      return { ...state, screen: n ? `clue${n}` : "board" };
    }
    case "solve": {
      const id = action.clue;
      if (!CLUE_IDS.includes(id) || state.solved[id]) return state;
      if (!canAccess(state, `clue${id}`)) return state;
      return { ...state, solved: { ...state.solved, [id]: true } };
    }
    case "close":
      return allSolved(state) ? { ...state, closed: true, screen: "final" } : state;
    case "reset":
      return initialState();
    default:
      return state;
  }
}

function safeStorage() {
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch {
    return null; // storage can be blocked (private mode, strict settings)
  }
}

export function loadState(storage = safeStorage()) {
  try {
    const raw = storage?.getItem(STORAGE_KEY);
    return raw ? sanitizeState(JSON.parse(raw)) : initialState();
  } catch {
    return initialState();
  }
}

export function saveState(state, storage = safeStorage()) {
  try {
    storage?.setItem(
      STORAGE_KEY,
      JSON.stringify({ screen: state.screen, solved: state.solved, closed: state.closed })
    );
  } catch {
    /* progress just won't persist; the game still works */
  }
}