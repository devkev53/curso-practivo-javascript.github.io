const resultadoHtml = document.getElementById('resultPrecio');
var porcent = document.getElementById('inputPorcent');
const price = document.getElementById('inputPrice');

function valNum(e) {
    var dato = parseFloat(porcent.value);
    if (dato >= 100) {
        alert('El descuento no puede ser mayor o igual al 100%')
        dato = String(dato)
        dato = dato.substring(0, dato.length - 1);
        porcent.value = dato;
    }
}

function descuento() {
    var price = parseFloat(document.getElementById('inputPrice').value);
    var desc = parseFloat(document.getElementById('inputPorcent').value);
    var porcentajeDescuento = 100 - desc;
    var newPrice = (price * porcentajeDescuento) / 100;
    if (isNaN(newPrice)) {
        alert('Verifica los datos ingresados..!')
        return false
    } else if (newPrice <= 0) { 
        alert('Verifica los datos ingresados..!')
        return false
    }
    return newPrice.toFixed(2);
}


function calcularDescuento() {
    var newPrice = descuento();
    var response = '<h3>El nuevo precio es de: <b>' +
        newPrice +'</b></h3>'
    if (newPrice) {
        resultadoHtml.innerHTML = response
    } else {
        return false
    }
    
}