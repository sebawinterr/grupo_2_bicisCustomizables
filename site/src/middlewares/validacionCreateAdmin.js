const {check,validationResult,body} = require('express-validator');

module.exports = (req, res, next) => {
    [
        check('modelo').isLength({
          min: 1
        }).withMessage('El modelo es obligatorio'),
        check('marca').isLength({
          min: 1
        }).withMessage('La marca es obligatoria'),
        check('colores').isLength({
          min: 1
        }).withMessage('Los colores son obligatorios'),
        check('talle').isLength({
          min: 0
        }).withMessage('El talle es obligatorio'),
        check('rodado').isLength({
          min: 0
        }).withMessage('El rodado es obligatorio'),
        check('precio').isLength({
          min: 1
        }).withMessage('El precio es obligatorio'),
        check('modelo').isLength({
          min: 1
        }).withMessage('El modelo es obligatorio'),
        check('cuotas').isLength({
          min: 1
        }).withMessage('Por favor, especificar si se puede pagar en cuotas'),
        body('cantCuotas').custom( (value) =>{
          if (body.cuotas == 'si') {
              if (value == undefined || value > 2){
                return false;
              }
          }
          return true
        }).withMessage('La cantidad de cuotas debe ser mayor a 1'),
        body('imagen').custom((value, {req}) =>{
          if(req.file != undefined){
            return true
          }
          return false;
        }).withMessage('Debe elegir la imagen del producto en formato .JPG ó .JPEG ó .PNG')
      ]
      next();
}