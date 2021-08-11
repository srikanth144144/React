import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";

// // class UserForm extends React.Component {
// //   render() {
// //     return (
// //       <form>
// //         <label>Enter you are Name</label>
// //         <input />
// //       </form>
// //     );
// //   }
// // }

//=================Time============
// class Clock extends React.Component {
//   state = { time: new Date().toLocaleTimeString() };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ time: new Date().toLocaleTimeString() });
//     }, 1000);
//   }
//   render() {
//     return <div className="time">The time is:{this.state.time}</div>;
//   }
// }

ReactDOM.render(<App />, document.querySelector("#root"));
