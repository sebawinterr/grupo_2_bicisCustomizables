const path = require('path');

module.exports = {
    index : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','web','index.html'));
        
    },
    contacto : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','web','contacto.html'));
    },
    quienesSomos : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','web','quienesSomos.html')); 
    }
}