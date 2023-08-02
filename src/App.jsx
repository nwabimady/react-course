import React from "react";
import { HelloCheckbox } from "./components/hello-checkbox";
import { HelloButton } from "./components/hello-button";
import { HelloWorld } from "./components/hello-world";
import "./components/global.css";

export function App() {
  const person = { name: "Nwabisa", surname: "Redwood-Sawyerr" };
    return (
      <>
        <HelloCheckbox person={person} />
        <HelloButton person={person} />
        <HelloWorld person={person} />
      </>
    );
}