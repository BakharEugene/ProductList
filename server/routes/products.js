var express = require('express');
var controller = require('../controllers/products');
var router = express.Router();

router.get('/products', controller.getProducts);
router.get('/products/:id', controller.getProductById);

router.put('/products/:id', controller.updateProduct);

router.post('/products', controller.addProduct);

router.delete('/products/:id', controller.removeProduct);


module.exports = router;