let enRango=(numero)=>{
    let res=(numero>10 & numero<50)?"esta dentro del rango":"no esta dentro del rango";
    return res;
}
console.log(enRango(49));
console.log(enRango(5));

export {enRango}
