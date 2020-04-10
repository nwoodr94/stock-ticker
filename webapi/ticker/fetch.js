const fetch = require('node-fetch');
const api_token = require('../private/credential.js');

let url = new URL("https://cloud.iexapis.com/stable/stock/");

module.exports = async function callAPI(symbol) {

    urlBuilder(symbol);

    let response = await fetch(url, {
        method: 'GET',
    });

    let data = await response.json();

    return data;
}

function urlBuilder(symbol) {
    let path = `${symbol}/intraday-prices`;
    url.pathname += path;

    let params = {
        "token": api_token
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
}