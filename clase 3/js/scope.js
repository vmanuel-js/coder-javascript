// SCOPE
// Es el alcance de una funcion o variable dentro de un contexto

// -----------------------------------------------------------------------

// CONTEXTO 1
// const a = 2;
// const b = 10;

// function restar() {
//   return a - b;
// }

// -----------------------------------------------------------------------

// CONTEXTO 2
// function evaluar(a, b) {
//   return a > b;
// }

// function restar() {
//   const a = 2;
//   const b = 10;
//   const resultado = evaluar(a, b); // se ejecuta por la jerarquía
//   console.log(resultado);
// }

// console.log(restar());

// console.log(a - b); // no se ejecuta

// -----------------------------------------------------------------------

// CONTEXTO 3

const a = 2; // variables globales
const b = 3; // variables globales

function evaluar() {
  const a = 5; // variables locales
  const b = 30; // variables locales

  function mostrar() {
    const a = 10; // variables locales
    const b = 50; // variables locales
    console.log(a, b);
  }
  mostrar();
  return a > b;
}

const resultado = evaluar();
console.log(resultado);
