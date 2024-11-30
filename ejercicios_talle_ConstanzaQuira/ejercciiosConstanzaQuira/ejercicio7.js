//Crea una función que verifique si una palabra es un palíndromo.
function palindromo(palabra){
    resultado=palabra.split('').reverse().join('');
    if(resultado==palabra){
        console.log("la palabra es un palindromo")
    }else{
        console.log("la palabra no es un palindromo")
    }
}
palindromo("reconocer");




