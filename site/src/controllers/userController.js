const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const multer = require('multer');
const { check, validationResult, body } = require('express-validator');


//const users =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));

module.exports = {
    index : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','usuarios','register.html'));
        res.render(path.resolve(__dirname, '..','views','usuarios','register'));
    },

    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
          let user = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            dni: req.body.dni,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            pisoDpto: req.body.pisoDpto ? req.body.pisoDpto : '',
            cp: req.body.cp,
            provincia: req.body.provincia,
            localidad: req.body.localidad,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            imagen:  req.file ? req.file.filename : '',
            categoria: 0 // req.body.email == '%@digitalhouse.com' ? '' : Usuario 1 = Basico, 2 = Analista, 9 = Administrador
          }
          let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {
            encoding: 'utf-8'
          });
          let users;
          if (archivoUsers == "") {
            users = [];
          } else {
            users = JSON.parse(archivoUsers);
          };
    
          users.push(user);
          usersJSON = JSON.stringify(users, null, 2);
          fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), usersJSON);
          res.redirect('/login');
        } else {  
          return res.render(path.resolve(__dirname, '../views/usuarios/register'), {
            errors: errors.mapped(),  old: req.body
          });
        }
      },

    login : function(req, res){
        res.render(path.resolve(__dirname, '..','views','usuarios','login'));
    },
    processLogIn: function(req,res){
        let errors = validationResult(req);

        if (errors.isEmpty()){
            let usersJSON =  fs.readFileSync(path.resolve(__dirname,'..','data','users.json'));
            let users;
            usersJSON == "" ? users = [] : users = JSON.parse(usersJSON);

            for (let i = 0; i < users.length; i++) {
                if(users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i].password)){
                        let usuarioALoguear = users[i];
                        break;                    
                    }                
                }
            }

            if(usuarioALoguear == undefined){
                return res.render('/login', {errors: [{msg: 'Credenciales invalidas'}]});
            }
            req.session.usuarioALogueado = usuarioALoguear;
            res.render('success');

        }else{            
            return res.render('login', {errors: errors.errors});
        }
        let usuarioALoguear;        
    }

    
}