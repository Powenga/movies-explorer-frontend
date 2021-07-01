import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithCheckbox from '../MovieCardWithCheckbox/MovieCardWithCheckbox.js';
import Button from '../Button/Button';
// import { initCards } from '../../utils/constants.js';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';

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

  useEffect(() => {

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
          renderedCardList.length && (
            <>
              <MoviesCardList
                classes="main__section-inner"
                card={MoviesCardWithCheckbox}
                cardList={renderedCardList}
              />
              {storedCardList.length && (
                <>
                  <div className="main__section-inner">
                    <Button classes="btn_type_more" type="button">
                      Ещё
                    </Button>
                  </div>
                </>
              )}
            </>
          )
        ) : (
          <Preloader />
        )}
      </section>
    </main>
  );
}

export default Movies;
