// import React, { useReducer } from "react";
// import "./App.css";
// import FunctionA from "./Nested/FunctionA";
// import FunctionB from "./Nested/FunctionB";
// import FunctionC from "./Nested/FunctionC";
// import CounterHook from "./component/CounterHook";
// import ComponentC from "./component/ComponentC";
// import DataFetching from "./component/DataFetching";
// import HooksCountInc from "./component/HooksCountInc";
// import Effecthooks from "./component/Effecthooks";
// import HooksCounter from "./component/HooksCounter";
// import HookscounterFour from "./component/HookscounterFour";
// import HooksCounterthree from "./component/HooksCounterthree";
// import HooksCounterTwo from "./component/HooksCounterTwo";
// import HooksObject from "./component/HooksObject";

// export const Countcontext = React.createContext();
// // export const Surename = React.createContext();

// const initialState = 0;
// const reduser = (State, action) => {
//   switch (action) {
//     case "increment":
//       return State + 1;

//     case "decrement":
//       return State - 1;

//     case "rest":
//       return initialState;
//     default:
//       return State;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reduser, initialState);
//   return (
//     <Countcontext.Provider
//       value={{ countState: count, countDispatch: dispatch }}
//     >
//       <div className="App">
//         count-{count}
//         <FunctionA />
//         <FunctionB />
//         <FunctionC />
//       </div>
//     </Countcontext.Provider>
// // {/* <CounterHook /> */}
// {/* <Usercontext.Provider value={"srikanth"}>
//   <Surename.Provider value={"bodas"}>
//     <ComponentC />
//   </Surename.Provider>
// </Usercontext.Provider> */}
// {/* <DataFetching /> */}
// {/* <HooksCountInc /> */}
// {/* <HookscounterFour /> */}
// {/* <HooksCounterthree /> */}
// {/* <HooksCounter /> */}
// {/* <HooksCounterTwo /> */}
// {/* <HooksObject /> */}
//   );
// }
import React from "react";
import Counterone from "./component/Counterone";
import CounterTwo from "./component/CounterTwo";
import UserForm from "./component/UserForm";
// import ParentComponent from "./Callback/ParentComponent";
// import DocTitle from "./component/DocTitle";
// import DocTitleOne from "./component/DocTitleOne";
// import UseRefhook from "./component/UseRefhook";
// import UseRefhookone from "./component/UseRefhookone";
// import DataFetching from "./Fetching/DataFetching";
// import FetchingOne from "./Fetching/FetchingOne";

function App() {
  return (
    <div className="App">
      <UserForm />
      {/* <Counterone />
      <CounterTwo /> */}
      {/* <DocTitle />
      <DocTitleOne /> */}
      {/* <UseRefhookone /> */}
      {/* <UseRefhook /> */}
      {/* <DataFetching /> */}
      {/* <FetchingOne /> */}
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
