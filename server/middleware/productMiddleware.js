var express = require("express");
var bodyParser = require("body-parser");
var objectId = require("mongodb").ObjectID;
var Product = require('../model/product');

var jsonParser = bodyParser.json();
var url = "mongodb://localhost:27017/productlistdb";

function getProducts(req, res) {
    Product.find(function (err, products) {
        if (err)return console.error(err);
        res.send(products);
    })

};

function getProductById(req, res) {
    var id = new objectId(req.params.id)
    Product.findOne({_id: id}, function (err, product) {
        if (err) return console.error(err);
        res.send(product);

    })
};

function updateProduct(req, res) {
    var id = new objectId(req.params.id);
    Product.findOne({_id: id}, function (err, product) {
        if (err) return console.error(err);
        var body = {
            description: req.body.description,
            name: req.body.name,
            price: req.body.price
        };
        console.log(body);
        product.update(body, function (err, result) {

            if (err) throw err;
            console.log(result);
            console.log("1");
            res.send(product);
        })
    });


}

function addProduct(req, res) {
    console.log("addPRoduct");
    var newProduct = Product({
        description: req.body.description,
        name: req.body.name,
        price: req.body.price
    })

    console.log(newProduct);

    newProduct.save(function (err) {
        if (err) throw err;
        console.log("srabotalo");
        res.send(newProduct);

    })
}

function removeProduct(req, res) {
    var id = new objectId(req.params.id);
    Product.findOne({_id: id}, function (err, product) {
        if (err) return console.error(err);
        product.remove(function (err) {
            if (err) throw err;
            console.log("successfully deleted!");
        })
    });
}


module.exports = {
    getProducts,
    getProductById,
    updateProduct,
    addProduct,
    removeProduct
};