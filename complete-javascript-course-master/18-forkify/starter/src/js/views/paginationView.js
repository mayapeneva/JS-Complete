import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View{
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler){
        this._parentElement.addEventListener('click', function(e) {
            const button = e.target.closest('.btn--inline');
            if (!button) return;
            
            handler(Number(button.dataset.goto));
        });
    }

    _generateMarkUpButton(pageNumber, previous){
        if(previous){
            return `<button data-goto="${pageNumber}" class="btn--inline pagination__btn--prev">
                        <svg class="search__icon">
                        <use href="${icons}g#icon-arrow-left"></use>
                        </svg>
                        <span>Page ${pageNumber}</span>
                    </button>`;
        }

        return `<button data-goto="${pageNumber}" class="btn--inline pagination__btn--next">
                    <span>Page ${pageNumber}</span>
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>`;
    }

    _generateMarkUp(){
        const currentPage = this._data.page;
        const numberOfPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        debugger
        if(currentPage === 1 && numberOfPages > 1){
            return this._generateMarkUpButton(currentPage + 1, false);
        }

        if(currentPage === numberOfPages && numberOfPages > 1){
            return this._generateMarkUpButton(currentPage - 1, true);
        }

        if(currentPage < numberOfPages){
            return `${this._generateMarkUpButton(currentPage - 1, true)}${this._generateMarkUpButton(currentPage + 1, false)}`;
        }

        return '';
    }
}

export default new PaginationView();