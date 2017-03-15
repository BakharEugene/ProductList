var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Product= Schema({
    _id: { type: String, unique: true, required: true },
    name: {type:String},
    description:{type:String},
    price:{type:Number}
});

module.exports = mongoose.model('product', Product);