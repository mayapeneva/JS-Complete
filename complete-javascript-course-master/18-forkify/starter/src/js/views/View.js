import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;

    const markup = this._generateMarkUp();

    if(!render) return this.markup;

    this._clear();
    this._parentElement.insertAdjacentHTML(`afterbegin`, markup);
  }

  update(data) {
    this._data = data;

    const newMarkup = this._generateMarkUp();
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll('*'));

    const currentElements = Array.from(this._parentElement.querySelectorAll('*'));
    newElements.forEach((newElement, i) => {
      const currentElement = currentElements[i];
      if (!newElement.isEqualNode(currentElement)) {
        if (newElement.firstChild?.nodeValue.trim() !== '')
          currentElement.textContent = newElement.textContent;

        Array.from(newElement.attributes).forEach(attr => currentElement.setAttribute(attr.name, attr.value));
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markupSpinner = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markupSpinner);
  }

  renderError(message = this._errorMessage) {
    const markupError = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}_icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markupError);
  }
}