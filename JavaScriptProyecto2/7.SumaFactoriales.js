// Importar el modulo 'prompt-sync' para leer la entrada del usuario desde la terminal
const prompt = require('prompt-sync')();

// Definir una funcion para calcular la suma de los factoriales desde 0 hasta un numero entero positivo ingresado por el usuario
function calcularSumaFactoriales() {
    // Solicitar al usuario que ingrese un numero entero positivo para calcular su factorial
    let N = parseInt(prompt("Ingrese un numero entero positivo para calcular su factorial: "));

    // Validar que N sea un numero entero no negativo
    while (isNaN(N) || N < 0) {
        // Si el usuario ingresa un valor no valido, mostrar un mensaje de error y solicitar nuevamente el numero
        console.log("Debe ingresar un numero entero positivo. Intentelo de nuevo.");
        N = parseInt(prompt("Ingrese un numero entero positivo para calcular su factorial: "));
    }

    // Inicializar variables para almacenar la suma de los factoriales y el factorial actual
    let sumaFactoriales = 0;
    let factorial = 1;

    // Calcular la suma de los factoriales desde 0 hasta N
    for (let i = 0; i <= N; i++) {
        if (i > 0) {
            factorial *= i; // Calcular el factorial de i
        }
        sumaFactoriales += factorial; // Agregar el factorial actual a la suma total
    }

    // Mostrar el resultado de la suma de los factoriales
    console.log("La suma de los factoriales desde 0 hasta " + N + " es: " + sumaFactoriales);
}

// Llamar a la funcion para calcular la suma de los factoriales
calcularSumaFactoriales();

/*
V 1.0
Ing. Jerónimo Mape Soto - Sebastian Tamayo - JuanJose Corredor -  Daniel Ramirez Hernandez
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Imprime la suma de los factoriales de un numero entero y positivo
Salvedad: -0 no existe, si se ingresa devuelve 1 y lo toma como 0
*/