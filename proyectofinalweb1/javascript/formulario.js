



const btn=document.getElementById('btn');

/* HAY QUE VALIDAR LOS DATOS INGRESADOS */

btn.addEventListener("click", function mostrar(e){
e.preventDefault();
const datosForm=document.querySelector('.datosForm');
    const nombre=document.querySelector('#nombre');
    const apellido=document.getElementById('apellido');
    const email=document.getElementById('email');
    const telefono=document.getElementById('telefono');
    const select=document.getElementById('service');
    const data= nombre.value + " " + apellido.value + " " + email.value + " " + telefono.value + " "+ select.value;
     console.log(data);

    if(nombre.value==""||apellido.value==""||email.value==""||telefono.value==""||select.value ==""){
        alert("Debe ingresar todos los datos");
        return false;
    }
    /* REGEX*/
    let validarNombre= /^[a-zA-Z\W]{1,20}$/;
    let validarApellido= /^[a-zA-Z\W]{1,20}$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let validarTelefono=/^\d{1,10}$/;

    if (validarApellido.test(apellido)) {
        console.log("El apellido es válido.");
    } else {
        console.log("El apellido no es válido.");
    }
    if (validarNombre.test(nombre)) {
        console.log("El nombre es válido.");
    } else {
        console.log("El nombre no es válido.");
    }
    if (emailPattern.test(email)) {
        console.log("El correo electrónico es válido.");
    } else {
        console.log("El correo electrónico no es válido.");
    }
if(validarTelefono.test(telefono)) {
    console.log("El teléfono es válido");
}else{
    console.log("El teléfono no es válido");
    telefono.style.borderColor = "red";
}


    const elementoNuevo=document.createElement('p');
    elementoNuevo.innerHTML=data;
    datosForm.appendChild(elementoNuevo);
});



//Código generado por IA. Revisar y usar cuidadosamente.
// Más información sobre preguntas frecuentes.
//En este código, emailPattern.test(email) devuelve true
//si el correo electrónico es válido según el patrón, y
//false en caso contrario. Luego, en función de este resultado,
//se imprime un mensaje en la consola

