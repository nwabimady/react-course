import React from "react";
import "./components/global.css";
import { HelloMemo } from "./components/memo/hello-memo";
import { HelloMemoChild } from "./components/memo/Hello-memo-child";

export function App() {
  return (
    <>
      <HelloMemo></HelloMemo>
      <HelloMemoChild></HelloMemoChild>
    </>
  );
}
