// script.js

// Toggle between languages
const toggleLanguage = () => {
    const currentLanguage = localStorage.getItem('language') || 'en';
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    localStorage.setItem('language', newLanguage);
    applyLanguage(newLanguage);
};

const applyLanguage = (language) => {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-lang-${language}`);
    });
};

// Shopping cart management
const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

const addToCart = (item) => {
    cart.push(item);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
};

const getCartItems = () => {
    return cart;
};

const clearCart = () => {
    localStorage.removeItem('shoppingCart');
};

// Accordion FAQ functionality
const toggleAccordion = (event) => {
    const target = event.currentTarget;
    const content = target.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
};

// Form validation
const validateForm = (form) => {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });
    return isValid;
};

// Event listeners
document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', toggleAccordion);
});

const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm(form)) {
        // Process form submission
    }
});