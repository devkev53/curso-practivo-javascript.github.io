const resultadoHtml = document.getElementById('resultPrecio');
var porcent = document.getElementById('inputPorcent');
const price = document.getElementById('inputPrice');
var cupon = document.getElementById('inputCupon');
var valueCupon = document.getElementById('inputCupon').value;
var btnCupon = document.getElementById('cuponBtn');
var form = document.querySelector('.formCalcular');
var forCupon = false;
const coupons = [
    {
        name:"JuanDC_es_Batman",
        discount: 15,
    },
    {
        name:"pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name:"es_un_secreto",
        discount: 25,
    }
];

const  isCouponValueValid = function(c) {
    return c.name === cupon.value;
}

function userCoupon() {
    return cuponValue = coupons.find(isCouponValueValid);
}



btnCupon.addEventListener('click', () => {
    btnCupon.classList.toggle('active');
    form.classList.toggle('cupon');
    forCupon = true;
});

function valNum(e) {
    var dato = parseFloat(porcent.value);
    if (dato >= 100) {
        alert('El descuento no puede ser mayor o igual al 100%')
        dato = String(dato)
        dato = dato.substring(0, dato.length - 1);
        porcent.value = dato;
    }
}

function descuento(desc) {
    var price = parseFloat(document.getElementById('inputPrice').value);
    var porcentajeDescuento = 100 - parseFloat(desc);
    var newPrice = (price * porcentajeDescuento) / 100;
    console.log("Tipo: " + typeof(newPrice)+" Valor: "+ newPrice)
    if (isNaN(newPrice)) {
        alert('Verifica los datos ingresados..!')
        return false
    } else if (newPrice <= 0) { 
        alert('Verifica los datos ingresados..!')
        return false
    }
    return newPrice.toFixed(2);
}

function descuentoConCupon(cupon) {
    if (isNaN(price.value)) {
        alert('Llego Aqui.!')
        alert('Verifica los datos ingresados..!');
        return false;
    } else {
        return descuento(cupon.discount)   
    } 
}

function calcularDescuento() {
    var newPrice;
    var desc;
    if (forCupon) {
        if (!userCoupon()) {
            alert("El cupon "+ valueCupon +" no es valido..!")
        } else {
            discount = userCoupon();
            newPrice = descuentoConCupon(discount);
        }
    } else {
        desc = parseFloat(document.getElementById('inputPorcent').value);
        newPrice = descuento(desc);
    }
    var response = '<h3>El nuevo precio es de: <b>' +
        newPrice +'</b></h3>'
    if (newPrice) {
        resultadoHtml.innerHTML = response
    } else {
        return false
    }
    
}