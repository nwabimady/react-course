import ReactDOM from "react-dom";
<<<<<<< HEAD
import { HelloWorld } from "./components/hello world";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HelloWorld/>);
=======

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
>>>>>>> main
