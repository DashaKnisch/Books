// Регистрация
const registerBtn = document.getElementById('register-btn');
const registerForm = document.getElementById('register-form');
const closeBtn = document.querySelector('.close-btn');

registerBtn.addEventListener('click', () => {
    registerForm.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    registerForm.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == registerForm) {
        registerForm.style.display = 'none';
    }
});

// Бургер-меню
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
