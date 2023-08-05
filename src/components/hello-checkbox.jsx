import { useContext } from "react";
import { MyContext } from "./hello-context";

export const HelloCheckbox = () => {
  const [isChecked, setIsChecked] = useContext(MyContext);

  const onChangeHandler = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <input onChange={onChangeHandler} type="checkbox" />
      {isChecked ? <p>This is checked!</p> : <p>Nope!</p>}
    </>
  );
};
