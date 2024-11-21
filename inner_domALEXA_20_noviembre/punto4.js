let punto = document.createElement("div");//crear el div
punto.textContent = "Soy un nuevo div";//llenar el div

document.body.appendChild(punto);//enviar al html el div creado

let punt = document.createElement("div");//crear el div a remplazar
punt.textContent = "otro div"; //lenar el nuevo div
punto.parentNode.replaceChild(punt,punto);//remplazar con el otro div