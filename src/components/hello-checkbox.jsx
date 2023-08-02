export const HelloCheckbox = ({ person }) => {
    const clickHandler = (event) => {
        if(event.target.checked) {
        alert(`Hello ${person.name}`);
        }
    };
    return <input type="checkbox" onChange={clickHandler} />;
};

