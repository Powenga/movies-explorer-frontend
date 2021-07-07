import { REACT_APP_MOVIE_API_URL } from './constants.js';

class MovieApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _onError(res) {
    return res.json()
    .then(data => {
      if(res.ok) {
        return Promise.resolve(data)
      }
      if(data.message === 'celebrate request validation failed') {
        data = data.validation.body;
      }
      return Promise.reject(data);
    })
  }

  getMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers,
    })
    .then(this._onError);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._onError)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      credentials: 'include'
    })
      .then(this._onError)
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then(this._onError)
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then(this._onError)
  }

  removeCard(data) {
    return fetch(`${this._baseUrl}/cards/${data._id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._onError)
  }

  likeCard(cardId, like) {
    const method = like ? 'PUT' : 'DELETE';
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: method,
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._onError)
  }

  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then(this._onError)
  }
}

export default new MovieApi({
  baseUrl: REACT_APP_MOVIE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
