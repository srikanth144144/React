import React, { useContext } from "react";
import { Countcontext } from "../App";

function FunctionF() {
  const countContext = useContext(Countcontext);
  return (
    <div>
      ComponentA
      <button
        onClick={() => {
          countContext.countDispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("rest");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default FunctionF;
