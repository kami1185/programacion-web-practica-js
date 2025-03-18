// CALL STACK 

// function saludar(nombre) {
//     console.log('Funcion saludar')
//     return "Hola, " + nombre + "!";
//   }
  
//   function presentar(nombre, apellido) {
//     var nombreCompleto = nombre + " " + apellido;
//     console.log('Nombre Completo: ', nombreCompleto)
//     var saludo = saludar(nombreCompleto);
//     console.log('Saludo: ',saludo);
//   }
  
//   presentar("Juan", "Pérez");

// EVENT LOOP:

// **************************ejemplo 1
console.log('Hi');
setTimeout(function cb(){
    console.log('there');
}, 3000);
console.log('JSConEU');

// ***************************ejemplo 2
const task1 = () => {
    console.log("Inicio");
    setTimeout(() => console.log("Timeout"), 0)
    Promise.resolve().then(() => console.log("Promise"));
    console.log("Fin");
}

// Explicación:
// El console.log("Inicio") se ejecuta inmediatamente.
// setTimeout envía su callback a las Web APIs (aunque el tiempo sea 0 ms).
// La promesa se resuelve y su .then() va a la microtask queue.
// console.log("Fin") se ejecuta.
// El event loop procesa primero la microtask queue ("Promise").
// Finalmente, procesa la callback queue ("Timeout").

// ***************************ejemplo 3

let setMessage = [];

function showDate(){
    setTimeout(()=>{
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        console.log('1. today');
        setMessage.push(`1. ${today}`);
    },0);
}

function greeting(){
    console.log('2. Hello ');
    setMessage.push('2. Hello');
}

function goodBye(){
    console.log('3. Bye ');
    setMessage.push('3. Bye');
}

async function getData(url = "") {
    // Default options are marked with *
    const response = await fetch(url);
    return response.json(); // parses JSON response into native JavaScript objects
}

document.getElementById('taks2').addEventListener('click', ()=> {
  
    showDate()
    greeting()
    
    Promise.resolve('Promise #1').then(msg => {
        console.log('4. Promise #1');
        setMessage.push(`4. ${msg}`);
    });
    Promise.resolve('Promise #2').then(msg => {
        console.log('5. Promise #2');
        setMessage.push(`5. ${msg}`);
    });
    getData("https://randomuser.me/api/?results=5").then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
        setMessage.push(`6. ${JSON.stringify(data)}`);
    });
    goodBye();

});

const showdata2 = () => {
    const lista = document.getElementById('listTasks');
    setMessage.forEach(task => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = task;
        lista.appendChild(elementoLista);
    });
}


