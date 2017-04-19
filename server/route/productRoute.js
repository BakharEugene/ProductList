var express = require('express');
var controller = require('../middleware/productMiddleware');
var router = express.Router();

router.get('/', controller.getProducts);
router.get('/:id', controller.getProductById);
router.put('/', controller.updateProduct);
router.post('/', controller.addProduct);
router.delete('/:id', controller.removeProduct);

module.exports = router;