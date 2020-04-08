const fetch = require('node-fetch');
  
let url = 'http://localhost:8000/api';

module.exports = function callAPI(symbol) {

    console.log(symbol);

    fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"ticker": symbol})
    })
        .then(response => {
            console.log(response.status)
            if (response.ok) {
                return response.text();
            }
        }, networkError => {
           console.log(networkError.message)
        })
        .then(result => console.log(result));
}