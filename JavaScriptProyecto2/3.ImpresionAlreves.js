const prompt = require('prompt-sync')(); // Importa el modulo 'prompt-sync' para obtener entrada del usuario de forma sincrona.

function reverseNumber() {
    // Leer el numero ingresado
    const number = parseInt(prompt(`Ingrese un numero entero: `));

    // Verificar si la entrada es un numero entero valido
    if (isNaN(number)) {
        console.log("Entrada invalida. Por favor, ingrese un numero entero valido.");
        return;
    }

    // Convertir el numero a una cadena y revertir la cadena
    const reversedNumber = Math.abs(number).toString().split('').reverse().join('');

    // Imprimir el numero al revus
    console.log("El numero al reves es: " + (number < 0 ? '-' : '') + reversedNumber);
}

// Llamar a la funcion para leer un numero entero y imprimirlo al reves
reverseNumber();


/*
V 1.0
Ing. Jerónimo Mape Soto - Sebastian Tamayo - JuanJose Corredor -  Daniel Ramirez Hernandez
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Se ingresa un numero entero y lo imprima al reves.
salvedad: si se ingresa -0 devuelve 0 ya que no exste -0
*/