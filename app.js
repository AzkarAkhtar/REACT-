import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id : "heading1"}, "Hello from react");


const heading2 = ( <div id ="heading2">
    <h1>Hello from JSX 1</h1>
    <h1>Hello from JSX 2</h1>
  </div>);

  const root = ReactDOM.createRoot(document.getElementById('heading1'));
  const root2 = ReactDOM.createRoot(document.getElementById('heading2'));
  root.render(heading);
  root2.render(heading2);
