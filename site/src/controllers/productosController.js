const path = require('path');

module.exports = {
  index : function(req, res){
      res.sendFile(path.resolve(__dirname, '..','views','productos','productos.html'));
        
    },

    detalle : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','productos','detalle.html'));
        
    },   
    custom : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','productos','custom.html'));
        
    }   
}