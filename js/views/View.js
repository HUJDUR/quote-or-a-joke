export default class View {
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
}