// Optimización de performance del fondo
class BackgroundManager {
    constructor() {
        this.init();
        this.addScrollEffects();
    }
    
    init() {
        // Reducir animaciones si el usuario prefiere menos movimiento
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.reduceAnimations();
        }
        
        // Carga progresiva de la imagen de nubes
        this.loadCloudImage();
    }
    
    loadCloudImage() {
        const cloudImage = new Image();
        cloudImage.src = 'clouds-layer-optimized.webp';
        cloudImage.onload = () => {
            document.querySelector('.clouds-layer').style.backgroundImage = 
                `url(${cloudImage.src})`;
        };
    }
    
    addScrollEffects() {
        // Efecto parallax avanzado
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const clouds = document.querySelector('.clouds-layer');
            const speed = scrolled * 0.5;
            
            clouds.style.transform = `translateX(-${speed}px)`;
        });
    }
    
    reduceAnimations() {
        document.querySelectorAll('*').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    }
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    new BackgroundManager();
});

// Optimización para SEO y métricas de performance
window.addEventListener('load', () => {
    // Marcaje para Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'background_loaded', {
            'event_category': 'performance',
            'event_label': 'iava.me_background'
        });
    }
});