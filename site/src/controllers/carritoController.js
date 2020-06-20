const path = require('path');

module.exports = {
    lista : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','carrito','lista.html'));
        
    },
    envio : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','carrito','envio.html'));
        
    },
    pago : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','carrito','pago.html'));
        
    },
    confirmacion : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','carrito','confirmacion.html'));
        
    }
    
}