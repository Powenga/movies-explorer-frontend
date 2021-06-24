import { NavLink } from 'react-router-dom';
import './UserWidget.css';
import avatarPath from '../../images/avatar.svg';

function UserWidget({ classes, onClick }) {
  return (
    <NavLink
      className={`user-widget ${classes ? classes : ''}`}
      to="/profile"
      onClick={onClick}
    >
      <p className="user-widget__text">Аккаунт</p>
      <div className="user-widget__avatar-wrap">
        <img
          className="user-widget__avatar"
          src={avatarPath}
          alt="Аватар пользователя"
        />
      </div>
    </NavLink>
  );
}

export default UserWidget;
