const redux = require("redux");
const reduxLogger = require("redux-logger");

const CreateStroe = redux.createStore;
const CombinedReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE ";
const BUY_IceCreams = "BUY_ICECREAMS ";

function buycake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyicecream() {
  return {
    type: BUY_IceCreams,
  };
}

// const initialstate = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };
const initialstatecake = {
  numOfCakes: 10,
};
const initialstateicecream = {
  numOfIceCreams: 20,
};
// const reducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_IceCreams:
//       return {
//         ...state,
//         numOfCakes: state.numOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };
const Cakereducer = (state = initialstatecake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const Icecreamreducer = (state = initialstateicecream, action) => {
  switch (action.type) {
    case BUY_IceCreams:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
const rootreducer = CombinedReducers({
  cake: Cakereducer,
  icecream: Icecreamreducer,
});
const store = CreateStroe(rootreducer, applyMiddleware(logger));
console.log("initialstate of the cakes", store.getState());
const Unsubscribe = store.subscribe(() => {});
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
Unsubscribe();
