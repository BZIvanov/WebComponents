// to create our custom element we need to extend the base htmlelement class
class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'Default text.';
  }

  // connectCallback is one of the lifecycle hooks we can use for accessing the DOM
  // this callback is called, when our custom component is already attached to the DOM, so here is the right place to do something with it
  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = '(?)';
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.appendChild(tooltipIcon);
    this.style.position = 'relative';
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    this._tooltipContainer.style.backgroundColor = 'gray';
    this._tooltipContainer.style.color = 'orange';
    this._tooltipContainer.style.position = 'absolute';
    this._tooltipContainer.style.zIndex = '5';
    this.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }
}

// customElements is built-in javascript object with define method which allows us to create our custom tags
// the name of the tag must contains a dash("-")
customElements.define('uq-tooltip', Tooltip);
