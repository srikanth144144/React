// import React, { useState, useEffect } from "react";

// function HooksCountInc() {
//   const [count, setcount] = useState(0);
//   const tick = () => {
//     setcount(count + 1);
//   };
//   useEffect(() => {
//     const interval = setInterval(tick, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, [count]);
//   return <div>{count}</div>;
// }
import React, { useState, useEffect } from "react";

function HooksCountInc() {
  const [count, setcount] = useState(5);

  const click = () => setcount((prevcount) => prevcount + 1);

  useEffect(() => {
    const time = setInterval(click, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);
  return (
    <div>
      <button>{count}</button>
    </div>
  );
}

export default HooksCountInc;

// export default HooksCountInc;
