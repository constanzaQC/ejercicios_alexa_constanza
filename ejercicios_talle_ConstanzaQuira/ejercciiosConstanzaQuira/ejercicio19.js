let palabras=["hola","adios","dios","hola","hola"]

let palabra="hola";
let contador=0;

palabras.forEach((pal)=>{
    if(pal==palabra){
        contador=contador+1;
    }
});

console.log(contador);

