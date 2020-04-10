const fetch = require('node-fetch');
const api_token = require('./private/credential.js');

let url = new URL("https://cloud.iexapis.com/stable/stock/");

async function getData(symbol) {

    setParams(symbol);

    let response = await fetch(url, {
        method: 'GET',
    });

    let data = await response.json();
    await console.log(data);

    return data;
}

function setParams(symbol) {
    let path = `${symbol}/intraday-prices`;
    url.pathname += path;

    let params = {
        "token": api_token
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
}



let data = [
    {
      date: '2020-04-09',
      minute: '09:30',
      label: '09:30 AM',
      high: 13.58,
      low: 13.53,
      open: 13.545,
      close: 13.53,
      average: 13.548,
      volume: 898,
      notional: 12165.78,
      numberOfTrades: 9
    },
    {
      date: '2020-04-09',
      minute: '09:31',
      label: '09:31 AM',
      high: 13.52,
      low: 13.465,
      open: 13.48,
      close: 13.5,
      average: 13.484,
      volume: 1000,
      notional: 13484,
      numberOfTrades: 10
    },
    {
      date: '2020-04-09',
      minute: '09:32',
      label: '09:32 AM',
      high: 13.65,
      low: 13.56,
      open: 13.56,
      close: 13.615,
      average: 13.615,
      volume: 600,
      notional: 8169,
      numberOfTrades: 6
    },
    {
      date: '2020-04-09',
      minute: '09:33',
      label: '09:33 AM',
      high: 13.67,
      low: 13.62,
      open: 13.63,
      close: 13.62,
      average: 13.637,
      volume: 610,
      notional: 8318.7,
      numberOfTrades: 7
    }
]

function formatData(data) {

    let time = [];
    data.forEach(element => time.push(element.minute));
  
    let values = [];
    data.forEach(element => values.push(element.open));

    let json = time.map((x, i) => ({x, y: values[i]}));
  
    return json;
  }