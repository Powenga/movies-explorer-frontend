import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithCheckbox from '../MovieCardWithCheckbox/MovieCardWithCheckbox.js';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import { cardNumber } from '../../utils/constants';

function Movies({
  isLoading,
  classes,
  keyWord,
  onKeyWordChange,
  onMovieFind,
  movieResultList,
}) {
  const [renderedCardList, setRenderedCardList] = useState([]);
  const [storedCardList, setStoredCardList] = useState([]);
  const [moreCardNumber, setMoreCardNumber] = useState(0);

  const [viewportWidth, setViewportWidth ] = useState(window.innerWidth);

  function handleMoreClick() {
    setRenderedCardList([
      ...renderedCardList,
      ...storedCardList.slice(0, moreCardNumber),
    ]);
    setStoredCardList(storedCardList.slice(moreCardNumber, -1));
  }

  window.addEventListener('resize', () => {
    setTimeout(() => {
      console.log('resize');
      setViewportWidth(window.innerWidth);
    }, 1000)
  })

  // added card number
  useEffect(() => {
    if (viewportWidth <= cardNumber.mobile.resolution) {
      setMoreCardNumber(cardNumber.mobile.addCardNumber);
    } else if (viewportWidth <= cardNumber.tabletPortrait.resolution) {
      setMoreCardNumber(cardNumber.tabletPortrait.addCardNumber);
    } else if (viewportWidth <= cardNumber.tabletLandscape.resolution) {
      setMoreCardNumber(cardNumber.tabletLandscape.addCardNumber);
    } else {
      setMoreCardNumber(cardNumber.desktop.addCardNumber);
    }
  }, [moreCardNumber, viewportWidth]);

  useEffect(() => {
    // initial card number
    let renderCardNumber = 0;
    const viewportWidth = window.innerWidth;
    if (viewportWidth <= cardNumber.mobile.resolution) {
      renderCardNumber = cardNumber.mobile.renderCardNumber;
    } else if (viewportWidth <= cardNumber.tabletPortrait.resolution) {
      renderCardNumber = cardNumber.tabletPortrait.renderCardNumber;
    } else if (viewportWidth <= cardNumber.tabletLandscape.resolution) {
      renderCardNumber = cardNumber.tabletLandscape.renderCardNumber;
    } else {
      renderCardNumber = cardNumber.desktop.renderCardNumber;
    }
    setRenderedCardList(movieResultList.slice(0, renderCardNumber));
    setStoredCardList(movieResultList.slice(renderCardNumber, -1));
  }, [movieResultList]);

  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SeacrchForm
          classes="main__section-inner"
          keyWord={keyWord}
          onKeyWordChange={onKeyWordChange}
          onSubmit={onMovieFind}
        />
      </section>
      <section className="main__section">
        {!isLoading ? (
          renderedCardList.length ? (
            <>
              <MoviesCardList
                classes="main__section-inner"
                card={MoviesCardWithCheckbox}
                cardList={renderedCardList}
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
            <></>
          )
        ) : (
          <Preloader />
        )}
      </section>
    </main>
  );
}

export default Movies;
