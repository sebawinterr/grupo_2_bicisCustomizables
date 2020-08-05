const fs = require('fs');
const path = require('path');

let archivoUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));

module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.usuarioGuardado = false;

    if(req.session.usuarioGuardado){
        res.locals.usuarioGuardado = req.session.usuarioGuardado;
        return next();
    }else if(req.cookie.galletita){
        let usuarioLogueado = archivoUsers.filter(user => {
            return user.email == req.cookie.galletita});
        //let user = archivoUsers.filter(user => user.email == req.cookies.email)
        //return res.send(usuario);
        //delete usuario.password;          
        req.session.usuarioGuardado = usuarioLogueado;
        res.locals.usuarioGuardado = usuarioLogueado;
        return next();
    }else{
        return next();
    }
}