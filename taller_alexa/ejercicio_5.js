//5.	Verificar si un elemento está en el arreglo: Crea una función que determine si un número dado está presente en un arreglo.

 let numeros = ["1","8","9","11","15"];
 let comparar=0;
 let numero=11;

 function num (){
    for (let i=0; i< numeros.length; i++){
        if (numero==numeros[i]){
            console.log("su numero fue encontrado")
            break
        }else{
            console.log("su numero no fue encontrado")
        }

    }
    }
 num();
