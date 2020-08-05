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
        let usuario = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));
        let ultimoUsuario = usuario.pop();
        usuario.push(ultimoUsuario);
        if (errors.isEmpty()) {
          let usuarioARegistrar = {
            id: ultimoUsuario.id + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            dni: req.body.dni,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            pisoDepto: req.body.pisoDepto ? req.body.pisoDepto : '',
            cp: req.body.cp,
            provincia: req.body.provincia,
            localidad: req.body.localidad,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            imagen: req.file ? req.file.filename : '',
            categoria: req.body.email.indexOf('@bykes.com')!= -1 ? 9 : 0     // Usuario 1 = Basico, 2 = Analista, 9 = Administrador
          }

          let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {encoding: 'utf-8'});
          let users;
          if (archivoUsers == "") {
            users = [];
          } else {
            users = JSON.parse(archivoUsers);
          };
    
          users.push(usuarioARegistrar);
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
      if (errors.isEmpty()) {
        let archivoUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));
        let usuarioLogueado = archivoUsers.filter(user => {
          return user.email == req.body.email
        });
        //console.log(usuarioLogueado[0].email);
        /*.find(user => {
          user.email == req.body.email;
        });*/
        //delete usuarioLogueado.password;
        // Creamos cookie llamada "user"

        req.session.usuarioGuardado = usuarioLogueado[0];
        console.log(req.session.usuarioGuardado);
        if (req.body.recuerdame){
          //res.cookie('email', usuarioLogueado.email, {maxAge: 1000*60*60*24*7});
          let mailUsuarioLogueado = usuarioLogueado[0].email;
          res.cookie('galletita', mailUsuarioLogueado, {maxAge: 1000*60*60*24*7});
        }
        res.redirect('/');
      }
       else {
        return res.render(path.resolve(__dirname, '..','views','usuarios','login'), { errors: errors.mapped(), old: req.body});
      }
    },
    logout: (req,res) =>{
      req.session.destroy();
      res.cookie('email',null,{maxAge: -1});
      res.redirect('/productos')
    },
    usuarios : function(req, res){
      let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));
      res.render(path.resolve(__dirname, '..','views','usuarios','listadoUsuarios'),{usuarios});
    },
    show: (req,res)=>{
      let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));
      
      let miUsuario;
      usuarios.forEach(user => {
         if(user.id == req.params.id){
             miUsuario = user;         
          }
      });
      res.render(path.resolve(__dirname, '..','views','usuarios','detalleUsuario'), {miUsuario:miUsuario})
  
    },
    edit: (req,res) =>{
      let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));

      const userId = req.params.id;
      let usuarioEditar = usuarios.find(user => user.id == userId);
      res.render(path.resolve(__dirname, '..','views','usuarios','editUsuarios'), {usuarioEditar});
    },
    update: (req,res) =>{
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));

        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen; //if ternario en la variable req.body.imagen me esta llegando algo en el req.file, entonces guardame lo q llega en el req.body.oldImagen
      
        let userUpdate = usuarios.map(user => {
          if(user.id == req.body.id){
              return user = req.body;
          }
          return user;
        });
      
        let usuariosActualizar = JSON.stringify(userUpdate,null,2);
        //Guardar o reemplazar nuestro archivo JSON
        fs.writeFileSync(path.resolve(__dirname,'..','data','users.json'), usuariosActualizar);
        res.redirect('/usuarios');
    },
    destroy: (req,res) =>{
      let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));
      const userDeleteId = req.params.id; 
      const usuariosFinal = usuarios.filter(user => user.id != userDeleteId);
      let usuariosGuardar = JSON.stringify(usuariosFinal,null,2);
      //Guardar o reemplazar nuestro archivo JSON
      fs.writeFileSync(path.resolve(__dirname,'..','data','users.json'), usuariosGuardar);
      res.redirect('/usuarios');
    },
}