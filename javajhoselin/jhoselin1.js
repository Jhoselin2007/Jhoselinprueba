// Selecciona todos los elementos con la clase 'texto2' dentro de 'caja4'
let elementosTexto2 = document.querySelectorAll('.caja4 .texto2');

// Itera sobre cada elemento y realiza la acción deseada
elementosTexto2.forEach((elemento) => {
    // Agrega un controlador de eventos de clic a cada elemento
    elemento.addEventListener('click', () => {
        // Comprueba si el elemento está resaltado
        if (elemento.style.backgroundColor === 'yellow') {
            // Si el elemento está resaltado, quita el resaltado
            elemento.style.backgroundColor = '';
        } else {
            // Si el elemento no está resaltado, resáltalo
            elemento.style.backgroundColor = '#E6E6FA';
        }
    });
});

// Selecciona todas las imágenes dentro de 'caja4'
let imagenes = document.querySelectorAll('.caja4 img');

// Itera sobre cada imagen y realiza la acción deseada
imagenes.forEach((imagen) => {
    // Agrega un controlador de eventos de clic a cada imagen
    imagen.addEventListener('click', () => {
        // Comprueba si la imagen está resaltada
        if (imagen.style.border === '2px solid red') {
            // Si la imagen está resaltada, quita el resaltado
            imagen.style.border = '';
        } else {
            // Si la imagen no está resaltada, resáltala
            imagen.style.border = '2px solid red';
        }
    });
});