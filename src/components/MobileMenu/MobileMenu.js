import Button from '../Button/Button';
import './MobileMenu.css';
import menuPath from '../../images/mobile-menu-icon.svg';
import closeMenuPath from '../../images/mobile-menu-icon-close.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserWidget from '../UserWidget/UserWidget';

function MobileMenu({ classes, loggedIn, children }) {
  const [isVisible, setIsVisible] = useState(false);

  function openMenu(evt) {
    setIsVisible(true);
  }
  function closeMenu(evt) {
    setIsVisible(false);
  }

  return (
    <div
      className={`mobile-menu mobile-menu__tablet_visible ${
        classes ? classes : ''
      }`}
    >
      <Button
        classes="btn_type_icon mobile-menu__btn-open"
        type="button"
        areaLabel="Открыть меню"
        onClick={openMenu}
      >
        <img src={menuPath} alt="" />
      </Button>
      <div
        className={`mobile-menu__popup ${
          isVisible && 'mobile-menu__popup_visible'
        }`}
      >
        <div className="mobile-menu__container">
          <ul className="mobile-menu__page-list">
            {loggedIn ? (
              <>
                <li className="mobile-menu__page-item">
                  <NavLink
                    className="mobile-menu__page__link"
                    activeClassName="mobile-menu__page__link_active"
                    to="/"
                    onClick={closeMenu}
                    exact
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="mobile-menu__page-item">
                  <NavLink
                    className="mobile-menu__page__link"
                    activeClassName="mobile-menu__page__link_active"
                    to="/movies"
                    onClick={closeMenu}
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className="obile-menu__page-item">
                  <NavLink
                    className="mobile-menu__page__link"
                    activeClassName="mobile-menu__page__link_active"
                    to="/saved-movies"
                    onClick={closeMenu}
                  >
                    Сохраненные фильмы
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="mobile-menu__page-item">
                  <NavLink
                    className="mobile-menu__page__link transition"
                    activeClassName="mobile-menu__page__link_active"
                    to="/signin"
                    onClick={closeMenu}
                  >
                    Войти
                  </NavLink>
                </li>
                <li className="obile-menu__page-item">
                  <NavLink
                    className="mobile-menu__page__link transition"
                    activeClassName="mobile-menu__page__link_active"
                    to="/signup"
                    onClick={closeMenu}
                  >
                    Регистрация
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          {loggedIn && (
            <UserWidget classes="mobile-menu__profile" onClick={closeMenu} />
          )}
          <Button
            classes="btn_type_icon mobile-menu__btn-close"
            type="button"
            areaLabel="Закрыть меню"
            onClick={closeMenu}
          >
            <img src={closeMenuPath} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
