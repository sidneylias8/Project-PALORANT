const hamMenu = document.getElementById('hamburger-menu');

const offScreen = document.getElementById('nav-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list > div'); 
let dots = document.querySelectorAll('.dots li');
let prev = document.getElementById('prev-button');
let next = document.getElementById('next-button');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active+1 > lengthItems){
        active = 0;
    }else{
        active++;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active-1 < 0){
        active = lengthItems;
    }else{
        active--;
    }
    reloadSlider();
}

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.dots li.active');
    if(lastActiveDot){
        lastActiveDot.classList.remove('active');
    }
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})