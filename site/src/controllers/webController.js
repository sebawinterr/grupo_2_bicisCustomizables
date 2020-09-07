const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Article = db.Article;

module.exports = {
    index: function(req,res){
        Article.findAll()
        .then(bicicletas =>{
          res.render(path.resolve(__dirname, '..','views','web','index'), {bicicletas})
        })
        .catch(error => res.send(error))
    },
    contacto : function(req, res){
        res.render(path.resolve(__dirname, '..','views','web','contacto'));
    },
    quienesSomos : function(req, res){
        res.render(path.resolve(__dirname, '..','views','web','quienesSomos')); 
    }
}