const fetch = require('node-fetch');
const api_token = require('../private/credential.js');

// URL Builder
let url = new URL("https://cloud.iexapis.com/");

let params = {
    "token": api_token
    }

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));


// API call for provided symbol
module.exports = async function callAPI(symbol) {

    setPath(symbol);

    let response = await fetch(url, {
        method: 'GET',
    })
    .then(response => response.json());

    let data = await formatData(response);

    return data;
}

// Helper Methods

// GET method must be dynamic
function setPath(symbol) {
    url.pathname = `stable/stock/${symbol}/intraday-prices`;        
}

// Limit and clean data sent to client
function formatData(data) {
    let time = [];
    let values = [];

    data.forEach(element => time.push(element.minute));
  
    data.forEach(element => values.push(element.average));


    let json = time.map((x, i) => ({x, y: values[i]}));

    json = json.filter(function(element) {
        return element.y != null;
    });
  
    
    return json;
  }