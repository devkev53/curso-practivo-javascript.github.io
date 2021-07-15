console.log(window.innerWidth)
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
