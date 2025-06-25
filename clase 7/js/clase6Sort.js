const productos = [
  { nombre: "Arroz", precio: 1500, categoria: "Almacen" },
  { nombre: "Fideos", precio: 800, categoria: "Almacen" },
  { nombre: "Coca Cola", precio: 2500, categoria: "Bebida" },
  { nombre: "Agua Mineral", precio: 1500, categoria: "Bebida" },
  { nombre: "Carne", precio: 8500, categoria: "Congelados" },
  { nombre: "Pescado", precio: 5500, categoria: "Congelados" },
];

// Para no modificar el array original se hace [... nombreArray], esto genera una copia del array

const productoSorted = [...productos].sort((a, b) => {
  if (b.precio > a.precio) return 1;

  if (a.precio > b.precio) return -1;

  if (a.categoria > b.categoria) return 1;

  if (b.categoria > a.categoria) return -1;

  return 0;
});

// const productoSorted2 = productos.sort((a, b) => {
//   return a.precio - b.precio;
// });

console.log(productos, "Array Original");

// .toSorted es en nuevas versiones
// El .toSorted no modifica el array original
