//4.	Encontrar el número más grande en un arreglo: Crea una función que devuelva el número más grande de un arreglo de números.
 let numeroGrande = [5,8,9,12,35,78,45,67];
 let mayor = numeroGrande[0];

 function Nmayor (){
    for (let i=0; i< numeroGrande.length;i++){
        if (numeroGrande[i]>mayor){
            mayor=numeroGrande[i]

        }
    }
    console.log("el numero mayor es: "+ mayor)
 }
 Nmayor ();