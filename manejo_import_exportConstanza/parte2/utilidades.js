let calcularDescuento=(precio)=>{
    let calcular=(precio<1000)?precio*0.80:(precio>=500 & precio<=1000)?precio*0.90:"no hay desceunto";
    return calcular;
}

export {calcularDescuento}