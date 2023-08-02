import { useState } from "react";

export const HelloCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const onChangeHandler = (event) => {
        setIsChecked(event.target.checked);
    }
    
    const getConditionalContent = () => {
        if (isChecked) {
            return <p>This is checked!</p>;
        }
        return <p>Nope!</p>
    };

return (
    <>
     <input onChange= {onChangeHandler} type="checkbox" />
     {getConditionalContent()}
    </>
);
};