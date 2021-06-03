export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _isResponseOk(response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
    }

 /*   getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
        })
        .then((response) => {
            return this._isResponseOk(response);
        })
    }
*/
    sendCallForm(name, number, formId) {
        return fetch(`${this._baseUrl}/f/${formId}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                number: number,
            }),
        })
        .then((response) => {
            return this._isResponseOk(response);
        })
    }

}