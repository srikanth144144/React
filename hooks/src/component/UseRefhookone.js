import React, { useState, useEffect, useRef } from "react";

function UseRefhookone() {
  const [time, settime] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = setInterval(() => {
      settime((prevtime) => prevtime + 1);
    }, 1000);
    return () => {
      clearInterval(inputRef.current);
    };
  }, []);
  return (
    <div>
      hook-{time}
      <button onClick={() => clearInterval(inputRef.current)}>
        clear Time
      </button>
    </div>
  );
}

export default UseRefhookone;
