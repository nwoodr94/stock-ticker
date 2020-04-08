const fetch = require('node-fetch');
const api_token = require('../private/credential.js');

let url = new URL("https://intraday.worldtradingdata.com/api/v1/intraday");

module.exports = function getData(symbol) {

    //setParams(symbol);
    if(symbol === "snap"){
        return data;
    }

    // fetch(url, {
    //     method: 'GET',
    // })
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //         throw new Error("Request failed");
    //     }, networkError => {
    //         console.log(networkError.message)
    //     })
    //     .then(json => console.log(json));
}

// function setParams(symbol) {
//     let params = {
//         "symbol": symbol,
//         "api_token": api_token,
//         "interval": 15,
//         "range": 1
//     };
//     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
// }

let data = {
    "symbol": "SNAP",
    "stock_exchange_short": "NYSE",
    "timezone_name": "America/New_York",
    "intraday": {
        "2019-12-20 15:59:00": {
            "open": "15.35",
            "close": "15.55",
            "high": "15.55",
            "low": "15.52",
            "volume": "670218"
        },
        "2019-12-20 15:58:00": {
            "open": "15.55",
            "close": "15.55",
            "high": "15.55",
            "low": "15.54",
            "volume": "284225"
        },
        "2019-12-20 15:57:00": {
            "open": "15.54",
            "close": "15.54",
            "high": "15.55",
            "low": "15.54",
            "volume": "159829"
        },
        "2019-12-20 15:56:00": {
            "open": "15.55",
            "close": "15.55",
            "high": "15.55",
            "low": "15.53",
            "volume": "254264"
        },
        "2019-12-20 15:55:00": {
            "open": "15.54",
            "close": "15.55",
            "high": "15.55",
            "low": "15.53",
            "volume": "158856"
        },
        "2019-12-20 15:54:00": {
            "open": "15.53",
            "close": "15.53",
            "high": "15.54",
            "low": "15.52",
            "volume": "243708"
        },
        "2019-12-20 15:53:00": {
            "open": "15.54",
            "close": "15.53",
            "high": "15.55",
            "low": "15.52",
            "volume": "222637"
        }
    }
  };