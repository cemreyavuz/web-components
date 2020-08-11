import React from "react";
import "./App.css";

import Counter from './components/CounterHook';

// import custom elements
import './web-components/ImperativeCounter';
import './web-components/DeclarativeCounter';


const App = () => {
  return <div>
    <Counter />
  </div>;
}

export default App;
