export const HelloButton = ({ person }) => {
    const clickHandler = () => {
        alert(`Hello ${person.name}`)
        }

    return <button onClick={clickHandler}>Say hello!</button>
};

