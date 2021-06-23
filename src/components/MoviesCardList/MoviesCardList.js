import './MoviesCardList.css';

function MoviesCardList({ card: Component, cardList, classes, children }) {
  console.log(cardList);
  return (
    <div className={`movies-card-list ${classes ? classes : ''}`}>
      <ul className="movies-card-list__container">
        {cardList.map((card, index) => (
          <Component key={index} cardData={card} />
        ))}
      </ul>
    </div>
  );
}

export default MoviesCardList;
