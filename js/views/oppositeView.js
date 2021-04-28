import View from './View.js';

class OppositeView extends View {
    _parentElement = document.querySelector('.orimary-container');
    _element = document.querySelector('.btn__opposite');

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

    _generateMarkup(data) {
        return `
            <div class="button-container">
                <a href="#" class="btn__joke">Joke?</a>
                <a href="#" class="btn__quote">Quote?</a>  
            </div>
        `
    }
}

export default new OppositeView();