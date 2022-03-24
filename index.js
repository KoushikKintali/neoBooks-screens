const hamBurgerButtonElement = document.getElementById('nav-hamburger-button');

const hamBurgerElement = document.getElementById('nav-hamburger');

hamBurgerButtonElement.addEventListener('click', () => {
    if (hamBurgerElement.classList.contains('display-none')) {
        hamBurgerElement.classList.remove('display-none')
    } else {
        hamBurgerElement.classList.add('display-none')
    }
});