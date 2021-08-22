import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamreducer from "./iceCream/iceCreamReduscer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamreducer,
});
export default rootReducer;
