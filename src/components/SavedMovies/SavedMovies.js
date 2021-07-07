import { useContext } from 'react';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithDelete from '../MoviesCardWithDelete/MoviesCardWithDelete';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function SavedMovies({
  classes,
  userMoviesList,
  userMovieIsLoading,
  onCardDelete,
}) {
  const { deleteMovieError, getUserMovieError } = useContext(ErrorsContext);
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SeacrchForm classes="main__section-inner" />
      </section>
      <section className="main__section error-wrapper">
        {deleteMovieError && (
          <ErrorMessage
            classes="error-message_active error-message_position_top"
            text={deleteMovieError}
          />
        )}
        {!userMovieIsLoading && !getUserMovieError ? (
          <MoviesCardList
            classes="main__section-inner"
            card={MoviesCardWithDelete}
            cardList={userMoviesList}
            onCardDelete={onCardDelete}
          />
        ) : getUserMovieError ? (
          <ErrorMessage
            classes="error-message_active error-message_position_top"
            text={getUserMovieError}
          />
        ) : (
          userMovieIsLoading && <Preloader />
        )}
      </section>
    </main>
  );
}

export default SavedMovies;
