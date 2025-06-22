// Modo COMMONJS poner los scripts src="" en el HTML
// Modo ESMODULES poner los scripts src="" type="module" en el HTML

// Exportar

// COMMONJS --> viejo
module.export = {
  crearAlumno,
};

export function nombreFuncion() {
  // datos
}

// --------------------------------------------

// Importar

// COMMONJS --> viejo
const funcionesIndex = require("./index.js");

// ESMODULES
import { nombreFuncion } from "./index.js";
