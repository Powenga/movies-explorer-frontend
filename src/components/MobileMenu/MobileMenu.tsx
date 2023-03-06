import { useState, useContext, FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Button, { ButtonType } from '../Button/Button';
import UserWidget from '../UserWidget/UserWidget';
import menuPath from '../../images/mobile-menu-icon.svg';
import closeMenuPath from '../../images/mobile-menu-icon-close.svg';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './MobileMenu.module.css';

const b = block(styles);

interface Props {
  classes?: string;
}

const MobileMenu: FC<PropsWithChildren<Props>> = ({ classes, children }) => {
  const { loggedIn, isUserChecking } = useContext(CurrentUserContext);
  const [isVisible, setIsVisible] = useState(false);

  function openMenu() {
    setIsVisible(true);
  }

  function closeMenu() {
    setIsVisible(false);
  }

  return (
    <>
      {!isUserChecking && (
        <div className={cn(b({ tablet: 'visible' }), classes)}>
          <Button
            classes="btn_type_icon mobile-menu__btn-open"
            type={ButtonType.button}
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
                        className="mobile-menu__page__link transition"
                        // activeClassName="mobile-menu__page__link_active"
                        to="/"
                        onClick={closeMenu}
                      >
                        Главная
                      </NavLink>
                    </li>
                    <li className="mobile-menu__page-item">
                      <NavLink
                        className="mobile-menu__page__link transition"
                        // activeClassName="mobile-menu__page__link_active"
                        to="/movies"
                        onClick={closeMenu}
                      >
                        Фильмы
                      </NavLink>
                    </li>
                    <li className="obile-menu__page-item">
                      <NavLink
                        className="mobile-menu__page__link transition"
                        // activeClassName="mobile-menu__page__link_active"
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
                        // activeClassName="mobile-menu__page__link_active"
                        to="/signin"
                        onClick={closeMenu}
                      >
                        Войти
                      </NavLink>
                    </li>
                    <li className="obile-menu__page-item">
                      <NavLink
                        className="mobile-menu__page__link transition"
                        // activeClassName="mobile-menu__page__link_active"
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
                <UserWidget
                  classes="mobile-menu__profile"
                  onClick={closeMenu}
                />
              )}
              <Button
                classes="btn_type_icon mobile-menu__btn-close"
                type={ButtonType.button}
                areaLabel="Закрыть меню"
                onClick={closeMenu}
              >
                <img src={closeMenuPath} alt="" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
