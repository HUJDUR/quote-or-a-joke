import View from './View.js';

class JokeButtonView extends View { 
    _parentElement = document.querySelector('.button-container');
    _element = document.querySelector('.btn__joke');

    _generateMarkup(data) {
        return `
            <div class="result">
                <p class="result__primary">${data[0]}</p>
                <p class="result__secondary">${data[1]}</p>
            </div>
        `;
    }
}

export default new JokeButtonView();