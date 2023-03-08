import { IApiProps } from '../types/index.js';
import { Api } from './api.js';
import { REACT_APP_MOVIE_API_URL } from './constants.js';

class MovieApi extends Api {
  constructor({ baseUrl, headers }: IApiProps) {
    super({ baseUrl, headers });
  }

  getMovies() {
    return fetch(this.baseUrl, {
      headers: this.headers,
    }).then(this.onError);
  }
}

const movieApi = new MovieApi({
  baseUrl: REACT_APP_MOVIE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default movieApi;
