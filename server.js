const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
port = process.env.PORT;
// require('custom-env').env();
const mysql = require("mysql");

// connection configurations
const mc = mysql.createConnection({
  user: "userapp",
  password: "Dooste,2004",
  database: "csdepotdb",
  socketPath: "/cloudsql/protean-impact-232500:us-central1:mydb"
});

// connect to database

mc.connect();

app.listen(port);
console.log("API server started on Port: " + port);
app.use("/", express.static("front"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./app/routes/approutes"); //importing route
routes(app); //register the route
