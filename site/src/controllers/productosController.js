const path = require('path');
const fs = require('fs');

let bicicletas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));

module.exports = {
  index : function(req, res){
      //res.sendFile(path.resolve(__dirname, '..','views','productos','productos.html'));
      res.render(path.resolve(__dirname, '..','views','productos','productos'),{bicicletas});
        
    },
    detalle: (req,res)=>{
        let bicicletas = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));
        
        let miBiciDetalle;
        bicicletas.forEach(bici => {
           if(bici.id == req.params.id){
               miBiciDetalle = bici;         
            }
        });
        res.render(path.resolve(__dirname, '..','views','productos','detalle'), {miBiciDetalle:miBiciDetalle})
    
    },  
    custom : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','productos','customizacion.html'));
        res.render(path.resolve(__dirname, '..','views','productos','customizacion'));
        
    }   
}