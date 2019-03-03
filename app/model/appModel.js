"user strict";
var sql = require("../../db.js");

//Task object constructor
var Product = function(prod) {
  this.title = prod.title;
  this.body = prod.body;
  this.sku = prod.sku;
  this.quantity = prod.quantity;
  this.bbquantity = prod.bbquantity;
  this.id = prod.id;
  this.created_at = new Date();
};

Product.createProduct = function createUser(newProduct, result) {
  sql.query("INSERT INTO shopify set ?", newProduct, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Product.getProductById = function createUser(productId, result) {
  sql.query(
    "Select title, body, id from shopify where id = ? ",
    productId,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Product.getAllProduct = function getAllProduct(result) {
  sql.query(
    "Select shopify.title, shopify.sku, shopify.quantity, bestbuy.quantity as bbquantity from shopify join bestbuy on shopify.sku=bestbuy.sku",
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        // console.log("products : ", res);

        result(null, res);
      }
    }
  );
};

Product.updateById = function(id, prod, result) {
  sql.query(
    "UPDATE products SET title = ? , body = ? WHERE id = ?",
    [prod.title, prod.body, id],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Product.remove = function(id, result) {
  sql.query("DELETE FROM shopify WHERE id = ?", [id], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Product;
