import { REACT_APP_API_URL as BASE_URL } from '../utils/constants';

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _onError(res) {
    return res.json().then((data) => {
      if (res.ok) {
        return Promise.resolve(data);
      }
      if (data.message === 'celebrate request validation failed') {
        console.log(data);
        data = data.validation.body;
      }
      return Promise.reject(data);
    });
  }

  getSavedCards() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: 'include',
    }).then(this._onError);
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    }).then(this._onError);
  }

  saveCard(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    }).then(this._onError);
  }

  deleteCard(data) {
    return fetch(`${this._baseUrl}/movies/${data._id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then(this._onError);
  }
}

export default new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
