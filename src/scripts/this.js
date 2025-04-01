
// console.log(this); // En navegadores: window


// ************************* THIS FUNCIONES NORMALES:
    // const usuario = {
    //     marca: "samsung",
    //     modelo: "S24 plus",
    //     telefono: function() {
    //     console.log(`El telefono ${this.marca} es ${this.modelo}, usando this dentro una funcion` ); // this = usuario
    //     },
    // };
    // usuario.telefono();

    // // ************************** Función directa (sin contexto)

    // function mostrarThis() {
    // console.log('this en una funcion',this); // En modo no estricto: window
    // }
    // mostrarThis(); 

// ************************** ARROW FUNCTONS

    // Ejemplo 1: Arrow function como método

    const usuario1 = {
    nombre: "Pedro",
    saludar: () => {
        console.log(`Hola, soy ${this.nombre}, usando this en arrow function`); // this = window (no el objeto)
    },
    };
    usuario1.saludar(); // "Hola, soy undefined"

    // Ejemplo 2: Arrow function heredando this
    const usuario2 = {
    nombre: "Luisa",
    saludar() {
        setTimeout(() => {
            console.log(`Hola, soy ${this.nombre}`); // this = usuario (heredado)
        }, 1000);
    },
    };
    usuario2.saludar(); // "Hola, soy Luisa" (después de 1 segundo)
