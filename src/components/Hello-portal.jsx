import ReactDOM from "react-dom";

export const HelloPortal = () => {
  const root = document.getElementById("root");

  return ReactDOM.createPortal(<div>This is a modal</div>, root);
};
