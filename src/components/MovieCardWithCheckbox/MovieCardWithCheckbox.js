import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardWithCheckbox({ cardData }) {
  return (
    <MoviesCard cardData={cardData}>
      <label className="movie-card__field transition transition_type_button">
        <input className="movie-card__checkbox" type="checkbox"/>
        <span className="movie-card__checkbox-pseudo"></span>
      </label>
    </MoviesCard>
  );
}

export default MoviesCardWithCheckbox;