import zatonUfa from '../../images/ufa_zaton.png'
import timashevskCondit from '../../images/timashevsk_condit.png'
import ufaUmnDom from '../../images/ufa_umn_dom.png'

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

  export const ESC_CODE = 'Escape';

  export const cardsContainerSelector = '.projects__items';
  export const cardTemplateSelector = "#project-template";
  export const popupImageSelector = '.popup-viewport';
