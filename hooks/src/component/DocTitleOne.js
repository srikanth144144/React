import React, { useState } from "react";
import Title from "./Title";

function DocTitleOne() {
  const [count, setcount] = useState(0);
  Title(count);
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>counts-{count}</button>
    </div>
  );
}

export default DocTitleOne;
