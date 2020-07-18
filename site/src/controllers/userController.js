const path = require('path');
const fs = require('fs');

let bicicletas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));

module.exports = {
    index : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','usuarios','register.html'));
        res.render(path.resolve(__dirname, '..','views','usuarios','register'));
    },
    login : function(req, res){
        res.render(path.resolve(__dirname, '..','views','usuarios','login'));
    }
    
}