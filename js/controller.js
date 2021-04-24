import * as model from './model.js';
import jokeButtonView from './views/jokeView.js';
import quoteButtonView from './views/quoteView.js'

async function controlJoke() {
    jokeButtonView.renderSpinner();
    await model.getJoke();
    console.log(model.state.data);
}

async function controlQuote() {
    quoteButtonView.renderSpinner();
    await model.getQuote();
    console.log(model.state.data);
}

function init() {
    jokeButtonView.addHandler(controlJoke);
    quoteButtonView.addHandler(controlQuote);
}

init();

