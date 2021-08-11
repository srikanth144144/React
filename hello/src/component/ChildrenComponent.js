import React from "react";

function ChildrenComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetparent("child")}>GreetParent</button>
    </div>
  );
}

export default ChildrenComponent;
