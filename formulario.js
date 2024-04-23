const datos=document.getElementById("datos");
const enviar=document.getElementById("enviar");
enviar.addEventListener("submit",create());

function create(e){
    e.prevenDefault();
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const email=document.getElementById("email").value;
    const patente=document.getElementById("patente").value;
    const modelo=document.getElementById("modelo").value;
    const service=document.getElementById("service").value;

datos.textContent=`Nombre: ${nombre} <br> Apellido: ${apellido} <br> Email: ${email} <br> Patente: ${patente} <br> Modelo: ${modelo} <br> Servicio: ${service}`;
console.log(datos.textContent);

}