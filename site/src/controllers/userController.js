const path = require('path');
const fs = require('fs');
const { check, validationResult, body } = require('express-validator');

var users =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')));

module.exports = {
    index : function(req, res){
        //res.sendFile(path.resolve(__dirname, '..','views','usuarios','register.html'));
        res.render(path.resolve(__dirname, '..','views','usuarios','register'));
    },
    login : function(req, res){
        res.render(path.resolve(__dirname, '..','views','usuarios','login'));
    },
    processLogIn: function(req,res){
        let errors = validationResult(req);

        if (errors.isEmpty()){
            let usersJSON =  fs.readFileSync(path.resolve(__dirname,'..','data','users.json'));
            let users;
            usersJSON == "" ? users = [] : users = JSON.parse(usersJSON);

            for (let i = 0; i < users.length; i++) {
                if(users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i].password)){
                        let usuarioALoguear = users[i];
                        break;                    
                    }                
                }
            }

            if(usuarioALoguear == undefined){
                return res.render('/login', {errors: [{msg: 'Credenciales invalidas'}]});
            }
            req.session.usuarioALogueado = usuarioALoguear;
            res.render('success');

        }else{            
            return res.render('login', {errors: errors.errors});
        }
        let usuarioALoguear;        
    }

    
}