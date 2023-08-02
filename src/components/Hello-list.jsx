export const HelloList = ({names}) => {
    const listNames = names.map (( name, index ) => {
        const key = `${index}${name}`;
        return <li key={key}>{name}</li>;
});
    return <ul> {listNames} </ul>;
};