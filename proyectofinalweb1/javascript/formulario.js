



const btn=document.getElementById('btn');

/* HAY QUE VALIDAR LOS DATOS INGRESADOS */

/*btn.addEventListener("click", function mostrar(e){
e.preventDefault();
const datosForm=document.querySelector('.datosForm');
    

    
});*/


btn.addEventListener("click", function (e) {

    const nombre=document.getElementById('nombre');
    const apellido=document.getElementById('apellido');
    const email=document.getElementById('email');
    const telefono=document.getElementById('telefono');
    const select=document.getElementById('service');

    const data=nombre.value + " " + apellido.value + " " + email.value + " " + telefono.value + " "+ select.value;
    console.log(data);

    if(nombre.value==""||apellido.value==""||email.value==""||telefono.value==""||select.value ==""){
        alert("Debe ingresar todos los datos");
        return false;
    }
    /* REGEX*/
    let validarNombre= /^[a-zA-Z\W]{1,20}$/;
    let validarApellido= /^[a-zA-Z\W]{1,20}$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let validarTelefono=/^\d{1,15}$/;

    
    if (validarNombre.test(nombre.value)) {
        console.log("El nombre es válido.");
    } else {
        console.log("El nombre no es válido.");
    }

    if (validarApellido.test(apellido.value)) {
        console.log("El apellido es válido.");
    } else {
        console.log("El apellido no es válido.");
    }

    if (emailPattern.test(email.value)) {
        console.log("El correo electrónico es válido.");
    } else {
        console.log("El correo electrónico no es válido.");
    }

    if(validarTelefono.test(telefono.value)) {
        console.log("El teléfono es válido");
    }else{
        console.log("El teléfono no es válido");
        telefono.style.borderColor = "red";
    }

    let padre=document.getElementById('datos');

    let encabezado=document.createElement('p');
    padre.appendChild(encabezado);
    encabezado.setAttribute('class','datosTexto');
    encabezado.innerHTML='Ticket Registrado';
    let br = document.createElement('br');
    padre.appendChild(br);

    let infoNombre=document.createElement('p');
    padre.appendChild(infoNombre);
    infoNombre.setAttribute("class","datosTexto");
    infoNombre.innerHTML='Cliente = '+nombre.value+' '+apellido.value;

    let infoEmail=document.createElement('p');
    padre.appendChild(infoEmail);
    infoEmail.setAttribute("class","datosTexto");
    infoEmail.innerHTML='Email = '+email.value;

    let infoTelefono=document.createElement('p');
    padre.appendChild(infoTelefono);
    infoTelefono.setAttribute("class","datosTexto");
    infoTelefono.innerHTML='Telefono = '+telefono.value;

    let infoServicio=document.createElement('p');
    padre.appendChild(infoServicio);
    infoServicio.setAttribute("class","datosTexto");
    infoServicio.innerHTML='Servicio = '+select.value;

    let br2 = document.createElement('br');
    padre.appendChild(br2);
    let pie=document.createElement('p');
    padre.appendChild(pie);
    pie.setAttribute('class','datosTexto');
    pie.innerHTML='Gracias por elegirnos ! En breve nos contactaremos para su cita';
    

});