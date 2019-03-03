"user strict";
//require("custom-env").env();
const mysql = require("mysql");

/*
var connection = mysql.createConnection({
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host : process.env.SQL_HOST
    
});
*/
// google cloud connection
var connection = mysql.createConnection({
  user: "userapp",
  password: "Dooste,2004",
  database: "csdepotdb",
  socketPath: "/cloudsql/protean-impact-232500:us-central1:mydb"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
