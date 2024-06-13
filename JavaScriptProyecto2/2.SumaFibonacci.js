function fibonacciSum() {
    let fib1 = 0; // Primer numero de Fibonacci
    let fib2 = 1; // Segundo numero de Fibonacci
    let fibNext = 0; // Variable para calcular el siguiente numero de Fibonacci
    let sum = 1; // Variable para almacenar la suma de los numeros de Fibonacci

    console.log("Numeros de Fibonacci en el rango de 0 a 100:");

    // Generamos la serie de Fibonacci hasta que el siguiente numero sea mayor que 100
    while (fibNext <= 100) {
        // Si el numero de Fibonacci actual esta en el rango de 0 a 100, lo sumamos
        if (fibNext >= 0 && fibNext <= 100) {
            console.log(fibNext); // Mostramos el numero de Fibonacci actual
            sum += fibNext; // Sumamos el numero a la suma total
        }
        // Calculamos el siguiente numero de Fibonacci sumando los dos anteriores
        fibNext = fib1 + fib2;
        // Actualizamos los dos numeros anteriores para la proxima iteracion
        fib1 = fib2;
        fib2 = fibNext;
    }

    // Imprimimos la suma de los numeros de Fibonacci en el rango de 0 a 100
    console.log("La suma de los elementos de la serie de Fibonacci entre 0 y 100 es:", sum);
}

// Llamamos a la funcion para obtener la suma de los elementos de la serie de Fibonacci
fibonacciSum();


/*
V 1.0
Ing. Jerónimo Mape Soto - Sebastian Tamayo - JuanJose Corredor -  Daniel Ramirez Hernandez
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Impresion de la suma de los numeros de fibonacci de 0 a 100
*/