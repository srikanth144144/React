// import React from "react";
import { BUG_ADDED, BUG_REMOVED } from "./actionType";
const lastId = 0;
function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          // id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action);

    default:
      return state;
  }
}

export default reducer;
