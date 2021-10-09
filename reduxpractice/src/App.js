import React from "react";
import { connect } from "react-redux";
import { IncAction } from "./components/actions";
import { DecAction } from "./components/actions";

const App = ({ local_varable, IncAction, DecAction }) => {
  return (
    <div>
      <center>
        <h1>{local_varable}</h1>
        <button onClick={() => IncAction(5)}>Increment</button>
        <button onClick={() => DecAction(5)}>Decrement</button>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  local_varable: state,
});

export default connect(mapStateToProps, { IncAction, DecAction })(App);

// import React from "react";
// import Navbar from "./Navbar";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from "./Router/Home";
// import Dashbord from "./Router/Dashbord";
// import About from "./Router/About";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/Dashbord" exact component={Dashbord} />
//           <Route path="/About" exact component={About} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;
