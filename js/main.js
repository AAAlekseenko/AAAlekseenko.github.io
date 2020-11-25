
function initMenu(){
    let menu = document.querySelector('.js-menu');
    let btnMenu = document.querySelector('.js-menu-btn');
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-list__block_open');
    });
};

initMenu();
$(document).ready(function(){
  $('.jq-slider').slick({
      dots: true,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false
            }
          },
          
        ]
  });
});



  