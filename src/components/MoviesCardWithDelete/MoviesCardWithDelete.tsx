import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import deleteBtmPath from '../../images/card-delete-btn.svg';

function MoviesCardWithDelete({ cardData, onCardDelete }) {
  function handleDelete(evt) {
    onCardDelete(false, cardData);
  }

  return (
    <MoviesCard cardData={cardData}>
      <Button
        classes="btn_type_icon"
        type="button"
        areaLabel="Удалить карточку"
        onClick={handleDelete}
      >
        <img src={deleteBtmPath} alt="" />
      </Button>
    </MoviesCard>
  );
}

export default MoviesCardWithDelete;
