import zatonUfa from '../../images/ufa_zaton.png';
import timashevskCondit from '../../images/timashevsk_condit.png';
import ufaUmnDom from '../../images/ufa_umn_dom.png';

import ti077Img from '../../images/descTO/ti077.png';

export const initialProjects = [
    {
      name: "Котельная в квартале 34, г. Уфа, жилой район «Затон-Восточный»",
      link: zatonUfa,
    },
    {
      name: "Кондитерский комбинат «Кубань», г. Тимашевск, Краснодарский край",
      link: timashevskCondit,
    },
    {
      name: "БИТП Новый умный дом в г. Уфа, ул. Злобина, 31",
      link: ufaUmnDom,
    },
];

export const initialHeatEx = {
  'ti-025': {
    name: "ТИ 025",
    img: ti077Img,
    desc: "ТИ025 – имеет широкую гамму подключения подтрубков: Ду20, Ду25, Ду32, Ду40.Конструкция пластины позволяет формировать 12 разновидностей каналов для прохода различных жидкостей, что позволяет изменять гидравлическое сопротивление и теплопередачу, при этом сопротивление греющей и нагревающей жидкости может быть разное. Особая конструкция клипа надежно закрепляет уплотнение на пластину, тем самым исключает обрыв при монтаже пластины.",
    link3d: "",
  },
  'ti-077': {
    name: "ТИ 077",
    img: ti077Img,
    desc: "ТИ077 – имеет широкую гамму подключения подтрубков: Ду20, Ду25, Ду32, Ду40.Конструкция пластины позволяет формировать 12 разновидностей каналов для прохода различных жидкостей, что позволяет изменять гидравлическое сопротивление и теплопередачу, при этом сопротивление греющей и нагревающей жидкости может быть разное. Особая конструкция клипа надежно закрепляет уплотнение на пластину (рисунок 1,2), тем  самым исключает обрыв при монтаже пластины.",
    link3d: "",
  },
  'ti-13': {
    name: "ТИ 13",
    img: "",
    desc: "Технические параметры пластины ТИ 13 позволяют использовать ее для сборки экономичных и эффективных теплообменников, а так же заменять в уже имеющихся теплообменниках пластины марки FP 14, GC, G.",
    link3d: "",
  },
  'ti-18': {
    name: "ТИ 18",
    img: "",
    desc: "Линейка теплообменников ТИ18 имеет диаметр условного прохода до Ду65. Технические параметры пластины позволяют использовать ее для сборки экономических и эффективных теплообменников, а также заменять в уже имеющих теплообменниках пластины марки FP 20.",
    link3d: "",
  },
  'ti-16-5': {
    name: "ТИ 16,5",
    img: "",
    desc: "..............",
    link3d: "",
  },
  'ti-28': {
    name: "ТИ 28",
    img: "",
    desc: "",
    link3d: "",
  },
  'ti-45': {
    name: "ТИ 45",
    img: "",
    desc: "..............",
    link3d: "",
  },
  'ti-65': {
    name: "ТИ 65",
    img: "",
    desc: "..............",
    link3d: "",
  },
  'ti-52': {
    name: "ТИ 52",
    img: "",
    desc: "..............",
    link3d: "",
  },
  'ti-82': {
    name: "ТИ 82",
    img: "",
    desc: "..............",
    link3d: "",
  },
  'ti-95': {
    name: "ТИ 95",
    img: "",
    desc: "..............",
    link3d: "",
  },
  'ti-116': {
    name: "ТИ 116",
    img: "",
    desc: "..............",
    link3d: "",
  },
}


export const ESC_CODE = 'Escape';

//секция, куда загружаются карточки проектов
export const cardsContainerSelector = '.projects__items';

//template карточки проекта
export const cardTemplateSelector = "#project-template";

//селекторы модальных окон
export const popupImageSelector = '.popup-viewport';
export const callBackPopupSelector = '.popup-callback';
export const popupWithToSelector = '.popup-to';


//кнопки открытия модальных окон
export const callBackPopupOpenButton = document.querySelector('.popup-callback-button');
export const popupWithSertifOpenButton = document.querySelector('.about__doc');

//интеактивные пластины
export const platesSvg = document.querySelector('.plates__svg');

//конфиги

// конфиг селекторов в модальном окне с картиной и подписью
export const popupImageSelectorsCongig = {
    popupImageSelector: '.popup__image',
    popupImageDescSelector: '.popup__image-description'
}

export const popupToConfig = {
  popupImageToSelector: '.popup__to-img',
  popupImageNameSelector: '.popup__to-name', 
  popupImageDescSelector: '.popup__to-desc', 
  popupImageLink3dSelector: '.popup__to-3dlink',
}
