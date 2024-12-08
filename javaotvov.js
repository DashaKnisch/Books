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

// Отзывы
document.getElementById('show-more').addEventListener('click', function() {
    var hiddenReviews = document.querySelectorAll('.additional-review');
    hiddenReviews.forEach(function(review) {
        review.classList.remove('hidden');
    });
    document.getElementById('show-more').style.display = 'none';  
    document.getElementById('show-less').style.display = 'inline-block'; 
});

document.getElementById('show-less').addEventListener('click', function() {
    var hiddenReviews = document.querySelectorAll('.additional-review');
    hiddenReviews.forEach(function(review) {
        review.classList.add('hidden');
    });
    document.getElementById('show-more').style.display = 'inline-block';
    document.getElementById('show-less').style.display = 'none'; 
});

// Форма
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;

    // Проверка полей
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const orderNumber = document.getElementById('orderNumber');
    const comment = document.getElementById('comment');

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
    validateField(orderNumber, document.getElementById('orderError'));
    validateField(comment, document.getElementById('commentError'));

    if (isValid) {
        alert('Отзыв отправлен!');
        document.getElementById('reviewForm').reset(); 
    }
});

// Функция для выбора звезд
document.querySelectorAll('.stars').forEach(function(starContainer) {
    const stars = starContainer.querySelectorAll('.star');
    
    stars.forEach(function(star) {
        star.addEventListener('mouseover', function() {
            const ratingValue = star.getAttribute('data-value');
            highlightStars(starContainer, ratingValue);
        });

        star.addEventListener('mouseout', function() {
            const selectedStars = starContainer.querySelectorAll('.star.selected');
            const ratingValue = selectedStars.length > 0 ? selectedStars[selectedStars.length - 1].getAttribute('data-value') : 0;
            highlightStars(starContainer, ratingValue);
        });

        star.addEventListener('click', function() {
            const ratingValue = star.getAttribute('data-value');
            setStars(starContainer, ratingValue);
        });
    });
});

// Функция для подсветки звезд
function highlightStars(starContainer, ratingValue) {
    starContainer.querySelectorAll('.star').forEach(function(star) {
        if (parseInt(star.getAttribute('data-value')) <= ratingValue) {
            star.style.color = 'gold';
        } else {
            star.style.color = '#ccc';
        }
    });
}

function setStars(starContainer, ratingValue) {
    starContainer.querySelectorAll('.star').forEach(function(star) {
        if (parseInt(star.getAttribute('data-value')) <= ratingValue) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}




