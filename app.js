
const formulario = document.getElementById("formLecturas");

const selectorTema = document.getElementById("tema");

const resultado = document.getElementById("resultado");

const tarjetas = document.querySelectorAll(".tarjeta");

function resaltarTarjeta(tema) {
    tarjetas.forEach(function (tarjeta) {
        tarjeta.classList.toggle("destacada", tarjeta.dataset.tema === tema);
    });
}

selectorTema.addEventListener("change", function () {
    resaltarTarjeta(selectorTema.value);
});

formulario.addEventListener("submit", recomendarLectura);

function recomendarLectura(evento) {

    evento.preventDefault();

    const tema = selectorTema.value;

    if (tema === "") {
        resultado.textContent = "Debes seleccionar una corriente filosófica.";
        resultado.classList.add("error");
        selectorTema.focus();
        return;
    }

    resultado.classList.remove("error");

    let recomendacion = "";

    if (tema === "realismo") {
        recomendacion = "Después de la finitud, de Quentin Meillassoux.";

    } else if (tema === "aceleracionismo") {
        recomendacion = "Fanged Noumena, de Nick Land.";

    } else if (tema === "hauntologia") {
        recomendacion = "Los fantasmas de mi vida, de Mark Fisher.";

    } else {
        recomendacion = "No hay ninguna lectura asociada a esa opción.";
    }

    resultado.textContent = "Lectura recomendada: " + recomendacion;
}