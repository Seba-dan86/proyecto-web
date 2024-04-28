const datos=document.getElementById("datos");



function mostrar(){

    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const email=document.getElementById("email").value;
    const patente=document.getElementById("patente").value;
    const km=document.getElementById("kilometros").value;
    const service=document.getElementById("service").value;

datos.textContent=nombre + apellido + email + km + service;
console.log(datos);

}
