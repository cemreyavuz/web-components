import React from 'react';
import ReactDOM from 'react-dom';
import CounterWithSyntheticEvents from './CounterWithSyntheticEvents';

class WebComponentWithSyntheticEvents extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.mount = document.createElement('div');
    this.shadow.appendChild(this.mount);
  }

  connectedCallback() {
    this.update();
  }

  update() {
    ReactDOM.render(<CounterWithSyntheticEvents />, this.mount);
  }
}

window.customElements.define(
  "web-component-with-synthetic-events",
  WebComponentWithSyntheticEvents
);

