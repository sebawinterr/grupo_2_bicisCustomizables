const path = require('path');
const db = require('../database/models/');
const User = db.User;

module.exports = (req,res,next) =>{
    
    let perfil = req.session.usuarioLogueado //Los administradores == 9
    //console.log(perfil);
    /*if(perfil != 9){  
        return res.render(path.resolve(__dirname, '..','views','web','accesoDenegado'));
    }*/
    next();
}
