const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Article = db.Article;

module.exports = {
    index: function(req,res){
        Article.findAll()
        .then(bicicletas =>{
          res.render(path.resolve(__dirname, '..','views','productos','productos'), {bicicletas})
        })
        .catch(error => res.send(error))
    },
    detalle: (req,res)=>{
        Article.findByPk(req.params.id)
        .then(miBiciDetalle =>{
          res.render(path.resolve(__dirname, '..','views','productos','detalle'), {miBiciDetalle})
        })
        .catch(error => res.send(error))
    },
    custom : function(req, res){
        res.render(path.resolve(__dirname, '..','views','productos','customizacion'));
        
    }   
}