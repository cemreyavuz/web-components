class DeclarativeCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["count"];
  }

  connectedCallback() {
    this.currentCount = this.getAttribute("count") || 0;
    this.update();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.currentCount = newVal;
    this.update();
  }

  update() {
    const template = `
      <div class="counter">
        Count: ${this.currentCount}
      </div>
    `;
    this.shadow.innerHTML = template;
  }
}

window.customElements.define("declarative-counter", DeclarativeCounter);
