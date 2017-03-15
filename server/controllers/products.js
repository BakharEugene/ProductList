
var express = require("express");
var bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectID;

var app = express();
var jsonParser = bodyParser.json();
var url = "mongodb://localhost:27017/productlistdb";

function getProducts(req, res) {
    mongoClient.connect(url, function(err, db){
        db.collection("products").find({}).toArray(function(err, users){
            res.send(users);
        });
    });
};

function getProductById(req, res) {
    var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, db){
        db.collection("products").findOne({_id: id}, function(err, product){

            if(err) return res.status(400).send();

            res.send(product);
            db.close();
        });
    });
};

function updateProduct(req, res) {
    if(!req.body) return res.sendStatus(400);
    var id = new objectId(req.body.id);
    var productName = req.body.name;
    var productDescription = req.body.description;

    mongoClient.connect(url, function(err, db){
        db.collection("products").findOneAndUpdate({_id: id}, { $set: {name:productName, description: productDescription}},
            {returnOriginal: false },function(err, result){
                if(err) return res.status(400).send();
                var product = result.value;
                res.send(product);
                db.close();
            });
    });
}

function addProduct(req, res) {
    if(!req.body) return res.sendStatus(400);

    var userName = req.body.name;
    var userAge = req.body.age;
    var user = {name: userName, age: userAge};

    mongoClient.connect(url, function(err, db){
        db.collection("users").insertOne(user, function(err, result){

            if(err) return res.status(400).send();

            res.send(user);
            db.close();
        });
    });
}

function removeProduct(req, res) {
    var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, db){
        db.collection("products").findOneAndDelete({_id: id}, function(err, result){

            if(err) return res.status(400).send();

            var product = result.value;
            res.send(product);
            db.close();
        });
    });
}


module.exports = {
    getProducts,
    getProductById,
    updateProduct,
    addProduct,
    removeProduct
};