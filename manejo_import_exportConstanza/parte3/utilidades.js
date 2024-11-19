let categoriaIMC=(IMC)=>{
    let calcular=(IMC>=18.5 & IMC<=24.9)?"PESO NORMAL":(IMC>=25 & IMC<=29.9)?"SOBREPESO":(IMC>30)?"OBESIDAD":"BAJO PESO";

    return calcular;
}

export {categoriaIMC}