const express = require('express');
const tickerRouter = express.Router();

const getData = require('./fetch.js');
const formatData = require('./data.js');

const bodyParser = require('body-parser');


tickerRouter.use(bodyParser.json());
tickerRouter.use(bodyParser.urlencoded({ extended: true }));



tickerRouter.post('/api', function (req, res, next) {

    console.log("POST");
    console.log(req.body.ticker);

    if (req.body.ticker) {
        console.log(`Ticker: ${req.body.ticker}`);

        let json = getData(req.body.ticker);
        console.log(`json: ${json}`);

        let result = formatData(json);
        console.log(`data: ${result}`);

        res.status(200).send(result);
        return next();
    } else {
        res.status(500).send();
    }
});

module.exports = tickerRouter;