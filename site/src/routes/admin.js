const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const controlAcceso = require('../middlewares/controlAcceso');
const validacionCreateAdmin = require('../middlewares/validacionCreateAdmin');
const {check,validationResult,body} = require('express-validator');
const db = require('../database/models/');
const Article = db.Article;

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

router.get('/administrador', controlAcceso, adminController.admin);
router.get('/administrador/search_results', controlAcceso, adminController.search);
router.get('/administrador/create', controlAcceso, adminController.create);


router.post("/administrador/create", upload.single('imagen'), validacionCreateAdmin,adminController.save);

router.get('/administrador/detalleAdmin/:id', controlAcceso, adminController.show);
router.get('/administrador/edit/:id', controlAcceso, adminController.edit);
router.put('/administrador/edit/:id', upload.single('imagen'), adminController.update);
router.get('/administrador/delete/:id', controlAcceso, adminController.destroy);
router.get('/administrador/search_results', controlAcceso, adminController.search);

//rutas de administrador para productos custom
router.get('/administrador/custom', controlAcceso, adminController.listadoCustom);
router.get('/administrador/custom/create', controlAcceso, adminController.customCreate);
router.post("/administrador/custom/create", upload.single('imagen'), adminController.customSave);
router.get('/administrador/custom/detalleCustom/:id', controlAcceso, adminController.customShow);
router.get('/administrador/custom/edit/:id', controlAcceso, adminController.customEdit);
router.put('/administrador/custom/edit/:id', upload.single('imagen'), adminController.customUpdate);
router.get('/administrador/custom/delete/:id', controlAcceso, adminController.customDestroy);



module.exports = router;