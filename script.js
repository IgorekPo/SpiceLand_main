const burgerMenu = document.querySelector ('.header__burger');
const headerMenu = document.querySelector ('.header__links');
burgerMenu.addEventListener ('click', function(){
    burgerMenu.classList.toggle ('active');
    headerMenu.classList.toggle ('active');
})