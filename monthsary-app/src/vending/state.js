import { CATEGORIES, GOLDEN_CAPSULE } from "./content";

const STORAGE_KEY = "relationship_journey_vending_v1";

export function getTotalSurprisesCount() {
  const regularCount = Object.values(CATEGORIES).reduce(
    (sum, cat) => sum + cat.surprises.length,
    0
  );
  return regularCount + 1; // +1 for the Golden Capsule
}

function loadInitialState() {
  const base = {
    hasEntered: false,
    dispensing: null, // { categoryId, color, icon, isGolden }
    readyToCollect: null, // { surprise, categoryId, isGolden }
    activeSurprise: null, // opened surprise currently viewed
    isGoldenOpen: false,
    discoveredIds: [],
    historyList: [],
    categoryPools: {}, // { [categoryId]: [unseen surprise IDs] }
    goldenDiscovered: false,
    hugsSent: 0,
    isHistoryDrawerOpen: false,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw);
    return {
      ...base,
      discoveredIds: Array.isArray(parsed.discoveredIds) ? parsed.discoveredIds : [],
      historyList: Array.isArray(parsed.historyList) ? parsed.historyList : [],
      categoryPools: parsed.categoryPools && typeof parsed.categoryPools === "object" ? parsed.categoryPools : {},
      goldenDiscovered: Boolean(parsed.goldenDiscovered),
      hugsSent: typeof parsed.hugsSent === "number" ? parsed.hugsSent : 0,
    };
  } catch {
    return base;
  }
}

export function saveStateToStorage(state) {
  try {
    const toSave = {
      discoveredIds: state.discoveredIds,
      historyList: state.historyList,
      categoryPools: state.categoryPools,
      goldenDiscovered: state.goldenDiscovered,
      hugsSent: state.hugsSent,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch {
    // Ignore storage quota or disabled storage
  }
}

export function getNextSurprise(categoryId, currentPools = {}) {
  const category = CATEGORIES[categoryId];
  if (!category) return null;

  const allIds = category.surprises.map((s) => s.id);
  let availableIds = currentPools[categoryId];

  // If pool doesn't exist or is exhausted, refill it with all IDs
  if (!availableIds || availableIds.length === 0) {
    availableIds = [...allIds];
  }

  // Pick random ID from available pool
  const randomIndex = Math.floor(Math.random() * availableIds.length);
  const chosenId = availableIds[randomIndex];

  // Remove chosen from remaining pool
  const updatedPool = availableIds.filter((id) => id !== chosenId);
  const surprise = category.surprises.find((s) => s.id === chosenId);

  return {
    surprise,
    updatedPool,
  };
}

export function vendingReducer(state, action) {
  let nextState;

  switch (action.type) {
    case "ENTER_MACHINE":
      nextState = { ...state, hasEntered: true };
      break;

    case "RETURN_TO_WELCOME":
      nextState = { ...state, hasEntered: false };
      break;

    case "START_DISPENSE": {
      const { categoryId, isGolden } = action;
      if (state.dispensing || state.readyToCollect) return state; // Prevent spam

      if (isGolden) {
        nextState = {
          ...state,
          dispensing: {
            categoryId: "golden",
            color: GOLDEN_CAPSULE.color,
            icon: GOLDEN_CAPSULE.icon,
            isGolden: true,
          },
        };
      } else {
        const cat = CATEGORIES[categoryId];
        if (!cat) return state;
        nextState = {
          ...state,
          dispensing: {
            categoryId,
            color: cat.color,
            icon: cat.icon,
            isGolden: false,
          },
        };
      }
      break;
    }

    case "FINISH_DISPENSE": {
      if (!state.dispensing) return state;
      const { isGolden, categoryId } = state.dispensing;

      if (isGolden) {
        nextState = {
          ...state,
          dispensing: null,
          readyToCollect: {
            isGolden: true,
            categoryId: "golden",
            color: GOLDEN_CAPSULE.color,
            icon: GOLDEN_CAPSULE.icon,
          },
        };
      } else {
        const result = getNextSurprise(categoryId, state.categoryPools);
        if (!result) {
          nextState = { ...state, dispensing: null };
          break;
        }

        const newPools = {
          ...state.categoryPools,
          [categoryId]: result.updatedPool,
        };

        nextState = {
          ...state,
          dispensing: null,
          categoryPools: newPools,
          readyToCollect: {
            isGolden: false,
            categoryId,
            color: CATEGORIES[categoryId]?.color || "#ff6f91",
            icon: CATEGORIES[categoryId]?.icon || "💌",
            surprise: result.surprise,
          },
        };
      }
      break;
    }

    case "COLLECT_CAPSULE": {
      if (!state.readyToCollect) return state;
      const { isGolden, surprise, categoryId } = state.readyToCollect;

      if (isGolden) {
        const nextDiscovered = state.discoveredIds.includes("golden")
          ? state.discoveredIds
          : [...state.discoveredIds, "golden"];

        nextState = {
          ...state,
          readyToCollect: null,
          isGoldenOpen: true,
          goldenDiscovered: true,
          discoveredIds: nextDiscovered,
        };
      } else {
        const nextDiscovered = state.discoveredIds.includes(surprise.id)
          ? state.discoveredIds
          : [...state.discoveredIds, surprise.id];

        const historyItem = {
          ...surprise,
          categoryId,
          categoryName: CATEGORIES[categoryId]?.name || "Special Surprise",
          color: CATEGORIES[categoryId]?.color || "#ff6f91",
          icon: CATEGORIES[categoryId]?.icon || "💌",
        };

        const existingIndex = state.historyList.findIndex((h) => h.id === surprise.id);
        let updatedHistory;
        if (existingIndex >= 0) {
          updatedHistory = state.historyList;
        } else {
          updatedHistory = [historyItem, ...state.historyList];
        }

        nextState = {
          ...state,
          readyToCollect: null,
          activeSurprise: historyItem,
          discoveredIds: nextDiscovered,
          historyList: updatedHistory,
        };
      }
      break;
    }

    case "CLOSE_ACTIVE_SURPRISE":
      nextState = { ...state, activeSurprise: null };
      break;

    case "CLOSE_GOLDEN":
      nextState = { ...state, isGoldenOpen: false };
      break;

    case "OPEN_GOLDEN_DIRECTLY":
      nextState = {
        ...state,
        isGoldenOpen: true,
        goldenDiscovered: true,
        discoveredIds: state.discoveredIds.includes("golden")
          ? state.discoveredIds
          : [...state.discoveredIds, "golden"],
      };
      break;

    case "VIEW_HISTORY_ITEM":
      nextState = {
        ...state,
        activeSurprise: action.surprise,
        isHistoryDrawerOpen: false,
      };
      break;

    case "TOGGLE_HISTORY_DRAWER":
      nextState = {
        ...state,
        isHistoryDrawerOpen: action.open !== undefined ? action.open : !state.isHistoryDrawerOpen,
      };
      break;

    case "INCREMENT_HUG":
      nextState = {
        ...state,
        hugsSent: state.hugsSent + 1,
      };
      break;

    case "RESET_ALL": {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      nextState = loadInitialState();
      nextState.hasEntered = true; // keep on machine screen
      break;
    }

    default:
      return state;
  }

  saveStateToStorage(nextState);
  return nextState;
}

export { loadInitialState };
