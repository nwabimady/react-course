import { useState } from "react";

export const HelloCounter = () => {
    const data = { count: 0 };


    const [countData, setCountData] = useState(data);

    const onClick = () => {
        const newData = {...countData};
        newData.count++;
        setCountData(newData);
    };

    return(
        <>
            <div>Counter: {countData.count} </div>
            <button onClick={onClick}>Press here!</button>
        </>  
    );
};