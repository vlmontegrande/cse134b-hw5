document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Animation on scroll for cards
    const cards = document.querySelectorAll('.about-card');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.classList.add('show');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
});
