// El array almacena muchos tipos de datos en una variable.
// El objeto es la representacion de la vida real en el código con características

const alumno = {
  id: "321dsasd",
  nombre: "Manuel",
  curso: ["React"],
  edad: 20,
  activo: true,
  domicilio: {
    descripcion: "Av. Izaguirre",
    numero: 15301,
    cp: {
      provincia: "LMA",
    },
  },
};

// ¿Cómo acceder al valor? -> Se hace a través de su clave

console.log(alumno.nombre);
console.log(alumno.domicilio.cp.provincia);

console.log(alumno.curso.includes("JavaScript")); // false
console.log(alumno.apellido); // undefined

// console.log(alumno.domicilio.cp.pais.coordenadas);

// alumno.nombre = "Miguel";
// // A la propiedad se le puede modificar
// console.log(alumno.nombre);

// Si no existe una propiedad se le agrega siempre y cuando se le asigne un valor
alumno.apellido = "Jordan";
console.log(alumno.apellido);

const curso = [
  { nombre: "Joaquin", apellido: "Noel", nota: 12 },
  { nombre: "Pedro", apellido: "Sanchez", nota: 16 },
  { nombre: "Matías", apellido: "Vasquez", nota: 4 },
  { nombre: "Alex", apellido: "Supa", nota: 16 },
];

// usa una función como parámetro
const alumnoEncontrado = curso.find((alumno) => {
  return alumno.nota === 16 && alumno.nombre === "Alex";
});

console.log(alumnoEncontrado);
console.log(alumnoEncontrado.nombre);
console.log(alumnoEncontrado.apellido);
console.log(alumnoEncontrado.nota);
