import React, { useState } from "react";

function HooksObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>You are firstName:{name.firstName}</h2>
      <h2>You are lastName:{name.lastName}</h2>
    </div>
  );
}

export default HooksObject;
