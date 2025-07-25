// De manera directa

// new Promise((resolve, reject) => {
//   if (true) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// Indirecta

// function algoAsincrono() {
//   return new Promise((resolve, reject) => {
//     const isTrue = 10;
//     if (isTrue === 5) {
//       resolve("La promesa se resolvió");
//     } else {
//       reject("No se resolvió nada");
//     }
//   });
// }

// algoAsincrono()
//   .then((respuesta) => {
//     console.log(respuesta);
//   })
//   .catch((e) => {
//     console.log("Ocurrió algo: ", e);
//   });

// const api = "https://fakestoreapi.com/products";

// fetch(api)
//   .then((respuesta) => {
//     return respuesta.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("Algo paso en la api: ", e);
//   });

// console.log("Inicio");

// Promise.resolve().then(() => {
//   console.log("Microtask");
// });

// setTimeout(() => {
//   console.log("Callback");
// }, 0);

// console.log("Fin");

// Librerias: Son un conjunto de herramientas, funciones, objetos, etc. Que hacen algo determinado
// Por ejemplo: Una libreria que maneje fechas, tienen funciones en base a las fechas
// - Sumar a un día unas horas determinadas
// - ¿Cuánto falta para un día determinado
// - Sacar la diferencia entre 2 fechas --> toDiff()

// new Date("").getUTCDate() - new Date("").getTime();
// Swal.fire({
//   title: "Do you want to save the changes?",
//   showDenyButton: true,
//   showCancelButton: true,
//   confirmButtonText: "Save",
//   denyButtonText: `Don't save`,
// }).then((result) => {
//   console.log(result);
//   if (result.isConfirmed) {
//     Swal.fire("Saved!", "", "success");
//   } else if (result.isDenied) {
//     Swal.fire("Changes are not saved", "", "error");
//   }
// });

setTimeout(() => {
  Toastify({
    text: "Soy una notificación",
    className: "custom-class",
    duration: 1000,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    // style: {
    //   background: "linear-gradient(to bottom, #00b09b, #96c93d)",
    //   border: "3px solid #000",
    // },
    onClick: () => {
      window.location.href = "/promociones.html";
    }, // Callback after click
    callback: () => {
      console.log("Se fue la notificacion");
    },
  }).showToast();
}, 3500);
