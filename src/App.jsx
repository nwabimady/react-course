import React from "react";
import "./components/global.css";
import { HelloCounter } from "./components/hello-counter";
import { HelloCheckbox } from "./components/hello-checkbox";

export function App() {
    return (
      <>
        <HelloCheckbox/>
        <HelloCounter/>
      </>
    );
}
