// el return corta la ejecución de lo que viene después

function esMayor(numero) {
  // Si numero es 102, ve lo primero y termina
  if (numero > 100) {
    return "Es mayor a 100";
  } else if (numero > 50) {
    return "Es mayor a 50";
  } else {
    return "Es menor a 50";
  }
}

const resultado = esMayor(32);
console.log(resultado);

// function esMayor2() {
//   // Si numero es 102, ve lo primero y termina
//   const numero = parseInt(prompt("Ingrese un número"));
//   if (numero > 100) {
//     return "Es mayor a 100";
//   } else {
//     return "Es menor a 100";
//   }
// }

// const resultado = esMayor2();
// console.log(resultado);
