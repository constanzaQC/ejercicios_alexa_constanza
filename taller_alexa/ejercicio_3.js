//3.	Sumar valores de un arreglo: Crea una función que reciba un arreglo de números y devuelva la suma de todos sus valores.
let numero=[2,3,4,5];//este es el arreglo
let contador=0; //creo el contador que inicializo en 0

function suma(){ //se crea la funcion

    for(let i=0; i<numero.length; i++){
        contador=contador+numero[i];
    }
    console.log("la suma es" + contador)
}
suma();