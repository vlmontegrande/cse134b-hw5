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
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('#theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply saved theme or use system preference
    if (savedTheme === 'dark' || (savedTheme === null && prefersDarkScheme)) {
        document.documentElement.classList.add('dark-theme');
    }
    
    // Toggle theme on click
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDarkTheme = document.documentElement.classList.toggle('dark-theme');
            localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
        });
    }
    
    // Animation on scroll for cards
    const animateElements = document.querySelectorAll('.card, .about-card, [data-animate]');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            }
        });
    }
    
    if (animateElements.length > 0) {
        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Check on initial load
    }
    
    // Set active nav link based on current page
    const currentPath = window.location.pathname;
    const navLinks2 = document.querySelectorAll('.nav-links a');
    
    navLinks2.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Check if the current path matches the link path
        // or if we're on the home page and the link is to the home page
        if (
            (currentPath.endsWith(linkPath) && linkPath !== '/') || 
            (currentPath.endsWith('/') && linkPath === '/') ||
            (currentPath.endsWith('/index.html') && linkPath === '/')
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
