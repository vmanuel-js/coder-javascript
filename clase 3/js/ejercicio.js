// Hacer un programa que permita realizar operaciones matemáticas hasta que el usuario ingrese la palabra ESC
// Calculadora suma, resta, multiplicacion, division

// Ingrese una opcion:
// 1 -> suma
// 2 -> restar
// 3 -> multiplicar
// 4 -> dividir
// 5 -> salir

// Pedir 2 números y mostrar por alert el resultado de la operacion
// Volver a preguntar por una opción

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    alert("No se puede dividir un número entre 0 (Cero)");
    return null;
  }
};

const menu = `
    Ingrese una opción: \n
    1 -> Sumar \n
    2 -> Restar \n
    3 -> Multiplicar \n
    4 -> Dividir \n
    5 -> Salir
    `;
const preguntar = () => {
  return parseInt(prompt("Ingrese un número"));
};

function calculadora() {
  let rpta;
  do {
    let opcion = parseInt(prompt(menu));
    const a = preguntar();
    const b = preguntar();

    if (opcion === 5) {
      alert("¡Fin del programa!");
      break;
    }

    switch (opcion) {
      case 1:
        alert(sumar(a, b));
        break;
      case 2:
        alert(restar(a, b));
        break;
      case 3:
        alert(multiplicar(a, b));
        break;
      case 4:
        alert(dividir(a, b));
        break;
      default:
        alert("Ingrese un número entre el 1-5");
        break;
    }

    do {
      rpta = prompt("¿Desea hacer otra operación?");
      rpta = rpta.toUpperCase();

      if (rpta !== "N" && rpta !== "S") {
        alert("Letra inválida ingrese [S/N]");
      }
    } while (rpta !== "N" && rpta !== "S");
  } while (rpta === "S");
}

calculadora();
