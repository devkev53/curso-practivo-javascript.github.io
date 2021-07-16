var ultimoScroll = 0 ;
const cero = 0;
var body = document.querySelector('.body')
var width = window.innerWidth

var ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento = window.pageYOffset;
    if (ubicacionPrincipal < desplazamiento) {
        let width = window.innerWidth 
        if (width < 1024) {
            body.classList.add('scroll');
        }
    } else {
        body.classList.remove('scroll');
    }
    ubicacionPrincipal = desplazamiento;
}