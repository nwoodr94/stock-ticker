require('dotenv').config();
const fetch = require('node-fetch');

// URL Builder
let url = new URL("https://cloud.iexapis.com/");

let params = {
    "token": `${process.env.API_KEY}`
    }

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));


// API call for provided symbol
module.exports = async function callAPI(symbol) {
    console.log(process.cwd());
    setPath(symbol);

    let response = await fetch(url, {
        method: 'GET',
    })
    .then(response => response.json());

    let arr = await formatData(response);

    return arr;
}

// Helper Methods

// GET method must be dynamic
function setPath(symbol) {
    url.pathname = `stable/stock/${symbol}/intraday-prices`;        
}

// Format and clean data sent to client
function formatData(data) {
    let time = [];
    let values = [];

    data.forEach(element => time.push(element.minute));
  
    data.forEach(element => values.push(element.average));


    let arr = time.map((x, i) => ({x, y: values[i]}));

    arr = arr.filter(function(element) {
        return element.y != null;
    });
  
    return arr;
  }