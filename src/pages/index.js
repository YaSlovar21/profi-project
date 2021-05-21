import Swiper from 'swiper/bundle';
import WOW from 'wow.js';

import 'swiper/swiper-bundle.css';
import 'animate.css';


import '../pages/index.css';

const wowAnimation = new WOW({
  boxClass:     'wow',      // animated element css class (default is wow)
  animateClass: 'animate__animated', // animation css class (default is animated)
  offset:       0,          // distance to the element when triggering the animation (default is 0)
  mobile:       true,       // trigger animations on mobile devices (default is true)
  live:         true,       // act on asynchronously loaded content (default is true)
  scrollContainer: null,    // optional scroll container selector, otherwise use window,
  resetAnimation: true,     // reset animation on end (default is true)
});
wowAnimation.init();


const commercOffersSlider  = new Swiper('.khan__book-container', {
        direction: 'horizontal',
        effect: 'slide',
        speed: 700,
        preloadImages: false,
        //lazy: true,
        //zoom: true,
        cssMode: false,
        mousewheel: false,

        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },

        pagination: {
          type: 'bullets',
          el: '.khan__list',
          clickable: true,
          bulletClass: 'khan__list-item', 
          bulletActiveClass: 'khan__list-item_active',
          renderBullet: function (index, className) {
              let a = '';
              if (index==0) {
                a = 'Коммерческое предложение'
              }
              if (index==1) {
                a = 'Спецификация'
              }
              if (index==2) {
                a = 'Тех. данные'
              }
              return '<li class=' + className + '>' + a + '</li>';
              //<li id="khan_1" class="khan__list-item khan__list-item_active">Коммерческое предложение</li>
          }
        },
});

commercOffersSlider.init();

const popupImageSelector = '.popup-viewport';
const projectToPopupSelector = '.projects-item';
/*
Array.from(document.querySelectorAll(projectToPopupSelector))
  .forEach(item => {
    let itemImg
    item.addEventListener('click')
  })
*/

const popupProject = new PopupWithImage({
    imageInPopupSelector: '', 
    imageDescInPopupSelector :'',
  },
  popupImageSelector
);

