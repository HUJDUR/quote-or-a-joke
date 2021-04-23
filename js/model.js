import {JOKE_URL, QUOTE_URL} from './config.js';

export const state = {
    data: {}
}

export async function getJSON(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch(err) {
        throw err;
    }
}

export async function getJoke() {
    try {
        const data = await getJSON(JOKE_URL);
        state.data = data;
    } catch(err) {
        throw err;
    }
}

export async function getQuote() {
    try {
        const data = await getJSON(QUOTE_URL);
        state.data = data   
    } catch(err) {
        throw err;
    }
}
