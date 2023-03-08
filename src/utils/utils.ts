import { ICardData } from '../types';

export function findMovies(keyWord: string, movieList: ICardData[]) {
  const lowerKeyWord = keyWord.toLowerCase();
  return movieList.filter((movie) => {
    if (
      (movie.nameRU && movie.nameRU.toLowerCase().includes(lowerKeyWord)) ||
      (movie.nameEN && movie.nameEN.toLowerCase().includes(lowerKeyWord))
    ) {
      return true;
    } else {
      return false;
    }
  });
}

export function filterMovies(isShortMovie: boolean, movieList: ICardData[]) {
  return movieList.filter((movie) => {
    if (isShortMovie) {
      return movie.duration < 40 ? true : false;
    } else {
      return true;
    }
  });
}
