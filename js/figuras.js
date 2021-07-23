// Capturamos los botones para llamar a la figura que desamos
var btnCircle = document.querySelector('.btnCirculo');
var btnSquare = document.querySelector('.btnCuadrado');
var btnTriangle = document.querySelector('.btnTriangulo');
// Capturando todos los formularios de las figuras
var shapes = document.querySelectorAll('.main_shapes_form');

// Haciendo click en circulo
btnCircle.addEventListener('click', () => {
    btnCircle.classList.add('selected');
    btnSquare.classList.remove('selected');
    btnTriangle.classList.remove('selected');
})
// Haciendo click en cuadrado
btnSquare.addEventListener('click', () => {
    btnCircle.classList.remove('selected');
    btnSquare.classList.add('selected');
    btnTriangle.classList.remove('selected');
})
// Haciendo click en triangulo
btnTriangle.addEventListener('click', () => {
    btnCircle.classList.remove('selected');
    btnSquare.classList.remove('selected');
    btnTriangle.classList.add('selected');
})
// Programando la respuestas
function sendPerimetro(p) {
    $.alert({
        title: 'Perimetro',
        content: p,
        type: 'blue',
        theme: 'supervan',
        typeAnimated: true,
    });
}
function sendArea(a) {
    $.alert({
        title: 'Area',
        content: a, 
        type: 'blue',
        theme: 'supervan',
        typeAnimated: true,
    });
}
function sendError() {
    $.alert({
        columnClass: 'small',
        icon: 'fas fa-exclamation-square',
        title: 'Error',
        content: 'Debe de llenar los campos con datos validos..!', 
        type: 'red',
        theme: 'modern',
        typeAnimated: true,
    });
}
/* ----------------------------------------------------
  +-+-+-+- HACIENDO LOS CALCULOS MATEMATICOS -+-+-+-+
---------------------------------------------------- */

/* ------------ Cuadrado ------------ */
// Funcion que calcula el perimetro de un cuadrado
function perimetroCuadrado(l) {
    perimetro = l * 4;
    return "El perimetro del cuadrado es: <b>" + perimetro + "cm</b>"; 
}
// Funcion que calcula el area de un cuadrado
function areaCuadrado(l) {
    area = l * l;
    return "El area del cuadrado es: <b>" + area + "cm^2</b>"; 

}
// Interactuando con el HTML
function calcularPerimetroCuadrado() {
    let lado = document.getElementById('inputCuadrado');
    if (parseFloat(lado.value)) {
        console.log(typeof(parseFloat(lado.value)));
        if (parseFloat(lado.value)>0) {
            console.log('Numero');
            let perimetro = perimetroCuadrado(parseFloat(lado.value));
            sendPerimetro(perimetro);
        }
    }else {
        console.log(typeof(parseFloat(lado.value)));
        sendError()
        lado.value = '';
        return false;
    }
    lado.value = '';
}
function calcularAreaCuadrado() {
    let lado = document.getElementById('inputCuadrado');
    if (parseFloat(lado.value)) {
        console.log(typeof(parseFloat(lado.value)));
        if (parseFloat(lado.value)>0) {
            console.log('Numero');
            let perimetro = areaCuadrado(parseFloat(lado.value));
        sendArea(perimetro);
        }
    }else {
        console.log(typeof(parseFloat(lado.value)));
        sendError()
        lado.value = '';
        return false;
    }
    lado.value = '';
}
/* ------------ Circulo ------------ */
// Obteniendo PI
const pi = Math.PI;
// funcion que calcula el perimetro del circulo
function diametroCirculo(r) {
    return diametro = r * 2;
}
// funcion que calcula el perimetro del circulo
function perimetroCirculo(r) {
    var diametro = diametroCirculo(r);
    var perimetro2 = pi * diametro;
    perimetro2 = perimetro2.toFixed(2);
    return "El perimetro del circulo es: <b>" + perimetro2 + "cm</b>"; 
}

// Interactuando con el HTML
function calcularPerimetroCirculo() {
    let radio = document.getElementById('inputRadio');
    if (parseFloat(radio.value)) {
        console.log(typeof(parseFloat(radio.value)));
        if (parseFloat(radio.value)>0) {
            console.log('Numero');
            let perimetro = perimetroCirculo(parseFloat(radio.value));
            sendPerimetro(perimetro);
        }
    }else {
        console.log(typeof(parseFloat(radio.value)));
        sendError()
        radio.value = '';
        return false;
    }
    radio.value = '';    
}
