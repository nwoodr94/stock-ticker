const fetch = require('node-fetch');
  
let url = 'http://localhost:8000/api';

export async function callAPI(symbol) {

    let response = await fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"ticker": symbol})
    })
    let json = await response.json();

    let data = formatData(json);

    return data.reverse();
}

function formatData(array) {

    let time = [];
    array.forEach(obj => time.push(obj.minute));
  
    let values = [];
    array.forEach(obj => values.push(obj.open));

    let json = time.map((x, i) => ({x, y: values[i]}));
  
    return json;
  }