// import { useState } from "react";
import React, { useState } from "react";

function HooksCounterTwo() {
  const initialcount = 0;
  const [count, setcount] = useState(initialcount);
  const Incrementfive = () => {
    for (let i = 0; i < 5; i++) {
      setcount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      count:{count}
      <button onClick={() => setcount(initialcount)}> Reset</button>
      <button onClick={() => setcount(count + 1)}> Increment</button>
      <button onClick={() => setcount(count - 1)}> Decrement</button>
      <button onClick={Incrementfive}>Incerement 5</button>
    </div>
  );
}

export default HooksCounterTwo;
