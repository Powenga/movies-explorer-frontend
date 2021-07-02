import { useContext, useState } from 'react';
import './Profile.css';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ classes, onLogout, onProfileChange }) {
  const { profileError } = useContext(ErrorsContext);
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);
  const [userData, setUserData] = useState({
    userName: currentUser.userName,
    userEmail: currentUser.userEmail,
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onProfileChange(userData.userName, userData.userEmail);
  }

  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <div className="profile main__section-inner">
          <h1 className="profile__title">Привет, Username!</h1>
          <form
            className="profile__form "
            name="profile"
            onSubmit={handleSubmit}
          >
            <label className="profile__form-field">
              <input
                className="profile__input"
                id="user-name"
                name="userName"
                type="text"
                minLength="2"
                maxLength="30"
                value={userData.userName}
                onChange={handleChange}
                required
              />
              <span className="profile__input-label">Имя</span>
              <span className="profile__input-error"></span>
            </label>
            <label className="profile__form-field">
              <input
                className="profile__input profile__input-label_style_borderless"
                id="user-email"
                name="userEmail"
                type="email"
                minLength="2"
                maxLength="30"
                value={userData.userEmail}
                onChange={handleChange}
                required
              />
              <span className="profile__input-label">E-mail</span>
              <span className="profile__input-error"></span>
            </label>
            <Button classes="btn_type_profile-submit" type="submit">
              Редактировать
            </Button>
            {profileError && (
              <ErrorMessage
                classes="error-message_active"
                text={profileError}
              />
            )}
          </form>
          <Button
            classes="btn_type_profile-logout"
            type="button"
            onClick={onLogout}
          >
            Выйти из аккаунта
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
