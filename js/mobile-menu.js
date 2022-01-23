(() => {
    const refs = {
        openMenuBtn: document.querySelector('.mobile-menu__button-open'),
        closeMenuBtn: document.querySelector('.mobile-menu__cross-button'),
        menu: document.querySelector('.mobile-menu__menu-container'),
    };

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
}
}) ();
    