import { createContext, useEffect, useState } from "react";
import { HelloMemoChild } from "./Hello-memo-child";

export const CustomContext = createContext(false);

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
      <CustomContext.Provider value={isChecked}>
        <input onChange={changeHandler} type="checkbox" />;
        <HelloMemoChild />
      </CustomContext.Provider>
    </>
  );
};
