const express = require('express');
const router = express.Router();
const path = require('path');

const adminController = require(path.resolve(__dirname,'..','controllers','adminController'));

router.get('/administrador', adminController.admin);
router.get('/administrador/create', adminController.create);
//router.get('/administrador/custom', adminController.custom);


module.exports = router;