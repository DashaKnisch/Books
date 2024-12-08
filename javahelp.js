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

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('open');
    });
});

document.getElementById('askQuestionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;

    // Проверка полей
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const question = document.getElementById('question');

    // Функция для проверки и отображения ошибок
    function validateField(field, errorElement) {
        if (field.value.trim() === '') {
            errorElement.style.display = 'block';
            field.style.borderColor = 'red';
            isValid = false;
        } else {
            errorElement.style.display = 'none';
            field.style.borderColor = 'green';
        }
    }
    validateField(name, document.getElementById('nameError'));
    validateField(email, document.getElementById('emailError'));
    validateField(question, document.getElementById('questionError'));

    if (isValid) {
        const confirmation = confirm("Ваш вопрос успешно отправлен! Мы свяжемся с вами в ближайшее время.");
        if (confirmation) {
            document.getElementById('askQuestionForm').reset();
        }
    }
});
