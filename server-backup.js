const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 8080;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
});
 
// connect to database

mc.connect();

app.listen(port);

console.log('API server started on: ' + port);
app.use('/',express.static('front'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route