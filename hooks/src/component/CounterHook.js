import React, { useReducer } from "react";

const initialState = 0;
const reduser = (State, action) => {
  switch (action) {
    case "increment":
      return State + 1;

    case "decrement":
      return State - 1;

    case "rest":
      return initialState;
    default:
      return State;
  }
};

function CounterHook() {
  const [count, dispatch] = useReducer(reduser, initialState);
  const [CountTwo, dispatchTwo] = useReducer(reduser, initialState);
  return (
    <div>
      <div>Count-{count}</div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("rest");
        }}
      >
        Reset
      </button>
      <div>
        <div>CountTwo-{CountTwo}</div>
        <button
          onClick={() => {
            dispatchTwo("increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatchTwo("decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatchTwo("rest");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterHook;
