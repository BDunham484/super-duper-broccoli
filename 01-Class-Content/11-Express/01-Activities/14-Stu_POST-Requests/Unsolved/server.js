const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  res.json(`${req.method} request received to get reviews`);

  console.info(`${req.method} request received to get reviews`);
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  res.json(`${req.method} request received to add reviews`);

  console.info(`${req.method} request received to post reviews`);
})

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  res.json(`${req.method} request received to get upvotes.`);

  console.info(`${req.method} request received to get upvotes`);
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  res.json(`${req.method} request received to post upvotes.`);

  console.info(`${req.method} request received to post upvotes.`);
})

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
