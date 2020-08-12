

import React, { useState, useRef } from "react";
import "./DeclarativeVsImperativeDemo.css";

import "./DeclarativeCounter";
import "./ImperativeCounter";

const DeclarativeVsImperativeDemo = () => {
  const counterElement = useRef(null);
  const [count, setCount] = useState(0);

  const incrementCounters = () => {
    setCount(count + 1); // declarative counter
    counterElement.current.increment(); // imperative counter
  }

  const decrementCounters = () => {
    setCount(count - 1); // declarative counter
    counterElement.current.decrement(); // imperative counter
  }

  return (
    <div className="declarative-vs-imperative-demo">
      <h3>Declarative vs. Imperative Demo</h3>
      <br />
      <div className="demo-content">
        <div className="counters">
          <h5>Declarative Counter</h5>
          <declarative-counter count={count}></declarative-counter>
          <hr />
          <h5>Imperative Counter</h5>
          <imperative-counter ref={counterElement}></imperative-counter>
        </div>
        <div className="buttons">
          <button onClick={incrementCounters}>Increment Counters</button>
          <button onClick={decrementCounters}>Decrement Counters</button>
        </div>
      </div>
    </div>
  );
};

export default DeclarativeVsImperativeDemo;
