const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const cerrarFuera = document.querySelector("#cerrarFuera");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

cerrarFuera.addEventListener("click", () => {
    nav.classList.remove("visible");
})

