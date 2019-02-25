'user strict';
//require('custom-env').env();
const mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    user: 'userapp',
    password: 'Dooste,2004',
    database: 'csdepotdb',
    socketPath : '/cloudsql/protean-impact-232500:us-central1:mydb'
    
});



connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;