import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import AddItem from "./AddItem";
import AddItemTwo from "./AddItemTwo";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AddItem placeholder="Value" onButtonClick={v => console.log(v)} />
      <AddItemTwo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
