import { IApiProps, ICardData, IUser } from '../types';
import { Api } from './api';
import { REACT_APP_API_URL as BASE_URL } from './constants';

class MainApi extends Api {
  constructor({ baseUrl, headers }: IApiProps) {
    super({ baseUrl, headers });
  }

  getSavedCards() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: this.headers,
      credentials: 'include',
    }).then(this.onError);
  }

  editProfile(data: IUser) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data),
      credentials: 'include',
    }).then(this.onError);
  }

  saveCard(data: ICardData) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
      credentials: 'include',
    }).then(this.onError);
  }

  deleteCard(data: ICardData) {
    return fetch(`${this.baseUrl}/movies/${data._id}`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
    }).then(this.onError);
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
