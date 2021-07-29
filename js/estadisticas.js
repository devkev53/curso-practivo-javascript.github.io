const lista = [53, 7, 8, 53, 1, 3, 53, 8, 4, 53, 3, 4, 5, 3, 7, 3, 9, 6, 12, 53, 25, 53]
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
    return promedioLista;
}

// ------------- FUNCION PARA LA MEDIANA  -----------

// Obtenemos la mitad de la lista
const mitadLista1 = (lista) => {
    console.log(lista);
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
        console.log("Es par")
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
        console.log("Es inpar")
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
    var objeto = {};
    lista.map(
        // Recibimos el elemento
        (elemento) => {
            // Verificamos que el elemento ya este en lista1Count
            if (objeto[elemento]) {
                objeto[elemento] += 1;
            } else {
                objeto[elemento] = 1;
            }
        }
    )
    return objeto;
}

const lista1Array = Object.entries(lista1Count).sort(
    // Eviamos los elementos los cuales se ordenaran con su numero y repetciones
    (a, b) => {
        return a[1] - b[1];
    }
)

const moda = lista1Array[lista1Array.length - 1];

function calcularModa(list) {
    return objetoLista(list);
}