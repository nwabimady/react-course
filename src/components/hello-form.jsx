import { useContext, useState } from "react";
import { ApplicationContext } from "../App-context";

export const HelloForm = () => {
  const [name, setName] = useState(" ");
  const [surname, setSurname] = useState(" ");
  const [state] = useContext(ApplicationContext);

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
        <button disabled={state.isChecked} onClick={clickHandler}>
          Submit
        </button>
      </label>
    </form>
  );
};
