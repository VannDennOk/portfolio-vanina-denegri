
/* MENU DESPLEGABLE RESPONSIVO */

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/* BOTON PARA IR ARRIBA CON EFECTO */

document.getElementById("btn-up").addEventListener("click", scrollUp);
function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 15));
    }
}

/* BOTON PARA IR ARRIBA QUE DESAPARECE AL ESCROLEAR PARA ABAJO */

btnUp = document.getElementById("btn-up");
window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    
    if (scroll > 500) {
        btnUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        btnUp.style.transform = "scale(0)";
    }
}