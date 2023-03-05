import Button, { ButtonType } from '../Button/Button';
import submitButtonPath from '../../images/search-form-submit.svg';
import './SearchForm.css';
import { ChangeEvent, FC, SyntheticEvent } from 'react';

const MIN_INPUT_LENGTH = 1;
const MAX_INPUT_LENGTH = 150;

interface Props {
  classes?: string;
  onSubmit: (keyWord: string) => void;
  keyWord: string;
  onKeyWordChange: (value: string) => void;
  isShortMovie: boolean;
  onShortMovieChange: (value: boolean) => void;
  keyWordError: string;
}

const SeacrchForm: FC<Props> = ({
  classes,
  onSubmit,
  keyWord,
  onKeyWordChange,
  isShortMovie,
  onShortMovieChange,
  keyWordError,
}) => {
  function handleSubmit(evt: SyntheticEvent) {
    evt.preventDefault();
    onSubmit(keyWord);
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;
    onKeyWordChange(value);
  }

  function handleShortMovieChange(evt: ChangeEvent<HTMLInputElement>) {
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
          minLength={MIN_INPUT_LENGTH}
          maxLength={MAX_INPUT_LENGTH}
          value={keyWord}
          onChange={handleChange}
          required
        />
        {keyWordError && (
          <span className="search-form__error">{keyWordError}</span>
        )}
        <Button
          classes="btn_type_search search-form__submit"
          type={ButtonType.submit}
        >
          <img src={submitButtonPath} alt="Найти фильмы" />
        </Button>
      </label>
      <label className="search-form__checkbox-field transition transition_type_button">
        <input
          type="checkbox"
          className="search-form__checkbox"
          checked={isShortMovie}
          onChange={handleShortMovieChange}
        />
        <span className="search-form__checkbox-pseudo"></span>
        Короткометражки
      </label>
    </form>
  );
};

export default SeacrchForm;
