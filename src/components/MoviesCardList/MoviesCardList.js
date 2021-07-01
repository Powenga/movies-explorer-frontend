import './MoviesCardList.css';

function MoviesCardList({ card: Component, cardList, classes, onCardSave, children }) {
  return (
    <div className={`movies-card-list ${classes ? classes : ''}`}>
      <ul className="movies-card-list__container">
        {cardList.map((card, index) => (
          <Component key={index} cardData={card} onCardSave={onCardSave}/>
        ))}
      </ul>
    </div>
  );
}

export default MoviesCardList;
