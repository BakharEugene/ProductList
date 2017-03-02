function test(){

var connect=require("./db/connectDB")
    connect.getAll();

}
exports.test=test;