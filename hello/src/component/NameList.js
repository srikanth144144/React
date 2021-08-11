import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      name: "Srikanth",
      id: 255,
      age: 24,
      skill: "react",
    },
    {
      name: "Ashfaaq",
      id: 105,
      age: 24,
      skill: "vue",
    },
    {
      name: "Suresh",
      id: 106,
      age: 25,
      skill: "Angular",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.name} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
