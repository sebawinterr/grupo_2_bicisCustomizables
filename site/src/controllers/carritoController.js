const path = require('path');
const fs = require('fs');

let bicicletas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));

module.exports = {
    lista : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','carrito','lista.html'));
        res.render(path.resolve(__dirname, '..','views','carrito','lista'));
        
    },
    envio : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','carrito','envio.html'));
        res.render(path.resolve(__dirname, '..','views','carrito','envio'));
        
    },
    pago : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','carrito','pago.html'));
        res.render(path.resolve(__dirname, '..','views','carrito','pago'));
        
    },
    confirmacion : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','carrito','confirmacion.html'));
        res.render(path.resolve(__dirname, '..','views','carrito','confirmacion'));
        
    }
    
}