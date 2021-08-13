import React, { useContext } from "react";
// import ComponentF from "./ComponentF";
import { Usercontext, Surename } from "../App";
import ComponentF from "./ComponentF";

function ComponentE() {
  //   const nam = useContext(Usercontext);
  //   const last = useContext(Surename);
  return (
    <div>
      {/* {nam}-{last} */}
      <ComponentF />
    </div>
  );
}

export default ComponentE;
