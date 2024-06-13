const letra = 'P';
const inicioColumna = 0;
const finColumna = 12;
const altura = 7;

// Ciclo para recorrer las filas de la pirámide invertida
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
Hacer una piramide inversa en la posicion 0 de la columna 1 de la fila 1 y la finaliza en 13
Salvedad: Con los calculo en finColumna no me daba si le asignaba el valor 13 por los calculos
*/