import React, { Component } from "react";

class CounterWithDOMEvents extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    const listenerFn = this.handleClick;
    this.buttonRef.current.addEventListener("click", listenerFn);
    this.removeListener = () =>
      this.buttonRef.current.removeEventListener("click", listenerFn);
  }

  componentWillUnmount() {
    this.removeListener();
  }

  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  render() {
    return (
      <div>
        {`Count: ${this.state.counter} `}
        <button ref={this.buttonRef}>+</button>
      </div>
    );
  }
}

export default CounterWithDOMEvents;
