window.addEventListener('load',()=>{
    //Capturo el formulario
    let formulario = document.querySelector('.login');
    let divErrores = document.getElementById('errores');

    // Establezco la condicion para que se envie efectivamente el formulario
    formulario.addEventListener('submit',(evento)=>{
        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }

        function validaciones(evento){
            // Destructuring
            let {email, password, recuerdame} = formulario.elements;
            let errores = [];
            divErrores.classList.add('alert-danger')

            // Validacion email
            let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            let rePassword = /^(?=.*[a-zA-Z0-9]).{8,}$/
            if(!reEmail.test(email.value)){
                errores.push('El email es inválido...');
                email.classList.add('is-invalid');
                email.classList.remove('is-valid');   
            }else{
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');
            }
            // Validacion contraseña // BUSCAR EXPRESION REGULAR 
            if(!rePassword.test(password.value)){
                errores.push('El password es inválido...');
                password.classList.add('is-invalid');
                password.classList.remove('is-valid');   
            }else{
                password.classList.add('is-valid');
                password.classList.remove('is-invalid');
            }
            if(errores.length > 0){
                evento.preventDefault();
                divErrores.innerHTML = "";
                for (let i = 0 ; i < errores.length; i++){
                  divErrores.innerHTML += `<li> ${errores[i]} </li> `
                }
            }else{
                return true;
            }             
        }

    })
})