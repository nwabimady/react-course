import { HelloCheckbox } from "./components/hello-checkbox";

export function App() {
  const person = { name: "Nwabisa", surname: "Redwood-Sawyerr" };
    return <HelloCheckbox person={person} />;
}