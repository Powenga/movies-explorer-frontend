import { useContext } from 'react';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithCheckbox from '../MovieCardWithCheckbox/MovieCardWithCheckbox.js';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Movies({
  movieIsLoading,
  classes,
  keyWord,
  onKeyWordChange,
  onMovieFind,
  movieList,
  hiddenMovieListLength,
  isCardsNotFound,
  isShortMovie,
  onShortMovieChange,
  onCardSave,
  onMoreClick,
}) {
  const { movieApiError } = useContext(ErrorsContext);

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
      <section className="main__section">
        {!movieIsLoading && !isCardsNotFound && !movieApiError ? (
          <>
            <MoviesCardList
              classes="main__section-inner"
              card={MoviesCardWithCheckbox}
              cardList={movieList}
              onCardSave={onCardSave}
            />
            {hiddenMovieListLength > 0 && (
              <>
                <div className="main__section-inner">
                  <Button
                    classes="btn_type_more"
                    type="button"
                    onClick={onMoreClick}
                  >
                    Ещё
                  </Button>
                </div>
              </>
            )}
          </>
        ) : isCardsNotFound ? (
          <p className="main__section-inner card-not-found-message">
            Ничего не найдено
          </p>
        ) : movieApiError ? (
          <ErrorMessage
            classes="error-message_active error-message_position_center"
            text={movieApiError}
          />
        ) : (
          movieIsLoading && <Preloader />
        )}
      </section>
    </main>
  );
}

export default Movies;
