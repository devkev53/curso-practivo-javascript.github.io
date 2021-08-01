// Funcionalidad con el HTML
var miList = []

var inputNumber = document.getElementById('inputNumber');
var miListaHtml = document.getElementById('miLista');
var respPromedio = document.querySelector('.respPromedio');
var respMediana = document.querySelector('.respMediana');
var respModa = document.querySelector('.respModa');

// Evento para capturar los teclasos enter para agregar a la lista
inputNumber.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        sendToList();
    }
});

// Funcion para agregar a la lista los numeros del input
function sendToList() {
    if (isNaN(parseFloat(inputNumber.value))) {
        return false;
    } else {
        miList.push(parseFloat(inputNumber.value));
        miListaHtml.innerText = miList;
        inputNumber.value = "";
        inputNumber.focus();
    }
    
}

// Funcion para mostar en el html las respuestas
function calcularEstadisticas() {
    console.log(miList.length);
    if (miList.length === 0) {
        miListaHtml.innerText = "Tu lista se encuentra vacia..!";
    } else {
        let media = calcularMediaAritmetica(miList);
        let mediana = calcularMediana(miList);
        let moda = calcularModa(miList);
        let btnReiniciar = document.querySelector(".nuevoBtn");
        document.querySelector('.respuestas').classList.add
        respPromedio.innerHTML = "El Promedio tu Lista es: <b>" + media + "</b>";
        respMediana.innerHTML = "La Mediana de tu Lista es: <b>" + mediana + "</b>";
        respModa.innerHTML = "La Moda de tu Lista es: <b>" + moda + "</b>";
        btnReiniciar.classList.remove("disabled");
        btnReiniciar.removeAttribute("disabled");
    }
}

function reiniciarVariables() {
    let btnReiniciar = document.querySelector(".nuevoBtn");
    miList = [];
    respPromedio.innerHTML = "";
    respMediana.innerHTML = "";
    respModa.innerHTML = "";
    miListaHtml.innerText = miList;
    btnReiniciar.classList.add("disabled");
    btnReiniciar.setAttribute("disabled");
}
// ------------- FUNCION PARA LA MEDIA ARITMETICA -----------

// Calcular promedio o media aritmetica
function calcularMediaAritmetica(lista) {
    // Creamos una variable que con el metodo reduce sume los
    // valores de la lista
    const sumaLista = lista.reduce(
        // Reduce recibe una funcion, se uso una arrow function
        (valorAcumulado = 0, nuevoElemento) => {
            // Valor acumulado es la suma y al inicio es 0 y nuevo 
            //elemento es cada uno de la lista
            return valorAcumulado = valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista.toFixed(2);
}

// ------------- FUNCION PARA LA MEDIANA  -----------

// Obtenemos la mitad de la lista
const mitadLista1 = (lista) => {
    return parseInt(lista.length / 2)
};

// Funcion que valida que sea un numero par
function isPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let getMediana = (lista) => {
    var mediana
    if (isPar(lista.length)) {
        const elemento1 = lista[mitadLista1(lista) - 1];
        const elemento2 = lista[mitadLista1(lista)];

        const promedio = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
        mediana = promedio;
        // Necesitamos 2 elementos
        // -> El promedio
        // -> La mediana
    } else {
        mediana = lista[mitadLista1(lista)];
        // Posicion de adentro de la mitad de la lista
        // -> Mediana
    }
    return mediana
};

// Funcion que ordena una lista numerica
function ordenarLista(lista) {
    newLista = lista.sort((a, b) => a - b);
    return newLista;
}
// Funcion que calcula la mediana de una lista proporcionada
function calcularMediana(lista) {
    var listaOrdenada = ordenarLista(lista);
    return getMediana(listaOrdenada);
}

// ------------- FUNCION PARA LA MODA  -----------

const lista1Count = {};

// Funcion que nos ordeanara un objeto con su numero y repetciones de cada uno
objetoLista = (lista) => {
    lista.map(
        // Recibimos el elemento
        (elemento) => {
            // Verificamos que el elemento ya este en lista1Count
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    )
    return lista1Count;
}

const lista1Array = (list) => {
    return Object.entries(lista1Count).sort(
        // Eviamos los elementos los cuales se ordenaran con su numero y repetciones
        (a, b) => {
            return a[1] - b[1];
        }
    )
}

const moda = lista1Array[lista1Array.length - 1];

function calcularModa(list) {
    let listaEnObjeto = objetoLista(list);
    let listadoEnArray = lista1Array(listaEnObjeto);
    let moda = listadoEnArray[listadoEnArray.length - 1]
    return moda;
}