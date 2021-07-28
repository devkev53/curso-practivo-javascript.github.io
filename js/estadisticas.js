const lista = [150, 100, 200, 300, 500, 250, 75, 350]
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
const mitadLista1 = parseInt(lista.length / 2);

// Funcion que valida que sea un numero par
function isPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (isPar(lista.length)) {
    // Necesitamos 2 elementos
    // -> El promedio
    // -> La mediana
} else {
    mediana = lista[mitadLista1];
    // Posicion de adentro de la mitad de la lista
    // -> Mediana
}