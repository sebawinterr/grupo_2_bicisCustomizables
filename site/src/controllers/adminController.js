const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Article = db.Article;
const Style = db.Style;
//const Address = db.Address;
//const Neighbourhood = db.Neighbourhood;
//const User = db.User;

const Op = db.Sequelize.Op;

module.exports = {
    admin : function(req, res){
        const bicicletas = Article.findAll();
        const estilos = Style.findAll();
        Promise.all([bicicletas,estilos]) 
        .then(([bicicletas,estilos]) =>{
            res.render(path.resolve(__dirname, '..','views','administrador','listadoProductos'),{bicicletas,estilos});
        })
    },
    create: function (req, res){
        res.render(path.resolve(__dirname, '..','views','administrador','create'));
    },
    save: (req,res)=>{
        let nuevaBici={
            //id: ultimaBici.id +1,
            brand: req.body.marca,
            model: req.body.modelo,
            styleId: req.body.estilo,
            description: req.body.descripcion,
            techDescription: req.body.descripcionTecnica,
            colors: req.body.colores,
            size: req.body.talle,
            shot: req.body.rodado,
            price: req.body.precio,
            discount: req.body.descuento,
            financing: req.body.cuotas,
            financingSize: req.body.cantCuotas,
            image: req.file.filename
        };
        Article.create(nuevaBici, {
            include: ['style']
        })
        .then(bici =>{
            res.redirect('/administrador');
        })
        .catch(error => res.send(error))

    },
    show: (req,res)=>{
        Article.findByPk(req.params.id, {
            include: ['style']
        })  
        .then(miBici =>{
            res.render(path.resolve(__dirname, '..','views','administrador','detalleAdmin'), {miBici:miBici})
        })  
        .catch(error => res.send(error))
    
    },
    edit: (req,res) =>{
        let bicicletas = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));

        const biciId = req.params.id;
        let biciEditar = bicicletas.find(bici => bici.id == biciId);
        res.render(path.resolve(__dirname, '..','views','administrador','edit'), {biciEditar});
    },
    update: (req,res) =>{
        let bicicletas = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));

        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen; //if ternario en la variable req.body.imagen me esta llegando algo en el req.file, entonces guardame lo q llega en el req.body.oldImagen
        
        let bicisUpdate = bicicletas.map(bici => {
            if(bici.id == req.body.id){
                return bici = req.body;
            }
            return bici;
        });
        
        let bicicletasActualizar = JSON.stringify(bicisUpdate,null,2);
        //Guardar o reemplazar nuestro archivo JSON
        fs.writeFileSync(path.resolve(__dirname,'..','data','bicicletas.json'), bicicletasActualizar);
        res.redirect('/administrador');
    },
    destroy: (req,res) =>{
        let bicicletas = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));
        const biciDeleteId = req.params.id; 
        const bicicletasFinal = bicicletas.filter(bici => bici.id != biciDeleteId);
        let bicicletasGuardar = JSON.stringify(bicicletasFinal,null,2);
        //Guardar o reemplazar nuestro archivo JSON
        fs.writeFileSync(path.resolve(__dirname,'..','data','bicicletas.json'), bicicletasGuardar);
        res.redirect('/administrador');
    },
    listadoCustom: function (req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','administrador','custom.html'));
        let biciscustom = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','biciscustom.json')));
        res.render(path.resolve(__dirname, '..','views','administrador','custom','listadoCustom'),{biciscustom});
    },
    customCreate: function (req, res){
        let biciscustom = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','biciscustom.json')));
        res.render(path.resolve(__dirname, '..','views','administrador','custom','customCreate'),{biciscustom});
    },
    customSave: (req,res)=>{
        //leemos el json de nuestras bicicletas custom
        let biciscustom = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','biciscustom.json')));
        let ultimaBiciCustom = biciscustom.pop();
        biciscustom.push(ultimaBiciCustom);
 
        let nuevaBiciCustom={
            id: ultimaBiciCustom.id +1,
            estilo: req.body.estilo,
            nombre: req.body.nombre,
            colores: req.body.colores,
            talle: req.body.talle,
            rodado: req.body.rodado,
            descripcionTecnica: req.body.descripcionTecnica,
            precio: req.body.precio,
            descuento: req.body.descuento,
            cuotas: req.body.cuotas,
            cantCuotas: req.body.cantCuotas,
            imagen : req.file.filename
        };
            //Aquí se agrega al array el nuevo Producto
            biciscustom.push(nuevaBiciCustom);
            //Convertir mi array en un string
            let nuevaBiciCustomGuardar = JSON.stringify(biciscustom,null,2)
            //Guardar o reemplazar nuestro archivo JSON
            fs.writeFileSync(path.resolve(__dirname,'..','data','biciscustom.json'), nuevaBiciCustomGuardar);
            res.redirect('/administrador/custom');
    },
    customShow: (req,res)=>{
        let biciscustom = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','biciscustom.json')));
        
        let miBiciCustom;
        biciscustom.forEach(bicic => {
           if(bicic.id == req.params.id){
               miBiciCustom = bicic;         
            }
        });
        res.render(path.resolve(__dirname, '..','views','administrador','custom','detalleCustom'), {miBiciCustom:miBiciCustom})
    
    },
    customEdit: (req,res) =>{
        let biciscustom = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','biciscustom.json')));

        const biciCustomId = req.params.id;
        let biciCustomEditar = biciscustom.find(bicic => bicic.id == biciCustomId);
        res.render(path.resolve(__dirname, '..','views','administrador','custom','customEdit'), {biciCustomEditar});
    },
    customUpdate: (req,res) =>{
        let biciscustom = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','biciscustom.json')));

        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen; //if ternario en la variable req.body.imagen me esta llegando algo en el req.file, entonces guardame lo q llega en el req.body.oldImagen
        
        let biciCustomUpdate = biciscustom.map(bicic => {
            if(bicic.id == req.body.id){
                return bicic = req.body;
            }
            return bicic;
        });
        
        let bicisCustomActualizar = JSON.stringify(biciCustomUpdate,null,2);
        //Guardar o reemplazar nuestro archivo JSON
        fs.writeFileSync(path.resolve(__dirname,'..','data','biciscustom.json'), bicisCustomActualizar);
        res.redirect('/administrador/custom');
    },
    customDestroy: (req,res) =>{
        let biciscustom = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','biciscustom.json')));
        const biciCustomDeleteId = req.params.id; 
        const bicisCustomFinal = biciscustom.filter(bicic => bicic.id != biciCustomDeleteId);
        let bicisCustomGuardar = JSON.stringify(bicisCustomFinal,null,2);
        //Guardar o reemplazar nuestro archivo JSON
        fs.writeFileSync(path.resolve(__dirname,'..','data','biciscustom.json'), bicisCustomGuardar);
        res.redirect('/administrador/custom');
    },

    
    
}