import { FC } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button, { ButtonType } from '../Button/Button';
import deleteBtmPath from '../../images/card-delete-btn.svg';
import { ICardData } from '../../types';

interface Props {
  cardData: ICardData;
  onCardDelete: (value: boolean, cardData: ICardData) => void;
}

const MoviesCardWithDelete: FC<Props> = ({ cardData, onCardDelete }) => {
  function handleDelete() {
    onCardDelete(false, cardData);
  }

  return (
    <MoviesCard cardData={cardData}>
      <Button
        classes="btn_type_icon"
        type={ButtonType.button}
        areaLabel="Удалить карточку"
        onClick={handleDelete}
      >
        <img src={deleteBtmPath} alt="" />
      </Button>
    </MoviesCard>
  );
};

export default MoviesCardWithDelete;
