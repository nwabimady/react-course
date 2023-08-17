import React from "react";
import "./components/global.css";
import { HelloContext } from "./components/hello-context";
import { HelloForm } from "./components/hello-form";
import { HelloCheckbox } from "./components/hello-checkbox";

export function App() {
  return (
    <>
      <HelloContext>
        <HelloCheckbox />
        <HelloForm />
      </HelloContext>
    </>
  );
}
