import Swiper from 'swiper/bundle';
import WOW from 'wow.js';
import anime from 'animejs/lib/anime.es.js';

import Section from '../js/components/Section.js';
import Card from '../js/components/Card.js';

import FormValidator from '../js/components/FormValidator.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
//import PopupConfirm from '../js/components/PopupConfirm.js';
import PopupWithHeatEx from '../js/components/PopupWithHeatEx.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import Api from '../js/components/Api.js';

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
  formValidatorConfig,


  //идентификатор Formspree формы обратного звонка
  callbackFormId,
  formCallBack,
  callbackSubmitButton,
} from '../js/utils/constants.js';

import {
  renderLoading
} from'../js/utils/utils.js';


const formValidatorCallBack = new FormValidator(formValidatorConfig, formCallBack);
formValidatorCallBack.enableValidation();

const formApi = new Api({
  baseUrl: 'https://formspree.io',
  headers: {
    'Accept': 'application/json'
  },
}); 

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
    const name = formCallbackData.name;
    const tel = formCallbackData.tel;
    renderLoading(true, callbackSubmitButton, 'Отправить', 'Отправка...'); //вынести фразы в отдельный объект? elem: profileSubmBut, onLoadText:' ....
    formApi.sendCallForm(name, tel, callbackFormId)
      .then((response) => {
        console.log(response)
        popupCallBack.close();
        //сделать сообщение об успешной отправке
      })
      .catch((err) => console.log(err)) //сделать сообщение об успешной ошибке
      .finally(() => {
        formValidatorCallBack.disableSaveButton();
        renderLoading(false, callbackSubmitButton, 'Отправить', 'Отправка...');
      });
  },
  formCleanError: () => {
    formValidatorCallBack.cleanAllErrors();
  },
}, callBackPopupSelector)


popupImage.setEventListeners();
popupCallBack.setEventListeners();
popupHeatEx.setEventListeners();

//навешиваем слушатели на элементы сайта
callBackPopupOpenButton.addEventListener("mousedown", () => {
  popupCallBack.open();
})

popupWithSertifOpenButton.addEventListener("mousedown", () => {
  popupImage.open({
    link: popupWithSertifOpenButton.src,
    name: popupWithSertifOpenButton.alt,
  });  
})

platesSvg.addEventListener("mousedown", (evt) => {
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
//commercOffersSlider.init();


function randomValues() {
  let el = document.querySelectorAll('.honeycomb path');
  anime({
    targets: [el],
    fill: function() {
    let a = anime.random(0, 4);
    if (a == 0) {
      return '#ff5e3a'
    } else {
      return '#d4d4d4'
    }
    },
    easing: 'easeInOutQuad',
    duration: 1400,
    complete: randomValues
  });
}

randomValues();

document.querySelectorAll('.photo-grid__item').forEach((item) => {
  item.addEventListener("mousedown", (evt) => {
    console.log(evt.target);
    popupImage.open({
      link: evt.target.querySelector('.photo-grid__image').src,
      name: evt.target.querySelector('.photo-grid__image').alt,
    });
  });
});