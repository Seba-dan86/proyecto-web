



    const mostrar=async()=>{
        //alert("esta conectado");

        const nombre=document.getElementById("nombre").value;
        const apellido=document.getElementById("apellido").value;
        const email=document.getElementById("email").value;
        const patente=document.getElementById("patente").value;
        const km=document.getElementById("kilometros").value;
        const service=document.getElementById("service").value;
        const turno=document.getElementById("turno").value;
        const datos=document.getElementById("datos");
        const formData = new FormData();
  formData.append("nombre", nombre);
  formData.append("apellido", apellido);
  formData.append("email", email);
  formData.append("patente", patente);
  formData.append("km", km);
  formData.append("service", service);
  formData.append("turno", turno);


        for(let formdata1 of formData){
            console.log(formdata1);}

            datos.textContent = formdata1;
        }



