let opciones=document.querySelector("#filas")

let datos=[
    {nombre:"pablo",edad:10, email:"pablo@gmail.com"},
    {nombre:"juan",edad:20, email:"juan@gmail.com"},
    {nombre:"ana",edad:30, email:"ana@gmail.com"}];

datos.forEach(dato=>{
    filas.innerHTML+=`
        <tr>
        <td>${dato.nombre}</td>
        <td>${dato.edad}</td>
        <td>${dato.email}</td>
        </tr>
    `;
});
