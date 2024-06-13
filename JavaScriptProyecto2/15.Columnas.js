function makeSpaces(counter, limit) {
    // Funcion recursiva para imprimir espacios en blanco
    if (counter < limit) {
        process.stdout.write(" "); // Imprime un espacio en blanco en la salida estandar
        makeSpaces(counter + 1, limit); // Llama recursivamente a la funcion para imprimir mas espacios
    }
}

function makeA(counter, limit) {
    // Funcion recursiva para imprimir letras 'A'
    if (counter < limit) {
        process.stdout.write("A"); // Imprime la letra 'A' en la salida estandar
        makeA(counter + 1, limit); // Llama recursivamente a la funcion para imprimir mas letras 'A'
    }
}

function makeJump() {
    console.log(); // Imprime un salto de linea en la consola para avanzar a la siguiente linea
}

function makeSequence(row, quantityChar, quantitySpaces) {
    // Funcion recursiva para construir el patron de letras 'A'
    if (row < 8) { // Verifica si todavia estamos dentro del rango de filas deseadas
        makeSpaces(0, 27); // Imprime espacios en blanco al principio de la linea
        if (row === 4)
            makeA(0, quantityChar - 1); // Imprime la secuencia central de letras 'A' con una letra menos
        else
            makeA(0, quantityChar); // Imprime la secuencia de letras 'A' en la primera parte de la fila
        makeSpaces(0, quantitySpaces); // Imprime espacios en blanco entre las secuencias de letras 'A'
        makeA(0, quantityChar); // Imprime la segunda parte de la secuencia de letras 'A'
        makeJump(); // Imprime un salto de linea para pasar a la siguiente fila
        if (row < 4)
            makeSequence(row + 1, quantityChar + 1, quantitySpaces - 2); // Llama recursivamente para la siguiente fila (creciente)
        else
            makeSequence(row + 1, quantityChar - 1, quantitySpaces + 2); // Llama recursivamente para la siguiente fila (decreciente)
    }
}

function main() {
    makeSequence(1, 1, 5); // Llama a la funcion principal para iniciar la construccion del patron
}

main(); // Ejecuta la funcion principal


/*
Version del codigo: V 1.0
Autores: Jeronimo Mape - Juan Corredor
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este programa genera un patrón de letras 'A' en forma de pirámide, donde la cantidad de letras 'A' en cada fila aumenta hasta la mitad del patrón y luego disminuye de nuevo. 
Cada fila tiene una cantidad variable de espacios en blanco para crear la forma de pirámide. El patrón se muestra en la consola.
*/