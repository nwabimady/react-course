import { useEffect, useState } from "react";
import { HelloMemoChild } from "./Hello-memo-child";

export const HelloMemo = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log("HelloMemo component re-rendered.");
  });

  const changeHandler = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <input onChange={changeHandler} type="checkbox" />;
      <HelloMemoChild checked={isChecked}></HelloMemoChild>
    </>
  );
};
