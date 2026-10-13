import { useState } from "react";
import "./exam.css";
import RetroDesktop from "./RetroDesktop";
import BootScreen from "./BootScreen";
import NoticeScreen from "./NoticeScreen";
import QuestionWindow from "./QuestionWindow";
import OkayMiniGame from "./OkayMiniGame";
import AttributionMiniGame from "./AttributionMiniGame";
import ResultsScreen from "./ResultsScreen";
import CertificateModal from "./CertificateModal";
import DeveloperModal from "./DeveloperModal";

export default function ExamSection({ backTo = "/month/5" }) {
  // Stages: 'boot' | 'notice' | 'exam' | 'okay' | 'attribution' | 'results' | 'certificate' | 'developer'
  const [stage, setStage] = useState("boot");
  const [isMinimized, setIsMinimized] = useState(false);

  const handleReplay = () => {
    setStage("notice");
    setIsMinimized(false);
  };

  const handleClose = () => {
    if (stage === "developer" || stage === "results") {
      window.location.href = backTo;
    } else {
      if (window.confirm("Abort Girlfriend Certification Exam? (Any unsaved lambing will be lost!)")) {
        window.location.href = backTo;
      }
    }
  };

  return (
    <RetroDesktop
      currentStage={stage}
      onMinimize={() => setIsMinimized((prev) => !prev)}
      onMaximize={() => setIsMinimized(false)}
      onClose={handleClose}
    >
      {isMinimized ? (
        <div className="retro-minimized-notice">
          <p>⚠️ APPLICATION MINIMIZED TO TRAY</p>
          <button
            type="button"
            className="retro-primary-btn"
            onClick={() => setIsMinimized(false)}
          >
            [ RESTORE WINDOW 💻 ]
          </button>
        </div>
      ) : (
        <>
          {stage === "boot" && (
            <BootScreen onComplete={() => setStage("notice")} />
          )}

          {stage === "notice" && (
            <NoticeScreen onStartExam={() => setStage("exam")} />
          )}

          {stage === "exam" && (
            <QuestionWindow onExamCompleted={() => setStage("okay")} />
          )}

          {stage === "okay" && (
            <OkayMiniGame onComplete={() => setStage("attribution")} />
          )}

          {stage === "attribution" && (
            <AttributionMiniGame onComplete={() => setStage("results")} />
          )}

          {stage === "results" && (
            <ResultsScreen onOpenCertificate={() => setStage("certificate")} />
          )}

          {stage === "certificate" && (
            <CertificateModal
              onOpenDeveloperNotes={() => setStage("developer")}
            />
          )}

          {stage === "developer" && (
            <DeveloperModal onReplay={handleReplay} backTo={backTo} />
          )}
        </>
      )}
    </RetroDesktop>
  );
}
