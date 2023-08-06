import { useRef } from "react";

export const HelloRef = () => {
  const inputRef = useRef();
  const customValueRef = useRef("");

  const clickHandler = () => {
    inputRef.current.focus();
    alert(customValueRef.current);
  };

  const changeHandler = (event) => {
    customValueRef.current = event.target.value;
  };

  return (
    <>
      <button onClick={clickHandler}>fous on the field</button>
      <input onchange={changeHandler} ref={inputRef} type="text" />
    </>
  );
};
