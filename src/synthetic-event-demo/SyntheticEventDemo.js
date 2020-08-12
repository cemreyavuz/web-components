import React from "react";
import "./SyntheticEventDemo.css";

import "./WebComponentWithDOMEvents";
import "./WebComponentWithSyntheticEvents";

const SyntheticEventDemo = () => {
  return (
    <div className="synthetic-event-demo">
      <h3>Synthetic Event Demo</h3>
      <br />
      <h5>React Component with DOM events inside a Web Component</h5>
      <web-component-with-dom-events></web-component-with-dom-events>
      <hr />
      <h5>React Component with synthetic events inside a Web Component</h5>
      <web-component-with-synthetic-events></web-component-with-synthetic-events>
    </div>
  );
};

export default SyntheticEventDemo;
