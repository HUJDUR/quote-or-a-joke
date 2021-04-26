import View from './View.js';

class QuoteView extends View {
    _parentElement = document.querySelector('.button-container');
    _element = document.querySelector('.btn__quote');
}

export default new QuoteView();