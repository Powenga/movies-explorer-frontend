import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardWithCheckbox({ cardData, onCardSave }) {
  const { currentUser } = useContext(CurrentUserContext);
  function handleChange(evt) {
    onCardSave(evt.target.checked, cardData);
  }

  let isSaved = false;
  if(cardData.owner) {
    isSaved = currentUser.userId === cardData.owner;
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
}

export default MoviesCardWithCheckbox;
