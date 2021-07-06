import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithDelete from '../MoviesCardWithDelete/MoviesCardWithDelete';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ classes, userMoviesList, userMovieIsLoading, onCardDelete }) {
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SeacrchForm classes="main__section-inner" />
      </section>
      <section className="main__section">
        {!userMovieIsLoading ? (
          <MoviesCardList
            classes="main__section-inner"
            card={MoviesCardWithDelete}
            cardList={userMoviesList}
            onCardDelete={onCardDelete}
          />
        ) : (
          <Preloader />
        )}
      </section>
    </main>
  );
}

export default SavedMovies;
