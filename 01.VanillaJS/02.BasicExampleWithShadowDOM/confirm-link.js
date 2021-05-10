class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', (event) => {
      if (!confirm('Do you want to leave?')) {
        event.preventDefault();
      }
    });
  }
}

// as third argument here we need to specify which element we extends, we dont have to do it for the generic html element
customElements.define('uq-confirm-link', ConfirmLink, { extends: 'a' });
