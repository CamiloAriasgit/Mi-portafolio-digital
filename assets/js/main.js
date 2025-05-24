// Script para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('responsive'); // Usa 'responsive' para el CSS original
            navMenu.classList.toggle('show');      // Usa 'show' para la transición de despliegue
        });

        // Ocultar el menú responsive al hacer clic en un enlace (para mejor UX)
        document.querySelectorAll('.nav-menu a').forEach(item => {
            item.addEventListener('click', () => {
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    navMenu.classList.remove('responsive'); // Asegura que la clase 'responsive' también se elimine
                    hamburger.classList.remove('active');
                }
            });
        });
    }
});