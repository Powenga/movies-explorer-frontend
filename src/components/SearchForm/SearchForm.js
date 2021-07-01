import Button from '../Button/Button';
import './SearchForm.css';
import submitButtonPath from '../../images/search-form-submit.svg';

function SeacrchForm({
  classes,
  onSubmit,
  keyWord,
  onKeyWordChange,
  isShortMovie,
  onShortMovieChange,
  children,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(keyWord);
  }

  function handleChange(evt) {
    const { value } = evt.target;
    onKeyWordChange(value);
  }

  function handleShortMovieChange (evt) {
    onShortMovieChange(evt.target.checked);
  }

  return (
    <form
      className={`search-form ${classes ? classes : ''}`}
      name="searchForm"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="search-form__field">
        <input
          className="search-form__input"
          id="movie-input"
          name="movie"
          placeholder="Фильм"
          minLength="1"
          maxLength="150"
          value={keyWord}
          onChange={handleChange}
          required
        />
        <Button classes="btn_type_search search-form__submit" type="submit">
          <img src={submitButtonPath} alt="Найти фильмы" />
        </Button>
      </label>
      <label className="search-form__checkbox-field transition transition_type_button">
        <input
          type="checkbox"
          className="search-form__checkbox"
          value={isShortMovie}
          onChange={handleShortMovieChange}
        />
        <span className="search-form__checkbox-pseudo"></span>
        Короткометражки
      </label>
    </form>
  );
}

export default SeacrchForm;
