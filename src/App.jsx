import React from "react";
import "./components/global.css";
import { AppContext } from "./App-context";
import { HelloCheckbox } from "./components/hello-checkbox";
import { HelloForm } from "./components/hello-form";
import { HelloCounter } from "./components/hello-counter";

export function App() {
  return (
    <AppContext>
      <HelloCheckbox />
      <HelloForm />
      <HelloCounter />
    </AppContext>
  );
}
