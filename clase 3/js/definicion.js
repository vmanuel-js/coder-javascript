// Funciones: Son bloques de código reutilizable, se puede usar esa función creada en varios puntos del proyecto, cuando sea y donde se quiera.

// Características:
// - Resuelven algo en concreto.
// - Procesa datos / información.
// - Realiza una acción

// Sintaxis:

// function pedirNombre() {
//   const nombre = prompt("Ingrese su nombre");
//   console.log(nombre);
// }

// ¿Qué hace la función? -> Pide el nombre
// ¿Cómo se ejecuta una función? (ejecutar/invocar/llamar)
// pedirNombre();

// Si no se ejecuta "pedirNombre()", no pasa nada, el bloque de código no se va a utilizar pero si se va a cargar en memoria

// Mostrar por consola y por alert
function pedirNombre(salida) {
  // salida -> string, alert muestro con alert, console muestro por consola
  const nombre = prompt("Ingrese su nombre");
  if (salida === "alert") {
    alert(nombre);
  } else {
    console.log(nombre);
  }
}
