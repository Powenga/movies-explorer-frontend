import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithCheckbox from '../MovieCardWithCheckbox/MovieCardWithCheckbox.js';
import Button from '../Button/Button';
import { initCards } from '../../utils/constants.js';
import Preloader from '../Preloader/Preloader';

function Movies({ isLoading, classes }) {
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SeacrchForm classes="main__section-inner" />
      </section>
      <section className="main__section">
        {!isLoading ? (
          <>
            <MoviesCardList
              classes="main__section-inner"
              card={MoviesCardWithCheckbox}
              cardList={initCards}
            />
            <div className="main__section-inner">
              <Button classes="btn_type_more" type="button">
                Ещё
              </Button>
            </div>
          </>
        ) : (
          <Preloader />
        )}
      </section>
    </main>
  );
}

export default Movies;
