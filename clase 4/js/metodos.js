const numberArray = [24, 5, 3, 6, 100];
const stringArray = ["Daniel", "Pablo", "José"];

// .length -> Sirve para contar la cantidad de elementos del array

for (let i = 0; i < numberArray.length; i++) {
  // sugar syntax => i++ -> i = i + 1
  console.log("número del array: ", numberArray[i]);
  console.log("indice del número: ", i);
}

console.log("--------------------------------------------------");

for (let i = 0; i < stringArray.length; i++) {
  // sugar syntax => i++ -> i = i + 1
  console.log("string del array: ", stringArray[i]);
  console.log("indice del string: ", i);
}
console.log("Cantidad de elementos del array: ", stringArray.length);

// i <= numberArray.length - 1 === i < numberArray.length

console.log("--------------------------------------------------");

// Agregar o quitar elementos al array

// .push() --> Método de un array que nos permite agregar un elemento nuevo al final del array
stringArray.push("Erick");
console.log(stringArray);

// .pop() --> Saca el último elemento del Array
stringArray.pop();
console.log(stringArray);

// .unshift() --> Se usa en casos particulares para agregar un elemento al principio
stringArray.unshift("Carlos");
console.log(stringArray);

// .shift() --> Elimina el primer elemento
stringArray.shift();
console.log(stringArray);

// ----------------------------------------------------------------------------------------------
// .join() --> Devuelve un string que es la union de todos los elementos del array separados por el parametro del join

console.log(stringArray.join(", ")); // Daniel, Pablo, José

console.log(stringArray.join(" || ")); // Daniel || Pablo || José

console.log(stringArray.join(" x ")); // Daniel x Pablo x José

// // .reverse() --> Da vuelta a los elementos de un array
// const vuelta = stringArray.reverse();
// console.log(vuelta);

// .split() --> Contrario al .join() separa en base a un caracter por parametro --> devuelve un array

const numeros = ["2025", "06", "22"];
const fechaPeruana = numeros.reverse();
const fechaActualFinal = fechaPeruana.join(" - ");
console.log(fechaActualFinal);

const fecha = "2025/06/22";

const fechaSplit = fecha.split("/");
const fechaReverse = fechaSplit.reverse();
const fechaJoin = fechaReverse.join(" - ");
console.log(fechaJoin);

// .includes()

const siExiste = stringArray.includes("Eric"); // true || false
console.log(siExiste);

// .indexOf()

const indice = stringArray.indexOf("José");
console.log(indice);
