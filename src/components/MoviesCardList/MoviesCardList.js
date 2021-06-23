import { initCards } from '../../utils/constants.js';
import Button from '../Button/Button';
import MoviesCardWithCheckbox from '../MovieCardWithCheckbox/MovieCardWithCheckbox.js';
import './MoviesCardList.css';

function MoviesCardList ({ classes, children }) {
  return (
    <div className={`movies-card-list ${classes ? classes : ''}`}>
      <ul className="movies-card-list__container">
        {initCards.map((card, index) => (
          <MoviesCardWithCheckbox key={index} cardData={card}/>
        ))}
      </ul>
      <Button classes="movie-card-list__more btn_type_more" type="button">
        Ещё
      </Button>
    </div>
  );
}

export default MoviesCardList;