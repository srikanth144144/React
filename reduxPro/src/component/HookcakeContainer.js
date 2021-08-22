import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function HookcakeContainer() {
  const numofcakes = useSelector((state) => state.cake.numofcakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of Cakes -{numofcakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default HookcakeContainer;
