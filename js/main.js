// Funcion que valida si ya existe un punto
function pointExist() {
    return true;
}

// Funcion que valida que solo ingresemos numeros
function validarNum(e) {
    // Obtenemos el codigo ascii
    var code = e.charCode;
    var textInput = e.originalTarget.value;
    console.log(e.newValue);
    // enviamos true si es punto
    if(code==46) {
        console.log(textInput);
        if (textInput.search('.')){
            return false;
        } else {
            return true;
        }
    // enviamos true si es un numero (estos se encuentran del 48 al 57)
    } else if(code>=48 && code<=57) {
        return true;
    // enviamos falso si es otro caracter
    } else{
        return false;
    }
}