import View from './View.js';

class QuoteView extends View {
    _parentElement = document.querySelector('.primary-container');

    addHandler(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn__quote');
            if (!btn) return;
            handler();
        });
    }

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