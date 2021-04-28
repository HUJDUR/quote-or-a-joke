import * as model from './model.js';
import jokeView from './views/jokeView.js';
import quoteView from './views/quoteView.js';
import reloadView from './views/reloadView.js';
import oppositeView from './views/oppositeView.js';

function _otherStateStatus() {
    return model.state.status === 'joke' ? 'quote' : 'joke';
}

async function controlJoke() {
    jokeView.renderSpinner();
    await model.getJoke();
    jokeView.renderContent(model.state.data, _otherStateStatus());
}

async function controlQuote() {
    quoteView.renderSpinner();
    await model.getQuote();
    quoteView.renderContent(model.state.data, _otherStateStatus());
}

function controlReload() {
    if (model.state.status === 'joke') controlJoke();
    if (model.state.status === 'quote') controlQuote();
}

function controlOpposite() {
    if (model.state.status === 'joke') controlQuote();
    if (model.state.status === 'quote') controlJoke();
}

function init() {
    jokeView.addHandler(controlJoke);
    quoteView.addHandler(controlQuote);
    reloadView.addHandler(controlReload);
    oppositeView.addHandler(controlOpposite);
}

init();