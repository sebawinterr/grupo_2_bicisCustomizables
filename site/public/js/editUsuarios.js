window.addEventListener('load', function(){
    let formulario = document.getElementById('edicionUsuarios');
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
        let {firstName, lastName, email, category, dni, phoneNumber, streetName, additionalNumbers, zipCode, province, neighbourhood, image} = formulario.elements;
        let errores = []; //se declara array de errores
        ulErrores.classList.add('alert-danger');
    
        //validar el nombre
        if(firstName.value == ''){
            errores.push('Indique el nombre del usuario');
            firstName.classList.add('is-invalid');
            firstName.classList.remove('is-valid');
        }else{
            firstName.classList.add('is-valid');
            firstName.classList.remove('is-invalid');
        }

        //validar apellido
        if(lastName.value == ''){
            errores.push('Indique el apellido del usuario');
            lastName.classList.add('is-invalid');
            lastName.classList.remove('is-valid');
        }else{
            lastName.classList.add('is-valid');
            lastName.classList.remove('is-invalid');
        }

        //Validar email - con expresiones regulares
        //email con exp regular
        let reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        //JS tiene un metodo q se encarga de validar las expresiones regulares, se llama test
        if(!reEmail.test(email.value)){
            errores.push('Debe colocar un mail válido');
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
        }else{
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }

        //validar category
        if(category.value == ''){
            errores.push('Indique la categoria del usuario');
            category.classList.add('is-invalid');
            category.classList.remove('is-valid');
        }else{
            category.classList.add('is-valid');
            category.classList.remove('is-invalid');
        }

        //validar dni
        if(dni.value == ''){
            errores.push('Indique el DNI del usuario');
            dni.classList.add('is-invalid');
            dni.classList.remove('is-valid');
        }else{
            dni.classList.add('is-valid');
            dni.classList.remove('is-invalid');
        }

        //validar telefono
        if(phoneNumber.value == ''){
            errores.push('Indique el celular del usuario');
            phoneNumber.classList.add('is-invalid');
            phoneNumber.classList.remove('is-valid');
        }else{
            phoneNumber.classList.add('is-valid');
            phoneNumber.classList.remove('is-invalid');
        }

        //validar dirección
        if(streetName.value == ''){
            errores.push('Indique el domicilio del usuario');
            streetName.classList.add('is-invalid');
            streetName.classList.remove('is-valid');
        }else{
            streetName.classList.add('is-valid');
            streetName.classList.remove('is-invalid');
        }

        if(additionalNumbers.value == ''){
            errores.push('Indique el piso y depto del usuario en caso de corresponder');
            additionalNumbers.classList.add('is-invalid');
            additionalNumbers.classList.remove('is-valid');
        }else{
            additionalNumbers.classList.add('is-valid');
            additionalNumbers.classList.remove('is-invalid');
        }

        if(zipCode.value == ''){
            errores.push('Indique el código postal del usuario');
            zipCode.classList.add('is-invalid');
            zipCode.classList.remove('is-valid');
        }else{
            zipCode.classList.add('is-valid');
            zipCode.classList.remove('is-invalid');
        }

        if(province.value == ''){
            errores.push('Indique la provincia del usuario');
            province.classList.add('is-invalid');
            province.classList.remove('is-valid');
        }else{
            province.classList.add('is-valid');
            province.classList.remove('is-invalid');
        }

        if(neighbourhood.value == ''){
            errores.push('Indique localidad del usuario');
            neighbourhood.classList.add('is-invalid');
            neighbourhood.classList.remove('is-valid');
        }else{
            neighbourhood.classList.add('is-valid');
            neighbourhood.classList.remove('is-invalid');
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