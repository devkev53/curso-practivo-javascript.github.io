// Funcion que enviara la respuesta por alert
function sendResponse(i, t, v) {
    $.alert({
        icon: i,
        title: t,
        theme: 'supervan',
        content: v,
    });
}
/* -------------------------------------------------------
                        CUADRADO
------------------------------------------------------- */
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
/* -------------------------------------------------------
                        TRIANGULO
------------------------------------------------------- */
// Creamos un evento para ver el cambio al seleccionar tipo de tringulo
var triangle = document.getElementById('tipoTriangle')
triangle.addEventListener('change', () => {
    var type = document.getElementById('tipoTriangle').value
    if (type==='2'){
        console.log('Es un isoceles')
        document.querySelector('.uno').setAttribute('style', 'display:flex')
        document.querySelector('.dos').setAttribute('style', 'display:none')
    } else if (type==='3') {
        document.querySelector('.uno').setAttribute('style', 'display:flex')
        document.querySelector('.dos').setAttribute('style', 'display:flex')
    } else {
        document.querySelector('.uno').setAttribute('style', 'display:none')
        document.querySelector('.dos').setAttribute('style', 'display:none')
    }
});
// Funcion que calcula el perimetro de un triangulo
function perimetroTriangulo(a, c, b, type) {
    var response
    console.log(a, c, b)
    if (type==='1') {
        response = 'El perimetro es: ' + b*3 + 'cm';
    } else if (type==='2') {
        response = 'El perimetro es: ' + ((a*2)+b) + 'cm';
    } else {
        response = 'El perimetro es: ' + (a+c+b) + 'cm';
    }
    return response
}
// Funcion solicitando la altura del triangulo
function alturaTriangulo (base) {
    var a
    $.confirm({
        title: 'Altura Triangulo',
        theme: 'supervan',
        content:'' +
        '<form action="" class="formName">' +
        '<div class="form-group">' +
        '<label>Ingresa la Altura de tu triangulo</label>' +
        '<input id="alturaTriangulo" type="number" placeholder="" class="name form-control" required />' +
        '</div>' +
        '</form>',
        buttons: {
            formSubmit: {
                text: 'Ok',
                btnClass: 'btn-blue',
                action: function () {
                    a = this.$content.find('.name').val();
                    var area = areaTriangulo(base, parseFloat(a))
                    sendResponse('fad fa-triangle', 'Base', area)
                }
            },
            cancel: function () {
                //close
            },
        },
    })
    return a;
}
// Funcion que calcula el perimetro de un triangulo
function perimetroTriangulo(a, c, b, type) {
    var response
    console.log(a, c, b)
    if (type==='1') {
        response = 'El perimetro es: ' + b*3 + 'cm';
    } else if (type==='2') {
        response = 'El perimetro es: ' + ((a*2)+b) + 'cm';
    } else {
        response = 'El perimetro es: ' + (a+c+b) + 'cm';
    }
    return response
}

// Funcion que calcula el area de un triangulo
function areaTriangulo(base, altura) {
    console.log(base, altura);
    var response = 'El area es: ' + base*altura + 'cm^2';
    return response
}

/* -------------- Interactuando con el HTML del Triangulo ---------------- */

// Funcion que muestra el Perimetro del Triangulo por un alert
function calcularPerimetroTriangulo() {
    var sideA = document.getElementById('sideA')
    var sideB = document.getElementById('sideB')
    var base = document.getElementById('base')
    var type = document.getElementById('tipoTriangle').value 
    p = perimetroTriangulo(parseFloat(sideA.value), parseFloat(sideB.value),
        parseFloat(base.value), type);
    sendResponse('fad fa-triangle', 'Perimetro', p)
}

function calcularAlturaTriangulo() {
    var base = document.getElementById('base')
    alturaTriangulo(parseFloat(base.value));
}