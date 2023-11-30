const express = require('express');
const { MongoClient } = require('mongodb');


const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'alphabetDB';

const data = [
  { letter: 'a' },
  { letter: 'c' },
  { letter: 'e' },
  { letter: 'f' },
  { letter: 'h' },
  { letter: 'i' },
  { letter: 'j' },
  { letter: 'l' },
  { letter: 'b' },
  { letter: 'd' },
  { letter: 'g' },
  { letter: 'k' },
];

client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
    db.collection('letterList').deleteMany({});
    db.collection('letterList').insertMany(data)
      .then(res => console.log('Data inserted'))
      .catch(err => {
        if (err) return console.log(err);
      });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

app.use(express.json());

// GET request to read all the documents in a collection
app.get('/read', (req, res) => {
  db.collection('letterList')
    // find() returns all documents. Equivalent to `Select *` in SQL.
    .find()
    // sort() sorts in ascending or descending order
    .sort({ letter: 1 })
    // skips first returned document
    .skip(1)
    // limits returns to 10
    .limit(10)
    .toArray()
    .then(results => res.send(results))
    .catch(err => {
      if (err) throw err;
    });
});
