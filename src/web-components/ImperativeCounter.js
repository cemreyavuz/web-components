class ImperativeCounter extends HTMLElement {
  constructor() {
    super(); 
    this.shadow = this.attachShadow({ mode: 'open'});
    this.currentCount = 0;
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
      </div>
    `;
    this.shadow.innerHTML = template;
  }

  increment(){
    this.currentCount++;
    this.update();
  }

  decrement() {
    this.currentCount--;
    this.update();
  }
}

window.customElements.define('i-counter', ImperativeCounter);