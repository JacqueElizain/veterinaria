let navList = document.querySelector('header nav ul');
let menuIcono = document.querySelector('.icono_menu');
let main = document.querySelector('main');

menuIcono.addEventListener('click', () => {

    navList.classList.toggle('show');
    
    if (navList.classList.contains('show')) {
        main.style.marginTop = navList.clientHeight + 'px';
    } else {
        main.style.marginTop = '0';
    }
});
