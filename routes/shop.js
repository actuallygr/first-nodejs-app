const path = require('path');

const express = require('express');

const router = express.Router();

const productsRouter = require('../controllers/products');

router.get('/', productsRouter.getProducts);

module.exports = router;
