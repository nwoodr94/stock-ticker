// Express
const express = require('express');
const app = express()
const tickerRouter = require('./ticker/ticker.js')

// Configuration
const port = 8000;
const host = 'localhost';

const cors = require('cors');
const corsOptions = { origin: '*' };
app.use(cors(corsOptions));

app.use('/', tickerRouter)

// Server
app.listen(port, host, () => console.log(`App is listening on ${host}:${port}`));