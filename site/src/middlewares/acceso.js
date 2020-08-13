const fs = require('fs');
const path = require('path');

let archivoUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));

module.exports = (req,res,next) =>{
    res.locals.usuarioGuardado = false;

    if(req.session.usuarioGuardado){
        res.locals.usuarioGuardado = req.session.usuarioGuardado;
        return next();
    }else if(req.cookies.galletita){
        let usuarioLogueado = archivoUsers.find(user =>
            user.email == req.cookies.galletita);
            console.log(res.cookie);
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