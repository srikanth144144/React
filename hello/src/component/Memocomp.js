import React from "react";

function Memocomp({ name }) {
  console.log("Memo component");
  return <div> {name}</div>;
}

export default React.memo(Memocomp);
