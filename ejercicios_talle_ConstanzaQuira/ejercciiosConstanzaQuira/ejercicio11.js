//11. Escribe una función que reciba un array y un número y devuelva los números mayores
//que el número dado.
let mayores=[4,7,9,11,15];
let resultados=[]
function numero(num,mayores){
    mayores.forEach((fnumeros)=> {
        if(fnumeros > num){
            resultados.push(fnumeros);
        }
        
    });
}
numero(10,mayores);
console.log(resultados);

