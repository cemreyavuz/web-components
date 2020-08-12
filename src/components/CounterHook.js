import React, { useState, useRef } from 'react';
import NavBar from '../containers/NavBar';
import Card from '../containers/Card';
import CounterBox from '../containers/CounterBox';

export default () => {
  const counterElement = useRef(null);
  const [count, setCount] = useState(0);

  const incrementCounters = () => {
    // increment the declarative counter
    setCount(count + 1);
    // increment the imperative counter
    counterElement.current.increment();
  }

  const decrementCounters = () => {
    // decrement the declarative counter
    setCount(count - 1);
    // decrement the imperative counter
    counterElement.current.decrement();
  }

  return (
    <>
      <NavBar title="Web Components + React = ❤️" />
      <Card title="Web Component Counters">
        <CounterBox>
          <div onClick={() => { console.log('Clicked!'); }}>
            <h5>Imperative Counter</h5>
            <i-counter onClick={() => { console.log('i-counter clicked!'); }} ref={counterElement}></i-counter>
          </div>
        </CounterBox>
        <CounterBox>
          <h5>Declarative Counter</h5>
          <d-counter count={count}></d-counter>
        </CounterBox>
        <button 
          onClick={incrementCounters} 
          className="btn btn-primary">Increment</button>
        <button 
          onClick={decrementCounters} 
          className="btn btn-primary">Decrement</button>
      </Card>
    </>
  )
}