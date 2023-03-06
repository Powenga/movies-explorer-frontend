import { REACT_APP_SERVER_URL } from '../../utils/constants';
import { ICardData } from '../../types';
import { FC, PropsWithChildren } from 'react';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './MoviesCard.module.css';

const b = block(styles);

interface Props {
  classes?: string;
  cardData: ICardData;
}

const MoviesCard: FC<PropsWithChildren<Props>> = ({
  classes,
  cardData,
  children,
}) => {
  return (
    <li className={cn(b(), classes)}>
      <a
        href={cardData.trailer}
        target="_blank"
        rel="noreferrer noopener"
        className="movie-card__trailer-link transition"
      >
        <img
          className="movie-card__img"
          src={`${REACT_APP_SERVER_URL}${cardData.image}`}
          alt={cardData.nameRU}
        />
      </a>
      <div className="movie-card__info">
        <h2 className="movie-card__title" title={cardData.nameRU}>
          {cardData.nameRU}
        </h2>
        {children}
        <p className="movie-card__duration">
          {`
            ${(cardData.duration - (cardData.duration % 60)) / 60}ч
            ${cardData.duration % 60}м
          `}
        </p>
      </div>
    </li>
  );
};

export default MoviesCard;
