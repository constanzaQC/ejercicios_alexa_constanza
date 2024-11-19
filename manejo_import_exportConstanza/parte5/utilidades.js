let esBisiesto=(anio)=>{
    let calcular=(anio%4==0 & anio%100!==0 & anio%400==0)?"es bisiesto":"no es bisiesto";
    return calcular;
}
export{esBisiesto}
