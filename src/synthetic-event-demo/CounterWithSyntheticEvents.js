import React, { Component } from "react";

class CounterWithSyntheticEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  render() {
    return (
      <div>
        {`Count: ${this.state.counter} `}
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default CounterWithSyntheticEvents;
