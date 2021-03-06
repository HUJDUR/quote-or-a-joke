import { JOKE_URL, QUOTE_URL } from './config.js';

export const state = {
	data: [],
	status: '',
};

export async function getJSON(url) {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (err) {
		throw err;
	}
}

export async function getJoke() {
	try {
		const data = await getJSON(JOKE_URL);
		createJokeDataObject(data);
	} catch (err) {
		throw err;
	}
}

export async function getQuote() {
	try {
		const data = await getJSON(QUOTE_URL);
		createQuoteDataObject(data);
	} catch (err) {
		throw err;
	}
}

function createJokeDataObject(data) {
	if (!data) throw new Error('Error with the API data!');

	const { setup, delivery } = data;
	state.data = [setup, delivery];
	state.status = 'joke';
}

function createQuoteDataObject(data) {
	if (!data) throw new Error('Error with the API data!');

	const { content: quote, author: quoteAuthor } = data;
	state.data = [quote, quoteAuthor];
	state.status = 'quote';
}
