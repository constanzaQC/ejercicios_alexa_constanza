let boton = document.querySelector("#clickMe");
let bot = document.querySelector("#removeEvent");

function alerta(){
 alert("boton clickeado");
}

boton.addEventListener("click", alerta);


bot.addEventListener("click", ()=>{
    boton.removeEventListener("click", alerta)
})