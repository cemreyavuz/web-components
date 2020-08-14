import React, { useRef, useEffect } from "react";
import "./StencilVsPlainWebComponentDemo.css";

import "./AmountInputWebComponent";

const StencilVsPlainWebComponentDemo = () => {
  const plainElementRef = useRef(null);
  const stencilElementRef = useRef(null);

  useEffect(() => {
    const validate = (input) => {
      let errors = [];
      const radixPointSeparator = ".";
      const wholeNumberSeparator = ' ';
      const amountRegex = new RegExp(
        `^[0-9${radixPointSeparator}${wholeNumberSeparator}]*$`
      );
      if (!amountRegex.test(input)) {
        errors.push('You entered invalid character');
        return errors;
      }
      const splittedInput = input.split(radixPointSeparator);
      if (splittedInput.length > 2) {
        errors.push('Invalid amount format!');
      } else if (splittedInput.length === 2 && splittedInput[1] === "") {
        errors.push('Decimal part cannot be empty if you used radix point separator!');
      }
      // TODO: add rest of the validation
      return errors;
    }
    plainElementRef.current.validate = validate;
    stencilElementRef.current.validate = validate;
  })

  return (
    <div className="stencil-vs-plain-web-component-demo">
      <h3>Stencil vs. Plain Web Component Demo</h3>
      <br />
      <h5>Stencil Web Component</h5>
      <amount-input label="Amount Input" ref={stencilElementRef} show-currency />
      <hr />
      <h5>Plain Web Component</h5>
      <amount-input-plain label="Amount Input" ref={plainElementRef} show-currency />
    </div>
  );
};

export default StencilVsPlainWebComponentDemo;
