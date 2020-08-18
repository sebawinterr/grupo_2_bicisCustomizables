const path = require('path');
const db = require('../database/models/');
const User = db.User;

module.exports = (req,res,next) =>{
    //Los administradores == 9
    let perfil = req.session.user.category;
    if(perfil != 9){  
        return res.render(path.resolve(__dirname, '..','views','web','accesoDenegado'));
    }
    next();
}
