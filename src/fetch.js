const fetch = require('node-fetch');
const api_token = require('./private/Credential.js');

let url = new URL("https://api.worldtradingdata.com/api/v1/stock");

let params = {
    "symbol": "^DJI",
    "api_token": api_token
};

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

fetch(url, {
    method: 'GET',
})
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Request failed");
    }, networkError => {
        console.log(networkError.message)
    })
    .then(json => console.log(json));