import store from "./store";
import * as action from "./actionType.js";
import { bugAdded } from "./action";

// const unsubscribe = store.subscribe(() => {
//   console.log("strore changed ", store.getState());
// });

// store.dispatch({
//   type: action.BUG_ADDED,
//   payload: {
//     description: "Bug1",
//   },
// });
// unsubscribe();
// store.dispatch({
//   type: "bugRemoved",
//   payload: {
//     id: 1,
//   },
// });
store.dispatch(bugAdded("Bug 1"));

console.log(store.getState());
