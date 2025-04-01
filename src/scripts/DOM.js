// 1. Cambiar texto al hacer clic (Header)
const headerTitle = document.querySelector('.header h1');

headerTitle.addEventListener('click', () => {
    headerTitle.textContent = '🍔 Pasto Food - Capital Gastronómica';
    headerTitle.style.color = '#ff5733';
    headerTitle.style.transition = 'all 0.3s';
});


// ******************* Agregar elementos a lista, usando querySelector y createElement
const taskList = document.querySelector('#listUsers');
console.log(taskList)
const addButton = document.querySelector('#AddUser');

function addTask() {
    const newTask = document.createElement('li');
    newTask.textContent = `Tarea ${taskList.children.length + 1}`;
    taskList.appendChild(newTask);
}

addButton.addEventListener('click', addTask);


// ******************** Toggle de clase CSS (Tarjetas)
// El método classList.toggle('active') alterna (añade o quita) la clase active del elemento 
// cada vez que se hace clic.
document.querySelectorAll('.cardFlexbox, .cardGrid').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
    
});

// Añadir en CSS:
// .active {
//     transform: scale(1.05);
//     box-shadow: 0 4px 15px rgba(0,0,0,0.2);
// }


// ********************* Manejo de Formulario

    const formulario = document.getElementById('miFormulario');
        
    formulario.addEventListener('submit', function(e) {
        // Prevenir el comportamiento por defecto
        e.preventDefault();
        
        // Resetear errores
        limpiarErrores();
        
        // Validar campos
        const esValido = validarFormulario();
        
        if(esValido) {
            // Procesar datos (ejemplo: enviar a servidor)
            const datosFormulario = new FormData(this);
            console.log(Object.fromEntries(datosFormulario));
            
            // Resetear formulario si es exitoso
            this.reset();
        }
    });

    function validarFormulario() {
        let valido = true;
        
        // Validación personalizada para cada campo
        if(!document.getElementById('nombre').value.trim()) {
            mostrarError('errorNombre', 'El nombre es obligatorio');
            valido = false;
        }
        
        const email = document.getElementById('email').value;
        if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
            mostrarError('errorEmail', 'Correo electrónico inválido');
            valido = false;
        }
        
        // Agregar validaciones para los demás campos...
        
        return valido;
    }

    function mostrarError(elementoId, mensaje) {
        document.getElementById(elementoId).textContent = mensaje;
    }

    function limpiarErrores() {
        document.querySelectorAll('.error').forEach(error => {
            error.textContent = '';
        });
    }

    const inputName = document.querySelector("#nombre");
    inputName.addEventListener("input", (e) => {
        console.log("Valor actual name :", e.target.value); // Validación en tiempo real
    });
    

    // Explicación de elementos clave:

    // e.preventDefault(): Detiene el comportamiento por defecto del formulario (recarga de página).
    // Por qué usarlo: Permite manejar el envío mediante JavaScript para validaciones complejas o envíos AJAX.

    // Validación HTML5:
    // Atributos como required, minlength, type="email" proporcionan validación nativa.
    // Buen práctica: Combinar validación HTML5 con JavaScript para mayor seguridad.

    // Manejo de errores:
    // Feedback claro: Mensajes específicos cerca de cada campo.

    // Accesibilidad: Usar aria-invalid y aria-describedby para screen readers.
    // Buenas prácticas:
    // Validación en cliente y servidor: La validación frontend es para UX, pero siempre validar en el backend.

    // Seguridad: Nunca confiar solo en la validación del cliente.



// **************************** Manipulación de Diálogo y Template
document.querySelector('[onclick="eliminarElemento()"]').addEventListener('click', () => {
    const template = document.getElementById('card-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector('.title').textContent = 'Nueva Tarjeta';
    clone.querySelector('.content').textContent = 'Contenido dinámico';

    document.getElementById('clone-block2').appendChild(clone);
});


// Modificar Barra de Progreso
const progressBar = document.getElementById('carga');
let progress = 0;

setInterval(() => {
    progress = (progress < 90) ? progress + 10 : 0;
    progressBar.value = progress;
}, 1000);


// Efectos en Navegación
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-2px)';
        link.style.color = '#ff9800';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'none';
        link.style.color = '';
    });
});


// 9. Canvas Dinámico
// Modificar el script existente en el canvas
// const canvas = document.getElementById('miCanvas');
// const ctx = canvas.getContext('2d');

// function dibujarCirculo() {
//     ctx.beginPath();
//     ctx.arc(Math.random()*400, Math.random()*200, 20, 0, 2*Math.PI);
//     ctx.fillStyle = `hsl(${Math.random()*360}, 70%, 50%)`;
//     ctx.fill();
// }

// setInterval(dibujarCirculo, 1000);


// 10. Clone de Template
// En main.js
// const template = document.getElementById('card-template');
// const cloneContainer = document.getElementById('clone-block');

// document.querySelector('button[onclick="showdata2()"]').addEventListener('click', () => {
//     const clone = template.content.cloneNode(true);
//     clone.querySelector('.title').textContent = 'Título Dinámico';
//     clone.querySelector('.content').textContent = 'Contenido generado desde JS';
//     cloneContainer.appendChild(clone);
// });

