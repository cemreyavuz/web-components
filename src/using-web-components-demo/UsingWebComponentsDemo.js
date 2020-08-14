import React from "react";
import "./UsingWebComponentsDemo.css";

import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';

const UsingWebComponentsDemo = () => {
  return (
    <div className="using-web-components-demo">
      <h3>Using Web Components Demo</h3>
      <br />
      <h5>Material Web Component</h5>
      <mwc-select label="filled">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="0">Item 0</mwc-list-item>
        <mwc-list-item value="1">Item 1</mwc-list-item>
        <mwc-list-item value="2">Item 2</mwc-list-item>
        <mwc-list-item value="3">Item 3</mwc-list-item>
      </mwc-select>
      <hr />
      <h5>Stencil Web Component</h5>
      <amount-input
        label="Amount Input"
        show-currency
      />
    </div>
  );
};

export default UsingWebComponentsDemo;
