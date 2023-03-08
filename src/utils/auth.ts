import { IApiProps } from '../types';
import { Api } from './api';
import { REACT_APP_API_URL as BASE_URL } from './constants';

interface IAuth {
  signUp: (name: string, email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  checkAutorization: () => void;
  logout: () => void;
}

class Auth extends Api implements IAuth {
  constructor({ baseUrl, headers }: IApiProps) {
    super({ baseUrl, headers });
  }

  signUp(name: string, email: string, password: string) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
      credentials: 'include',
    }).then(this.onError);
  }

  signIn(email: string, password: string) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, email }),
      credentials: 'include',
    }).then(this.onError);
  }

  checkAutorization() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(this.onError);
  }

  logout() {
    return fetch(`${this.baseUrl}/signout`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(this.onError);
  }
}

const auth = new Auth({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default auth;
