const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs');
const multer = ('multer');
const {check,validationResult,body} = require('express-validator');


// Requerimos el controlador
const userController = require(path.resolve(__dirname,'..','controllers','userController'));
// Llamamos al archivo json
let archivoUsers =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/usuarios'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
  })
   
  const upload= multer({ storage })






// url de Rutas 
router.get('/register', userController.index);
router.post('/register', upload.single('imagen'), [
    // VALIDACIONES
    // NOMBRE
    check('nombre').isLength({
        min: 1
      }).withMessage('El nombre es obligatorio'),
      // APELLIDO
    check('apellido').isLength({min: 1
      }).withMessage('El apellido es obligatorio'),
      // DNI
    check('dni').isLength({min: 7, max:14
    }).withMessage('El DNI es obligatorio'),
    body('dni').custom( (value) =>{
        for (let i = 0; i < archivoUsers.length; i++) {
            if (archivoUsers[i].dni == value) {
                return false
            }
        }
        return true
    }).withMessage('Este dni ya se encuentra registrado'),   
        //DIRECCION
    check('direccion').isEthereumAddress({min: 1}).withMessage('Debe colocar una dirección válida'),
        //CP
    check('cp').isLength({min: 4
    }).withMessage('Debe colocar un Codigo Postal'),
        //PROVINCIA
    check('provincia').isLength({min: 1
    }).withMessage('Debe colocar una provincia'),
        //LOCALIDAD
    check('localidad').isLength({min: 1
    }).withMessage('La localidad es obligatoria'),
        //EMAIL  
    check('email').isEmail().withMessage('Agregar un email válido'),
    // Validacion para saber si existe el email del usuario
    body('email').custom( (value) =>{
        for (let i = 0; i < archivoUsers.length; i++) {
            if (archivoUsers[i].email == value) {
                return false
            }
        }
        return true
    }).withMessage('Este email ya se encuentra registrado'),      
    // Validacion de contraseña
    check('password').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres')    
],userController.processRegister);



router.get('/login',userController.login);
router.post('/login',[
    check('email').isEmail().withMessage('El email no es válido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres')
    ],userController.processLogIn);
router.get('/check', function (req,res){
    req.session.usuarioLogueado == undefined ? res.send('no logueaste bro') : res.redirect('/productos')
})

module.exports = router;