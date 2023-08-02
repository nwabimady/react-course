import React from "react";
import { HelloCheckbox } from "./components/hello-checkbox";
import { HelloButton } from "./components/hello-button";

export function App() {
  const person = { name: "Nwabisa", surname: "Redwood-Sawyerr" };
    return (
      <React.Fragment>
        <HelloCheckbox person={person} />
        <HelloButton person={person} />
      </React.Fragment>
    );
}