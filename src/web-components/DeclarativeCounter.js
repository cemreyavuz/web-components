class DeclarativeCounter extends HTMLElement {
  constructor() {
    super(); 
    this.shadow = this.attachShadow({ mode: 'open'});
  }
  
  static get observedAttributes() {
      return ['count']
  }

  connectedCallback() {
      this.currentCount = this.getAttribute('count') || 0;
      this.update();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
      this.currentCount = newVal;
      this.update();
  }

  update() {
    const template = `
      <style>
        .counter {
          font-size: 25px;
        }
      </style>
      <div class="counter">
        <b>Count:</b> ${this.currentCount}
    `;
    this.shadow.innerHTML = template;
  }
}

window.customElements.define('d-counter', DeclarativeCounter);