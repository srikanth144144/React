import React, { useState, useEffect } from "react";

function HookscounterFour() {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("");
  useEffect(() => {
    console.log("useEffects - updateing");
    document.title = `you clicked ${count}times`;
    return () => {
      console.log("this is the  willunmounting");
      document.removeEventListener("remove event in the use effect");
    };
  }, []);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click{count}times
      </button>
    </div>
  );
}

export default HookscounterFour;
