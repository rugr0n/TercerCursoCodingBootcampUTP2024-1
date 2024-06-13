function generarParejasEnteros() {
    let maximo = 9; // Maximo valor para las parejas de numeros

    // Ciclo que recorre desde 0 hasta el valor maximo
    for (let i = 0; i <= maximo; i++) {
        let pareja; // Variable para almacenar la pareja correspondiente a cada numero

        // Se verifica si el numero es par o impar
        if (i % 2 === 0) {
            pareja = i / 2; // Si es par, la pareja es la mitad del numero
        } else {
            pareja = (i - 1) / 2 + 1; // Si es impar, se ajusta el calculo para formar la secuencia de parejas
        }

        // Se imprime el indice y su pareja correspondiente
        console.log(i + " " + pareja);
    }
}

// Llamada a la funcion para generar las parejas de enteros
generarParejasEnteros();

/*
V 1.0
Ing. Jerónimo Mape Soto - Sebastian Tamayo - JuanJose Corredor -  Daniel Ramirez Hernandez
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Imprime una pareja de numeros en un orden especifico, el cual tiene la logica empleada aqui
*/