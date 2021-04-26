import * as model from './model.js';
import jokeButtonView from './views/jokeView.js';
import quoteButtonView from './views/quoteView.js'

async function controlJoke() {
    jokeButtonView.renderSpinner();
    await model.getJoke();
    jokeButtonView.renderContent(model.state.data);
}

async function controlQuote() {
    quoteButtonView.renderSpinner();
    await model.getQuote();
    quoteButtonView.renderContent(model.state.data);
}

function init() {
    jokeButtonView.addHandler(controlJoke);
    quoteButtonView.addHandler(controlQuote);
}

init();