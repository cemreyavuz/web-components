import React from 'react';
import ReactDOM from 'react-dom';
import CounterWithDOMEvents from './CounterWithDOMEvents';

class WebComponentWithDOMEvents extends HTMLElement {
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
    ReactDOM.render(<CounterWithDOMEvents />, this.mount);
  }
}

window.customElements.define(
  "web-component-with-dom-events",
  WebComponentWithDOMEvents
);

