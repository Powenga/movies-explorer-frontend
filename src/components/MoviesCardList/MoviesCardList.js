import './MoviesCardList.css';

function MoviesCardList({
  card: Component,
  cardList,
  classes,
  onCardSave,
  onCardDelete,
  children,
}) {
  return (
    <div className={`movies-card-list ${classes ? classes : ''}`}>
      <ul className="movies-card-list__container">
        {cardList.map((card, index) => (
          <Component
            key={card.movieId}
            cardData={card}
            onCardSave={onCardSave}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default MoviesCardList;
