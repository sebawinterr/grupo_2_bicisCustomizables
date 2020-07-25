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

// Aca hacemos uso del storage para la imagen
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/usuarios'));    //Aquí es donde vamos a guardar la imagen
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
  })
   
const upload= multer({ storage })

router.get('/register', userController.index);
router.get('/login',userController.login);
router.post('/login',[
    check('email').isEmail().withMessage('El email no es válido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres')
    ],userController.processLogIn);
router.get('/check', function (req,res){
    req.session.usuarioLogueado == undefined ? res.send('no logueaste bro') : res.redirect('/productos')
})

module.exports = router;