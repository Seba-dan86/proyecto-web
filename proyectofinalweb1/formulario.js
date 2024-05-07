

const nombre=document.getElementById("nombre");
const apellido=document.getElementById("apellido");
const email=document.getElementById("email");
const patente=document.getElementById("patente");
const datos=document.getElementById("datos");
//cnnst km=document.getElementById("kilometros").value;
// const service=document.getElementById("service").value;
// const turno=document.getElementById("turno").value;




const btn=document.getElementById("btn");
btn.addEventListener("click", function mostrar(){

    datos.innerHTML=nombre.value + apellido.value + email.value + patente.value

    console.log(datos);
});

