import React, { useState } from "react";

function HooksCounterthree() {
  const [items, setitems] = useState([]);
  const additems = () => {
    setitems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={additems}>Add Items</button>
      <ul>
        {items.map((items) => (
          <li key={items.id}>{items.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HooksCounterthree;
