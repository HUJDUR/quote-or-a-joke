export default class View {
    _data;
    _status;
    _navigationContainer = document.querySelector('.result-navigation');
    _navigationOppositeButton =  document.querySelector('.btn__opposite');

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
        this._navigationContainer.style.display = 'flex';
        this._navigationOppositeButton.innerHTML = `Or a ${status} instead?`
    }
}