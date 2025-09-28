// Enhanced JavaScript with better accessibility
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    // Mobile menu functionality
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Enhanced smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    
    
    
    
    
    // Testimonial functionality
function initializeTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.getElementById('testimonialDots');
    
    if (testimonialCards.length > 0 && dotsContainer) {
        // Create dots for each testimonial
        testimonialCards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('testimonial-dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('data-index', index);
            dotsContainer.appendChild(dot);
        });
        
        // Add click event to dots
        const dots = document.querySelectorAll('.testimonial-dot');
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                
                // Update active dot
                dots.forEach(d => d.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll to testimonial
                testimonialCards[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            });
        });











        // Auto-rotate testimonials
        let currentTestimonial = 0;
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            
            // Update active dot
            dots.forEach(d => d.classList.remove('active'));
            dots[currentTestimonial].classList.add('active');
            
            // Scroll to testimonial
            testimonialCards[currentTestimonial].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 5000); // Change every 5 seconds
    }
























































































    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Update copyright year dynamically
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = copyrightElement.textContent.replace('2023', currentYear);
    }
    












    // Add loading animation for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        // Add slight delay for staggered animation
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
    
   











   
   
   
   
    // Add intersection observer for animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe steps for animation
        document.querySelectorAll('.step').forEach(step => {
            observer.observe(step);
        });
        
        // Observe contact items for animation
        document.querySelectorAll('.contact-item').forEach(item => {
            observer.observe(item);
        });
    }
















});

