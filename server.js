const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT;
 // require('custom-env').env();
const mysql = require('mysql');

// connection configurations
const mc = mysql.createConnection({
  user: 'userapp',
  password: 'Dooste,2004',
  database: 'csdepotdb',
  socketPath : '/cloudsql/protean-impact-232500:us-central1:mydb'
});
 
// connect to database

mc.connect();

app.listen(port);
console.log('API server started on Port: ' + port);
app.use('/',express.static('front'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/product/bestbuy', function(req, res) {

  var jsondata = req.body;
  console.log(jsondata);
  var values = [];
  
  for(var i=0; i< jsondata.length; i++){
    values.push([jsondata[i].product_title,jsondata[i].shop_sku,jsondata[i].quantity ]);
  }
  //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
  mc.query('INSERT INTO bestbuy (title, sku, quantity) VALUES ?', [values], function(err,result) {
    if(err) {
       res.send('Error');
    }
   else {
       res.send('Success');
    }
  });
  });
  
var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route