var express = require("express");
var bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectID;


var app = express();
var jsonParser = bodyParser.json();
var url = "mongodb://localhost:27017/productlistdb";
console.log("asdasdas");

app.get("/products", function(req, res){
    console.log("asd");

    mongoClient.connect(url, function(err, db){
        db.collection("products").find({}).toArray(function(err, products){
            res.send(products)
            db.close();
            console.log("1");

        });
    });
});



app.get("/products/:id", function(req, res){

    var id = new objectId(req.params.id);

    mongoClient.connect(url, function(err, db){
        db.collection("products").findOne({_id: id}, function(err, user){

            if(err) return res.status(400).send();
            console.log("1");

            res.send(user);
            db.close();
        });
    });
});

app.post("/products", jsonParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    var productName = req.body.name;
    var productDescriptionAge = req.body.description;
    var user = {name: productName, description: productDescriptionAge};

    mongoClient.connect(url, function(err, db){
        db.collection("products").insertOne(user, function(err, result){

            if(err) return res.status(400).send();
            console.log("1");

            res.send(product);
            db.close();
        });
    });
});

app.delete("/products/:id", function(req, res){

    var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, db){
        db.collection("products").findOneAndDelete({_id: id}, function(err, result){

            if(err) return res.status(400).send();
            console.log("1");

            var product = result.value;
            res.send(product);
            db.close();
        });
    });
});

app.put("/products", jsonParser, function(req, res){

    if(!req.body) return res.sendStatus(400);
    var id = new objectId(req.body.id);
    var productName = req.body.name;
    var productDescription = req.body.description;

    mongoClient.connect(url, function(err, db){
        db.collection("products").findOneAndUpdate({_id: id}, { $set: {name:productName, description: productDescription}},
            {returnOriginal: false },function(err, result){

                if(err) return res.status(400).send();
                console.log("1");
                var product = result.value;
                res.send(product);
                db.close();
            });
    });
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});