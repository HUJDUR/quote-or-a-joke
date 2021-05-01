import View from './View.js';

class ReloadView extends View {
	_parentElement = document.querySelector('.result-navigation');

	addHandler(handler) {
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.btn__reload');
			if (!btn) return;
			handler();
		});
	}
}

export default new ReloadView();
