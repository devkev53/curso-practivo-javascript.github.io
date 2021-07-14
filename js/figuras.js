/* -----------------------------------
                CUADRADO
----------------------------------- */
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado*lado
}

// Interactuando con el HTML
function calcularPerimetroCuadrado(){
    let lado = document.getElementById("inputCuadrado").value;
    let result = perimetroCuadrado(lado)
    $.alert({
        icon: "fad fa-square-full",
        title: 'Perimetro del Cuadrado',
        theme: 'modern',
        type: "purple",
        columnClass: "col-md-4 col-md-offset-4",
        content: perimetroCuadrado(lado)+" cm",
        typeAnimated:true,
    });
}
function calcularAreaCuadrado(){
    let lado = document.getElementById("inputCuadrado").value;
    $.alert({
        icon: "fad fa-square-full",
        title: 'Area del Cuadrado',
        theme: 'modern',
        type: "purple",
        columnClass: "col-md-4 col-md-offset-4",
        content: areaCuadrado(lado)+" cm^2",
        typeAnimated:true,
    });
}

/* -----------------------------------
                TIRANGULO
----------------------------------- */

// Funcion que calcula el perimetro
function perimetroTriangulo(l1, l2, base) {
    return l1 + l2 + base;
}
function isIsosceles(l1, l2, base) {
    if (l1 !== l2) {
        return false
    } else {
        return true
    }
}
// Funcion que calcula la altura del triangulo a partir de un isosceles
function alturaTriangulo(l1, base) {
    var altura = Math.sqrt((l1*l1)-((base*base)/4))
    return altura.toFixed(2);
}

// Funcion que calcula el area de un triangulo
function areaTriangulo(base, altura) {
    var area = ((base*altura) / 2)
    return area.toFixed(2);
}
// Interactuando con el HTML
function calcularPerimetroTriangulo() {
    let lado1 = parseFloat(document.getElementById("inputLadoUno").value);
    let lado2 = parseFloat(document.getElementById("inputLadoDos").value);
    let base = parseFloat(document.getElementById("inputLadoTres").value);
    $.alert({
        icon: "fad fa-triangle",
        title: 'Area del Triangulo',
        theme: 'modern',
        type: "purple",
        columnClass: "col-md-4 col-md-offset-4",
        content: '<p> El perimetro del Triangulo es: ' + perimetroTriangulo(lado1, lado2, base) + " cm</p>",
        typeAnimated:true,
    });
}
function calcularAreaTriangulo() {
    let lado1 = parseFloat(document.getElementById("inputLadoUno").value);
    let lado2 = parseFloat(document.getElementById("inputLadoDos").value);
    let lado3 = parseFloat(document.getElementById("inputLadoTres").value);
    console.log(isIsosceles(lado1, lado2, lado3))
    if (isIsosceles(lado1, lado2, lado3)===true) {
        let altura = alturaTriangulo(lado1, lado3) 
        $.alert({
            icon: "fad fa-triangle",
            title: 'Area del Triangulo',
            theme: 'modern',
            type: "purple",
            columnClass: "col-md-4 col-md-offset-4",
            content: '<p>El Area del Triangulo es: ' + areaTriangulo(lado3, altura) + 'cm^2</p>' +
            '<p>La Altura del Triangulo es: ' + altura + ' cm</p>' ,
            typeAnimated:true,
        });
    }else{
        $.confirm({
            title: 'Necesita Altura',
            theme: 'modern',
            content: '' +
                '<form action="" class="">' +
                '<div class="form-group jquery_confirm_form">' +
                '<label>Porfavor ingrese la Altura: ' +
                '<input type="number" placeholder="Altura" class="altura form-control" id="alturaTriangulo" required />' +
                '</div>' +
                '</form>',
                buttons: {
                    formSubmit: {
                        icon: "fas fa-sensor-alert",
                        text: 'Ok',
                        btnClass: 'btn-blue',
                        action: function () {
                            let altura = document.getElementById('alturaTriangulo').value;
                            $.alert({
                                icon: "fad fa-triangle",
                                title: 'Area del Triangulo',
                                theme: 'modern',
                                type: "purple",
                                columnClass: "col-md-4 col-md-offset-4",
                                content: '<p>El Area del Triangulo es: ' + areaTriangulo(lado3, altura) + 'cm^2</p>' +
                                '<p>La Altura del Triangulo es: ' + altura + ' cm</p>' ,
                                typeAnimated:true,
                            });
                        }
                    },
                    cancel: function () {
                        //close
                    },
                },
        })
    }
    console.log(alturaTriangulo(lado1, lado3));
}

/* -----------------------------------
                CIRCULO
----------------------------------- */

// Funcion que calcula el diametro del circulo
function diametroCirculo(radio) {
    let diamenetro = (radio*2) 
    return diamenetro.toFixed(2) 
}

// Funcion que calcula el perimetro del circulo
function perimetroCirculo(radio) {
    let result = (Math.PI * diametroCirculo(radio))
    return result.toFixed(2)
}

// Funcion que calcula el area del circulo
function areaCirculo(radio) {
    let result = (Math.PI * (radio*radio))
    return result.toFixed(2)
}

function calcularPerimetroCirculo() {
    let radio = parseFloat(document.getElementById("inputRadioCirculo").value);
    let perimetro = perimetroCirculo(radio);

    $.alert({
        icon: "fad fa-circle",
        title: 'Perimetro del Circulo',
        theme: 'modern',
        type: "purple",
        columnClass: "col-md-4 col-md-offset-4",
        content: '' + 
            '<p> El perimetro del Curculo es: ' + perimetro + ' cm</p>' +
            '<p> El Diametro del Curculo es: ' + diametroCirculo(radio) + ' cm</p>',
        typeAnimated:true,
    });
}

function calcularAreaCirculo() {
    let radio = parseFloat(document.getElementById("inputRadioCirculo").value);
    let area = areaCirculo(radio);

    $.alert({
        icon: "fad fa-circle",
        title: 'Area del Circulo',
        theme: 'modern',
        type: "purple",
        columnClass: "col-md-4 col-md-offset-4",
        content: '' + 
            '<p> El perimetro del Curculo es: ' + area + ' cm^2</p>' +
            '<p> El Diametro del Curculo es: ' + diametroCirculo(radio) + ' cm</p>',
        typeAnimated:true,
    });
}
