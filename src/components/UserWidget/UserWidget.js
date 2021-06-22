import { Link } from "react-router-dom";
import "./UserWidget.css";
import avatarPath from "../../images/avatar.svg";

function UserWidget({ loggedIn, classes }) {
  return (
    <div className={`user-widget ${classes}`}>
      {loggedIn ? (
        <Link className="user-widget__profile" to="/profile">
          <p className="user-widget__text">Аккаунт</p>
          <div className="user-widget__avatar-wrap">
            <img
              className="user-widget__avatar"
              src={avatarPath}
              alt="Аватар пользователя"
            />
          </div>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default UserWidget;
