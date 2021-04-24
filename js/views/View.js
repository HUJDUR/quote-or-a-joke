// import icons from '../../img/icons.svg';

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
        
        </div>`

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}