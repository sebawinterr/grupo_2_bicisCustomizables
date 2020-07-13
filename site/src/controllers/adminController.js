const path = require('path');
const fs = require('fs');



module.exports = {
    admin : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','administrador','formularioCarga.html'));
        let bicicletas = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));
        res.render(path.resolve(__dirname, '..','views','administrador','listadoProductos'),{bicicletas});
    },
    create: function (req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','administrador','final.html'));
        let bicicletas = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));
        res.render(path.resolve(__dirname, '..','views','administrador','create'));
    },
    save: (req,res)=>{
        //leemos el json de nuestras bicicletas
        let bicicletas = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));
        let ultimaBici = bicicletas.pop();
        bicicletas.push(ultimaBici);
 
        let nuevaBici={
            id: ultimaBici.id +1,
            marca: req.body.marca,
            modelo: req.body.modelo,
            estilo: req.body.estilo,
            descripcion: req.body.descripcion,
            descripcionTecnica: req.body.descripcionTecnica,
            colores: req.body.colores,
            talle: req.body.talle,
            rodado: req.body.rodado,
            precio: req.body.precio,
            descuento: req.body.descuento,
            cuotas: req.body.cuotas,
            cantCuotas: req.body.cantCuotas,
            imagen : req.file.filename
        };
            //Aquí se agrega al array el nuevo Producto
            bicicletas.push(nuevaBici);
            //Convertir mi array en un string
            let nuevaBiciGuardar = JSON.stringify(bicicletas,null,2)
            //Guardar o reemplazar nuestro archivo JSON
            fs.writeFileSync(path.resolve(__dirname,'..','data','bicicletas.json'), nuevaBiciGuardar);
            res.redirect('/administrador');
    },
    custom: function (req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','administrador','custom.html'));
        res.render(path.resolve(__dirname, '..','views','administrador','custom'));
    }
    
}