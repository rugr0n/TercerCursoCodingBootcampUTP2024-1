const letra = 'P';
const inicioColumna = 34;
const finColumna = 46;
const altura = 7;

// Ciclo para recorrer las filas de la piramide invertida
for (let fila = 0; fila <= altura; fila++) {
    let linea = ''; // Inicializamos la linea como una cadena vacia

    // Ciclo para agregar espacios en blanco al inicio de cada fila
    for (let espacio = 0; espacio < fila * 2; espacio++) {
        linea += ' '; // Agregamos espacios en blanco segun el numero de la fila
    }

    // Ciclo para agregar las letras 'P' a la fila dentro del rango especificado
    for (let columna = inicioColumna; columna <= finColumna - fila * 2; columna++) {
        linea += letra + ' '; // Agregamos la letra 'P' seguida de un espacio
    }

    // Imprimir la linea completa
    console.log(linea);
}

/*
V 1.0
Ings. Jerónimo Mape Soto - Sebastian Tamayo - JuanJose Corredor -  Daniel Ramirez Hernandez
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Hacer una piramide inversa descendente con la letra P en mayus hasta desde la columna 34 hasta la columna 46 y hasta la fila 1
Salvedad: Se ve la piramide en el espacio 0 de la columna 1 de la fila 1, pero es por el espacio de la terminal
*/