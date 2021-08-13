import React, { useState } from "react";

function UserForm() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>FirstName</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <label>LastName</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default UserForm;
