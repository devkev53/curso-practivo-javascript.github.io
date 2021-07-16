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


// Validamos que nos encontremos en el archivo y enlace para marcarlo activo
var list = document.querySelectorAll('.header_navbar_container_link');
list.forEach(li => {
    if ( li.getAttribute('href')===("."+window.location.pathname)){
        if (li.classList.contains("logo")) {
            li.classList.remove('active');
        } else {
            li.classList.add("active")
        }
    } else {
        li.classList.remove('active');
    }
});

// Creamos la funcion de calcular descuento con los parametros a pasar
function caclcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (
    precio * porcentajePrecioConDescuento
    )/100;

    return precioConDescuento;
}

// Obtenemos la constante donde pintaremos el resultado
const result = document.getElementById("resultPrecio");

// Funcion que valida que los campos no se encuentren en blanco
function camposLlenos(precio, descuento) {
    if (isNaN(precio) || isNaN(descuento)) {
        return false
    } else {
        return true
    }
}

// Funcion que valida que el descuento no sea mayor o igual al 100%
function desucuentoMenorAl100(descuento) {
    if (descuento < 100) {
        return true
    } else {
        false
    }
}


// Realizamos la funcion que sirve para llamar al boton
function calcularPrecioDescuento() {
    
    // Obtenemos el precio
    let precio = parseFloat(document.getElementById("inputPrecio").value);
    // Obtenemos el descuento
    let descuento = parseFloat(document.getElementById("inputDescuento").value);
    // Validamos los campos esten llenos
    if (camposLlenos(precio, descuento)) {
        // Validamos que el descuento no sea mayor al 100%
        if (desucuentoMenorAl100(descuento)){
            let resultado = parseFloat(caclcularPrecioConDescuento(precio, descuento)).toFixed(2);
            let respuesta = 'El precio con descuento es de: <b>Q. ' + resultado + '</b>';

            result.classList.add("active")

            result.innerHTML = respuesta;
        } else {
            alert("No puede aplicar un descuento mayor o igual al 100%")
        }
    } else {
        alert("Debe Llenar los campos")
    };
}
