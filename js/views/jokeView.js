import View from './View.js';

class JokeButtonView extends View {
    _parentElement = document.querySelector('.button-container');
    _element = document.querySelector('.btn__joke');
}

export default new JokeButtonView();