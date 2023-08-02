import React from "react";
import "./components/global.css";
import { HelloForm } from "./components/hello-form";
import { HelloCounter } from "./components/hello-counter";

export function App() {
    return (
      <>
        <HelloForm />
        <HelloCounter />
      </>
    );
}
