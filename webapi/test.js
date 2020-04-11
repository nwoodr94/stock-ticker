const fetch = require('node-fetch');
const api_token = require('./private/credential.js');

let url = new URL("https://cloud.iexapis.com/stable/stock/");

async function callAPI(symbol) {

    setParams(symbol);

    let response = await fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())

    let data = await formatData(response);

    return data;
}

function setParams(symbol) {
    let path = `${symbol}/intraday-prices`;
    url.pathname += path;
    console.log(url.pathname);

    let params = {
        "token": api_token
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
}

function formatData(data) {

    let time = [];
    data.forEach(element => time.push(element.minute));
  
    let values = [];
    data.forEach(element => values.push(element.open));

    let json = time.map((x, i) => ({x, y: values[i]}));
  
    return json;
  }

(async() => {
    let data = await callAPI("amd");
    await console.log(data);
})();  
