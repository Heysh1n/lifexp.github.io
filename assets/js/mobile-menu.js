document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('burger--active');
        mobileMenu.classList.toggle('mobile-menu--shown');
    });
});