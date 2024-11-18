//Crea una función que devuelva el promedio de los números en un arreglo.
let arreglo=[1,4,5,6,7,9,10];
let contador=0;


function promedio(){
    for(i=0;i<arreglo.length;i++){
        contador=contador+arreglo[i];
    }
    let resultado=contador/arreglo.length;
    console.log("Su promedio es: "+resultado);
}

promedio()