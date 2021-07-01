
import { REACT_APP_SERVER_URL } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard({ classes, cardData, children }) {
  return (
    <li className={`movie-card ${classes ? classes : ''}`}>
      <img
        className="movie-card__img"
        src={`${REACT_APP_SERVER_URL}${cardData.image.url}`}
        alt={cardData.nameRU}
      />
      <div className="movie-card__info">
        <h2 className="movie-card__title" title={cardData.nameRU}>
          {cardData.nameRU}
        </h2>
        {children}
        <p className="movie-card__duration">{cardData.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
