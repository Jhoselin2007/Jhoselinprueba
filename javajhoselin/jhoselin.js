// Selecciona todos los elementos con la clase 'texto2'
let elementosTexto2 = document.querySelectorAll('.texto2');

// Itera sobre cada elemento y realiza la acción deseada
elementosTexto2.forEach((elemento) => {
    // Agrega un controlador de eventos de clic a cada elemento
    elemento.addEventListener('click', () => {
        // Comprueba si el elemento está oculto
        if (elemento.style.display === 'none') {
            // Si el elemento está oculto, muéstralo
            elemento.style.display = 'block';
        } else {
            // Si el elemento se está mostrando, ocúltalo
            elemento.style.display = 'none';
        }
    });
});






//// Crea un nuevo botón
let boton = document.createElement('button');
boton.innerText = 'Mostrar elementos';

// Agrega un controlador de eventos de clic al botón
boton.addEventListener('click', () => {
    // Selecciona todos los elementos con la clase 'texto2'
    let elementosTexto2 = document.querySelectorAll('.texto2');

    // Itera sobre cada elemento y realiza la acción deseada
    elementosTexto2.forEach((elemento) => {
        // Muestra cada elemento
        elemento.style.display = 'block';
    });
});

// Agrega el botón al cuerpo del documento
document.body.appendChild(boton);