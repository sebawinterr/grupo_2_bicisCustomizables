const express = require('express');
const router = express.Router();
const path = require('path');

const productosController = require(path.resolve(__dirname,'..','controllers','productosController'));

router.get('/:detalleID', productosController.index);

module.exports = router;