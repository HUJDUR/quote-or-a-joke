import View from './View.js';

class QuoteView extends View {
    _parentElement = document.querySelector('.button-container');
    _element = document.querySelector('.btn__quote');

    _generateMarkup(data) {
        return `
            <div class="result">
                <p class="result__primary">${data[0]}</p>
                <p class="result__secondary">${data[1]}</p>
            </div>
        `;
    }
}

export default new QuoteView();