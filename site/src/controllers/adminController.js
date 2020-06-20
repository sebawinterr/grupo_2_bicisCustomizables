const path = require('path');
const fs = require('fs');

let bicicletas = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));

module.exports = {
    
}