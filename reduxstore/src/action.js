import * as action from "./actionType.js";

export function bugAdded(description) {
  return {
    type: action.BUG_ADDED,
    payload: {
      description: "Bug1",
    },
  };
}
