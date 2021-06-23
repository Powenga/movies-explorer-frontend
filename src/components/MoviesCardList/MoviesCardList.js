import Button from '../Button/Button';
import './MoviesCardList.css';

function MoviesCardList ({ classes, children }) {
  return (
    <div className={`movies-card-list ${classes ? classes : ''}`}>
      <ul className="movies-card-list__container">

      </ul>
      <Button>
        Ещё
      </Button>
    </div>
  );
}

export default MoviesCardList;