import { useState } from "react";

export const HelloCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const onChangeHandler = (event) => {
        setIsChecked(event.target.checked);
    };

return (
    <>
     <input onChange= {onChangeHandler} type="checkbox" />
     {isChecked ? <p>This is checked!</p> : <p>Nope!</p>}
    </>
);
};