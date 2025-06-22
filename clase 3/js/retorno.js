// Una función puede retornar un valor
// Una función puede retornar una vez

function suma(a, b) {
  const resultado = a + b;
  return resultado;
}

// Beneficio: que a la hora de ejecutar puedo guardarlo en una variable y reutilizar ese valor
// Si no se tuviera el retorno, lo que se quiera hacer con el contenido de la suma se lo tendría que hacer en la misma función
// Y capaz yo quisiera hacer lo mismo más adelante.

const resultadoDeSuma = suma(5, 10);

// ------------------------------------------------------------------------------------------------------------------------------

function crearAlumno() {
  // pido datos
  // retorno alumno
}

function guardarBBDD(alumno) {
  // guarda en la base de datos al alumno
}

const alumno = crearAlumno();
guardarBBDD(alumno);

// el return hace que la función sea más dinámica
// A veces