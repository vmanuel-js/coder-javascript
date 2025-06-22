//Arrays + Objetos

// Array: Tipo de dato que sirve para almacenar más de un variable en el mismo lugar
// Hasta donde se puede almacenar, depende de los recursos del dispositivo
const miArray = []; // array vacío
// Elementos del mismo tipo de dato
const numberArray = [24, 5, 3, 6, 100];
const stringArray = ["Daniel", "Pablo", "José"];
// Elementos del diferentes tipos de datos
const mixtoArray = [true, [["María", 210]], "Daniel", 2, []];

// ¿Cómo acceder a sus elementos? -> A través de sus índices que son las posiciones de dicho elemento, arrancan del 0 hacia adelante
mixtoArray[2]; // Daniel
mixtoArray[1]; // [["María", 210]]
mixtoArray[1][0]; // ["María, 210"]
mixtoArray[1][0][1]; // 210

const primeraParte = mixtoArray[1]; // [["María", 210]]
const segundaParte = primeraParte[0]; // ["María, 210"]
const terceraParte = segundaParte[1]; // 210

console.log(terceraParte);

// El string es considerado un array de caracteres
console.log("Manuel".length);
console.log("Manuel"[2]);
// ¿Cómo saber la longitud del array? -> .length
console.log(numberArray.length);
console.log("--------------------------------------------------");
