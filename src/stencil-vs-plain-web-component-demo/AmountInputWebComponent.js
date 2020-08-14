class AmountInputWebComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.defaultValue = 0;
    this.errors = [];
    this.name = "amount-input";
    this.label = "";
    this.locales = [
      {
        code: "en",
        currency: "\u00A3",
        constraints: {
          minWholeNumberLength: 0,
          maxWholeNumberLength: 5,
          minDecimalLength: 0,
          maxDecimalLength: 5,
        },
        separators: {
          radixPointSeparator: ".",
          wholeNumberSeparator: " ",
        },
      },
    ];
    this.selectedLocale = "en";
    this.validate = (input) => {
      var _a;
      let errors = [];
      const { separators } =
        (_a = this.locales) === null || _a === void 0
          ? void 0
          : _a.find((l) => l.code === this.selectedLocale);
      const { radixPointSeparator, wholeNumberSeparator } = separators;
      const amountRegex = new RegExp(
        `^[0-9${radixPointSeparator}${wholeNumberSeparator}]*$`
      );
      if (!amountRegex.test(input)) {
        errors.push("You entered invalid character");
        return errors;
      }
      const splittedInput = input.split(radixPointSeparator);
      if (splittedInput.length > 2) {
        errors.push("Invalid amount format!");
      } else if (splittedInput.length === 2 && splittedInput[1] === "") {
        errors.push(
          "Decimal part cannot be empty if you used radix point separator!"
        );
      }
      // TODO: add rest of the validation
      return errors;
    };
    this.value = this.defaultValue;
    this.update();
  }

  static get observedAttributes() {
    return [
      'default-value',
      'label',
      'locales',
      'name',
      'selectedLocale',
      'show-currency',
      'validate',
    ];
  }

  connectedCallback() {
    this.update();
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    this[this.toCamel(attributeName)] = newValue;
    this.update();
  }

  toCamel(s) {
    return s.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
  };

  combineClassNames(...classNames) {
    let result = "";
    if (classNames) {
      classNames.forEach((className, index) => {
        if (className) {
          result += `${index === 0 ? '' : ' '}${className}`;
        }
      });
    }
    console.log(result);
    return result;
  }

  onInputChange(event) {
    if (this.validate) {
      this.errors = this.validate(event.target.value);
    }
    this.value = event.target.value;
    this.update();
  }

  update() {
    this.shadow.innerHTML = `
      <style>
        .host {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        .input-container {
          background-color: white;
          border: 1px solid lightgray;
          border-radius: 3px;
          color: gray;
          display: flex;
          font-size: 14px;
          padding: 8px;
          position: relative;
        }
        
        .input-container>label {
          background-color: white;
          color: gray;
          font-size: 12px;
          left: 8px;
          padding: 0 4px;
          position: absolute;
          top: -8px;
        }
        
        .input-container>.currency {
          font-weight: bold;
          margin-right: 4px;
        }
        
        .input-container>input {
          border: none;
          font-size: 14px;
          width: calc(100% - 8px);
        }
        
        .input-container-error {
          border-color: red;
        }
        
        .input-container-error>label, .input-container-error>.currency {
          color: red;
        }
        
        .input-container>input:focus {
          outline: none;
        }
        
        div[class="input-container"]:focus-within {
          border-color: green;
        }
        
        div[class="input-container"]:focus-within>label, div[class="input-container"]:focus-within>.currency {
          color: green;
        }
        
        .errors {
          margin: 2px 4px;
        }
        
        .errors>.error {
          color: red;
          font-size: 12px;
        }
      </style>
      <div class="host">
        <div class="${this.combineClassNames(
          "input-container",
          this.errors?.length && "input-container-error"
        )}">
          ${this.label && `<label>${this.label}</label>`}
          ${
            this.showCurrency
              ? `<span class="currency">${
                  this.locales.find((l) => l.code === this.selectedLocale)
                    ?.currency
                }</span>`
              : ''
          }
          <input id="text-input" name=${this.name} value=${this.value} />
        </div>
        <div class="errors">
          ${this.errors?.map((error) => `<div class="error">${error}</div>`)}
        </div>
      </div>
    `;
    this.shadow
      .getElementById("text-input")
      .addEventListener("blur", this.onInputChange.bind(this));
  }
}

window.customElements.define("amount-input-plain", AmountInputWebComponent);
