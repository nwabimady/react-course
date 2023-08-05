import { useContext } from "react";
import { MyContext } from "./hello-context";

export const HelloButton = () => {
  const name = useContext(MyContext);

  const clickHandler = () => {
    alert(`Hello ${name}`);
  };

  return <button onClick={clickHandler}>Say hello!</button>;
};
