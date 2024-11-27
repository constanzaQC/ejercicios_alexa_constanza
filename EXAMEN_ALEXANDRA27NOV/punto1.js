//Recorrer una lista de elementos del DOM usando forEach.
//Escribe un script que seleccione todos los elementos <li> de una lista y, con forEach, les cambie el color de fondo a amarillo.

const listas = document.querySelectorAll('li');

listas.forEach(item => {
  item.style.backgroundColor = 'yellow';
});
