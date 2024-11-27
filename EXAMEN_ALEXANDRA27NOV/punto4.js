let div=document.querySelector("#lista");

fetch("https://jsonplaceholder.typicode.com/posts ")

    .then(respuesta=>respuesta.json())
    .then(appp => {
        console.log(appp);
        appp.forEach(api => {
            let li=document.createElement('li');
            li.innerHTML = `
                <p>${api.title}</p>`;
                
            div.appendChild(li);
        });
    })