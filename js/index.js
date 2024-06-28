window.onload=()=>{
    let form=document.querySelector("#registroForm");
    form.nombre.addEventListener("input",validaNombre);
    form.apellido.addEventListener("input",validarApellido);
    form.edad.addEventListener("input",validarEdad);
    form.telefono.addEventListener("input",validaTelefono);
    form.email.addEventListener("input",validaEmail);
    form.pass1.addEventListener("input",validarPass1);
    form.pass2.addEventListener("input",validarPass2);
    form.requestFullscreen.addEventListener("click", ()=>);
        inputs=document.querySelector("input"); 
        inputs.forEach(Element =>{
            element.classList.remove("errorInput");
            element.classList.remove("validoInput");
        });
        let mensajeError=document.querySelectorAll(".msn");
        mensajeError.forEach(mensaje=>{
            mensaje.textContent="";
        })

}

function validarFormulario(){
    if (validarNombre() && validarApellido() && validarEdad() && validarEmail() && validarPass1() && validarPass2() && validarTelefono()){
        return true
    }else{
        return false;
    }
}

function validaNombre(){
    let nombre=document.querySelector("#nombre");
    let msnError=document.querySelector(".nombreError");
        if (!nombre.value.trim()){
            nombre.classList.add("errorInput");
            nombre.classList.remove("validoImput");
            msnError.textContent="El nombre es obligatorio"
            return false;
        }else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test("nombre.value")){
            nombre.classList.add("errorInput");
            nombre.classList.remove("validoImput");
            mensajeError.textContent="El nombre solo puede contener letras y espacios"
            return false;
        }else{
            nombre.classList.remove("errorInput");
            nombre.classList.add("validoImput");
            msnError.textContent="";
             return true;
        }
}   
function validarApellido(){
    let nombre=document.querySelector("#apellido");
    let msnError=document.querySelector(".apellidoError");
        if (!nombre.value.trim()){
            apellido.classList.add("errorInput");
            apellido.classList.remove("validoImput");
            msnError.textContent="El   apellido es obligatorio"
            return false;
        }else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test("apellido.value")){
            apellido.classList.add("errorInput");
            apellido.classList.remove("validoImput");
            mensajeError.textContent="El apellido solo puede contener letras y espacios"
            return false;
        }else{
            apellido.classList.remove("errorInput");
            apellido.classList.add("validoImput");
            msnError.textContent="";
             return true;
        }

}
function validarEdad(){
    let edad=document.querySelector("#edad");
    let msnError=document.querySelector(".edadError");
    if (isNaN(edad.value) || !edad.value.trim()){
        edad.classList.add("errorInput");
        edad.classList.remove("validoImput");
        msnError.textContent="El  edad solo puede contener números mayor que 0 y menor que 100";
        return false;
    }else if(edad.value<=18) || !edad.value>100){
        edad.classList.add
        edad.classList.remove("validoImput");
        msnError.textContent="El apellido solo puede contener letras y espacios"
        return false;
    }else{
        edad.classList.remove("errorInput");
        edad.classList.add("validoImput");
        msnError.textContent="";
        return true;
    }
}
function validarTelefono(){
let telefono=document.querySelector("#telefono");
let msnError=document.querySelector(".telefonoError");
if (!telefono.value.trim()){
    telefono.classList.add("errorInput");
    telefono.classList.remove("validoImput");
    msnError.textContent="El  edad solo puede contener números";
    return false;
}else if(!/^[6789]\d{8}$/.test("telefono.value")){
    telefono.classList.add("errorImput")
    telefono.classList.remove("validoImput");
    msnError.textContent="El telefono debe comenzar con [6/7/8/9] y de longitud 9 números"
    return false;

}else{
    telefono.classList.remove("errorInput");
    telefono.classList.add("validoImput");
    msnError.textContent="";
     return true;
    }

function validaEmail(){
    let email=document.querySelector("#email");
    let msnError=document.querySelector(".emailError");
if (!email.value.trim()){
    email.classList.add("errorInput");
    email.classList.remove("validoImput");
    msnError.textContent="El  email es obligatorio";
    return false;
}else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)){
    email.classList.add("errorImput")
    email.classList.remove("validoImput");
    msnError.textContent="El formato de email es erroneo"
    return false;
}
}else{
    email.classList.remove("errorInput");
    email.classList.add("validoImput");
    msnError.textContent="";
     return true;
    }
}

function validarPass1(){
    let pass1=document.querySelector("#email");
    let msnError=document.querySelector(".emailError");
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass.value)){
        pass1.classList.add("errorInput");
        pass1.classList.remove("validoImput");
        msnError.textContent="El  password debe contener 8 caracteres, de las cuales 1 mayuscula, 1 miniscula y 1 letra";
        return false;
    }
    }else{
        pass1.classList.remove("errorInput");
        pass1.classList.add("validoImput");
        msnError.textContent="";
         return true;
}

function validarPass2(){
    let pass2=document.querySelector("#pass2");
    let pass2=document.querySelector("#pass2");
    let msnError=document.querySelector(".pass2Error");
    if (pass1.value!==pass2.value || pass2.value.trim()){
        pass2.classList.add("errorInput");
        pass2.classList.remove("validoImput");
        msnError.textContent="El  password no son iguales";
        return false;
    }else{
        pass2.classList.remove("errorInput");
        pass2.classList.add("validoImput");
        msnError.textContent="";
         return true;
}


}
 
