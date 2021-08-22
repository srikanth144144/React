import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./component/CakeContainer";
import HookcakeContainer from "./component/HookcakeContainer";
import iceCreamcontainer from "./component/iceCreamcontainer.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <iceCreamcontainer />
        <HookcakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
