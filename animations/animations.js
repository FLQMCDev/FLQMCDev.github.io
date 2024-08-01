document.addEventListener('DOMContentLoaded', () => {
    gsap.fromTo('header .hero-content', 
        { opacity: 0, y: 100 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    
    gsap.fromTo('main section', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power3.out' }
    );
    
    gsap.fromTo('footer', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
});
