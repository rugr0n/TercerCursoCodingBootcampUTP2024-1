const prompt = require('prompt-sync')(); // Importa el modulo 'prompt-sync' para obtener entrada del usuario de forma sincrona.

function leerNumeros() {
    let numeros = [];
    let cantidadMayores150 = 0;
    let numeroMayor = -Infinity;
    let numeroMenor = Infinity;
    let cantidadNegativos = 0;
    let sumaPositivos = 0;
    let cantidadPositivos = 0;

    console.log("Ingrese 15 numeros diferentes de cero:");

    // Leer y validar cada numero ingresado por el usuario
    for (let i = 0; i < 15; i++) {
        let numero = parseFloat(prompt(`Numero ${i + 1}: `));

        // Validar que el numero sea diferente de cero
        while (numero === 0 || isNaN(numero)) {
            console.log("El numero debe ser diferente de cero y valido. Intentelo de nuevo.");
            numero = parseFloat(prompt(`Numero ${i + 1}: `));
        }

        numeros.push(numero);

        // Calcular estadisticas
        if (numero > 150) {
            cantidadMayores150++;
        }

        if (numero > numeroMayor) {
            numeroMayor = numero;
        }

        if (numero < numeroMenor) {
            numeroMenor = numero;
        }

        if (numero < 0) {
            cantidadNegativos++;
        }

        if (numero > 0) {
            sumaPositivos += numero;
            cantidadPositivos++;
        }
    }

    // Calcular promedio de numeros positivos
    let promedioPositivos = cantidadPositivos > 0 ? sumaPositivos / cantidadPositivos : 0;

    // Imprimir resultados
    console.log(`Cantidad de numeros mayores a 150: ${cantidadMayores150}`);
    console.log(`Numero mayor encontrado: ${numeroMayor}`);
    console.log(`Numero menor encontrado: ${numeroMenor}`);
    console.log(`Cantidad de numeros negativos: ${cantidadNegativos}`);
    console.log(`Promedio de los numeros positivos encontrados: ${promedioPositivos}`);
}

// Llamar a la funcion para comenzar la lectura de los numeros y calcular las estadisticas
leerNumeros();

/*
V 1.0
Ing. Jerónimo Mape Soto - Sebastian Tamayo - JuanJose Corredor -  Daniel Ramirez Hernandez
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
se ingresa desde el teclado un grupo de 15 números, diferentes a cero y al final imprime:
-Cantidad de números Mayores a 150.
-Número mayor y número menor encontrado en el grupo.
-Cantidad de Números negativos encontrados.
-Promedio de los Positivos Encontrados.
 */