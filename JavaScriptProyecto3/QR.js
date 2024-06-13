<<<<<<< HEAD
function generateQR1() {
  let verticalLimit = 29;
  let horizontalLimit = 29;
  let blackOrWhite = 0;
  let whiteSquareCount = "";

  // Print column indices in the first row
  let columnIndex = "   ";
  let columnPoints = "  ";
  for (let i = 0; i <= horizontalLimit; i++) {
    if (i >= 10 && i < 20) {
      columnIndex += i - 10;
    } else if (i >= 20) {
      columnIndex += i - 20;
    } else {
      columnIndex += i;
    }
  }
  for (let i = 0; i <= horizontalLimit + 2; i++) {
    if (i == 0 || i == 31) {
      columnPoints += "+";
    } else {
      columnPoints += "-";
    }
  }
  console.log(columnIndex);
  console.log(columnPoints);

  for (let row = 0; row <= verticalLimit; row++) {
    let qrRow = "";

    // Print the row index in the first column
    if (row >= 10) {
      qrRow += row + "|";
    } else {
      qrRow += row + " |";
    }

    for (let col = 0; col <= horizontalLimit; col++) {
      if (col == 0 || col == horizontalLimit || row == horizontalLimit || row == 0) {
        qrRow += String.fromCharCode(32);
      } else if (col >= 21 && col <= 28 && row <= 7 && row >= 1) {
        blackOrWhite = Math.round(Math.random());
        if (whiteSquareCount >= 24) {
          qrRow += String.fromCharCode(9608);
        } else if (blackOrWhite == 1) {
          qrRow += String.fromCharCode(9608);
        } else {
          qrRow += String.fromCharCode(32);
          whiteSquareCount++;
        }
      } else if ((row == 6 && col == 2) || col == 4 || col == 25) {
        qrRow += String.fromCharCode(9608);
      } else {
        blackOrWhite = Math.round(Math.random());
        if (blackOrWhite == 1) {
          qrRow += String.fromCharCode(9608);
        } else {
          qrRow += String.fromCharCode(32);
        }
      }
    }
    if (row >= 10) {
      qrRow += "|" + row;
    } else {
      qrRow += "| " + row;
    }

    console.log(qrRow);
  }

  let bottomColumnIndex = "   ";
  let bottomColumnPoints = "  ";
  for (let i = 0; i <= horizontalLimit; i++) {
    if (i >= 10 && i < 20) {
      bottomColumnIndex += i - 10;
    } else if (i >= 20) {
      bottomColumnIndex += i - 20;
    } else {
      bottomColumnIndex += i;
    }
  }
  for (let i = 0; i <= horizontalLimit + 2; i++) {
    if (i == 0 || i == 31) {
      bottomColumnPoints += "+";
    } else {
      bottomColumnPoints += "-";
    }
  }
  console.log(bottomColumnPoints);
  console.log(bottomColumnIndex);
}

function generateQR2() {
  let verticalLimit = 29;
  let horizontalLimit = 29;
  let blackOrWhite = 0;
  let whiteSquareCount = "";
  let blackSquareCount = "";

  // Print column indices in the first row
  let columnIndex = "\n  |";
  let columnPoints = "  ";
  for (let i = 0; i <= horizontalLimit; i++) {
    if (i >= 10 && i < 20) {
      columnIndex += i - 10 + "|";
    } else if (i >= 20) {
      columnIndex += i - 20 + "|";
    } else {
      columnIndex += i + "|";
    }
  }
  for (let i = 0; i <= horizontalLimit * 2 + 2; i++) {
    columnPoints += "+";
  }
  console.log(columnIndex);
  console.log(columnPoints);

  for (let row = 0; row <= verticalLimit; row++) {
    let qrRow = "";

    // Print the row index in the first column
    if (row >= 10) {
      qrRow += row + "|";
    } else {
      qrRow += row + " |";
    }

    for (let col = 0; col <= horizontalLimit; col++) {
      if (col == 0 || col == horizontalLimit || row == horizontalLimit || row == 0) {
        qrRow += String.fromCharCode(32) + "|";
      } else if (col >= 21 && col <= 28 && row <= 7 && row >= 1) {
        blackOrWhite = Math.round(Math.random());
        if (whiteSquareCount >= 31) {
          qrRow += String.fromCharCode(9608) + "|";
          blackSquareCount++;
        } else if (blackOrWhite == 1) {
          qrRow += String.fromCharCode(9608) + "|";
          blackSquareCount++;
        } else {
          qrRow += String.fromCharCode(32) + "|";
          whiteSquareCount++;
        }
      } else if ((row == 6 && col == 2) || col == 4 || col == 25) {
        qrRow += String.fromCharCode(9608) + "|";
      } else {
        blackOrWhite = Math.round(Math.random());
        if (blackOrWhite == 1) {
          qrRow += String.fromCharCode(9608) + "|";
        } else {
          qrRow += String.fromCharCode(32) + "|";
        }
      }
    }
    if (row >= 10) {
      qrRow += row;
    } else {
      qrRow += row;
    }
    let linePoints = "  ";
    console.log(qrRow);
    for (let i = 0; i <= horizontalLimit * 2 + 2; i++) {
      linePoints += "+";
    }
    console.log(linePoints);
  }

  let bottomColumnIndex = "  |";
  let bottomColumnPoints = "  ";
  for (let i = 0; i <= horizontalLimit; i++) {
    if (i >= 10 && i < 20) {
      bottomColumnIndex += i - 10 + "|";
    } else if (i >= 20) {
      bottomColumnIndex += i - 20 + "|";
    } else {
      bottomColumnIndex += i + "|";
    }
  }

  console.log(bottomColumnPoints);
  console.log(bottomColumnIndex);
  console.log(
    "Requisitos:\na) Los píxeles de la periferia siempre están en blanco.\nb) El código tiene reservado un cuadrado de 7x7 píxeles en la esquina superior derecha (sin incluir la periferia), que debe contener al menos 25 píxeles negros en cualquier disposición.\nc) En la séptima fila (índice 6), las columnas 2, 4 y 25 deben ser píxeles negros.\nCualquier producto que no cumpla con estos requisitos se considera falsificado. El número de errores se calcula solo por el requisito (c), asignando un punto por cada píxel que no sea negro.\nCondición a: Se cumple\nCondición b: NO se cumple. Número de píxeles negros = " + blackSquareCount + "\nCondición c: NO se cumple."
  );
}

generateQR1();
generateQR2();

/*
V 1.0
Ings. Juan Corredor
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Programa que realiza un codigo QR
Salvedad, el primer Qr no es necesariamente el mismo que el segundo
=======
function generateQR1() {
  let verticalLimit = 29;
  let horizontalLimit = 29;
  let blackOrWhite = 0;
  let whiteSquareCount = "";

  // Print column indices in the first row
  let columnIndex = "   ";
  let columnPoints = "  ";
  for (let i = 0; i <= horizontalLimit; i++) {
    if (i >= 10 && i < 20) {
      columnIndex += i - 10;
    } else if (i >= 20) {
      columnIndex += i - 20;
    } else {
      columnIndex += i;
    }
  }
  for (let i = 0; i <= horizontalLimit + 2; i++) {
    if (i == 0 || i == 31) {
      columnPoints += "+";
    } else {
      columnPoints += "-";
    }
  }
  console.log(columnIndex);
  console.log(columnPoints);

  for (let row = 0; row <= verticalLimit; row++) {
    let qrRow = "";

    // Print the row index in the first column
    if (row >= 10) {
      qrRow += row + "|";
    } else {
      qrRow += row + " |";
    }

    for (let col = 0; col <= horizontalLimit; col++) {
      if (col == 0 || col == horizontalLimit || row == horizontalLimit || row == 0) {
        qrRow += String.fromCharCode(32);
      } else if (col >= 21 && col <= 28 && row <= 7 && row >= 1) {
        blackOrWhite = Math.round(Math.random());
        if (whiteSquareCount >= 24) {
          qrRow += String.fromCharCode(9608);
        } else if (blackOrWhite == 1) {
          qrRow += String.fromCharCode(9608);
        } else {
          qrRow += String.fromCharCode(32);
          whiteSquareCount++;
        }
      } else if ((row == 6 && col == 2) || col == 4 || col == 25) {
        qrRow += String.fromCharCode(9608);
      } else {
        blackOrWhite = Math.round(Math.random());
        if (blackOrWhite == 1) {
          qrRow += String.fromCharCode(9608);
        } else {
          qrRow += String.fromCharCode(32);
        }
      }
    }
    if (row >= 10) {
      qrRow += "|" + row;
    } else {
      qrRow += "| " + row;
    }

    console.log(qrRow);
  }

  let bottomColumnIndex = "   ";
  let bottomColumnPoints = "  ";
  for (let i = 0; i <= horizontalLimit; i++) {
    if (i >= 10 && i < 20) {
      bottomColumnIndex += i - 10;
    } else if (i >= 20) {
      bottomColumnIndex += i - 20;
    } else {
      bottomColumnIndex += i;
    }
  }
  for (let i = 0; i <= horizontalLimit + 2; i++) {
    if (i == 0 || i == 31) {
      bottomColumnPoints += "+";
    } else {
      bottomColumnPoints += "-";
    }
  }
  console.log(bottomColumnPoints);
  console.log(bottomColumnIndex);
}

function generateQR2() {
  let verticalLimit = 29;
  let horizontalLimit = 29;
  let blackOrWhite = 0;
  let whiteSquareCount = "";
  let blackSquareCount = "";

  // Print column indices in the first row
  let columnIndex = "\n  |";
  let columnPoints = "  ";
  for (let i = 0; i <= horizontalLimit; i++) {
    if (i >= 10 && i < 20) {
      columnIndex += i - 10 + "|";
    } else if (i >= 20) {
      columnIndex += i - 20 + "|";
    } else {
      columnIndex += i + "|";
    }
  }
  for (let i = 0; i <= horizontalLimit * 2 + 2; i++) {
    columnPoints += "+";
  }
  console.log(columnIndex);
  console.log(columnPoints);

  for (let row = 0; row <= verticalLimit; row++) {
    let qrRow = "";

    // Print the row index in the first column
    if (row >= 10) {
      qrRow += row + "|";
    } else {
      qrRow += row + " |";
    }

    for (let col = 0; col <= horizontalLimit; col++) {
      if (col == 0 || col == horizontalLimit || row == horizontalLimit || row == 0) {
        qrRow += String.fromCharCode(32) + "|";
      } else if (col >= 21 && col <= 28 && row <= 7 && row >= 1) {
        blackOrWhite = Math.round(Math.random());
        if (whiteSquareCount >= 31) {
          qrRow += String.fromCharCode(9608) + "|";
          blackSquareCount++;
        } else if (blackOrWhite == 1) {
          qrRow += String.fromCharCode(9608) + "|";
          blackSquareCount++;
        } else {
          qrRow += String.fromCharCode(32) + "|";
          whiteSquareCount++;
        }
      } else if ((row == 6 && col == 2) || col == 4 || col == 25) {
        qrRow += String.fromCharCode(9608) + "|";
      } else {
        blackOrWhite = Math.round(Math.random());
        if (blackOrWhite == 1) {
          qrRow += String.fromCharCode(9608) + "|";
        } else {
          qrRow += String.fromCharCode(32) + "|";
        }
      }
    }
    if (row >= 10) {
      qrRow += row;
    } else {
      qrRow += row;
    }
    let linePoints = "  ";
    console.log(qrRow);
    for (let i = 0; i <= horizontalLimit * 2 + 2; i++) {
      linePoints += "+";
    }
    console.log(linePoints);
  }

  let bottomColumnIndex = "  |";
  let bottomColumnPoints = "  ";
  for (let i = 0; i <= horizontalLimit; i++) {
    if (i >= 10 && i < 20) {
      bottomColumnIndex += i - 10 + "|";
    } else if (i >= 20) {
      bottomColumnIndex += i - 20 + "|";
    } else {
      bottomColumnIndex += i + "|";
    }
  }

  console.log(bottomColumnPoints);
  console.log(bottomColumnIndex);
  console.log(
    "Requisitos:\na) Los píxeles de la periferia siempre están en blanco.\nb) El código tiene reservado un cuadrado de 7x7 píxeles en la esquina superior derecha (sin incluir la periferia), que debe contener al menos 25 píxeles negros en cualquier disposición.\nc) En la séptima fila (índice 6), las columnas 2, 4 y 25 deben ser píxeles negros.\nCualquier producto que no cumpla con estos requisitos se considera falsificado. El número de errores se calcula solo por el requisito (c), asignando un punto por cada píxel que no sea negro.\nCondición a: Se cumple\nCondición b: NO se cumple. Número de píxeles negros = " + blackSquareCount + "\nCondición c: NO se cumple."
  );
}

generateQR1();
generateQR2();

/*
V 1.0
Ings. Juan Corredor
JavaScript
ECMASCRIPT 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Programa que realiza un codigo QR
Salvedad, el primer Qr no es necesariamente el mismo que el segundo
>>>>>>> 07c7fdfa463df95e854ac961d736abd8a3373577
*/