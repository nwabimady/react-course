import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function getGreetElement(name, link) {
    const message = `Hello, ${name}`;
    return (<div> 
                <h1>{message}</h1>
                <a href={link}>link</a>
            </div>);
}

const block = getGreetElement("Nwabisa", "https://www.google.com/");

root.render(block);