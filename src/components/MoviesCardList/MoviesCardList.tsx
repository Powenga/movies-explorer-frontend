import { FC } from 'react';
import { ICardData } from '../../types';
import './MoviesCardList.css';

interface Props {
  card: React.ElementType;
  cardList: ICardData[];
  classes?: string;
  onCardSave?: () => void;
  onCardDelete?: () => void;
}

const MoviesCardList: FC<Props> = ({
  card: Component,
  cardList,
  classes,
  onCardSave,
  onCardDelete,
}) => {
  return (
    <div className={`movies-card-list ${classes ? classes : ''}`}>
      <ul className="movies-card-list__container">
        {cardList.map((card) => (
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
};

export default MoviesCardList;
