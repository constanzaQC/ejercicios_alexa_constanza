//9.Devuelve la suma de los números pares en un array.

let numeros=[2,3,4,5,6,7,8,9,10,11,12,13,14];
let resultado=[];
let suma=0;
numeros.forEach((Spares)=>{
    if(Spares%2==0){
        suma=suma+Spares;
        
    }
})
resultado.push(suma);
console.log(resultado);