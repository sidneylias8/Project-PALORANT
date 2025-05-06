const hamMenu = document.getElementById('hamburger-menu');

const offScreen = document.getElementById('nav-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})