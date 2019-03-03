'user strict';
require('custom-env').env();
const mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host : process.env.SQL_HOST
    
});



connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;