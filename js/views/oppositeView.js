import View from './View.js';

class OppositeView extends View {
    _parentElement = document.querySelector('.result-navigation');

    addHandler(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn__opposite');
            if (!btn) return;
            handler();
        });
    }
}

export default new OppositeView();