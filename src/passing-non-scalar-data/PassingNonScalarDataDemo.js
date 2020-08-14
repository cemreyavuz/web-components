import React from "react";
import "./PassingNonScalarDataDemo.css";

import AmountInputWrapper from "./AmountInputWrapper";

const PassingNonScalarDataDemo = () => {
  const validate = () => {
    return ['test-error'];
  }

  return (
    <div className="passing-non-scalar-data-demo">
      <h3>Passing Non Scalar Data Demo</h3>
      <br />
      <h5>Passing Function Property Directly</h5>
      <amount-input
        label="Amount Input"
        show-currency
        validate={validate}
      />
      <hr />
      <h5>Passing Function Property via Wrapper</h5>
      <AmountInputWrapper
        label="Amount Input"
        showCurrency
        validate={validate}
      />
    </div>
  );
};

export default PassingNonScalarDataDemo;
