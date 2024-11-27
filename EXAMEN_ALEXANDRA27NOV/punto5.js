
let tareas = ["comer", "dormir", "jugar","pasear"]

let div = document.querySelector("#div");

tareas.forEach(btn=> {
    let boton = document.createElement("#button");
    boton.innerHTML=`
    <button>${btn}</button>
    `;
    div.appendChild(boton);

});