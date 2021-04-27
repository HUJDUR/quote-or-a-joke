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
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        document.querySelector('.result-navigation').style.display = 'flex';
    }
}