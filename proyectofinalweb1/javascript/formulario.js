

const nombre=document.getElementById('nombre').value;
const apellido=document.getElementById('apellido').value;
const email=document.getElementById('email').value;


const datos=document.getElementById('datos');



const btn=document.getElementById('btn');
btn.addEventListener("click", function mostrar(){
    console.log("estamos conectados");
    const newElement=document.createElement('p');
    newElement.innerText=nombre + " "+ apellido+ " "+ email;
    datos.append(newElement);

console.log(datos);
});

