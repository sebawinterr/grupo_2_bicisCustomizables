const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Article = db.Article;
const Style = db.Style;
const Item = db.Item;
const {check,validationResult,body} = require('express-validator');
//let bicicletas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','bicicletas.json')));

module.exports = {
    addCart: (req,res) =>{
        //return res.send(req.body)
        const errores = validationResult(req);
        if(errores.isEmpty()){
            Article.findByPk(req.body.idArticle,{
                include: ['style']
            })
            .then((producto)=>{
                //return res.send(producto)
                let price = Number(producto.price)
                let salePrice = (price - ((price * producto.discount) / 100))  
                //console.log(salePrice + '====================================')
                return Item.create({
                    salePrice: salePrice,
                    subtotal: salePrice,
                    state: 1,
                    idUser: req.session.user.id,
                    idArticle: producto.id,
                    cartId: null
                })
                .then(()=> res.redirect('/productos'))
                .catch(error => console.log(error))
            })

        }else{
            //Hay errores
            Article.findByPk(req.body.idArticle,{
                include: ['style']
            })
            .then((miBiciDetalle)=>{
                return res.render(path.resolve(__dirname, '..','views','productos','detalle'), {miBiciDetalle})
            })
         }
    },
    lista : function(req, res){
        Item.findAll({
            where:{
                idUser : req.session.user.id,
                state: 1
            },
            include:{
                all: true,
                nested: true
            }
        })
        .then((cartArticle)=>{
            //return res.send(cartProducto)
            
            let total = cartArticle.reduce((total, item)=>(total = total + (Number(item.subtotal))),0)
            return res.render(path.resolve(__dirname, '..','views','carrito','lista'), {
                cartArticle, total})
            
        })
        //res.render(path.resolve(__dirname, '..','views','carrito','lista'));
        
    },
    deleteArt: (req,res) =>{
        Item.destroy({
            where: {
                id : req.body.itemId
            }
        })
        .then(()=> res.redirect('/carrito/lista'))
        .catch(error => console.log(error))
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