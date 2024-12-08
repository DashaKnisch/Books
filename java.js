// Регистрация
const registerBtn = document.getElementById('register-btn');
const registerForm = document.getElementById('register-form');
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('.register-form form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


registerBtn.onclick = function(event) {
    event.preventDefault(); 
    registerForm.style.display = 'block'; 
}


closeBtn.onclick = function() {
    registerForm.style.display = 'none'; 
}

form.onsubmit = function(event) {
    event.preventDefault();
    let isValid = true;
    if (!usernameInput.value) {
        alert('Поле "Логин" не заполнено');
        isValid = false;
    }
    if (!passwordInput.value) {
        alert('Поле "Пароль" не заполнено');
        isValid = false;
    }
    if (isValid) { 
        registerForm.style.display = 'none';
    }
}

// Новости
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str;
}

document.addEventListener("DOMContentLoaded", function () {
    const newsBlocks = document.querySelectorAll('.news-block');

    newsBlocks.forEach(block => {
        const contentElement = block.querySelector('.news-content');
        const readMoreBtn = block.querySelector('.read-more-btn');
        const fullText = contentElement.getAttribute('data-full-text');
        const truncatedText = truncate(fullText, 200);

        contentElement.textContent = truncatedText;

        readMoreBtn.addEventListener('click', function () {
            if (block.classList.contains('expanded')) {
                contentElement.textContent = truncatedText;
                readMoreBtn.textContent = 'ПОДРОБНЕЕ';
            } else {
                contentElement.textContent = fullText;
                readMoreBtn.textContent = 'СВЕРНУТЬ';
            }
            block.classList.toggle('expanded');
        });
    });
});

// Открытие и закрытие бургер-меню
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a');

// Открытие и закрытие меню
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Добавление активного класса к выбранному пункту меню
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Галлерея жанров
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    let scrollAmount = 0;
    const scrollStep = gallery.scrollWidth / 7; 

    rightArrow.addEventListener('click', () => {
        gallery.scrollBy({ left: scrollStep, behavior: 'smooth' });
        scrollAmount += scrollStep;
        if (scrollAmount >= gallery.scrollWidth) {
            scrollAmount = 0;
            gallery.scrollTo({ left: 0, behavior: 'smooth' });
        }
    });

    leftArrow.addEventListener('click', () => {
        gallery.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        scrollAmount -= scrollStep;
        if (scrollAmount <= 0) {
            scrollAmount = gallery.scrollWidth;
            gallery.scrollTo({ left: gallery.scrollWidth, behavior: 'smooth' });
        }
    });
});






