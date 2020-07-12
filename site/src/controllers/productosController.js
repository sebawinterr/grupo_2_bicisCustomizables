const path = require('path');
const fs = require('fs');

let bicicletas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));

module.exports = {
  index : function(req, res){
      //res.sendFile(path.resolve(__dirname, '..','views','productos','productos.html'));
      res.render(path.resolve(__dirname, '..','views','productos','productos'));
        
    },

    detalle : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','productos','detalle.html'));
        res.render(path.resolve(__dirname, '..','views','productos','detalle'));
        
    },   
    custom : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','productos','customizacion.html'));
        res.render(path.resolve(__dirname, '..','views','productos','customizacion'));
        
    }   
}