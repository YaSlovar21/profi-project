export default class List {
    constructor({containerSelector, itemTemplateSelelector}, handleItemClick) {
        this._container = document.querySelector(containerSelector);
        this._itemTemplateSelelector = itemTemplateSelelector;

        //коллбэк 
        this._handleItemClick = handleItemClick;
    }

    _getItemTemplate() {
        const itemElement = document
            .querySelector(this._itemTemplateSelelector)
            .content
            .querySelector('.map__list-item')
            .cloneNode(true);

        return itemElement;    
    }

    setEventListeners() {
        
    }
}