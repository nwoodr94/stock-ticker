// Express
const express = require('express');
const app = express()
const cors = require('cors');
const tickerRouter = require('./ticker/ticker.js')

// Configuration
const port = 8000;
const host = 'http://localhost'
const corsOptions = { origin: 'http://localhost:3000'}


// Middleware
app.use(cors(corsOptions));
app.use(express.json())
app.use('/', tickerRouter)

// Server
app.listen(port, host, () => console.log(`App is listening on ${host}:${port}`));