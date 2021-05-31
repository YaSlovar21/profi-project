import Popup from './Popup.js';

export default class PopupWithHeatEx extends Popup {
    constructor({popupImageToSelector,popupImageNameSelector, popupImageDescSelector, popupImageLink3dSelector}, popupSelector) {
        super(popupSelector)
        this._popupImage = this._modal.querySelector(popupImageToSelector);
        this._popupToName = this._modal.querySelector(popupImageNameSelector);
        this._popupImageDesc = this._modal.querySelector(popupImageDescSelector);
        this._link3d = this._modal.querySelector(popupImageLink3dSelector);
    }

    open(data) {
        this._popupToName.textContent = data.name;
        this._popupImage.src = data.img;
        this._popupImage.alt = data.name;
        this._popupImageDesc.textContent = data.desc;
        this._link3d.href = data.link3d;
        this._link3d.textContent = data.link3d;
        super.open();
    }
}