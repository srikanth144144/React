import React, { useState } from "react";

function AddtoCart() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Inc</button>
      <button onClick={() => setcount(count - 1)}>Dec</button>
    </div>
  );
}

export default AddtoCart;
