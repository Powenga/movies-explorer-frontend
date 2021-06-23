import Button from '../Button/Button';
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
      <Button classes="movie-card-list__more btn_type_more" type="button">
        Ещё
      </Button>
    </div>
  );
}

export default MoviesCardList;
