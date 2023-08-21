import React from "react";
import "./components/global.css";
import { HelloListApi } from "./components/hello-list-api";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { HelloWorld } from "./components/hello-world";

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/List">List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/list" element={<HelloListApi />}></Route>
          <Route
            path="/"
            element={
              <HelloWorld
                person={{ name: "Nwabisa", surname: "Redwood-Sawyerr" }}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
