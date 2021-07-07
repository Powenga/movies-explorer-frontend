import { useState } from 'react';
import Button from '../Button/Button';
import submitButtonPath from '../../images/search-form-submit.svg';
import { errorMessages } from '../../utils/constants';
import './SearchForm.css';

function SeacrchForm({
  classes,
  onSubmit,
  keyWord,
  onKeyWordChange,
  isShortMovie,
  onShortMovieChange,
  children,
}) {

  const [error, setError] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault();
    if(keyWord) {
      onSubmit(keyWord);
    } else {
      setError(errorMessages.keyWordRequired);
    }

  }

  function handleChange(evt) {
    const { value } = evt.target;
    value && setError('');
    onKeyWordChange(value);
  }

  function handleShortMovieChange(evt) {
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
        {error && (
          <span className="search-form__error">{error}</span>
        )}
        <Button classes="btn_type_search search-form__submit" type="submit">
          <img src={submitButtonPath} alt="Найти фильмы" />
        </Button>
      </label>
      <label className="search-form__checkbox-field transition transition_type_button">
        <input
          type="checkbox"
          className="search-form__checkbox"
          checked={isShortMovie}
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
