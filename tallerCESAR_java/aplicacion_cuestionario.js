let cuestionario=document.querySelector("#cuestionari");
let resultado=document.querySelector("#falso_verdadero");
fetch("https://raw.githubusercontent.com/cesarmcuellar/CuestionarioWeb/refs/heads/main/cuestionario.json")
    .then(response => response.json())
    .then(question=>{
        console.log(question);
        //estructuras de preguntas de opcion multiple
        question.multiple_choice_questions.forEach((quest, index) => {
            cuestionario.innerHTML += `<h3>${quest.question}</h3>`;
            quest.options.forEach((rest) => {
                cuestionario.innerHTML += `
                <label>
                    <input type="radio" name="multiple_${index}" value="${rest}" class="input">
                    ${rest}
                </label><br>
                `;
            });
        });
        
        question.true_false_questions.forEach((que, index) => {
            falso_verdadero.innerHTML += `
            <h3>${que.question}</h3>
                <label>
                    <input type="radio" name="true_false_${index}" value="true">
                Verdadero
                </label><br>
                <label>
                    <input type="radio" name="true_false_${index}" value="false">
                Falso
                </label><br>
            `;
        });

        
    })

        

// Evento para calcular respuestas correctas
let botonCalcular = document.querySelector("#calcular");
botonCalcular.addEventListener("click", () => {
    correctas = 0;

}, false);


    //modulo reiniciar
    let reiniciar =document.querySelector("#reiniciar");
    reiniciar.addEventListener("click", () => {
        let input = document.querySelectorAll('input[type="radio"]');
        input.forEach(input => {
        input.checked = false;
    });
    });