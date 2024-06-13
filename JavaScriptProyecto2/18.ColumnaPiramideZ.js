function imprimirPatron(filas) {
    // Iterar sobre cada fila del patrón en orden descendente
    for (let i = filas; i >= 1; i--) {
        // Imprimir espacios en blanco antes de la primera 'z'
        for (let j = 1; j < i * 2; j++) {
            process.stdout.write(" ");
        }
        // Imprimir la primera 'z'
        process.stdout.write("z");

        // Imprimir espacios en blanco entre las 'z'
        for (let k = 2; k <= (filas - i) * 4; k++) {
            process.stdout.write(" ");
        }

        // Imprimir la segunda 'z', excepto en la última fila
        if (i < filas) {
            process.stdout.write("z");
        }

        // Salto de línea para pasar a la siguiente fila
        console.log();
    }
}

// Llamar a la función para imprimir el patrón con 10 filas
imprimirPatron(10);


/*
V 1.0
Ings. Jerónimo Mape - Juan Corredor
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Genera un rombo con las letras z en un determinado espacio en la consola
Programa que imprime una piramide (^) con las letras Z en la consola
*/