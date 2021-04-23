import * as model from './model.js';
import jokeButtonView from './views/jokeView.js';
import quoteButtonView from './views/quoteView.js'

async function controlJoke() {
    await model.getJoke();
    console.log(model.state.data);
}

function init() {
    jokeButtonView.addHandler(controlJoke)
}

init();

