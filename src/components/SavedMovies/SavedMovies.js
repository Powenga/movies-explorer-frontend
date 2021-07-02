import { useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithDelete from '../MoviesCardWithDelete/MoviesCardWithDelete.js';
import MainApi from '../../utils/MainApi';

function SavedMovies({ classes, savedCards, setSavedCards, onCardDelete }) {
  useEffect(() => {
    MainApi.getSavedCards()
      .then((res) => {
        setSavedCards(res);
      })
      .catch(() => {});
  }, [setSavedCards]);

  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SeacrchForm classes="main__section-inner" />
      </section>
      <section className="main__section">
        <MoviesCardList
          classes="main__section-inner"
          card={MoviesCardWithDelete}
          cardList={savedCards}
          onCardDelete={onCardDelete}
        />
      </section>
    </main>
  );
}

export default SavedMovies;
