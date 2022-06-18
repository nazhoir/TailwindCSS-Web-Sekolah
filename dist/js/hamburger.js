// hamburger button
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const closeHamburger = document.querySelector('#hamburger-close');

hamburger.addEventListener('click', function() {
    // hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('translate-x-[-100%]')
});

closeHamburger.addEventListener('click', function() {
    navMenu.classList.add ('translate-x-[-100%]')
    navMenu.classList.add ('text-black')
});