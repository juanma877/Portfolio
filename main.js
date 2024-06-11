// Animacion de ir arriba

document.getElementById('irArriba').addEventListener('click', scrollTo);

function scrollTo(){
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

// Ocultar el go up hasta que el mouse pase por encima
document.addEventListener('DOMContentLoaded', function() {
    const irArriba = document.getElementById('irArriba');
    const arr = document.getElementById('arr');
    irArriba.addEventListener('mouseover', function() {
        arr.style.opacity = '1';

    });
    irArriba.addEventListener('mouseout', function() {
        arr.style.opacity = '0';
});
});


// Ocultar el logo del header hasta hacer scroll
window.addEventListener("scroll", function() {
    var logo = document.getElementById("logo");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 400) {
        logo.style.opacity = "1";
    } else {
        logo.style.opacity = "0";
    }
});


// Validaciones del formulario
nombre = document.querySelector("#nombre");
apellido = document.querySelector("#apellido");
telefono = document.querySelector("#telefono");
email = document.querySelector("#email");
contactForm = document.querySelector("#contactForm");
errorNombre = document.querySelector("#errorNombre");
errorApellido = document.querySelector("#errorApellido");
errorTelefono = document.querySelector("#errorTelefono");
errorEmail = document.querySelector("#errorEmail");


if(nombre && apellido && telefono && email) {
    contactForm.addEventListener('submit', validarFormulario);
    } else {
    console.log("error no se puede enviar")
    }

    if(contactForm.addEventListener('borrar', validarFormulario)){
        contactForm.reset()
    }

    function validarFormulario(event) {
        event.preventDefault();
    
        let validation = true;
    
        if (nombre.value ==="") {
            nombre.classList.add("error");
            errorNombre.textContent = "Debe completar su nombre"
            validation = false
            nombre.value = ""
    
        } else if (/^([0-9])*$/.test(nombre.value)){
            nombre.classList.add("error");
            errorNombre.textContent = "El campo solo puede tener letras"
            validation = false
            nombre.value = ""
            
        } else {
            nombre.classList.remove("error");
            errorNombre.textContent = ""
        }
        
        
        
        if(apellido.value ==="") {
            apellido.classList.add("error");
            errorApellido.textContent = "Debe completar su apellido"
            validation = false
            apellido.value = ""
        } else if (/^([0-9])*$/.test(apellido.value)){
            apellido.classList.add("error");
            errorApellido.textContent = "El campo solo puede tener letras"
            validation = false
            apellido.value = ""
        } else {
            apellido.classList.remove("error");
            errorApellido.textContent = ""
        }
    
        if(telefono.value ==="") {
            telefono.classList.add("error");
            errorTelefono.textContent = "Debe completar su telefono"
            validation = false
            telefono.value = ""
            } else if (!/^([0-9])*$/.test(telefono.value)){
            telefono.classList.add("error");
            errorTelefono.textContent = "El campo solo puede tener numeros"
            validation = false
            telefono.value = ""
        } else {
            telefono.classList.remove("error");
            errorTelefono.textContent = ""
        }

        if(email.value ==="") {
            email.classList.add("error");
            errorEmail.textContent = "Debe completar su email"
            validation = false
            email.value = ""
        } else if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
            email.classList.add("error");
            errorEmail.textContent = "El formato del email no es correcto"
            validation = false
            email.value = ""
        } else {
            email.classList.remove("error");
            errorEmail.textContent = ""
            
        }
        
    
        if (validation === true) {
            contactForm.reset()
            console.log ("Datos validos")
             alert("Datos enviados")
            
        } else {
        console.log("error no se puede enviar")
        }
    }