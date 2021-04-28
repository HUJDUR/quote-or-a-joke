import View from './View.js';

class ReloadView extends View {
    _parentElement = document.querySelector('.primary-container');
    _element = document.querySelector('.btn__reload');
}

export default new ReloadView();