// DOM -> Document Object Model -> La representacion de HTML y CSS dentro JS
// Esta basada en nodos ( Nodos padres y Nodos hijos) cada nodo es un elemento HTML
// Estan representadas de manera jerárquica
// El nodo padre es el nodo HTML de estan nacen 2 elementos <head> y <body>
// Nodo texto --> Es el texto de un elemento <span>
// Objeto document --> Es todo el html

// Capturar Elementos
// getElementById --> accedemos a un elemento del DOM por su ID retorna un elemento HTML o null
// const contenedor = document.getElementById("contenedor");

// console.log(contenedor.innerText);

// innerHTML --> Muestra todo el contenido de un elemento HTML
// innerText --> Devolvera los textos de los elementos

// getElementsByClassName --> accedemos a todos los elementos que contengan dicha clase retorna un Array de elementos HTML
// const paises = document.getElementsByClassName("pais");

// for (let i = 0; i < paises.length; i++) {
//   console.log(paises[i]);
// }

const productos = [
  {
    nombre: "Arroz",
    precio: 1500,
    categoria: "Almacen",
    imagen: "../imagen/arroz.jpg",
  },
  { nombre: "Fideos", precio: 800, categoria: "Almacen" },
  { nombre: "Coca Cola", precio: 2500, categoria: "Bebida" },
  { nombre: "Agua Mineral", precio: 1500, categoria: "Bebida" },
  { nombre: "Carne", precio: 8500, categoria: "Congelados" },
  { nombre: "Pescado", precio: 5500, categoria: "Congelados" },
];

// getElementsByTagName --> accedemos a todos los elementos de dicho nombre de etiqueta retorna un Array de elementos HTML
document.getElementsByTagName("h1"); // Devolverá todos los h1 del DOM

// querySelector --> accedemos a un solo elemento mediante selectores CSS
const contenedor = document.querySelector("#contenedor");

const carrito = [];
const buttonCarrito = document.querySelector("#ver-carrito");

// += acumulador
productos.forEach((producto) => {
  const div = document.createElement("div");

  div.innerHTML = `
    <img src="${producto.imagen}">
    <p>Nombre: ${producto.nombre}</p>
    <p>Precio: ${producto.precio}</p>
    <p>Categoría: ${producto.categoria}</p>
  `;

  const button = document.createElement("button");
  button.innerText = `Agregar producto`;

  button.addEventListener("click", () => {
    carrito.push(producto);
    console.log(producto);
  });
  div.appendChild(button);
  contenedor.appendChild(div);
});

buttonCarrito.addEventListener("click", () => {
  console.log(carrito);
});

// contenedor.innerHTML += `
//   <div>
//     <p>Nombre: ${producto.nombre}</p>
//     <p>Precio: ${producto.precio}</p>
//     <p>Categoría: ${producto.categoria}</p>
//   </div>
//   <hr>
// `;

// // contenedor.innerHTML = "<h1>Hola fui modificado por JS</h1>";
// console.log(contenedor);

// // querySelectorAll --> accedemos a todos los elementos mediantes selectores CSS
// document.querySelectorAll(".pais");

// console.log(paises);

// EVENTOS

// const boton = document.querySelector("#boton-click");

// // Evento por atributo por elemento

// // boton.onclick = () => {
// //   console.log("Click desde JavaScript");
// // };

// // nombre del evento y la funcion a ejecutar
// boton.addEventListener("click", () => {
//   console.log("click con addEventListener");
// });

// // Input

// const usuario = {
//   nombre: "",
// };

// const inputNombre = document.querySelector("input");

// inputNombre.addEventListener("input", (event) => {
//   // console.log(event.target); }
//   // event contiene info del evento,
//   // dentro de la misma target es el elemento que disparó el elemento
//   // console.log("Esta cambiando de valor el input");
//   // console.log(event.target.value);
//   usuario.nombre = event.target.value;
// });

// boton.addEventListener("click", () => {
//   console.log("El nombre del usuario es: ", usuario.nombre);
// });
