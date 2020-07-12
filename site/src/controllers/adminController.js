const path = require('path');
const fs = require('fs');

let bicicletas = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));

module.exports = {
    admin : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','administrador','formularioCarga.html'));
        res.render(path.resolve(__dirname, '..','views','administrador','formularioCarga'));
    },
    custom: function (req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','administrador','custom.html'));
        res.render(path.resolve(__dirname, '..','views','administrador','custom'));
    },
    final: function (req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','administrador','final.html'));
        res.render(path.resolve(__dirname, '..','views','administrador','final'));
    }
}