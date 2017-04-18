var express = require("express");
var bodyParser = require("body-parser");
var objectId = require("mongodb").ObjectID;
var Product = require('../model/product');

var jsonParser = bodyParser.json();
var url = "mongodb://localhost:27017/productlistdb";

function loadAll(req, res) {
    Product.find(function (err, products) {
        if (err)
            return console.error(err);
        res.send(products);
    })
};

function loadById(req, res) {
    var id = new objectId(req.params.id)
    Product.findOne({_id: id}, function (err, product) {
        if (err) return console.error(err);
        res.send(product);
    })
};

function update(req, res) {
    var id = new objectId(req.params.id);
    Product.findOne({_id: id}, function (err, product) {
        if (err)
            return console.error(err);
        var body = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        };
        product.update(body, function (err, result) {
            if (err)
                console.error(err);
            res.send(product);
        })
    });
}

function create(req, res) {
    var newProduct = Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    newProduct.save(function (err) {
        if (err)
            throw err;
        res.send(newProduct);
    })
}

function remove(req, res) {
    var id = new objectId(req.params.id);
    Product.findOne({_id: id}, function (err, product) {
        if (err)
            return console.error(err);
        product.remove(function (err) {
            if (err)
                console.error(err);
        })
    });
}

module.exports = {
    loadAll,
    loadById,
    update,
    create,
    remove
};