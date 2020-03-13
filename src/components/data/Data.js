const stocks = {
    "symbol": "SNAP",
    "stock_exchange_short": "NYSE",
    "timezone_name": "America/New_York",
    "intraday": {
        "2019-12-20 15:59:00": {
            "open": "15.55",
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
}

let dates = [];
Object.entries(stocks.intraday).forEach(element => dates.push(element[0]));

let time = [];
dates.forEach(element => time.push(element.split(' ')[1]));

let opens = [];
Object.values(stocks.intraday).forEach(element => opens.push(parseFloat(element.open)));

let closes = [];
Object.values(stocks.intraday).forEach(element => closes.push(parseFloat(element.close)));



export const openData = time.map((x, i) => ({x, y: opens[i]}));
export const closeData = time.map((x, i) => ({x, y: closes[i]}));