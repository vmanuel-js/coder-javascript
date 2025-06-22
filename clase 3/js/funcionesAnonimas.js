// Funciones Anónimas: La funcion no va a tener nombre pero se asigna a una variable
const crearAlumnos = function () {
  // datos
};

crearAlumnos();

// Funcion Tipo Flecha

const crearAlumno = (a, b, c, d, e) => {
  // contenido de la función
};

crearAlumno();

// si la funcion tipo flecha recibe solo un parametro se puede hacer así
const crearAlumno2 = (a) => {};

const suma = (a, b) => {
  return a + b;
};

const suma2 = (a, b) => a + b;

const suma3 = () => {
  const a = parseInt(prompt("Ingrese una a"));
  const b = parseInt(prompt("Ingrese una b"));
  return a + b;
};

suma(2, 5);
suma2(2, 5);
