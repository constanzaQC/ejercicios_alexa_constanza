let esElegibleParaPrestamo=(salario, puntaje)=>{
    let calcular=(salario>30000 & puntaje>650)?"elegible para presrtamo":"no es elegible para prestamo"
    return calcular;
}
export{esElegibleParaPrestamo}