import React, {Component} from 'react';
import NavBar from '../containers/NavBar';
import Card from '../containers/Card';
import CounterBox from '../containers/CounterBox';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.counterElement = React.createRef();
  }

  incrementCounters = () => {
    // increment the imperative counter
    this.counterElement.current.increment();
    // increment the declarative counter
    this.setState({ count: this.state.count + 1 })
  }

  decrementCounters = () => {
    // increment the imperative counter
    this.counterElement.current.decrement();
    // increment the declarative counter
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <>
      <NavBar title="Web Components + React = ❤️" />
      <Card title="Web Component Counters">
        <CounterBox>
          <h5>Imperative Counter</h5>
          <i-counter ref={this.counterElement}></i-counter>
        </CounterBox>
        <CounterBox>
          <h5>Declarative Counter</h5>
          <d-counter count={this.state.count}></d-counter>
        </CounterBox>
        <button 
          onClick={this.incrementCounters} 
          className="btn btn-primary">Increment</button>
        <button 
          onClick={this.decrementCounters} 
          className="btn btn-primary">Decrement</button>
      </Card>
    </>
    );
  }
}