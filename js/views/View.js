export default class View {
    _data;

    addHandler(handler) {
        this._element.addEventListener('click', handler);
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    renderSpinner() {
        const markup = 
        `<div class="spinner">
            <svg>
                <use href="./img/icons.svg#icon-loader"></use>
            </svg>
        </div> `

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderContent(data) {
        this._data = data;

        const markup = `
        <div class="result">
            <p class="result__primary">${this._data[0]}</p>
            <p class="result__secondary">${this._data[1]}</p>
        </div>
        `
        const navigationMarkup = `
        <div class="result-navigation">
            <a href="#" class="btn__reload">Another One!</a>
            <a href="#" class="btn__back">Back!</a>
        </div>
        `
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        this._parentElement.insertAdjacentHTML('afterend', navigationMarkup);
    }
}