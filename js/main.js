

function initMenu(){
    let menu = document.querySelector('.js-menu');
    let btnMenu = document.querySelector('.js-menu-btn');
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-list__block_open');
    });
};

initMenu();