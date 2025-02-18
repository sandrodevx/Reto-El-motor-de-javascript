// Reto: El Motor de Javascript
// 1. Crea una galería de imagen en la que mediante un botón 
// cambien las imágenes mostradas. 🧠
// 2. Intenta escribir el código de HTML, CSS y JS que ves en 
// esta página renderizada. No tiene que ser perfecto! 🧑‍💻





document.addEventListener('DOMContentLoaded', () => {

    // Seleccionar elementos
    const carImages = document.querySelectorAll('.car');
    const avanzarBoton = document.getElementById('avanzar');
    const retrocederBoton = document.getElementById('retroceder');

    let indiceActual = 0;

    // Función para cambiar la imagen
    function cambiarImagen() {
        // Ocultar imágenes
        carImages.forEach(img => {
            img.style.display = 'none';
        });

        // Mostrar la imagen que corresponda
        carImages[indiceActual].style.display = 'block';
    }

    function avanzarImagen() {
        // Actualizar el índice de la imagen
        indiceActual = (indiceActual + 1) % carImages.length;

        // inicializar mostrar la primera imagen
        cambiarImagen();
    }
    function retrocederImagen() {
        // Actualizar el índice de la imagen
        indiceActual = (indiceActual - 1 + carImages.length) % carImages.length;

        // inicializar mostrar la primera imagen
        cambiarImagen();
    }

    // Añadir click para cambiar la imagen
    avanzarBoton.addEventListener('click', avanzarImagen);
    retrocederBoton.addEventListener('click', retrocederImagen);

});