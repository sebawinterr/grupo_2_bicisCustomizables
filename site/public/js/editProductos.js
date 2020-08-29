window.addEventListener('load', function(){
    let formulario = document.getElementById('edicionProductos');
    let ulErrores = document.getElementById('errores');

    formulario.addEventListener('submit', function(evento){
        if(!validaciones(evento)){
            return evento.preventDefault();//si las validaciones NO estan OK, se indica q NO se envíe el formulario y se que en este lugar con el preventDefault
        }else{
            return formulario.submit(); //si las validaciones fueron OK, enviar el formulario
        }
    })
    function validaciones(evento){
        //con destructuring de codigo se deklaran todas las variables y se igualan al elemento capturado (formulario), las variables usan el name del formulario y se colocan de manera ordenada a como estan en los inputs del form
        let {colores, talle, rodado, marca, modelo, precio, descuento, cuotas, cantCuotas, estilo, descripcion, descripcionTecnica, imagen} = formulario.elements;
        let errores = []; //se declara array de errores
        ulErrores.classList.add('alert-danger');
    
        //validar el color
        if(colores.value == ''){
            errores.push('Indique el color');
            colores.classList.add('is-invalid');
            colores.classList.remove('is-valid');
        }else{
            colores.classList.add('is-valid');
            colores.classList.remove('is-invalid');
        }

        //validar talle
        if(talle.value == ''){
            errores.push('Indique el talle');
            talle.classList.add('is-invalid');
            talle.classList.remove('is-valid');
        }else{
            talle.classList.add('is-valid');
            talle.classList.remove('is-invalid');
        }

        //validar rodado
        if(rodado.value == ''){
            errores.push('Indique el rodado');
            rodado.classList.add('is-invalid');
            rodado.classList.remove('is-valid');
        }else{
            rodado.classList.add('is-valid');
            rodado.classList.remove('is-invalid');
        }

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

        if(descuento.value == ''){
            errores.push('Indique el descuento en caso de corresponder');
            descuento.classList.add('is-invalid');
            descuento.classList.remove('is-valid');
        }else{
            descuento.classList.add('is-valid');
            descuento.classList.remove('is-invalid');
        }

        if(cuotas.value == ''){
            errores.push('Indique si tiene cuotas');
            cuotas.classList.add('is-invalid');
            cuotas.classList.remove('is-valid');
        }else{
            cuotas.classList.add('is-valid');
            cuotas.classList.remove('is-invalid');
        }

        //validar estilo
        if(estilo.value == ''){
            errores.push('Indique el estilo de la bicicleta');
            estilo.classList.add('is-invalid');
            estilo.classList.remove('is-valid');
        }else{
            estilo.classList.add('is-valid');
            estilo.classList.remove('is-invalid');
        }

        //validar descripción
        if(descripcion.value == ''){
            errores.push('Indique la descripción de la bicicleta');
            descripcion.classList.add('is-invalid');
            descripcion.classList.remove('is-valid');
        }else{
            descripcion.classList.add('is-valid');
            descripcion.classList.remove('is-invalid');
        }

        //validar descripción técnica
        if(descripcionTecnica.value == ''){
            errores.push('Indique su descripción técnica');
            descripcionTecnica.classList.add('is-invalid');
            descripcionTecnica.classList.remove('is-valid');
        }else{
            descripcionTecnica.classList.add('is-valid');
            descripcionTecnica.classList.remove('is-invalid');
        }

        /*if(image.value == ''){
            errores.push('Indique el domicilio del usuario');
            image.classList.add('is-invalid');
            image.classList.remove('is-valid');
        }else{
            image.classList.add('is-valid');
            image.classList.remove('is-invalid');
        }*/

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