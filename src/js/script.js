const navElement = document.querySelector('.nav');
const hamburgerElement = document.querySelector('.hamburger');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('nav--open');
    hamburgerElement.classList.toggle('hamburger--open');
});