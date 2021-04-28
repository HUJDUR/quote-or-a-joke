import * as model from './model.js';
import jokeView from './views/jokeView.js';
import quoteView from './views/quoteView.js';
import reloadView from './views/reloadView.js';
import backView from './views/backView.js';

async function controlJoke() {
    jokeView.renderSpinner();
    await model.getJoke();
    jokeView.renderContent(model.state.data, model.state.status);
}

async function controlQuote() {
    quoteView.renderSpinner();
    await model.getQuote();
    quoteView.renderContent(model.state.data, model.state.status);
}

function controlReload() {
    if (model.state.status === 'joke') controlJoke();
    if (model.state.status === 'quote') controlQuote();
}

function controlBack() {
    if (model.state.status === 'joke') controlQuote();
    if (model.state.status === 'quote') controlJoke();
}

function init() {
    jokeView.addHandler(controlJoke);
    quoteView.addHandler(controlQuote);
    reloadView.addHandler(controlReload);
    backView.addHandler(controlBack);
}

init();