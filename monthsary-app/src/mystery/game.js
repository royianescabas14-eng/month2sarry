// Puzzle helpers for Month 3. Pure functions only, no React.

/* ---------- Clue 2: answer checking ---------- */
export function normalizeAnswer(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // drop accents
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, ""); // drop spaces and punctuation
}

export function checkAnswer(input, answers) {
  const n = normalizeAnswer(input);
  return n.length > 0 && answers.some((a) => normalizeAnswer(a) === n);
}

/* ---------- Clue 3: memory matching ---------- */
export function shuffle(items, rng = Math.random) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeDeck(pairs) {
  return pairs.flatMap((p) => [0, 1].map((copy) => ({ key: `${p.id}-${copy}`, pairId: p.id })));
}

export function newMemoryGame(pairs, rng = Math.random) {
  return { cards: shuffle(makeDeck(pairs), rng), revealed: [], matched: [], locked: false };
}

// Used when the clue was already solved (e.g. after a refresh).
export function solvedMemoryGame(pairs) {
  return { cards: makeDeck(pairs), revealed: [], matched: pairs.map((p) => p.id), locked: false };
}

export function flipCard(game, index) {
  const card = game.cards[index];
  if (!card || game.locked) return game;
  if (game.matched.includes(card.pairId) || game.revealed.includes(index)) return game;
  const revealed = [...game.revealed, index];
  if (revealed.length < 2) return { ...game, revealed };
  const [a, b] = revealed;
  if (game.cards[a].pairId === game.cards[b].pairId) {
    return { ...game, revealed: [], matched: [...game.matched, card.pairId] };
  }
  return { ...game, revealed, locked: true }; // mismatch: wait, then resolveMismatch
}

export function resolveMismatch(game) {
  return game.locked ? { ...game, revealed: [], locked: false } : game;
}

export const isWon = (game, pairs) => game.matched.length === pairs.length;