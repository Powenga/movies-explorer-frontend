import './Navigation.css';
import { NavLink } from 'react-router-dom';
import avatarPath from '../../images/avatar.svg';

function Navigation({ loggedIn, classes }) {
  return (
    <nav className={`navigation ${classes}`}>
      {loggedIn ? (
        <>
          <ul className="navigation__page-container">
            <li className="navigation__page-item">
              <NavLink
                className="navigation__link"
                activeClassName="navigation__link_active"
                to="/movies"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__page-item">
              <NavLink
                className="navigation__link"
                activeClassName="navigation__link_active"
                to="/saved-movies"
              >
                Сохраненные фильмы
              </NavLink>
            </li>
          </ul>
          <NavLink className="navigation__profile" to="/profile">
            <p className="navigation__profile-text">Аккаунт</p>
            <div className="navigation__profile-avatar-wrap">
              <img
                className="navigation__profile-avatar"
                src={avatarPath}
                alt="Аватар пользователя"
              />
            </div>
          </NavLink>
        </>
      ) : (
        <ul className="navigation__sign-container">
          <li className="navigation__sign-item">
            <NavLink className="navigation__sign-up" to="/signup">
              Регистрация
            </NavLink>
          </li>
          <li className="navigation__sign-item">
            <NavLink className="navigation__sign-in" to="/signin">
              Войти
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
