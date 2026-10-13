import { useState } from "react";
import { EXAM_QUESTIONS } from "./content";

export default function QuestionWindow({ onExamCompleted }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isReactionOpen, setIsReactionOpen] = useState(false);

  const currentQ = EXAM_QUESTIONS[currentIndex];
  const isLastQuestion = currentIndex === EXAM_QUESTIONS.length - 1;
  const progressPercent = Math.round(((currentIndex + 1) / EXAM_QUESTIONS.length) * 100);

  const handleSelectChoice = (choice) => {
    setSelectedChoice(choice);
    setIsReactionOpen(true);
  };

  const handleNext = () => {
    setIsReactionOpen(false);
    setSelectedChoice(null);
    if (isLastQuestion) {
      onExamCompleted();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="retro-question-view" role="region" aria-label={`Question ${currentIndex + 1} of ${EXAM_QUESTIONS.length}`}>
      {/* Progress Header */}
      <div className="exam-progress-header">
        <div className="progress-labels">
          <span className="exam-counter-badge">
            QUESTION {currentIndex + 1} OF {EXAM_QUESTIONS.length}
          </span>
          <span className="exam-dept-badge">{currentQ.department}</span>
        </div>

        <div className="exam-progress-track" aria-hidden="true">
          <div className="exam-progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      {/* Question Card Content */}
      <div className="exam-question-card">
        <h2 className="exam-question-title">{currentQ.title}</h2>

        {/* Context Presentation */}
        {currentQ.context.type === "dialogue" ? (
          <div className="context-dialogue-box" aria-label="Incident transcript">
            <div className="dialogue-header">📜 AUDIO/CHAT LOG TRANSCRIPT:</div>
            <div className="dialogue-chat-lines">
              <div className="chat-bubble bf">
                <span className="bubble-speaker">{currentQ.context.speaker1}:</span>
                <span className="bubble-text">{currentQ.context.line1}</span>
              </div>
              <div className="chat-bubble gwenyy">
                <span className="bubble-speaker">{currentQ.context.speaker2}:</span>
                <span className="bubble-text">{currentQ.context.line2}</span>
              </div>
              <div className="chat-bubble bf">
                <span className="bubble-speaker">{currentQ.context.speaker1_2}:</span>
                <span className="bubble-text">{currentQ.context.line1_2}</span>
              </div>
              <div className="chat-bubble gwenyy">
                <span className="bubble-speaker">{currentQ.context.speaker2_2}:</span>
                <span className="bubble-text">{currentQ.context.line2_2}</span>
              </div>
              <div className="chat-bubble bf">
                <span className="bubble-speaker">{currentQ.context.speaker1_3}:</span>
                <span className="bubble-text">{currentQ.context.line1_3}</span>
              </div>
            </div>
            {currentQ.context.systemNote && (
              <div className="dialogue-system-note">
                <span className="note-icon">🤖</span>
                <em>{currentQ.context.systemNote}</em>
              </div>
            )}
          </div>
        ) : (
          <div className="context-report-box" aria-label="Incident context">
            <div className="report-header">📋 OFFICIAL BUREAU INCIDENT MEMO:</div>
            <p className="report-body">{currentQ.context.text}</p>
          </div>
        )}

        {/* The Prompt Question */}
        <div className="question-prompt-box">
          <span className="prompt-indicator">❓ QUERY:</span>
          <p className="prompt-text">{currentQ.question}</p>
        </div>

        {/* 4 Choices */}
        <div className="choices-grid" role="group" aria-label="Answer options">
          {currentQ.choices.map((choice) => (
            <button
              key={choice.id}
              type="button"
              className="choice-btn"
              onClick={() => handleSelectChoice(choice)}
              aria-label={`Option ${choice.id}: ${choice.text}`}
            >
              <span className="choice-letter-badge">{choice.id}</span>
              <span className="choice-text">{choice.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* System Reaction Modal Popup */}
      {isReactionOpen && selectedChoice && (
        <div
          className="retro-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reaction-modal-title"
        >
          <div className="retro-popup-window">
            <div className="popup-titlebar">
              <div className="popup-title-group">
                <span className="popup-icon">⚡</span>
                <span id="reaction-modal-title" className="popup-title">
                  SYSTEM REACTION // LOG #{currentQ.id}
                </span>
              </div>
              <button
                type="button"
                className="popup-close-btn"
                onClick={handleNext}
                aria-label="Close reaction"
              >
                ✕
              </button>
            </div>

            <div className="popup-body">
              <div className="popup-selected-summary">
                <span className="summary-pill">SELECTED OPTION {selectedChoice.id}</span>
                <p className="summary-quote">“{selectedChoice.text}”</p>
              </div>

              <div className="popup-reaction-content">
                <div className="reaction-stamp" aria-hidden="true">ANALYZED</div>
                <div className="reaction-icon-anim">🤖💬</div>
                <p className="reaction-text">{selectedChoice.reaction}</p>
              </div>
            </div>

            <div className="popup-footer">
              <button
                type="button"
                className="retro-primary-btn popup-next-btn pulse-glow"
                onClick={handleNext}
                autoFocus
              >
                {isLastQuestion
                  ? "[ PROCEED TO OKAY.EXE DIAGNOSTICS ⚠️ ]"
                  : "[ CONTINUE TO NEXT QUESTION ➡️ ]"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
