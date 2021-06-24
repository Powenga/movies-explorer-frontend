import Button from '../Button/Button';
import './SearchForm.css';
import submitButtonPath from '../../images/search-form-submit.svg';

function SeacrchForm({ classes, children }) {
  return (
    <form className={`search-form ${classes ? classes : ''}`} name="searchForm">
      <label className="search-form__field">
        <input
          className="search-form__input"
          id="movie-input"
          name="movie"
          placeholder="Фильм"
          minLength="1"
          maxLength="150"
          required
        />
        <Button
          classes="btn_type_search search-form__submit transition transition_type_button"
          type="submit"
        >
          <img src={submitButtonPath} alt="Найти фильмы" />
        </Button>
      </label>
      <label className="search-form__checkbox-field transition transition_type_button">
        <input type="checkbox" className="search-form__checkbox" />
        <span className="search-form__checkbox-pseudo"></span>
        Короткометражки
      </label>
    </form>
  );
}

export default SeacrchForm;
