window.addEventListener('load', function(){
    let formulario = document.getElementById('create');
    let ulErrores = document.getElementById('errores');

    formulario.addEventListener('submit', function(evento){
        if(!validaciones(evento)){
            return evento.preventDefault();//si las validaciones NO estan OK, se indica q NO se envíe el formulario y se que en este lugar con el preventDefault
        }else{
            return formulario.submit(); //si las validaciones fueron OK, enviar el formulario
        }
    })
    function validaciones(evento){
        //con destructuring de codigo se declaran todas las variables y se igualan al elemento capturado (formulario), las variables usan el name del formulario y se colocan de manera ordenada a como estan en los inputs del form
        let {colores, imagen, talle, rodado, marca, modelo, precio, cuotas, cantCuotas, estilo, descripcion, descripcionTecnica} = formulario.elements;
        let errores = []; //se declara array de errores
        ulErrores.classList.add('alert-danger');
    
        //validar los colores
        if(colores.value == ''){
            errores.push('Indique los colores');
            colores.classList.add('is-invalid');
            colores.classList.remove('is-valid');
        }else{
            colores.classList.add('is-valid');
            colores.classList.remove('is-invalid');
        }

        //! validar imagen
        /*if(imagen.value == ''){
            errores.push('Ingrese una imagen valida para el producto');
            imagen.classList.add('is-invalid');
            imagen.classList.remove('is-valid');
        }else{
            imagen.classList.add('is-valid');
            imagen.classList.remove('is-invalid');
        }*/

        //validar talle
        /*if(talle.value == ''){
            errores.push('Indique el talle');
            talle.classList.add('is-invalid');
            talle.classList.remove('is-valid');
        }else{
            talle.classList.add('is-valid');
            talle.classList.remove('is-invalid');
        }*/

        //validar rodado
        /*if(rodado.value == ''){
            errores.push('Indique el rodado');
            rodado.classList.add('is-invalid');
            rodado.classList.remove('is-valid');
        }else{
            rodado.classList.add('is-valid');
            rodado.classList.remove('is-invalid');
        }*/

        //validar marca
        if(marca.value == ''){
            errores.push('Indique la marca');
            marca.classList.add('is-invalid');
            marca.classList.remove('is-valid');
        }else{
            marca.classList.add('is-valid');
            marca.classList.remove('is-invalid');
        }

        //validar modelo
        if(modelo.value == ''){
            errores.push('Indique el modelo');
            modelo.classList.add('is-invalid');
            modelo.classList.remove('is-valid');
        }else{
            modelo.classList.add('is-valid');
            modelo.classList.remove('is-invalid');
        }

        //validar precio
        if(precio.value == ''){
            errores.push('Indique el precio');
            precio.classList.add('is-invalid');
            precio.classList.remove('is-valid');
        }else{
            precio.classList.add('is-valid');
            precio.classList.remove('is-invalid');
        }

        //validar cuotas
        /*if(cuotas.value == ''){
            errores.push('Indique si se puede pagar en cuotas');
            cuotas.classList.add('is-invalid');
            cuotas.classList.remove('is-valid');
        }else{
            cuotas.classList.add('is-valid');
            cuotas.classList.remove('is-invalid');
        }*/

        //validar cantidad de cuotas
        if(cuotas.value == ''){
            errores.push('Indique la cantidad de cuotas');
            cantCuotas.classList.add('is-invalid');
            cantCuotas.classList.remove('is-valid');
        }else{
            cantCuotas.classList.add('is-valid');
            cantCuotas.classList.remove('is-invalid');
        }

        //validar estilo
        /*if(estilo.value == ''){
            errores.push('Indique el estilo');
            estilo.classList.add('is-invalid');
            estilo.classList.remove('is-valid');
        }else{
            estilo.classList.add('is-valid');
            estilo.classList.remove('is-invalid');
        }*/

        //validar descripcion
        if(descripcion.value == ''){
            errores.push('Introduzca una descripción válida');
            descripcion.classList.add('is-invalid');
            descripcion.classList.remove('is-valid');
        }else{
            descripcion.classList.add('is-valid');
            descripcion.classList.remove('is-invalid');
        }

        //validar descripcion tecnica
        if(descripcionTecnica.value == ''){
            errores.push('Introduzca una descripción técnica válida');
            descripcionTecnica.classList.add('is-invalid');
            descripcionTecnica.classList.remove('is-valid');
        }else{
            descripcionTecnica.classList.add('is-valid');
            descripcionTecnica.classList.remove('is-invalid');
        }

        if(errores.length > 0){
            ulErrores.innerHTML = ''; //LIMPIO LOS ERRORES Y LUEGO LO LLENO
            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += `<li> ${errores[i]}</li>`;
            }
        }else{
            return true;
        }
    }

})