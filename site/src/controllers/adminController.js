const path = require('path');
//const fs = require('fs');

//let bicicletas = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));

module.exports = {
    admin : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','administrador','formularioCarga.html'));
    },
    custom: function (req, res){
        res.sendFile(path.resolve(__dirname, '..','views','administrador','custom.html'));
    },
    final: function (req, res){
        res.sendFile(path.resolve(__dirname, '..','views','administrador','final.html'));
    }
}