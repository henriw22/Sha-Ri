require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const app = express();
const PORT = process.env.PGPORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());

const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);

db.connect();
console.log(dbParams.port);

app.get('/', (req, res) => {
  res.send("hi shari");
})

app.listen(PORT, () => {
  console.log(`sha-ri server app is listening on port ${PORT}`);
});