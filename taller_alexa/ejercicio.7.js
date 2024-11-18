//7.	Invertir un arreglo: Crea una función que reciba un arreglo y lo devuelva invertido.

let arreglo=["h","g","a","d"];
let invertido=[]

let cantidad=arreglo.length-1;//este es para declarar la varibale cantidad la cual me va a dar el contenido del arreglo invertido
function invertir(){
    for(let i=cantidad; i>=0;i--){//este es como entrega el elemento invertido.
        invertido.push(arreglo[i])
    }
    console.log(arreglo)
    console.log(invertido)
}

invertir();