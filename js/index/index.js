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

var squareButton = document.querySelector(".square");
var triangleButton = document.querySelector(".triangle");
var circleButton = document.querySelector(".circle");
var fomrs = document.querySelectorAll('.formShape');
squareButton.addEventListener('click', () =>  {
    fomrs.forEach(form => {
        if (form.classList.contains('main_container_formSquare')) {
            form.classList.add('visible');
        } else {
            form.classList.remove('visible');
        }
    });
})
triangleButton.addEventListener('click', () =>  {
    fomrs.forEach(form => {
        if (form.classList.contains('main_container_formTriangle')) {
            form.classList.add('visible');
        } else {
            form.classList.remove('visible');
        }
    });
})
circleButton.addEventListener('click', () =>  {
    fomrs.forEach(form => {
        if (form.classList.contains('main_container_formCircle')) {
            form.classList.add('visible');
        } else {
            form.classList.remove('visible');
        }
    });
})
