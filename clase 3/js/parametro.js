// Parámetros: Son variables que le llegan a la función a la hora de crearlo
// Se ubican dentro de los paréntesis

// Ejemplo: Tengo una función que va a mostrar un mensaje pero va a recibir un mensaje por parámetro

// function mostrarMensaje(mensaje) {
//   console.log(mensaje);
// }

// Los mensajes son variables dentro de la función
function mostrarMensaje(mensaje, mensaje2, mensaje3, mensaje4) {
  console.log(mensaje);
  console.log(mensaje2);
  console.log(mensaje3);
  console.log(mensaje4);
}

// A la hora de ejecutarla yo tengo que pasarle valores a los parámetros
mostrarMensaje("Hola", 2, true, "Adiós");
mostrarMensaje(5, "Daniel", "Leo", 20);

// La diferencia entre una con parámetros y otra sin: Es lo dinámico y flexible que tiene una función
