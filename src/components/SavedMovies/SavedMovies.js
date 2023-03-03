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
  keyWord,
  onKeyWordChange,
  isCardsNotFound,
  isShortMovie,
  onShortMovieChange,
  onMovieFind,
}) {
  const { deleteMovieError, getUserMovieError } = useContext(ErrorsContext);
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SeacrchForm
          classes="main__section-inner"
          keyWord={keyWord}
          onKeyWordChange={onKeyWordChange}
          onSubmit={onMovieFind}
          isShortMovie={isShortMovie}
          onShortMovieChange={onShortMovieChange}
        />
      </section>
      <section className="main__section error-wrapper">
        {deleteMovieError && (
          <ErrorMessage
            classes="error-message_active error-message_position_top"
            text={deleteMovieError}
          />
        )}
        {!userMovieIsLoading &&
        !getUserMovieError &&
        !isCardsNotFound ? (
          <MoviesCardList
            classes="main__section-inner"
            card={MoviesCardWithDelete}
            cardList={userMoviesList}
            onCardDelete={onCardDelete}
          />
        ) : isCardsNotFound ? (
          <p className="main__section-inner card-not-found-message">
          Ничего не найдено
        </p>
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
