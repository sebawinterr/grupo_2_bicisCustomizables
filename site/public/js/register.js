window.addEventListener('load', function(){
    let formulario = document.getElementById('register');
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
        let {nombre, apellido, dni, telefono, direccion, cp, provincia, localidad, email, password, imagen} = formulario.elements;
        let errores = []; //se declara array de errores
        //ulErrores.classList.add('alert-danger');
    
        //validar el nombre
        if(nombre.value == ''){
            errores.push('Indique su nombre');
            nombre.classList.add('is-invalid');
            nombre.classList.remove('is-valid');
        }else{
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid');
        }

        //validar apellido
        if(apellido.value == ''){
            errores.push('Indique su apellido');
            apellido.classList.add('is-invalid');
            apellido.classList.remove('is-valid');
        }else{
            apellido.classList.add('is-valid');
            apellido.classList.remove('is-invalid');
        }

        //validar dni
        if(dni.value == ''){
            errores.push('Indique su dni');
            dni.classList.add('is-invalid');
            dni.classList.remove('is-valid');
        }else{
            dni.classList.add('is-valid');
            dni.classList.remove('is-invalid');
        }

        //validar telefono
        if(telefono.value == ''){
            errores.push('Indique su teléfono');
            telefono.classList.add('is-invalid');
            telefono.classList.remove('is-valid');
        }else{
            telefono.classList.add('is-valid');
            telefono.classList.remove('is-invalid');
        }

        //validar direccion
        if(direccion.value == ''){
            errores.push('Indique su dirección');
            direccion.classList.add('is-invalid');
            direccion.classList.remove('is-valid');
        }else{
            direccion.classList.add('is-valid');
            direccion.classList.remove('is-invalid');
        }

        //validar cp
        if(cp.value == ''){
            errores.push('Indique su código postal');
            cp.classList.add('is-invalid');
            cp.classList.remove('is-valid');
        }else{
            cp.classList.add('is-valid');
            cp.classList.remove('is-invalid');
        }

        //validar provincia
        if(provincia.value == ''){
            errores.push('Indique su provincia');
            provincia.classList.add('is-invalid');
            provincia.classList.remove('is-valid');
        }else{
            provincia.classList.add('is-valid');
            provincia.classList.remove('is-invalid');
        }

        //validar localidad
        if(localidad.value == ''){
            errores.push('Indique su localidad');
            localidad.classList.add('is-invalid');
            localidad.classList.remove('is-valid');
        }else{
            localidad.classList.add('is-valid');
            localidad.classList.remove('is-invalid');
        }

        //validar email
        let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!reEmail.test(email.value)){
            errores.push('Introduzca un email válido');
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
        }else{
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }

        //validar contraseña
        if(password.value == ''){
            errores.push('Introduzca una contraseña de por lo menos 8 caracteres');
            password.classList.add('is-invalid');
            password.classList.remove('is-valid');
        }else{
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }

        /*if(imagen.value == ''){
            errores.push('Cargue una foto de perfil valida');
            imagen.classList.add('is-invalid');
            image.classList.remove('is-valid');
        }else{
            imagen.classList.add('is-valid');
            imagen.classList.remove('is-invalid');
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