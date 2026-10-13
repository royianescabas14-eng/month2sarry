import { useEffect, useReducer, useRef } from "react";
import { Link } from "react-router-dom";
import "./vending.css";
import {
  getTotalSurprisesCount,
  loadInitialState,
  vendingReducer,
} from "./state";
import WelcomeScreen from "./WelcomeScreen";
import VendingMachine from "./VendingMachine";
import CapsuleModal from "./CapsuleModal";
import GoldenLetterModal from "./GoldenLetterModal";
import HistoryDrawer from "./HistoryDrawer";

export default function VendingSection({ backTo = "/month/4" }) {
  const [state, dispatch] = useReducer(vendingReducer, undefined, loadInitialState);
  const totalSurprises = getTotalSurprisesCount();
  const dispenseTimerRef = useRef(null);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (dispenseTimerRef.current) clearTimeout(dispenseTimerRef.current);
    };
  }, []);

  // When dispensing starts, schedule the capsule arrival into the tray
  const handleDispenseCategory = (categoryId) => {
    if (state.dispensing || state.readyToCollect) return;
    dispatch({ type: "START_DISPENSE", categoryId, isGolden: false });

    if (dispenseTimerRef.current) clearTimeout(dispenseTimerRef.current);
    dispenseTimerRef.current = setTimeout(() => {
      dispatch({ type: "FINISH_DISPENSE" });
    }, 1100);
  };

  const handleDispenseGolden = () => {
    if (state.dispensing || state.readyToCollect) return;
    dispatch({ type: "START_DISPENSE", categoryId: "golden", isGolden: true });

    if (dispenseTimerRef.current) clearTimeout(dispenseTimerRef.current);
    dispenseTimerRef.current = setTimeout(() => {
      dispatch({ type: "FINISH_DISPENSE" });
    }, 1100);
  };

  const handleCollectCapsule = () => {
    dispatch({ type: "COLLECT_CAPSULE" });
  };

  return (
    <div className="vending-experience-container">
      {/* Background ambient floating sparkles */}
      <div className="vending-ambient-backdrop" aria-hidden="true">
        <span className="ambient-orb orb-1"></span>
        <span className="ambient-orb orb-2"></span>
        <span className="ambient-orb orb-3"></span>
      </div>

      {!state.hasEntered ? (
        <WelcomeScreen
          onEnter={() => dispatch({ type: "ENTER_MACHINE" })}
          backTo={backTo}
        />
      ) : (
        <div className="vending-main-flow">
          <VendingMachine
            state={state}
            totalSurprises={totalSurprises}
            onDispenseCategory={handleDispenseCategory}
            onDispenseGolden={handleDispenseGolden}
            onCollectCapsule={handleCollectCapsule}
            onOpenHistory={() => dispatch({ type: "TOGGLE_HISTORY_DRAWER", open: true })}
            onOpenGoldenDirectly={() => dispatch({ type: "OPEN_GOLDEN_DIRECTLY" })}
          />

          <div className="vending-footer-nav">
            <button
              type="button"
              className="vending-nav-btn secondary"
              onClick={() => dispatch({ type: "RETURN_TO_WELCOME" })}
            >
              ← Intro Screen
            </button>
            <Link to={backTo} className="vending-nav-btn primary">
              Back to Month 4 🌸
            </Link>
          </div>
        </div>
      )}

      {/* Surprise Revealed Modal */}
      {state.activeSurprise && (
        <CapsuleModal
          surprise={state.activeSurprise}
          hugsSent={state.hugsSent}
          onSendHug={() => dispatch({ type: "INCREMENT_HUG" })}
          onClose={() => dispatch({ type: "CLOSE_ACTIVE_SURPRISE" })}
        />
      )}

      {/* Special Golden Capsule Monthsary Letter Modal */}
      {state.isGoldenOpen && (
        <GoldenLetterModal
          onClose={() => dispatch({ type: "CLOSE_GOLDEN" })}
        />
      )}

      {/* History / Discovered Collection Drawer */}
      <HistoryDrawer
        isOpen={state.isHistoryDrawerOpen}
        historyList={state.historyList}
        goldenDiscovered={state.goldenDiscovered}
        onSelectSurprise={(surprise) =>
          dispatch({ type: "VIEW_HISTORY_ITEM", surprise })
        }
        onOpenGolden={() => dispatch({ type: "OPEN_GOLDEN_DIRECTLY" })}
        onResetProgress={() => dispatch({ type: "RESET_ALL" })}
        onClose={() => dispatch({ type: "TOGGLE_HISTORY_DRAWER", open: false })}
      />
    </div>
  );
}
