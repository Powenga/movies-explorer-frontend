import MoviesCard from '../MoviesCard/MoviesCard';
import deleteBtmPath from '../../images/card-delete-btn.svg';
import Button from '../Button/Button';

function MoviesCardWithDelete({ cardData }) {
  return (
    <MoviesCard cardData={cardData}>
      <Button
        classes="btn_type_icon transition transition_type_button"
        type="button"
        areaLabel="Удалить карточку"
      >
        <img src={deleteBtmPath} alt="" />
      </Button>
    </MoviesCard>
  );
}

export default MoviesCardWithDelete;
