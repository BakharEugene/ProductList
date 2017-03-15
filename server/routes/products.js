var express = require('express');
var controller = require('../controllers/products');
var router = express.Router();


console.log(typeof (controller.getProducts()));
router.get('/products', controller.getProducts);

router.get('/:id', controller.getProductById());

router.put('/:id', controller.updateProduct());

router.post('/', controller.addProduct());

router.delete('/:id', controller.removeProduct);


module.exports = router;