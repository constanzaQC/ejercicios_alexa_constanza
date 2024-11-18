//9.	Transformar todos los nombres a mayúsculas: Crea una función que reciba un arreglo de nombres y los devuelva todos en mayúsculas.
let nombre = ["dali","constanza","quira","camayo"];
let convertir=[]

function mayuscula(){
    for (let i=0; i<nombre.length;i++){
        convertir[i]=nombre[i].toUpperCase();
    }
    console.log(convertir)
}
mayuscula();