import { HelloWorld } from "./components/hello world";

export function App() {
    const person = {name: "Nwabisa", surname: "Redwood-Sawyerr"}
    return <HelloWorld person = { person } />;
}