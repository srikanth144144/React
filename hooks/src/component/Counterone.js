import React from "react";
import useCounter from "./useCounter";

function Counterone() {
  const [count, increment, decrement, reset] = useCounter(0, 2);
  return (
    <div>
      Coun={count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counterone;
