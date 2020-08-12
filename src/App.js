import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <h5>React Component with DOM events inside a Web Component</h5>
      <web-component-with-dom-events></web-component-with-dom-events>
      <hr />
      <h5>React Component with synthetic events inside a Web Component</h5>
      <web-component-with-synthetic-events></web-component-with-synthetic-events>
    </div>
  );
};

export default App;
