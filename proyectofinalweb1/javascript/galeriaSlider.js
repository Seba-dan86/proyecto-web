const imagenes=["../assets/slider1.jpeg","../assets/slider2.jpeg","../assets/slider3.jpeg","../assets/slider4.jpeg","../assets/slider5.jpeg","../assets/slider6.jpeg","../assets/slider7.jpeg","../assets/slider8.jpeg","../assets/slider9.jpeg","../assets/slider10.jpeg"];
const containerSlider=document.querySelector('.containerSlider');
document.Imagen.src=imagenes[0];
let contador=0;
const sliderDerecho=document.querySelector(".sliderDerecho");
const sliderIzquierdo=document.querySelector(".sliderIzquierdo");

sliderDerecho.addEventListener("click",function moverDerecha() {

contador++;
if(contador>imagenes.length-1){
    contador=0;
}
document.Imagen.src=imagenes[contador];

});
sliderIzquierdo.addEventListener("click",function moverIzquierda() {

    contador--;
    if(contador<0){
        contador=imagenes.length-1;
    } 
    document.Imagen.src=imagenes[contador];
   


});


