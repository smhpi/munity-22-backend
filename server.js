const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('custom-env').env();

// connection configurations
const mc = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE
});


// connect to database
mc.connect();
const app = express();
const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`app listening at http://${host}:${port}`);
});
app.use('/', express.static('front'))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route