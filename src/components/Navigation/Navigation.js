import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { NavLink } from 'react-router-dom';
import UserWidget from '../UserWidget/UserWidget';
import './Navigation.css';

function Navigation({ classes }) {
  const { loggedIn, isUserChecking } = useContext(CurrentUserContext);

  return (
    <>
      {!isUserChecking && (
        <nav className={`navigation navigation_tablet_hidden ${classes}`}>
          {loggedIn ? (
            <>
              <ul className="navigation__page-container">
                <li className="navigation__page-item">
                  <NavLink
                    className="navigation__link transition"
                    activeClassName="navigation__link_active"
                    to="/movies"
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className="navigation__page-item">
                  <NavLink
                    className="navigation__link transition"
                    activeClassName="navigation__link_active"
                    to="/saved-movies"
                  >
                    Сохраненные фильмы
                  </NavLink>
                </li>
              </ul>
              <UserWidget />
            </>
          ) : (
            <ul className="navigation__sign-container">
              <li className="navigation__sign-item">
                <NavLink
                  className="navigation__sign-up transition"
                  to="/signup"
                >
                  Регистрация
                </NavLink>
              </li>
              <li className="navigation__sign-item">
                <NavLink
                  className="navigation__sign-in transition transition_type_button"
                  to="/signin"
                >
                  Войти
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      )}
    </>
  );
}

export default Navigation;
