let div = document.querySelector('#candidato');

fetch("https://raw.githubusercontent.com/cesarmcuellar/Elecciones/refs/heads/main/candidatos.json")

.then(response => response.json())
.then(candid=>{
    candid.forEach((candid) => {
        div.innerHTML +=`
        <p>${candid.curso}</p>
        <img src="${candid.foto}" alt="" class="fotoEleccioness">
        <p>${candid.nombre} ${candid.apellido}</p>
        <p>${candid.ficha}</p>
        
        `;

        
    });


});


document.addEventListener("DOMContentLoaded", () => {
    let usuariosi = false;
    let votos = {}; 
    let candidatos = []; 

    document.querySelector("#boton").addEventListener("click", () => {
        const usuario = document.querySelector("#ingresar").value.trim();
        const contraseña = document.querySelector("#confirmar").value.trim();

      
        fetch("https://raw.githubusercontent.com/cesarmcuellar/Elecciones/refs/heads/main/administrador.json")
            .then(response => response.json())
            .then(datos => {
                if (usuario === datos.username && contraseña === datos.password) {
                    alert("inicio de elecciones");
                    usuariosi = true;

                    document.querySelector("#inicio").style.display = "none";
                    document.querySelector("#ajustes").style.display = "block";
                    cargarCandidatos();
                } else {
                    alert("Datos incorrectos");
                }
            })
            
    });

    function cargarCandidatos() {
        if (!usuariosi) return;

        const elecSection = document.querySelector("#elec");
        elecSection.innerHTML = ""; 
        elecSection.style.display = "block";

        fetch("https://raw.githubusercontent.com/cesarmcuellar/Elecciones/refs/heads/main/candidatos.json")
            .then(response => response.json())
            .then(data => {
                candidatos = data; 
                candidatos.forEach(candidato => {
                    votos[candidato.ficha] = 0; 
                    elecSection.innerHTML += `
                        <div class="candidato">
                            <p>${candidato.curso}</p>
                            <img src="${candidato.foto}" alt="Foto de ${candidato.nombre}" class="fotoElecciones" data-ficha="${candidato.ficha}">
                            <p>${candidato.nombre} ${candidato.apellido}</p>
                            <p>Ficha: ${candidato.ficha}</p>
                        </div>
                    `;
                });

               
                document.querySelectorAll(".fotoElecciones").forEach(img => {
                    img.addEventListener("click", () => {
                        const ficha = img.getAttribute("data-ficha");
                        const confirmacion = confirm("esta seguro de votar. o no");
                        if (confirmacion) {
                            votos[ficha] += 1;
                            alert("voto registrado");
                        }
                    });
                });

                
                document.querySelector("#verResultados").addEventListener("click", () => {
                    mostrarResultados();
                });

               
                document.querySelector("#cerrar").addEventListener("click", () => {
                    mostrarResultados();
                    document.querySelector("#ajustes").style.display = "none";
                    document.querySelector("#elec").style.display = "none";
                });

               
                document.querySelector("#cerrar-sesion").addEventListener("click", cerrarSesion);
            })
            
    }

    function mostrarResultados() {
        const resultadosSection = document.querySelector("#resultados");
        resultadosSection.innerHTML = "<h2>resultados de las elecciones</h2>";
        let totalVotos = 0;
        let ganador = null;
        let maxVotos = 0;

        for (let ficha in votos) {
            const candidato = candidatos.find(c => c.ficha == ficha);
            resultadosSection.innerHTML += `
                <div class="resultado">
                    <p>${candidato.nombre} ${candidato.apellido} (${candidato.curso})</p>
                    <p>total de votos obtenidos: ${votos[ficha]}</p>
                </div>
            `;
            totalVotos += votos[ficha];
            if (votos[ficha] > maxVotos) {
                maxVotos = votos[ficha];
                ganador = candidato;
            }
        }

        resultadosSection.innerHTML += `
            <div class="resumen">
                <h3>Resumen Final</h3>
                <p>Total de votos emitidos: ${totalVotos}</p>
                ${ganador ? `<p><strong>Ganador:</strong> ${ganador.nombre} ${ganador.apellido} (${ganador.curso}) con ${maxVotos} votos.</p>` : "<p>No se emitieron votos.</p>"}
            </div>
        `;
    }

    function cerrarSesion() {
        usuariosi= false;
        votos = {};
        candidatos = [];
        document.querySelector("#inicio").style.display = "block";
        document.querySelector("#ajustes").style.display = "none";
        document.querySelector("#elec").style.display = "none";
        document.querySelector("#resultados").innerHTML = "";
        alert("cierrre de eleccione");
    }
});
