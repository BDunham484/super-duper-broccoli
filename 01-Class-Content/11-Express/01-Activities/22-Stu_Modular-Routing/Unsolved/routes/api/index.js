// TODO: Import express
const express = require('express');
// TODO: Import modules for tips/feedback
const feedbackRouter = require('./feedback');
const tipsRouter = require('./tips');
// TODO: Create app variable to store the value of express()
const app = express();

// TODO: Use our routes
app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);

// TODO: Export app
module.exports = app;
