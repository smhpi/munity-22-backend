// Passing json to routes
"use strict";

var Product = require("../model/appModel.js");

exports.list_all_products = function(req, res) {
  Product.getAllProduct(function(err, prod) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", prod);
    res.send(prod);
  });
};

exports.create_a_product = function(req, res) {
  var new_product = new Product(req.body);

  //handles null error
  if (!new_product.title || !new_product.body) {
    res.status(400).send({ error: true, message: "Please provide title/body" });
  } else {
    Product.createProduct(new_product, function(err, prod) {
      if (err) res.send(err);
      res.json(prod);
    });
  }
};

exports.read_a_product = function(req, res) {
  Product.getProductById(req.params.productId, function(err, prod) {
    if (err) res.send(err);
    res.json(prod);
  });
};

exports.update_a_product = function(req, res) {
  Product.updateById(req.params.productId, new Product(req.body), function(
    err,
    prod
  ) {
    if (err) res.send(err);
    res.json(prod);
  });
};

exports.delete_a_product = function(req, res) {
  Product.remove(req.params.productId, function(err, prod) {
    if (err) res.send(err);
    res.json({ message: "Product successfully deleted" });
  });
};
