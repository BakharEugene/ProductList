var express = require('express');
var router = express.Router();


/*
get HOME page
*/



console.log("ЖОПА");

router.get('/',function (req,res,next) {

    console.log("СРАКА");

    res.render('../public/views/index.html',{title:'Express'})
});

module.exports=router;

