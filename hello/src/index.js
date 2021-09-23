import React, { PureComponent } from "react";
import ReactDOM, { render } from "react-dom";
import AddtoCart from "./component/AddtoCart";
// import Clickcounter from "./component/Clickcounter";
// import FocusInput from "./component/FocusInput";
// import Fragements from "./component/Fragements";
// import Hovercounter from "./component/Hovercounter";
// import Input from "./component/Input";
// import Parentcomp from "./component/Parentcomp";
// import Purecomp from "./component/Purecomp";
// import RefsDemo from "./component/RefsDemo";
// import Greet from "./component/Greet";
// import Welcome from "./component/welcome";
// import Message from "./component/Message";
// import Increment from "./component/Increment";
// import Functionclick from "./component/Functionclick";
// import Classclick from "./component/Classclick";
// import EventBind from "./component/EventBind";
// import ParentComponent from "./component/ParentComponent";
// import Conditional from "./component/Conditional";
// import NameList from "./component/NameList";
// import Stylesheets from "./component/Stylesheets";
// import Inline from "./component/Inline";
// import Form from "./component/Form";
// import LifecycleA from "./component/LifecycleA";
// import LifecycleA1 from "./component/LifecycleA1";
const App = () => {
  return (
    <div className="App">
      <AddtoCart />
      {/* <Hovercounter /> */}
      {/* <Clickcounter /> */}
      {/* <FocusInput /> */}
      {/* <Input /> */}
      {/* <RefsDemo /> */}
      {/* <Parentcomp /> */}
      {/* <Fragements /> */}
      {/* <LifecycleA1 /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <Inline /> */}
      {/* <Stylesheets /> */}
      {/* <NameList /> */}
      {/* <Conditional /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Functionclick />
      <Classclick /> */}
      {/* <Increment /> */}
      {/* <Message /> */}

      {/* <Greet name="srikanth">
        <p>Hello everyone</p>
      </Greet>
      <Greet name="ashfaaq">
        <button>Click me</button>
      </Greet>
      <Greet name="suresh" />

      <Welcome name="srikanth">
        <p>This is the another component</p>
      </Welcome>
      <Welcome name="ashfaaq" />
      <Welcome name="suresh" /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
