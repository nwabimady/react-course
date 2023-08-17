import React from "react";
import "./components/global.css";
import { HelloChildren } from "./components/Hello-children";

export function App() {
  return (
    <>
      <HelloChildren>
        <h1>Hello World!</h1>
      </HelloChildren>
    </>
  );
}
