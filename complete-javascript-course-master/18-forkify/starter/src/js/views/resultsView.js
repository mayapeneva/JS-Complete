import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again.';
  _message = '';

  _generateMarkUpPreview(recipe) {
    return `
        <li class="preview">
            <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href="#${recipe.id}">
              <figure class="preview__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">"${recipe.title}"</h4>
                <p class="preview__publisher">${recipe.publisher}</p>
              </div>
            </a>
        </li>`;
  }

  _generateMarkUp() {
    return this._data.map(r => this._generateMarkUpPreview(r)).join('');
  }
}

export default new ResultsView();