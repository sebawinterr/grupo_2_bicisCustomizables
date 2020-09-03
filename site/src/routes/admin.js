const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const controlAcceso = require('../middlewares/controlAcceso');
//const validacionCreateAdmin = require('../middlewares/validacionCreateAdmin');
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

Article.findAll()
  .then((article) =>{
    router.post("/administrador/create", upload.single('imagen'), /*validacionCreateAdmin*/[
      check('colores').isLength({
        min: 1
      }).withMessage('Los colores son obligatorios'),
      body('imagen').custom((value, {req}) =>{
        if(req.file != undefined){
          return true
        }
        return false;
      }).withMessage('Debe elegir la imagen del producto en formato .JPG ó .JPEG ó .PNG'),
      check('marca').isLength({
        min: 1
      }).withMessage('La marca es obligatoria'),
      check('modelo').isLength({
        min: 1
      }).withMessage('El modelo es obligatorio'),
      check('precio').isLength({
        min: 1
      }).withMessage('El precio es obligatorio'), 
      check('descripcion').isLength({
        min: 1
      }).withMessage('La descripción del producto es obligatoria'), 
      check('descripcionTecnica').isLength({
        min: 1
      }).withMessage('La descripción técnica del producto es obligatoria'),       
      /*check('talle').isLength({
        min: 0
      }).withMessage('El talle es obligatorio'),
      check('rodado').isLength({
        min: 0
      }).withMessage('El rodado es obligatorio'),      
      check('cuotas').isLength({
        min: 1
      }).withMessage('Por favor, especificar si se puede pagar en cuotas'),
      body('cantCuotas').custom( (value) =>{
        if (body.cuotas == 'si') {
            if (value == undefined || value > 2){
              return false;
            }
        }
        return true
      }).withMessage('La cantidad de cuotas debe ser mayor a 1')*/
      
    ],adminController.save);
  })



router.get('/administrador/detalleAdmin/:id', controlAcceso, adminController.show);
router.get('/administrador/edit/:id', controlAcceso, adminController.edit);

Article.findAll()
  .then((articles) =>{
    router.put('/administrador/edit/:id', upload.single('imagen'), [
      check('colores').isLength({min: 2})
      .withMessage('Debe colocar un color'),
      check('talle').isLength({min: 1})
      .withMessage('Debe colocar un talle'),
      check('rodado').isLength({min: 2})
      .withMessage('Debe colocar un rodado'),
      check('marca').isLength({min: 2})
      .withMessage('Debe colocar un marca'),
      check('modelo').isLength({min: 2})
      .withMessage('Debe colocar un modelo')
    ], adminController.update);
  })





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