import React from "react";
import "./components/global.css";
import { HelloMemo } from "./components/hello-memo";
import { HelloMemoChild } from "./components/Hello-memo-child";

export function App() {
  return (
    <>
      <HelloMemo></HelloMemo>
      <HelloMemoChild></HelloMemoChild>
    </>
  );
}
