import { FC, useContext } from 'react';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithCheckbox from '../MovieCardWithCheckbox/MovieCardWithCheckbox.js';
import Button, { ButtonType } from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ICardData } from '../../types';

interface Props {
  movieIsLoading: boolean;
  classes?: string;
  keyWord: string;
  onKeyWordChange: boolean;
  onMovieFind: boolean;
  movieList: ICardData[];
  hiddenMovieListLength: number;
  isCardsNotFound: boolean;
  isShortMovie: boolean;
  onShortMovieChange: () => void;
  onCardSave: () => void;
  onMoreClick: () => void;
  keyWordError: string;
}

const Movies: FC<Props> = ({
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
  keyWordError,
}) => {
  const { movieApiError, saveMovieError, deleteMovieError, getUserMovieError } =
    useContext(ErrorsContext);

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
          keyWordError={keyWordError}
        />
      </section>
      <section className="main__section error-wrapper">
        {saveMovieError ? (
          <ErrorMessage
            classes="error-message_active error-message_position_top"
            text={saveMovieError}
          />
        ) : (
          deleteMovieError && (
            <ErrorMessage
              classes="error-message_active error-message_position_top"
              text={deleteMovieError}
            />
          )
        )}
        {!movieIsLoading &&
        !isCardsNotFound &&
        !movieApiError &&
        !getUserMovieError ? (
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
                    type={ButtonType.button}
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
        ) : getUserMovieError ? (
          <ErrorMessage
            classes="error-message_active error-message_position_center"
            text={getUserMovieError}
          />
        ) : (
          movieIsLoading && <Preloader />
        )}
      </section>
    </main>
  );
};

export default Movies;
