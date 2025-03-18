const template = document.getElementById('card-template');
  const clone = template.content.cloneNode(true);
  clone.querySelector('.title').textContent = "TITULOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";
  clone.querySelector('.content').textContent = "Deseas salir de la app";
  document.getElementById('clone-block2').appendChild(clone);


//   function saludar(nombre) {
//     console.log('Funcion saludar')
//     return "Hola, " + nombre + "!";
// }

// function presentar(nombre, apellido) {
//     var nombreCompleto = nombre + " " + apellido;
//     console.log('Nombre Completo: ', nombreCompleto)
//     var saludo = saludar(nombreCompleto);
//     console.log(saludo);
// }

// presentar("Juan", "Pérez");

// console.log('Hi');
// setTimeout(function cb(){
//     console.log('there');
// }, 3000);
// console.log('JSConEU');

const template = document.getElementById('card-template');
  const clone = template.content.cloneNode(true);
  clone.querySelector('.title').textContent = "TITULOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";
  clone.querySelector('.content').textContent = "Deseas salir de la app";
  document.getElementById('clone-block2').appendChild(clone);

//   const checkbox = document.querySelector("input[type=checkbox]");
//   if (checkbox.value == true) { // Peligro: "on" == true → "on" == 1 → NaN == 1 → false
//     console.log('pasa')
//     // Nunca se ejecutará
//   }
//   else{
//     console.log('no pasa')
//   }

//   let valor = 0;
//   if (valor == false) { // 0 == false → true
//     console.log("¡Cuidado! 0 no es 'falso' en lógica de negocio.");
//   }

//   const edad = "25";
//   if (edad == 25) { // true (coerción implícita)
//     console.log("Edad válida");
//   }

// //   1. Comparación de arrays
// // Error común: Esperar que compare contenido
// const frutas1 = ["🍎", "🍌"];
// const frutas2 = ["🍎", "🍌"];
// console.log('Comparando dos arrays con 2 referencias a memoria distintas: ', frutas1 === frutas2); // false (arrays diferentes en memoria)

// // Caso correcto: Comparar referencias
// const listaOriginal = [1, 2, 3];
// const copiaLista = listaOriginal;
// console.log('Comparando dos arrays con misma referencia a memoria: ',listaOriginal === copiaLista); // true (misma referencia)

  
// const miArray = [];
// if (miArray === []) { // Error 
//   console.log("Está vacío");
// }
// Solucion:
// if (miArray.length === 0) { 
//   console.log("Está vacío (comparacion con length) ");
// } 

// Comparar respuestas de una API
// Si recibes un array de un servidor y lo comparas con uno local:
// const datosAPI = await fetch("/api/data"); // Supongamos que devuelve [10, 20]
// const datosLocales = [10, 20];
// console.log(datosAPI === datosLocales); // false 
// Solución:
// Comparación superficial (solo para arrays/objetos simples):
// console.log(JSON.stringify(datosAPI) === JSON.stringify(datosLocales)); // TRUE


// COMPARACION DE ARRAYS Y OBJETOS SUPERFICIAL Y PROFUNDA:

// SUPERFICIAL:
// const arr1 = [1, 2];
// const arr2 = [1, 2];
// console.log(arr1 === arr2); // false (referencias distintas)
// console.log(arr1 === arr1); // true (misma referencia)

// // Objetos
// const obj1 = { a: 1 };
// const obj2 = { a: 1 };
// console.log(obj1 === obj2); // false (objetos distintos)
// console.log(obj1 === obj1); // true (misma referencia)

// PROFUNDA:
// const arr1 = [1, { b: 2 }];
// const arr2 = [1, { b: 2 }];
// console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true 



