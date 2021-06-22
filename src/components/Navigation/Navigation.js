import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation ({ classes }) {
  return (
    <nav className={`navigation ${classes}`}>
      <ul className="navigation__container">
        <li className="navigation__item">
          <NavLink className="navigation__link" activeClassName="navigation__link_active" to="/movies">
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" activeClassName="navigation__link_active" to="/saved-movies">
            Сохраненные фильмы
          </NavLink>
        </li>
      </ul>
    </nav>

  );
}

export default Navigation;