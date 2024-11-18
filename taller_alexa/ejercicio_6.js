//6.	Contar palabras en una cadena: Crea una función que cuente cuántas palabras hay en una cadena de texto.
let palabras="hola hoy es miercoles";

function contador(){
    let letra=palabras.split(" ");
    console.log("el numero de palabras es: "+letra.length);
}

contador();