// *****************************Eventos de Teclado
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Enter presionado");
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Up ") {
        console.log("Up event");
    }
});


// *****************************Eventos del Mouse

const box = document.querySelector(".caja");
const coordenadas = document.getElementById('coordenadas');

box.addEventListener("mouseover", () => {
    box.classList.add("resaltar");
});

box.addEventListener("mouseout", () => {
    box.classList.remove("resaltar");
});

box.addEventListener('mousemove', (event) => {
    // event.offsetX e event.offsetY proporcionan las coordenadas relativas al elemento.
    const x = event.offsetX;
    const y = event.offsetY;
    coordenadas.textContent = `Coordenadas: (${x}, ${y})`;
});

box.addEventListener('mousedown', (event) => {
    // Cambiar el color de fondo para indicar que se presionó el botón.
    box.style.backgroundColor = '#ffa';
    console.log('Botón presionado:', event.button);
});

// Evento: mouseup
// Se ejecuta cuando se suelta el botón del mouse dentro del elemento.
box.addEventListener('mouseup', (event) => {
    // Restaurar el color original de fondo.
    box.style.backgroundColor = '#ddd';
    console.log('Botón soltado:', event.button);
});

// **************************** Eventos de Ventana

window.addEventListener("resize", () => {
    console.log("Ancho de ventana:", window.innerWidth);
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        console.log("Has pasado los 500px de scroll");
    }
});

// **************************** Eventos de Drag & Drop

const itemArrastrable = document.getElementById('itemArrastrable');
const itemArrastrable2 = document.getElementById('itemArrastrable2');
const zonaDestino = document.getElementById('destino');
const zonaOrigen = document.getElementById('origen'); // También hacemos origen una zona de drop

// --- Eventos en el Elemento Arrastrable ---

function handleDragStart(evento) {
    console.log("Evento: dragstart - Iniciando arrastre de:", evento.target.id);
    // Guardamos el ID del elemento que se está arrastrando.
    // Es crucial para saber qué elemento mover cuando se suelte (drop).
    evento.dataTransfer.setData("text/plain", evento.target.id);
    // Opcional: Cambia la opacidad para indicar que se está moviendo
    evento.target.style.opacity = '0.5';
    // Opcional: Define el tipo de operación permitida
    evento.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(evento) {
    console.log("Evento: dragend - Finalizando arrastre de:", evento.target.id);
    // Restaura la opacidad cuando el arrastre termina (ya sea con éxito o cancelado)
    evento.target.style.opacity = '1';
    // Limpia cualquier resaltado residual en las zonas (por si acaso)
    zonaDestino.classList.remove('dragover');
    zonaOrigen.classList.remove('dragover');
}

// Asignar listeners a los elementos arrastrables
if (itemArrastrable) {
    itemArrastrable.addEventListener('dragstart', handleDragStart);
    itemArrastrable.addEventListener('dragend', handleDragEnd);
}
if (itemArrastrable2) {
    itemArrastrable2.addEventListener('dragstart', handleDragStart);
    itemArrastrable2.addEventListener('dragend', handleDragEnd);
}

// --- Eventos en las Zonas de Destino (Drop Zones) ---

function handleDragEnter(evento) {
    // Se dispara cuando el elemento arrastrado ENTRA en la zona de destino
     if (evento.target.classList.contains('dropzone')) {
         console.log("Evento: dragenter - Elemento entrando en zona:", evento.target.id);
         // Podrías añadir el resaltado aquí también
         // evento.target.classList.add('dragover');
     }
}

function handleDragLeave(evento) {
    // Se dispara cuando el elemento arrastrado SALE de la zona de destino
    if (evento.target.classList.contains('dropzone')) {
        console.log("Evento: dragleave - Elemento saliendo de zona:", evento.target.id);
        // Quita el resaltado visual
        evento.target.classList.remove('dragover');
    }
}

function handleDragOver(evento) {
    // Se dispara continuamente mientras un elemento se arrastra SOBRE la zona.
    // ¡¡MUY IMPORTANTE: Prevenir el comportamiento por defecto!!
    // Por defecto, los elementos NO se pueden soltar en otros elementos.
    // preventDefault() indica que esta zona SÍ acepta elementos soltados.
    evento.preventDefault();

    // Opcional: Añadir feedback visual (si no se hizo en dragenter)
    if (evento.target.classList.contains('dropzone')) {
       // console.log("Evento: dragover - Elemento sobre zona:", evento.target.id); // Puede ser muy verboso
        evento.target.classList.add('dragover');
         // Opcional: Indicar el tipo de drop permitido (debe coincidir con effectAllowed)
        evento.dataTransfer.dropEffect = 'move';
    }
}

function handleDrop(evento) {
    console.log("Evento: drop - Elemento soltado en zona:", evento.target.id);
    // ¡¡MUY IMPORTANTE: Prevenir el comportamiento por defecto!!
    // Evita que el navegador haga algo por defecto con los datos (como abrir un enlace).
    evento.preventDefault();

    // Solo proceder si se suelta directamente en una 'dropzone'
    if (evento.target.classList.contains('dropzone')) {
        // 1. Recuperar el ID del elemento arrastrado que guardamos en dragstart
        const idElementoArrastrado = evento.dataTransfer.getData("text/plain");
        console.log("ID recuperado:", idElementoArrastrado);

        // 2. Obtener la referencia al elemento arrastrado usando su ID
        const elementoArrastrado = document.getElementById(idElementoArrastrado);

        // 3. Mover el elemento arrastrado a la nueva zona (la zona donde se soltó)
        if (elementoArrastrado) {
            evento.target.appendChild(elementoArrastrado);
            console.log(`Elemento ${idElementoArrastrado} movido a ${evento.target.id}`);
        }

        // 4. Quitar el resaltado visual de la zona de destino
        evento.target.classList.remove('dragover');
    }
}

// Asignar listeners a TODAS las zonas de drop (origen y destino)
const dropzones = [zonaOrigen, zonaDestino];
dropzones.forEach(zona => {
    if (zona) {
        zona.addEventListener('dragenter', handleDragEnter);
        zona.addEventListener('dragleave', handleDragLeave);
        zona.addEventListener('dragover', handleDragOver);
        zona.addEventListener('drop', handleDrop);
    }
});


// **************************** IntersectionObserver - Detectar elementos en la vista

const nodos = document.querySelectorAll('.nodo');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.background = '#4ade80'; // Verde cuando es visible
        } else {
            entry.target.style.background = '#ccc'; // Gris cuando no es visible
        }
    });
}, {
    rootMargin: '0px', 
    threshold: 0.5 // Se dispara cuando el 50% del elemento es visible
});

nodos.forEach(box => observer.observe(box));