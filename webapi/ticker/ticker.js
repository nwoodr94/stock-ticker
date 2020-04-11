// Express
const express = require('express');
const tickerRouter = express.Router();
const bodyParser = require('body-parser');

// API
const callAPI = require('./fetch.js');

// Middlware
tickerRouter.use(bodyParser.json());
tickerRouter.use(bodyParser.urlencoded({ extended: true }));

// HTTP Endpoint
tickerRouter.post('/api', function (req, res, next) {

    // The request body must contain a ticker to call the API
    if (req.body.ticker) {
        (async() => {
            let json = await callAPI(req.body.ticker);
            await res.status(200).send(json);
            return next();
        })();
    } else {
        res.status(500).send();
    }
});

module.exports = tickerRouter;