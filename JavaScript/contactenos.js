// Script para funcionalidades de la página Acerca de Nosotros

document.addEventListener('DOMContentLoaded', function() {
    // Efecto smooth scroll al hacer click en volver
    const volverBtn = document.querySelector('.volver-btn');
    
    volverBtn.addEventListener('click', function(e) {
        // Permite que el link funcione normalmente
        // Pero puedes agregar lógica aquí si lo deseas
    });

    // Animación de entrada para las secciones
    const secciones = document.querySelectorAll('.seccion');
    
    secciones.forEach((seccion, index) => {
        seccion.style.animationDelay = `${index * 0.15}s`;
    });

    // Efecto de hover en los iconos
    const iconos = document.querySelectorAll('.icono');
    
    iconos.forEach(icono => {
        icono.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icono.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Observador para animaciones al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    secciones.forEach(seccion => {
        observer.observe(seccion);
    });

    // Destacar items de la lista al hover
    const listItems = document.querySelectorAll('.lista-compromiso li, .lista-productos li');
    
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#2d7a5e';
            this.style.paddingLeft = '25px';
            this.style.transition = 'all 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.color = '#555';
            this.style.paddingLeft = '20px';
        });
    });
});