import { ChangeEvent, FC, useContext, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ICardData } from '../../types';

interface Props {
  cardData: ICardData;
  onCardSave: (status: boolean, data: ICardData) => void;
}

const MoviesCardWithCheckbox: FC<Props> = ({ cardData, onCardSave }) => {
  const [isSaved, setIsSaved] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    onCardSave(evt.target.checked, cardData);
  }

  if (cardData.owner && currentUser?.userId) {
    setIsSaved(currentUser.userId === cardData.owner);
  }

  return (
    <MoviesCard cardData={cardData}>
      <label className="movie-card__field transition transition_type_button">
        <input
          className="movie-card__checkbox"
          type="checkbox"
          onChange={handleChange}
          checked={isSaved}
        />
        <span className="movie-card__checkbox-pseudo"></span>
      </label>
    </MoviesCard>
  );
};

export default MoviesCardWithCheckbox;
