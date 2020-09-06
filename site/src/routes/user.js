const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs');
const multer = require('multer');
const {check,validationResult,body} = require('express-validator');
const db = require('../database/models/');
const User = db.User;
const controlAcceso = require('../middlewares/controlAcceso');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..','..','public','images','usuarios'));
    },
    filename: function (req, file, cb) {
      cb(null, 'foto-'+Date.now() + path.extname(file.originalname));
    }
  })
   
const upload = multer({ storage })

//! Requerimos el controlador
const userController = require(path.resolve(__dirname,'..','controllers','userController'));

//! Llamamos al archivo json
let archivoUsers =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));

//! url de Rutas 
router.get('/register', userController.index);

User.findAll()
    .then((usuario) => {
    router.post('/register', upload.single('imagen'), [
        // VALIDACIONES
        // NOMBRE
        check('nombre').isLength({
            min: 3
        }).withMessage('El nombre es obligatorio'),
        // APELLIDO
        check('apellido').isLength({min: 3
        }).withMessage('El apellido es obligatorio'),
        // DNI
        check('dni').isLength({min: 7, max:14
        }).withMessage('El DNI es obligatorio'),
        body('dni').custom( (value) =>{
            for (let i = 0; i < usuario.length; i++) {
                if (usuario[i].dni == value) {
                    return false
                }
            }
            return true
        }).withMessage('Este dni ya se encuentra registrado'),   
            //DIRECCION
        check('direccion').isLength({min: 3}).withMessage('Debe colocar una dirección válida'),
            //CP
        check('cp').isLength({min: 4
        }).withMessage('Coloque su Código Postal'),
            //PROVINCIA
        check('provincia').isLength({min: 3
        }).withMessage('Debe colocar una provincia'),
            //LOCALIDAD
        check('localidad').isLength({min: 3
        }).withMessage('La localidad es obligatoria'),
            //EMAIL  
        check('email').isEmail().withMessage('Agregar un email válido'),
        // Validacion para saber si existe el email del usuario
        body('email').custom( (value) =>{
            for (let i = 0; i < usuario.length; i++) {
                if (usuario[i].email == value) {
                    return false
                }
            }
            return true
        }).withMessage('Este email ya se encuentra registrado'), 
        // Validacion de contraseña
        check('password').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres'),
        body('imagen').custom((value, {req}) =>{
            if(req.file != undefined){
                return true
            }
            return false;
        }).withMessage('Debe elegir su imagen de perfil en formato .JPG ó .JPEG ó .PNG') 
    ],userController.processRegister);
});


router.get('/login',userController.login);

User.findAll()
    .then((users) => {
        router.post('/login', [
            check('email').isEmail().withMessage('El email no es válido'),
            body('email').custom( (value) =>{
                for (let i = 0; i < users.length; i++) {
                    if (users[i].email == value) {
                        return true
                    }
                }
                return false
            }).withMessage('Este email no se encuentra registrado.'), 
            check('password').isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres'),
            body('password').custom( (value, {req}) =>{
                for (let i = 0; i < users.length; i++) {
                    if (users[i].email == req.body.email) {
                        if(bcrypt.compareSync(value, users[i].password)){
                            return true;
                        } else {
                            return false;
                        }
                    }
                } 
            }).withMessage('Contraseña incorrecta.')
        ],userController.processLogIn);
        

});
router.get('/logout', userController.logout);




//! Rutas Crud Usuarios
router.get('/usuarios/search_results', controlAcceso, userController.search);
router.get('/usuarios', controlAcceso, userController.usuarios);
router.get('/usuarios/edit/:id', controlAcceso, userController.edit);


User.findAll()
    .then((users) => {
        router.put('/usuarios/edit/:id', upload.single('image'), controlAcceso, [
            // VALIDACIONES
           // NOMBRE
        check('firstName').isLength({
            min: 3
        }).withMessage('El nombre es obligatorio'),
        check('lastName').isLength({min: 3
        }).withMessage('El apellido es obligatorio'),
        check('email').isEmail().withMessage('Agregar un email válido'),
        // Validacion para saber si existe el email del usuario
        body('email').custom( (value) =>{
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == value) {
                    return false
                }
            }
            return true
        }).withMessage('Este email ya se encuentra registrado'),
        check('streetName').isLength({min: 1}).withMessage('Debe colocar una dirección válida'),
            //CP
        check('zipCode').isLength({min: 4
        }).withMessage('Coloque su Código Postal'),
            //PROVINCIA
        check('province').isLength({min: 3
        }).withMessage('Debe colocar una provincia'),
            //LOCALIDAD
        check('neighbourhood').isLength({min: 3
        }).withMessage('La localidad es obligatoria'),


        ],userController.updateUsuarios);
   
});



router.get('/usuarios/detalle/:id', controlAcceso, userController.show);
router.get('/usuarios/delete/:id', controlAcceso, userController.destroy);


module.exports = router;