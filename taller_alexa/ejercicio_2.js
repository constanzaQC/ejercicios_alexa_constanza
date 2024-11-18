//2.	Contar números pares en un arreglo: Crea una función que cuente cuántos números pares existen en un arreglo de números.
let numeros = [1,2,3,4,5,6,7,8,9];
let dividir =0;
let contador=0;

    function pares(){
         for (let i=0; i<numeros.length;i++){
       
        
            if(numeros[i]%2==0){
                contador=contador + 1;

            }
          
        }
        console.log("su numero de pares es: " +contador);
    }
    

pares();

