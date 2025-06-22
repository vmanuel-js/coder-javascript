// localStorage.setItem("isAuth", true);

// const isAuth = localStorage.getItem("isAuth");
// console.log(isAuth);

// // -------------------------------------------------

// localStorage.setItem("dni", 61042642);
// const dni = localStorage.getItem("dni");
// console.log(dni);

// const random = 321412;

// random.toString();

// // localStorage.clear() --> limpia todo el localstorage
// // localStorage.key(2);
// // localStorage.removeItem();
// // localStorage.length();

// const producto = { descripcion: "Arroz", precio: 1100 };

// // JSON: es un formato de texto para estructurar datos
// // para la transaccion de informacion entre una aplicacion y otra

// // lo vuelve string en formato json
// const productoString = JSON.stringify(producto);
// localStorage.setItem("producto", productoString);

// const productoRecuperado = localStorage.getItem("producto");
// const productoParseado = JSON.parse(productoRecuperado);
// console.log(productoParseado);
// console.log(productoParseado.precio);

// Plantilla / Plano será una función constructora

// function Persona(nombre, apellido, dni, edad) {
//   // existe de manera invisible el objeto this
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.dni = dni;
//   this.edad = edad;
//   this.sumarEdad = function () {
//     this.edad = this.edad + 1;
//   };

//   // siempre que se instancie la función cosntructora retornará this
// }

// const persona1 = new Persona("Manuel", "Jordan", 61042642, 18);
// const persona2 = new Persona("Leo", "Sanchez", 5632457, 19);
// persona1.nombre = "Pablo";
// persona1.apellido = "Solis";

// console.log(persona1.sumarEdad());
// console.log(persona2.sumarEdad());
class Persona {
  constructor(nombre, apellido, dni, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
  }
  sumarEdad() {
    this.edad = this.edad + 1;
  }
}

const persona1 = new Persona("Manuel", "Jordan", 61042642, 18);
const persona2 = new Persona("Leo", "Sanchez", 5632457, 19);

class Producto {
  // constructor(nombre, codigo, marca, categoria, precio, stock) {
  constructor(detalleValores) {
    this.id = new Date().getTime();
    this.nombre = detalleValores.nombre;
    this.codigo = detalleValores.codigo ?? 1111;
    this.precio = detalleValores.precio;
    this.stock = detalleValores.stock ?? 0;
    // this.marca = detalleValores.marca;
    // this.categoria = detalleValores.categoria;
  }

  setIva() {
    this.precio = this.precio * 1.18;
  }

  getCodigo() {
    return this.codigo;
  }

  setCodigo(codigo) {
    this.codigo = codigo;
  }
}

const producto1 = new Producto({
  nombre: "Arroz",
  codigo: 31242412412,
  precio: 25,
});
producto1.setIva();

console.log(producto1);

const producto2 = new Producto({
  nombre: "Chocolate",
  codigo: null,
  stock: null,
  precio: 42,
});

producto2.setIva();
console.log(producto2);

class Carrito {
  constructor(productos) {
    this.carrito = productos ?? [];
  }

  agregarProducto(nuevoProducto) {
    const productoExistente = this.carrito.find(
      (producto) => producto.id === nuevoProducto.id
    );
    if (!productoExistente) {
      this.carrito.push(nuevoProducto);
    } else {
      //logica para agregar cantidad a un producto
    }
  }
}
