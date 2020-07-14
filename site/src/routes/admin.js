const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

//Aquí dispongo lo referido al nombre del arhivo y a donde se va a guardar
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..','..','public','images','bicicletas'));
    },
    filename: function (req, file, cb) {
      cb(null, 'bici-'+Date.now() + path.extname(file.originalname));
    }
  })
   
const upload = multer({ storage })

const adminController = require(path.resolve(__dirname,'..','controllers','adminController'));

router.get('/administrador', adminController.admin);
router.get('/administrador/create', adminController.create);
router.post("/administrador/create", upload.single('imagen'), adminController.save);
router.get('/administrador/detalleAdmin/:id', adminController.show);
router.get('/administrador/edit/:id', adminController.edit);
router.put('/administrador/edit/:id', upload.single('imagen'), adminController.update);
router.get('/administrador/delete/:id', adminController.destroy);

//router.get('/administrador/custom', adminController.custom);


module.exports = router;