'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '35.184.149.253',
    user     : 'root',
    password : '',
    database : 'csdepotdb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;