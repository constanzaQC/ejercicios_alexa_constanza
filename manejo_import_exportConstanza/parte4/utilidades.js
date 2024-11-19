let nivelRiesgo=(edad, enfermedPrevia)=>{
    let calcular=(edad>60 ||  enfermedPrevia== true)?"alto riesgo":(edad>=40 & edad<=60 & enfermedPrevia== true)?"riesgo moderado": "bajo riesgo";
    return calcular;
}

export{nivelRiesgo}