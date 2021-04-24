import View from './View.js';

class QuoteButtonView extends View{
    _parentElement = document.querySelector('.button-container');
    _element = document.querySelector('.btn__quote');
}

export default new QuoteButtonView();