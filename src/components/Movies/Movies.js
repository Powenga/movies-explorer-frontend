import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithCheckbox from '../MovieCardWithCheckbox/MovieCardWithCheckbox.js';
import { initCards } from '../../utils/constants.js';

function Movies({ classes }) {
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SeacrchForm classes="main__section-inner" />
      </section>
      <section className="main__section">
        <MoviesCardList
          classes="main__section-inner"
          card={MoviesCardWithCheckbox}
          cardList={initCards}
        />
      </section>
    </main>
  );
}

export default Movies;
