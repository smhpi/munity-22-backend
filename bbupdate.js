//Parse data from JSON POST and insert into MYSQL

var express = require("express");
var app = express();
//var path = require('path');
var bodyParser = require("body-parser");
var mysql = require("mysql");
require("custom-env").env();

// Configure MySQL connection
let connection = mysql.createConnection({
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  host: process.env.SQL_HOST
});

//Establish MySQL connection
connection.connect(function(err) {
  if (err) throw err;
  else {
    console.log("Connected to MySQL");
    // Start the app when connection is ready
    app.listen(8080);
    console.log("Server listening on port 8080");
  }
});

app.use(bodyParser.json());

app.post("/product/bestbuy", function(req, res) {
  var jsondata = req.body.offers;
  console.log(jsondata);
  var values = [];

  for (var i = 0; i < jsondata.length; i++)
    values.push([
      jsondata[i].product_title,
      jsondata[i].shop_sku,
      jsondata[i].quantity
    ]);

  //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
  connection.query(
    "INSERT INTO bestbuy (title, sku, quantity ) VALUES ?",
    [values],
    function(err, result) {
      if (err) {
        res.send("Error");
      } else {
        res.send("Success");
      }
    }
  );
});

app.post("/product/shopify", function(req, res) {
  var jsonshopify = req.body.products;
  console.log(jsonshopify);
  var values = [];

  for (var i = 0; i < jsonshopify.length; i++)
    values.push([
      jsonshopify[i].title,
      jsonshopify[i].variants[0].sku,
      jsonshopify[i].variants[0].inventory_quantity
    ]);

  //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
  connection.query(
    "INSERT INTO shopify (title, sku, quantity ) VALUES ?",
    [values],
    function(err, result) {
      if (err) {
        res.send("Error");
      } else {
        res.send("Success");
      }
    }
  );
});
