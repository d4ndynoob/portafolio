window.addEventListener("load", function(){
    this.document.getElementById("preloader").classList.toggle("loader2")
})

let desplazamientoActual
let ubicacionPrincipal = window.pageYOffset;
window.addEventListener("scroll", function () {     
    desplazamientoActual = window.pageYOffset
    
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementById("hero__container").style.top = "0px"
    } else{
        document.getElementById("hero__container").style.top = "-100px"
    }

    if(desplazamientoActual > 80){
        this.document.getElementById("hero__container").classList.add("hero__container--aplicar")
        this.document.getElementById("scrollUp").classList.remove("scroll-up--hide")

    } else{
        this.document.getElementById("hero__container").classList.remove("hero__container--aplicar")
        this.document.getElementById("scrollUp").classList.add("scroll-up--hide")
    }

    ubicacionPrincipal = window.pageYOffset;
})

const typed = new Typed('.typed', {
    strings: ['Desarrollador Web','Web Developer'],
    typeSpeed: 120,
    backSpeed: 120,     // milisegundos para remover una letra
    backDelay: 1500,     // tiempo de espera despues de que termina de escribir una palabra
    loop: true,     // se repite
    showCursor: true,    // muestra el cursor
    cursorChar: '|'     // cambia el tipo de cursor
});

const typedSobreMi = new Typed('.typedSobreMi', {
    strings: ['Daniel Solís'],
    typeSpeed: 120,
    backSpeed: 120,     // milisegundos para remover una letra
    backDelay: 1500,     // tiempo de espera despues de que termina de escribir una palabra
    loop: true,     // se repite
    showCursor: true,    // muestra el cursor
    cursorChar: '|'     // cambia el tipo de cursor
});

const typedCargando = new Typed('.cargando', {
    strings: ['Cargando'],
    typeSpeed: 50,
    backSpeed: 50,     // milisegundos para remover una letra
    backDelay: 200,     // tiempo de espera despues de que termina de escribir una palabra
    loop: true,     // se repite
    showCursor: true,    // muestra el cursor
    cursorChar: ''     // cambia el tipo de cursor
});