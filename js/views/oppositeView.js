import View from './View.js';

class BackView extends View {
    _parentElement = document.querySelector('.button-container');
    _element = document.querySelector('.btn__opposite');
}

export default new BackView();