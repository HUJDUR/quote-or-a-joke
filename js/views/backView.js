import View from './View.js';

class BackView extends View {
    _parentElement = document.querySelector('.button-container');
    _element = document.querySelector('.btn__back');

    renderContent() {
        const markup = `
        <div class="button-container">
            <a href="#" class="btn__joke">Joke?</a>
            <a href="#" class="btn__quote">Quote?</a>  
        </div>
        `
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        document.querySelector('.result-navigation').style.display = 'none';
    }
}

export default new BackView();