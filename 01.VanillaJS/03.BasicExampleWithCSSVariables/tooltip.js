class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'Default text.';
    this.attachShadow({ mode: 'open' });
    // :host selector is how we style the custom component from inside the component by selecting it
    // :host() by using host as function and providing parameters we can do conditional styling, depending for example if some class is provided
    // :host-context(css selector) allows us to apply styling conditionally depending if our custom element is a child of parent matching the css selector
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: gray;
          color: orange;
          position: absolute;
          z-index: 5;
        }

        :host(.imp) {
          background: var(--color-primary, #bbb);
        }

        :host-context(p) {
          font-weight: bold;
        }

        .highlight {
          background-color: red;
        }

        ::slotted(.highlight) {
          border-bottom: 1px dotted red;
        }

        .icon {
          background: black;
          color: white;
          padding: 0.12rem 0.5rem;
          text-align: center;
          border-radius: 50%;
        }
      </style>
      <slot>Some default</slot>
      <span class="icon">?</span>
    `;
  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    const tooltipIcon = this.shadowRoot.querySelector('span');
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = 'relative';
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

customElements.define('uq-tooltip', Tooltip);
