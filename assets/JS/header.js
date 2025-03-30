// Adicione no final do arquivo script.js

// Header dinâmico
const header = document.querySelector('.main-header');
const heroSection = document.querySelector('.hero-section');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '10px 0';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        header.style.padding = '15px 0';
    }
});

// Navegação ativa
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});