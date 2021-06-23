import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SeacrchForm from '../SearchForm/SearchForm';
import MoviesCardWithDelete from '../MoviesCardWithDelete/MoviesCardWithDelete.js';
import { savedCards } from '../../utils/constants.js';

function SavedMovies({ classes }) {
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SeacrchForm classes="main__section-inner" />
      </section>
      <section className="main__section">
        <MoviesCardList
          classes="main__section-inner"
          card={MoviesCardWithDelete}
          cardList={savedCards}
        />
      </section>
    </main>
  );
}

export default SavedMovies;
