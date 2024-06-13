function generarTernasEnteros() {
  let maximo = 9; // Establecemos el valor maximo para las ternas de enteros
  let contador = 1; // Inicializamos un contador que usaremos para generar las ternas

  // Iteramos desde 1 hasta el valor maximo definido (en este caso, 9)
  for (let i = 1; i <= maximo; i++) {
      // Calculamos el segundo numero de la terna
      let segundo = (contador - 1) % 3 + 1;
      // Calculamos el tercer numero de la terna
      let tercer = contador > 3 ? contador % 3 : contador;

      // Imprimimos la terna formada por i, segundo y tercer numero
      console.log(`${i} ${segundo} ${tercer}`);

      // Incrementamos el contador para generar la siguiente terna
      contador++;
  }
}

// Llamamos a la funcion para generar y mostrar las ternas de enteros
generarTernasEnteros();

/*
V 1.0
Ing. Jerónimo Mape Soto - Sebastian Tamayo - JuanJose Corredor -  Daniel Ramirez Hernandez
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Imprime una terna de numeros en un orden especifico, el cual tiene la logica empleada aqui
*/