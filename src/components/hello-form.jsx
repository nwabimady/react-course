import { useContext, useState } from "react";
import { MyContext } from "./hello-context";

export const HelloForm = () => {
  const [name, setName] = useState(" ");
  const [surname, setSurname] = useState(" ");
  const [isChecked] = useContext(MyContext);

  const clickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert(`Hello ${name} ${surname}!`);
    setName("");
    setSurname("");
  };

  return (
    <form>
      <label>
        Name:
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
      </label>
      <label>
        Surname:{" "}
        <input
          value={surname}
          onChange={(event) => {
            setSurname(event.target.value);
          }}
        ></input>
      </label>
      <label>
        <button disabled={isChecked} onClick={clickHandler}>
          Submit
        </button>
      </label>
    </form>
  );
};
