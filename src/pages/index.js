import Swiper from 'swiper/bundle';
import WOW from 'wow.js';

import Section from '../js/components/Section.js';
import Card from '../js/components/Card.js';

//import FormValidator from '../js/components/FormValidator.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
//import PopupConfirm from '../js/components/PopupConfirm.js';
import PopupWithHeatEx from '../js/components/PopupWithHeatEx.js';
import PopupWithImage from '../js/components/PopupWithImage.js';

import 'swiper/swiper-bundle.css';
import 'animate.css';
import '../pages/index.css';

import {
  //данные проектов
  initialProjects,
  initialHeatEx,
  
  cardsContainerSelector, //селектор секции куда грузятся карточки 
  cardTemplateSelector,   //шаблон карточки

  popupImageSelector,     //попап с картинкой (селектор)
  callBackPopupSelector,  //попап с формой обратного звонка (селектор)
  popupWithToSelector,    //попап с теплообменником

  //кнопки открытия модальных окон
  callBackPopupOpenButton,
  popupWithSertifOpenButton,
  
  platesSvg,

  //конфиги
  popupImageSelectorsCongig,
  popupToConfig,
} from '../js/utils/constants.js';


function createCard(item) {
  const card = new Card({
    name: item.name,
    link: item.link,
    handleImageClick: (desc, link) => {
      //(desc, link) передаем во внутреннем методе карточки
      popupImage.open({
        link: link,
        name: desc,
      });      
    },
  }, cardTemplateSelector);
  const cardToAdd = card.generateCard()
  return cardToAdd;
}

const projectList = new Section({
  data: initialProjects,
  renderer: (item) => {
    //в этой точке знаем все данные карточки
    //item - объект карточки со всеми свойствами
    const card = createCard(item);
    projectList.setItem(card);
  }
}, cardsContainerSelector);
projectList.renderItems();


const popupImage = new PopupWithImage(popupImageSelectorsCongig, popupImageSelector);
const popupHeatEx = new PopupWithHeatEx(popupToConfig, popupWithToSelector);

const popupCallBack = new PopupWithForm({
  formSubmitHandler: (formCallbackData) => {

  },
  formCleanError: () => {

  },
}, callBackPopupSelector)


popupImage.setEventListeners();
popupCallBack.setEventListeners();
popupHeatEx.setEventListeners();

//навешиваем слушатели на элементы сайта
callBackPopupOpenButton.addEventListener("click", () => {
  popupCallBack.open();
})

popupWithSertifOpenButton.addEventListener("click", () => {
  popupImage.open({
    link: popupWithSertifOpenButton.src,
    name: popupWithSertifOpenButton.alt,
  });  
})

platesSvg.addEventListener("click", (evt) => {
  popupHeatEx.open(initialHeatEx[evt.target.dataset.to]);
  console.log(initialHeatEx[evt.target.dataset.to]);
});


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
        zoom: true,
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

