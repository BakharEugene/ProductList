var mongoClient = require("mongodb").MongoClient;


var url = "mongodb://localhost:27017/usersdb";
function add(user) {
    mongoClient.connect(url, function(err, db){
        db.collection("users").insertOne(user, function(err, results){
            console.log(results);
            db.close();
        });
    });
}
function getAll() {
    mongoClient.connect(url, function(err, db){
        if(err) return console.log(err);
        db.collection("users").find().toArray(function(err, results){
            console.log(results);
            db.close();
        });
    });
}
function deleteByName(name) {
    mongoClient.connect(url, function(err, db){

        if(err) return console.log(err);

        db.collection("users").deleteMany({name: name}, function(err, result){

            console.log(result);
            db.close();
        });
    });
}
function  updateOne(name,newname) {
    mongoClient.connect(url, function(err, db){

        var col = db.collection("users");
        col.updateOne(
            {name: name},
            { $set: {name: newname}},
            function(err, result){

                console.log(result);
                db.close();
            }
        );
    });
}
exports.add=add;
exports.getAll=getAll;