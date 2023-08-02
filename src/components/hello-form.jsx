import { useState } from "react";

export const HelloForm = () => {
    
    const [name, setName] = useState (" ");
    const [surname, setSurname] = useState (" ");
    
    const clickHandler = () => {
        alert(`Hello ${name} ${surname}!`);
        setName("");
        setSurname(""); 
    }

    return (
        <form>
            <label>
                Name: 
                <input 
                    value={name}
                    onChange={
                        (event) => {
                            setName(event.target.value)
                    }
                }>
                    
                </input>
            </label>
            <label>
                Surname: <input 
                    value={surname}
                    onChange={
                        (event) => {
                            setSurname(event.target.value)
                    }
                }></input>
            </label>
            <label>
                <button onClick={clickHandler}>
                    Submit
                </button>
            </label>
        </form>
        );
};