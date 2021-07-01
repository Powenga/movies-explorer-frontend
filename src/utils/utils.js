export function filterMovies(keyWord, movieList, isShortMovie) {
  const lowerKeyWord = keyWord.toLowerCase();
  return movieList.filter((movie) => {
    if (
      (movie.nameRU && movie.nameRU.toLowerCase().includes(lowerKeyWord)) ||
      (movie.nameEN && movie.nameEN.toLowerCase().includes(lowerKeyWord))
    ) {
      return isShortMovie && movie.duration <= 40
        ? true
        : !isShortMovie
        ? true
        : false;
    } else {
      return false;
    }
  });
}
