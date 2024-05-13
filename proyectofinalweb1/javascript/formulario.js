


const datos=document.getElementById('datos');
const btn=document.getElementById('btn');

/* HAY QUE VALIDAR LOS DATOS INGRESADOS */

btn.addEventListener("submit", function mostrar(){

    const nombre=document.getElementById('nombre').value;
    const apellido=document.getElementById('apellido').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('telefono').value;
    const data= nombre + " " + apellido + " " + email + " " + phone;
    console.log(data);
});

