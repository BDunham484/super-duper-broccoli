const express = require('express');

const apiRouter = require('./api/index.js');

const app = express();

app.use('./api', apiRouter);

module.exports = app;