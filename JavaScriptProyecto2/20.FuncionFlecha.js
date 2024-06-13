const prompt = require('prompt-sync')(); // Importa el modulo 'prompt-sync' para leer la entrada del usuario de forma sincronica

const rush = (x, y) => {
    if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
        console.log("Los valores de x e y deben ser enteros positivos.");
        return;
    }

    const ancho = Math.max(x, 2);
    const topBottom = x === 1 ? '/' : `/${'*'.repeat(ancho - 2)}\\`;

    if (y > 0) {
        console.log(topBottom); // Imprime la parte superior del patron.

        if (y > 1) {
            const middle = x === 1 ? '*' : `*${' '.repeat(ancho - 2)}*`;
            for (let i = 0; i < y - 2; i++) {
                console.log(middle); // Imprime la parte media del patron.
            }
            console.log(x === 1 ? '\\' : `\\${'*'.repeat(ancho - 2)}/`); // Imprime la parte inferior invertida del patron.
        } else {
            console.log(x === 1 ? '' : `\\${'*'.repeat(ancho - 2)}/`); // Imprime la parte inferior del patron (sin linea media).
        }
    }
};

// Solicitar al usuario que ingrese el valor de x
const x = parseInt(prompt("Ingrese el valor de x (entero positivo): "));
// Solicitar al usuario que ingrese el valor de y
const y = parseInt(prompt("Ingrese el valor de y (entero positivo): "));

// Llamar a la funcion rush con los valores ingresados por el usuario
rush(x, y);
  
/*
V 1.0
Ings. Juan Corredor - Lizeth Victoria Franco
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa permite al usuario especificar las dimensiones (x e y) de un rectángulo y luego muestra este rectángulo como un patrón de caracteres en la consola.
*/