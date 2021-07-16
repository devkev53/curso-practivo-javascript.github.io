// Capturamos los botones para llamar a la figura que desamos
var btnCircle = document.querySelector('.circle');
var btnSquare = document.querySelector('.square');
var btnTriangle = document.querySelector('.triangle');
// Capturando todos los formularios de las figuras
var shapes = document.querySelectorAll('.main_shapes_form');

// Funcion que valida que se halla seleccionado el formualrio correcto
function formShapeSelected(btn) {
    let shape = btn.classList[0]
    console.log(btn)
    shapes.forEach(form => {
        if (form.classList.contains(shape)) {
            form.classList.remove('hiden');
        } else {
            form.classList.add('hiden');
        }
    });
}

// Haciendo click en circulo
btnCircle.addEventListener('click', () => {
    btnCircle.classList.add('selected');
    btnSquare.classList.remove('selected');
    btnTriangle.classList.remove('selected');
    formShapeSelected(btnCircle);
})
// Haciendo click en cuadrado
btnSquare.addEventListener('click', () => {
    btnCircle.classList.remove('selected');
    btnSquare.classList.add('selected');
    btnTriangle.classList.remove('selected');
    formShapeSelected(btnSquare);
})
// Haciendo click en triangulo
btnTriangle.addEventListener('click', () => {
    btnCircle.classList.remove('selected');
    btnSquare.classList.remove('selected');
    btnTriangle.classList.add('selected');
    formShapeSelected(btnTriangle);
    //btnSquare.setAttribute('style', 'display:none');
})