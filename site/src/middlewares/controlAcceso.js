const path = require('path');

module.exports = (req,res,next) =>{
    //return res.render(path.resolve(__dirname, '..','views','web','mantenimiento'));
    let perfil = req.session.usuarioGuardado.categoria;  //Esto vendria en una variable de sesión luego que el usuario de loguea.  (Administrador == 9)
    if(perfil != 9){  
        return res.render(path.resolve(__dirname, '..','views','web','accesoDenegado'));
    }
    next();
}
