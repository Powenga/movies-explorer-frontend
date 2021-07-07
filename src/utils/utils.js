export function findMovies(keyWord, movieList) {
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

export function filterMovies(isShortMovie, movieList) {
  return movieList.filter((movie) => {
    if(isShortMovie) {
      return movie.duration < 40 ? true : false;
    } else {
      return true;
    }
  })
}
