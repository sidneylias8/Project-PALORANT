const hamMenu = document.getElementById('hamburger-menu');

const offScreen = document.getElementById('nav-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})

function navigateToNews(){
    var selectedValue = document.getElementById("select-news").value;
    if(selectedValue){
        window.location.href = selectedValue;
    }
}

window.addEventListener("DOMContentLoaded", function(){
    const select = document.getElementById("select-news");
    const currentPage = window.location.pathname;

    for(let i = 0; i < select.options.length; i++){
        if(currentPage.includes(select.options[i].value)){
            select.selectedIndex = i;
            break;
        }
    }
});