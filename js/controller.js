import * as model from './model.js';
import jokeView from './views/jokeView.js';
import quoteView from './views/quoteView.js';

async function controlJoke() {
    jokeView.renderSpinner();
    await model.getJoke();
    jokeView.renderContent(model.state.data);
}

async function controlQuote() {
    quoteView.renderSpinner();
    await model.getQuote();
    quoteView.renderContent(model.state.data);
}

function init() {
    jokeView.addHandler(controlJoke);
    quoteView.addHandler(controlQuote);
}

init();