import React from "react";

export default function welcome(props) {
  return (
    <div>
      <h4>Hii every one{props.name}</h4>
      {props.children}
    </div>
  );
}
