const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const multer = require('multer');
const { check, validationResult, body } = require('express-validator');
const db = require('../database/models/');
const User = db.User;
const Address = db.Address;

const Op = db.Sequelize.Op;



//const users =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));

module.exports = {
    index : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','usuarios','register.html'));
        res.render(path.resolve(__dirname, '..','views','usuarios','register'));
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);
       
        if (errors.isEmpty()) {
          let direccionARegistrar = {
            streetName: req.body.direccion,
            additionalNumbers: req.body.pisoDepto ? req.body.pisoDepto : '',
            zipCode: req.body.cp,
            province: req.body.provincia,
            neighbourhood: req.body.localidad
          }
          Address.create(direccionARegistrar)
          .then((storedAddress) => {
            let usuarioARegistrar = {
              firstName: req.body.nombre,
              lastName: req.body.apellido,
              dni: req.body.dni,
              phoneNumber: req.body.telefono,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              image: req.file ? req.file.filename : '',
              category: req.body.email.indexOf('@bykes.com')!= -1 ? 9 : 0,  // UsuarioBasico = 0, Administrador = 9
              idAddress: storedAddress.id
            }
          User.create(usuarioARegistrar).then(storedUser => 
            res.redirect('/login')
          )
          })
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
        let usuarioLogueado = {
          email: req.body.email,
          password: req.body.password,
        }

        User.findAll({
          where: {
            email: req.body.email,
          }
        })
        .then((user) => {
          req.session.user = user[0];
        
          if (req.body.recuerdame){
            let mailUsuarioLogueado = usuarioLogueado.email;
            res.cookie('galletita', mailUsuarioLogueado, {maxAge: 1000*60*60*24*7});
          }
          res.redirect('/');

        })
      }
       else {
        return res.render(path.resolve(__dirname, '..','views','usuarios','login'), { errors: errors.mapped(), old: req.body});
      }
    },

    logout: (req,res) =>{
      req.session.destroy();
      res.cookie('galletita',null,{maxAge: -1});
      res.redirect('/register')
    },
    usuarios: function(req,res){ 
      const usuarios = User.findAll();
      Promise.all([usuarios])
      .then(([usuarios]) =>{
        res.render(path.resolve(__dirname, '..','views','usuarios','listadoUsuarios'),{usuarios});
      })
    },
    show: (req,res)=>{
      User.findByPk(req.params.id)
      .then(miUsuario =>{
        res.render(path.resolve(__dirname, '..','views','usuarios','detalleUsuario'), {miUsuario:miUsuario})
      })
      .catch(error => res.send(error))
    },
    edit: (req,res) => { 
      User.findByPk(req.params.id, {
        include: ['addresses']
      })
      .then(usuarioEditar => {
          res.render(path.resolve(__dirname, '..','views','usuarios','editUsuarios'), {usuarioEditar});
      })
    },
    updateUsuarios: (req,res) =>{
      const _body = req.body;
      _body.firstName = req.body.nombre,
      _body.lastName = req.body.apellido,
      _body.dni = req.body.dni,
      _body.phoneNumber = req.body.telefono,
      _body.streetName = req.body.direccion,
      _body.additionalNumbers = req.body.additionalNumbers,
      _body.zipCode = req.body.cp,
      _body.province = req.body.provincia,
      _body.neighbourhood = req.body.localidad,
      _body.email =  req.body.email,
      _body.category =  req.body.categoria,
      _body.image = req.file ? req.file.filename : req.body.oldImagen

      User.update(_body ,{
          where : {
              id : req.params.id
          }
      })
      .then(user =>{
        Address.update(_body, {
          where : {
            id : user[0].idAddress
          }
        })
          res.redirect('/usuarios')
      })
      .catch(error => res.send(error));     //error de Base de Datos
    },
    destroy: (req,res) => {
      User.destroy({
              where : {
                 id:  req.params.id
              },
              force : true 
      })
      .then(confirm =>{
              res.redirect('/usuarios');
      })
    },
    search: ( req, res) =>{
      User.findAll({
          where:{
              lastName: {[Op.like]: `%${req.query.search}%`}
          }
      })
      .then(resultado => { res.render(path.resolve(__dirname, '..', 'views', 'usuarios', 'listadoUsuarios'),{usuarios: resultado});})
      .catch(error => res.send(error))
    }
}