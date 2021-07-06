import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithCheckbox from '../MovieCardWithCheckbox/MovieCardWithCheckbox.js';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import { cardNumber } from '../../utils/constants';

function Movies({
  movieIsLoading,
  classes,
  keyWord,
  onKeyWordChange,
  onMovieFind,
  movieResultList,
  isCardsNotFound,
  isShortMovie,
  onShortMovieChange,
  onCardSave,
}) {
  const [renderedCardList, setRenderedCardList] = useState([]);
  const [storedCardList, setStoredCardList] = useState([]);
  const [moreCardNumber, setMoreCardNumber] = useState(0);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  function handleMoreClick() {
    setRenderedCardList([
      ...renderedCardList,
      ...storedCardList.slice(0, moreCardNumber),
    ]);
    setStoredCardList(storedCardList.slice(moreCardNumber, -1));
  }

  window.addEventListener('resize', () => {
    setTimeout(() => {
      setViewportWidth(window.innerWidth);
    }, 1000);
  });

  useEffect(() => {
    let renderCardNumber = 0;
    if (viewportWidth <= cardNumber.mobile.resolution) {
      renderCardNumber =
        cardNumber.mobile.renderCardRows * cardNumber.mobile.rowCardNumber;
      setMoreCardNumber(cardNumber.mobile.addCardNumber);
    } else if (viewportWidth <= cardNumber.tabletPortrait.resolution) {
      renderCardNumber =
        cardNumber.tabletPortrait.renderCardRows *
        cardNumber.tabletPortrait.rowCardNumber;
      setMoreCardNumber(cardNumber.tabletPortrait.addCardNumber);
    } else if (viewportWidth <= cardNumber.tabletLandscape.resolution) {
      renderCardNumber =
        cardNumber.tabletLandscape.renderCardRows *
        cardNumber.tabletLandscape.rowCardNumber;
      setMoreCardNumber(cardNumber.tabletLandscape.addCardNumber);
    } else {
      renderCardNumber =
        cardNumber.desktop.renderCardRows * cardNumber.desktop.rowCardNumber;
      setMoreCardNumber(cardNumber.desktop.addCardNumber);
    }
    setRenderedCardList(movieResultList.slice(0, renderCardNumber));
    setStoredCardList(movieResultList.slice(renderCardNumber, -1));
  }, [movieResultList, viewportWidth]);

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
        {movieIsLoading ? (
          <Preloader />
        ) : renderedCardList.length && !isCardsNotFound ? (
          <>
            <MoviesCardList
              classes="main__section-inner"
              card={MoviesCardWithCheckbox}
              cardList={renderedCardList}
              onCardSave={onCardSave}
            />
            {storedCardList.length ? (
              <>
                <div className="main__section-inner">
                  <Button
                    classes="btn_type_more"
                    type="button"
                    onClick={handleMoreClick}
                  >
                    Ещё
                  </Button>
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          isCardsNotFound && (
            <p className="main__section-inner card-not-found-message">
              Ничего не найдено
            </p>
          )
        )}
      </section>
    </main>
  );
}

export default Movies;
