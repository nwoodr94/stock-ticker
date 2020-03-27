const fetch = require('node-fetch');
const api_token = require('./private/Credential');

let url = new URL("https://intraday.worldtradingdata.com/api/v1/intraday");

export function getData(symbol) {

    setParams(symbol);

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
}

function setParams(symbol) {
    let params = {
        "symbol": symbol,
        "api_token": api_token,
        "interval": 15,
        "range": 1
    };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
}