//10.	Buscar el índice de un valor en un arreglo: Crea una función que devuelva el índice de un valor específico en un arreglo.
let arreglo = [2,4,6,8];
let buscar=6;
let indices=0;

function indice(){
    for (let i=0;i<arreglo.length;i++){
        if(arreglo[i]==buscar){
            indices=i;
            break
        }
    }
    console.log("su indice esta en la posicion: "+indices)
}
indice();


