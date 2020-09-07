const path = require('path');
const db = require('../database/models/');
const User = db.User;

module.exports = (req,res,next) =>{
    //Los administradores == 9
    if(req.session.user == undefined){
        return res.render(path.resolve(__dirname, '..','views','web','accesoDenegado'));
    }
    if(req.session.user.category != 9){
        return res.render(path.resolve(__dirname, '..','views','web','accesoDenegado'));
    }
    next();
}
