export default class Card {
    constructor({name, link, handleImageClick}, cardSelector ) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick; //функция коллбэк открытия попап
    }
    
    _getTemplate() {
        const cardElement = document
          .querySelector(this._cardSelector)
          .content
          .querySelector(".projects__item")
          .cloneNode(true);
  
        return cardElement;
    }
  
    generateCard() {
        this._element = this._getTemplate();
        
        this._cardImage = this._element.querySelector('.projects__image');
        this._cardHeading = this._element.querySelector(".projects__item-description");
        
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardHeading.textContent = this._name;
        
        this._setEventListeners();
        return this._element;
    }


    _setEventListeners() {
      //передадим из индекс коллбэк открытия попапа
      this._cardImage.addEventListener("mousedown", () => {
        this._handleImageClick(this._name, this._link)
      });
    }
  }