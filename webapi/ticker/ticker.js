const express = require('express');
const tickerRouter = express.Router();

const callAPI = require('./fetch.js');

const bodyParser = require('body-parser');


tickerRouter.use(bodyParser.json());
tickerRouter.use(bodyParser.urlencoded({ extended: true }));

tickerRouter.post('/api', function (req, res, next) {

    console.log("POST");
    console.log(req.body.ticker);

    if (req.body.ticker) {
        (async() => {
            let json = await callAPI(req.body.ticker);
            await console.log(json)
            res.status(200).send(json);
            return next();
        })();
        
    } else {
        res.status(404).send();
    }
});

module.exports = tickerRouter;