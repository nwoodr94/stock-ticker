const fetch = require('node-fetch');
  
let url = 'http://localhost:8000/api';

export async function callAPI(symbol) {

    console.log("calling API...");

    let response = await fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"ticker": symbol})
    })

    let data = await response.json();

    return data.reverse();
}

