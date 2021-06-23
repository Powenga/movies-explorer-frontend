import './SearchForm.css';

function SeacrchForm({ classes, children }) {
  return (
    <form className={`search-form ${classes ? classes : ''}`} name="searchForm">
      <label className="search-form__field">
        <input
          className="search-form__input"
          id="movie-input"
          name="movie"
          placeholder="Фильм"
        />
      </label>
    </form>
  );
}

export default SeacrchForm;
