
function initMenu(){
    let menu = document.querySelector('.js-menu');
    let btnMenu = document.querySelector('.js-menu-btn');
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-list__block_open');
    });
};

initMenu();
$('.jq-slider').slick({
    infinite: true,
    dots:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            
          },
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
          }
        }
      
      ]
  });