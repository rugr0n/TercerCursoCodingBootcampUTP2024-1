const columnas = 15; // Define el numero de columnas en la pantalla para la animacion
const velocidad = 500; // Define la velocidad de la animación en milisegundos

function imprimirLetras() {
  let posicionA1 = 0; // Almacena la posicion del primer caracter "A" en la linea
  let posicionA2 = columnas - 1; // Almacena la posición del segundo carácter "A" en la línea

  const intervalo = setInterval(() => { // Configura un intervalo para ejecutar la animacion
    
    console.clear(); // Limpia la consola en cada iteracion del intervalo

    for (let i = 0; i < posicionA1; i++) { // Itera y agrega espacios antes del primer caracter "A"
      process.stdout.write(" ");
    }

    process.stdout.write("A"); // Escribe el primer caracter "A"

    for (let i = posicionA1 + 1; i < posicionA2; i++) { // Itera y agrega espacios entre los dos caracteres "A"
      process.stdout.write(" ");
    }
    process.stdout.write("A\n"); // Escribe el segundo caracter "A" seguido de un salto de linea

    posicionA1++; // Incrementa la posicion del primer caracter "A"
    posicionA2--; // Decrementa la posicion del segundo caracter "A"

    if (posicionA1 >= posicionA2) clearInterval(intervalo); // Detiene la animacion cuando las posiciones coinciden
  }, velocidad); // Configura la velocidad de la animacion
}

imprimirLetras(); // Inicia la animacion de imprimir letras


/*Version del codigo: V 1.0
Autores: Jeronimo Mape Soto - Juan Corredor
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este programa imprime un patrón de letras "A" que se estrecha gradualmente hacia el centro de la pantalla 
*/