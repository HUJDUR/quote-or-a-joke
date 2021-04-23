class JokeButtonView {
    #parentElement = document.querySelector('.btn__joke');

    addHandler(handler) {
        this.#parentElement.addEventListener('click', handler);
    }
}

export default new JokeButtonView();