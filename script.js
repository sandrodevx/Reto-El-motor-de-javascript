



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
