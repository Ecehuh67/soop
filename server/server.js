const cors = require('cors');
const express = require('express');

const app = express();
const server = require('http').Server(app);

// Avoid problems with Security Policy
app.use(cors());
app.use(express.json());

const dataBase = new Map();

app.get('/1', (req, res) => {
  res.json(dataBase);
});

server.listen(3001, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('Server has launched');
  }
});
