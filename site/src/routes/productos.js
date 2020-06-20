const express = require('express');
const router = express.Router();
const path = require('path');

const productosController = require(path.resolve(__dirname,'..','controllers','productosController'));

router.get('/productos', productosController.index);
router.get('/productos/custom', productosController.custom);

module.exports = router;