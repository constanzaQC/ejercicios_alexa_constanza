let primer = document.createElement("p");
primer.textContent="Este es un párrafo creado dinámicamente";
document.body.appendChild(primer);

let boton = document.querySelector("#eliminar");
boton.addEventListener("click", () =>{
 
 primer.remove()

})
