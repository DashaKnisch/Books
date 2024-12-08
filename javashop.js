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

// Корзина
document.addEventListener("DOMContentLoaded", function () {
    const cartBtn = document.getElementById('cart-btn');
    const cartPopup = document.getElementById('cart-popup');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const totalPriceElement = document.getElementById('total-price');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const cartCountElement = document.getElementById('cart-count');
    const applyFilterBtn = document.getElementById('apply-cart-filters-btn');
    const minPriceInput = document.getElementById('cart-min-price');
    const maxPriceInput = document.getElementById('cart-max-price');
    const sortBtn = document.getElementById('sort-price-btn');

    let cartCount = 0;
    let totalPrice = 0;
    let cartItems = [];
    let isSortedAsc = true;

    // Функция для обновления отображения корзины
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        if (cartItems.length === 0) {
            emptyCartMessage.style.display = 'block';
        } else {
            emptyCartMessage.style.display = 'none';
            cartItems.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.textContent = `${item.title} - ${item.price} рублей`;

                const removeBtn = document.createElement('button');
                removeBtn.textContent = '-';
                removeBtn.addEventListener('click', () => removeItem(index));

                itemElement.appendChild(removeBtn);
                cartItemsContainer.appendChild(itemElement);
            });
        }

        totalPriceElement.textContent = `Итого: ${totalPrice} рублей`;
        cartCountElement.textContent = cartCount;
    }

    // Функция для удаления товара из корзины
    function removeItem(index) {
        const item = cartItems[index];
        totalPrice -= item.price;
        cartItems.splice(index, 1);
        cartCount--;
        updateCartDisplay();
    }

    // Добавление товара в корзину
    document.querySelectorAll('.buy-btn').forEach((btn, index) => {
        btn.addEventListener('click', function () {
            const bookCard = btn.closest('.book-card');
            const title = bookCard.querySelector('h2').textContent;
            const priceText = bookCard.querySelector('.price').textContent;
            const price = parseFloat(priceText.replace(' рублей', '').replace(' руб.', ''));

            cartItems.push({ title, price });
            cartCount++;
            totalPrice += price;
            updateCartDisplay();
        });
    });

    // Открытие корзины
    cartBtn.addEventListener('click', function () {
        cartPopup.style.display = 'block';
    });

    // Закрытие корзины
    closeCartBtn.addEventListener('click', function () {
        cartPopup.style.display = 'none';
    });

    // Очистка корзины
    clearCartBtn.addEventListener('click', function () {
        cartItems = [];
        cartCount = 0;
        totalPrice = 0;
        updateCartDisplay();
    });

    // Применение фильтров по цене
    applyFilterBtn.addEventListener('click', () => {
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

        const filteredItems = cartItems.filter(item => item.price >= minPrice && item.price <= maxPrice);
        updateFilteredCart(filteredItems);
    });

    // Сортировка товаров внутри корзины по цене
    sortBtn.addEventListener('click', () => {
        const sortedItems = [...cartItems].sort((a, b) => isSortedAsc ? a.price - b.price : b.price - a.price);
        isSortedAsc = !isSortedAsc;
        updateFilteredCart(sortedItems);
    });

    // Обновление корзины после фильтрации и сортировки
    function updateFilteredCart(items) {
        cartItems = items;
        totalPrice = items.reduce((sum, item) => sum + item.price, 0);
        updateCartDisplay();
    }

    // Инициализация корзины при загрузке страницы
    updateCartDisplay();
});

document.addEventListener("DOMContentLoaded", function () {
    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach(card => {
        const detailsBtn = card.querySelector('.details-btn');
        const collapseBtn = card.querySelector('.collapse-btn');
        const description = card.querySelector('.description');

        detailsBtn.addEventListener('click', function () {
            card.querySelector('.buy-btn').style.display = 'none';
            detailsBtn.style.display = 'none';
            description.style.display = 'block';
            collapseBtn.style.display = 'inline-block';
        });

        collapseBtn.addEventListener('click', function () {
            description.style.display = 'none';
            collapseBtn.style.display = 'none';
            card.querySelector('.buy-btn').style.display = 'inline-block';
            detailsBtn.style.display = 'inline-block';
        });
    });
});








