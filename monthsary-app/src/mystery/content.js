/* ==========================================================================
   MONTH 3 — "The Case of the Missing Heart"

   ✏️  ALL personal content lives in this file. You never need to touch the
   game logic (state.js, game.js, the .jsx files) to change what is said.

   Anything that starts with "[EDIT]" is a placeholder: replace the whole
   string with your own words. None of it is a real memory or fact.
   ========================================================================== */

/* ---------- Screen 1: the secret case file ---------- */
export const CASE_FILE = {
  caseNumber: "003",
  stamp: "CONFIDENTIAL — CASE 003",
  title: "The case of the forgotten memory",
  recipient: "Gwenyy", // ✏️ the name used on the final keepsake
  greeting: "Dear Gwenyy,", // ✏️
  welcome: [
    "A memory of us was forgotten. Let's start the investigation to find it.",
  ],
  startLabel: "Start investigation",
  continueLabel: "Continue investigation",
};

/* ---------- The three clues ---------- */
export const CLUES = {
  /* Clue 1 — multiple choice about a shared memory */
  1: {
    label: "Clue 1: The memory",
    question: "[EDIT] Write a question about a memory only the two of you know.",
    choices: [
      // ✏️ `text` is the answer choice; `wrongHint` shows if it is picked wrongly.
      { text: "[EDIT] Answer choice A", wrongHint: "[EDIT] A hint that nudges toward the right answer." },
      { text: "[EDIT] Answer choice B", wrongHint: "[EDIT] A different nudge." },
      { text: "[EDIT] Answer choice C", wrongHint: "[EDIT] One more nudge." },
    ],
    correctIndex: 0, // ✏️ 0 = first choice, 1 = second, 2 = third
    hint: "[EDIT] A general hint, shown when she taps “Need a hint?”.",
    correctFeedback: "[EDIT] Feedback for the right answer.",
    reveal: {
      heading: "[EDIT] Memory title",
      text: "[EDIT] The memory or message revealed after the correct answer.",
    },
    evidence: { icon: "🗝️", title: "Evidence 1" },
  },

  /* Clue 2 — a short word / phrase puzzle */
  2: {
    label: "Clue 2: The hidden message",
    prompt: "[EDIT] Explain the puzzle. For example: unscramble the letters to reveal the hidden word.",
    scrambled: "E V O L", // ✏️ what is shown on screen (placeholder; the answer is “love”)
    answers: ["love"], // ✏️ every accepted answer. Case, spaces and punctuation are ignored.
    hint: "[EDIT] Optional hint for the puzzle.",
    emptyFeedback: "Type an answer first.",
    wrongFeedback: "[EDIT] Feedback for a wrong answer. Try again or open the hint.",
    correctFeedback: "[EDIT] Feedback for the right answer.",
    reveal: {
      heading: "[EDIT] Message title",
      text: "[EDIT] The message revealed after the puzzle is solved.",
    },
    evidence: { icon: "✉️", title: "Evidence 2" },
  },

  /* Clue 3 — match two pairs of cards */
  3: {
    label: "Clue 3: The matching memories",
    instruction: "Flip two cards at a time. Find both matching pairs.",
    pairs: [
      // ✏️ each pair is two identical cards. Keep exactly two pairs.
      { id: "a", emoji: "💌", label: "[EDIT] Pair A" },
      { id: "b", emoji: "🌙", label: "[EDIT] Pair B" },
    ],
    correctFeedback: "[EDIT] Feedback after both pairs are matched.",
    reveal: {
      heading: "[EDIT] Final memory title",
      text: "[EDIT] The final memory revealed after the last match.",
    },
    evidence: { icon: "🧩", title: "Evidence 3" },
  },
};

/* ---------- Screen 6: the final reveal ---------- */
export const FINAL = {
  stampText: "CASE CLOSED",
  message: "[EDIT] A short message shown right under the CASE CLOSED stamp.",
  letterTitle: "Happy third monthsary", // ✏️
  letter: [
    "[EDIT] First paragraph of your third-monthsary letter.",
    "[EDIT] Second paragraph.",
  ],
  signOff: "[EDIT] Forever yours,",
  from: "[EDIT] Your name",
  keepsake: {
    title: "[EDIT] Keepsake title",
    text: "[EDIT] A line or two that goes with the animated heart.",
  },
};