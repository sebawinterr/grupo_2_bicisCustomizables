const path = require('path');

module.exports = (req,res,next) =>{
    let perfil = req.session.usuarioGuardado.categoria;  //Los administradores == 9
    if(perfil != 9){  
        return res.render(path.resolve(__dirname, '..','views','web','accesoDenegado'));
    }
    next();
}
