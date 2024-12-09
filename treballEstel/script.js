document.addEventListener('DOMContentLoaded', () => {
    // Forzar que container1 esté activo por defecto al cargar la página
    document.getElementById('container1').classList.add('active');

    // Event listener para los enlaces
    document.querySelectorAll('.MCnav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            // Ocultar todos los contenedores
            document.querySelectorAll('.containerMC').forEach(container => {
                container.classList.remove('active');
            });
            // Mostrar el contenedor correspondiente
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});