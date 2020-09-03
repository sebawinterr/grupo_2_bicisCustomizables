const path = require('path');
const db = require('../database/models/');
const User = db.User;
const Address = db.Address;
const {check,validationResult,body} = require('express-validator');

module.exports = (req, res, next) =>{
    User.findAll({where: {id: req.params.id}
    })
    .then((user)=>{
        [
            check('firstName').isLength({min: 1
            }).withMessage('El nombre es obligatorio'),
            body('firstName').custom( (usuarioEditar) =>{
                for (let i = 0; i < usuarioEditar.length; i++) {
                    if (usuarioEditar[i].firstName == '') {
                        return false
                    }
                }
                return true
            }).withMessage('Olvidó colocar su nombre'), 
        ]
        next();
    })
   
}