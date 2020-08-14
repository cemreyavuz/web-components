import React, { useRef, useEffect } from "react";

const AmountInputWrapper = (props) => {
  const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current.validate = () => {
      return ["test-error"];
    };
  }, []);

  return (
    <amount-input
      label={props.label}
      show-currency={props.showCurrency}
      ref={elementRef}
    ></amount-input>
  );
};

export default AmountInputWrapper;
