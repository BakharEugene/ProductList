var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var product = require('./server/routes/products');

var app = express();

var mongoose   = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/productlistdb"); // connect to our database

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Db connected and ready for work")

});


// view engine setup
app.set('/public/views', express.static(__dirname + "/public/views"));
app.set('view engine', 'ejs');



app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/views')));


app.use('/server/routes/product', product);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);

});
var server = app.listen(3000, function() {


    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;