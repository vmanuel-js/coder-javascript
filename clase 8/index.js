// Manejo de Errores
// --> Sirve para atrapar errores

try {
  // inicio de un loading en pantalla
  // Va el bloque de codigo más propenso a errores
  // puede llegar a ejecutar division por 0
} catch (e) {
  // const modal = document.createElement("div")
  // Encargado de ejecutar el bloque de codigo de error
  // Muestra que no es posible dividir por 0
} finally {
  // Siempre se va a ejecutar cuando haya habido o no un error
  // Es opcional
  // cancelar el loading
}

// Metodo Asincrono --> fetch

// Distintos tipos de solicitudes de una url
// GET --> traer
// POST --> guardar un recurso
// PUT --> reescribir un recurso existente
// DELETE --> eliminar un recurso

const urlRecurso = "https://rickandmortyapi.com/api";

// async - await --> Esperar promesas o cosas asíncronas y volverlo sincrónico

const traerPersonajes = async () => {
  try {
    console.log("Consultando URLs... ");
    const resultado = await fetch(urlRecurso);
    const data = await resultado.json();

    console.log("Consultando personajes... ");
    const result = await fetch(data.characters);
    const personajes = await result.json();
    console.log(personajes.results);
  } catch (e) {
    console.log("Ocurrió un error algunas de las solicitudes fallaron", e);
  }
};

traerPersonajes();
