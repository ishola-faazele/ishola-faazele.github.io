const nav = document.getElementById("nav");
const menu = document.querySelector('.menu');


menu.addEventListener('click', function() {
    if (nav.style.display !== 'none') {
        nav.style.display = 'none';

        menu.innerHTML = 'menu';
    } else {
        menu.innerHTML = 'close';
        nav.style.display = 'block'; 
    }
    nav.classList.toggle('navlinks');   
})