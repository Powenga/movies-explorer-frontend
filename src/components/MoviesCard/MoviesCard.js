import './MoviesCard.css';

function MoviesCard({ classes, cardData, children }) {
  return (
    <li className={`movie-card ${classes ? classes : ''}`}>
      <img
        className="movie-card__img"
        src={cardData.imageLink}
        alt={cardData.title}
      />
      <div className="movie-card__info">
        <h2 className="movie-card__title" title={cardData.title}>
          {cardData.title}
        </h2>
        <p className="movie-card__duration">{cardData.duration}</p>
        {children}
      </div>
    </li>
  );
}

export default MoviesCard;
