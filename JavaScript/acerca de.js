// Script para funcionalidades adicionales de la página de contacto

document.addEventListener('DOMContentLoaded', function() {
    // Agregar efecto al botón volver
    const volverBtn = document.querySelector('.volver-btn');
    
    volverBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(-5px)';
    });
    
    volverBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });

    // Agregar animación suave a las secciones
    const sections = document.querySelectorAll('.horario-section, .ayuda-section, .info-section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeIn 0.6s ease-in ${index * 0.2}s forwards`;
    });

    // Hacer el número de WhatsApp clickeable
    const whatsappNumber = '+51 946 121 057';
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        if (item.textContent.includes('WhatsApp')) {
            item.addEventListener('click', function() {
                // Remover espacios para crear el link de WhatsApp
                const cleanNumber = whatsappNumber.replace(/\s/g, '');
                window.open(`https://wa.me/${cleanNumber}`, '_blank');
            });
            item.style.cursor = 'pointer';
        }
    });
});

// Definir animación fade-in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);