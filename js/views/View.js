export default class View {
    _data;
    _status;

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
        </div> `;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderContent(data, status) {
        this._data = data;
        this._status = status;
        
        const markup = this._generateMarkup(this._data);

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        document.querySelector('.result-navigation').style.display = 'flex';
        document.querySelector('.btn__back').innerHTML = `Or a ${status === 'joke' ? 'quote' : 'joke'} instead?`
    }
}