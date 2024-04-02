// Change navbar styles on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(window.pageYOffset > 0) {
        navbar.style.backgroundColor = '#4CAF50'; // Color changes when scrolled
    } else {
        navbar.style.backgroundColor = '#871b1b'; // Original color
    }
});
