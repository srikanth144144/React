import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <App />
    </div>
  );
};
// function buttext() {
//   return "click on me!";
// }
// const App = () => {
//   const butttion = "click Me!";
//   const enter = "Enter you are Name";
//   return (
//     <div>
//       <label className="lable" htmlFor="name">
//         {enter}
//       </label>
//       <input id="name" type="text"></input>
//       <button style={{ backgroundColor: "blue", color: "white" }}>
//         {butttion}
//       </button>
//     </div>
//   );
// };
//=====Time=======
// function show() {
//   return new Date().toLocaleTimeString();
// }
// const App1 = () => {
//   return <div>{show()}</div>;
// };

// function a() {
//   var a = 10;
// }

ReactDOM.render(<App />, document.querySelector("#root"));
