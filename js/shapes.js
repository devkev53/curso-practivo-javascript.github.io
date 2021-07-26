// Funcion que enviara la respuesta por alert
function sendResponse(i, t, v) {
    $.alert({
        icon: i,
        title: t,
        theme: 'supervan',
        content: v,
    });
}
// Funcion que calcula el perimetro del cuadrado
function perimetroCuadrado(v) {
    return perimetro = v*4
}
//Funcion que calcula el area del cuadrado
function areaCuadrado(v) {
    return perimetro = v*v
}
/* -------------- Interactuando con el HTML del Cuadrado ---------------- */

// Funcion que muestra el Perimetro del Cuadrado por un alert
function calcularPerimetroCuadrado() {
    var side = document.getElementById('inputSquare').value;
    p = perimetroCuadrado(parseFloat(side))
    sendResponse('fad fa-square-full', 'Perimetro', ('El perimetro es: '+p+'cm'))
}
// Funcion que muestra el Area del Cuadrado por un alert
function calcularPerimetroArea() {
    var side = document.getElementById('inputSquare').value;
    a = areaCuadrado(parseFloat(side))
    sendResponse('fad fa-square-full', 'Area', ('El area es: '+a+'cm^2'))
}

/* -------------------------------------------------------
                        CIRCULO
------------------------------------------------------- */
// Funcion que calcula el perimetro del circulo
const pi = Math.PI
function perimetroCirculo(v) {
    var d = v*2;
    var p = (2*pi)*v;
    var response = '<p>El perimetro es: ' + p.toFixed(2) + 'cm</p>' +
        '<p>El diametro es: '+ d.toFixed(2) +'cm</p>';
    return response;
}
//Funcion que calcula el area del Circulo
function areaCirculo(v) {
    var d = v*2;
    var a = (v*v)*pi;
    var response = '<p>El area es: ' + a.toFixed(2) + 'cm^2</p>' +
        '<p>El diametro es: '+ d.toFixed(2) +'cm</p>';
    return response;
}

/* -------------- Interactuando con el HTML del Circulo ---------------- */

// Funcion que muestra el Perimetro del Circulo por un alert
function calcularPerimetroCirculo() {
    var radio = document.getElementById('inputCirculo').value
    var value = perimetroCirculo(parseFloat(radio));
    console.log(value);
    sendResponse('fad fa-circle','Perimetro', value)
}
// Funcion que muestra el Area del Circulo por un alert
function calcularAreaCirculo() {
    var radio = document.getElementById('inputCirculo').value
    var value = areaCirculo(parseFloat(radio));
    console.log(value);
    sendResponse('fad fa-circle','Perimetro', value)
}