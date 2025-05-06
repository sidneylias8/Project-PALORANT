const hamMenu = document.getElementById('hamburger-menu');

const offScreen = document.getElementById('nav-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})

function navigateToNews() {
    var selectedValue = document.getElementById("newsSelect").value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}