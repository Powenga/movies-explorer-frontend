import { useContext, useState, useRef, useEffect } from 'react';
import './Profile.css';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useValidation } from '../../hooks/useValidation';

function Profile({ classes, onLogout, onProfileChange }) {
  const { profileError, logoutError } = useContext(ErrorsContext);
  const { currentUser } = useContext(CurrentUserContext);
  const [userData, setUserData] = useState({
    userName: currentUser.userName,
    userEmail: currentUser.userEmail,
  });
  console.log(userData, currentUser);
  const { errors, isValid, handleValidation } = useValidation();
  const formRef = useRef(null);
  const [isFormValid, setIsFormValid] = useState(isValid);

  function handleChange(evt) {
    handleValidation(evt, formRef.current);
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onProfileChange(userData.userName, userData.userEmail);
  }

  useEffect(() => {
    if (
      userData.userName === currentUser.userName &&
      userData.userEmail === currentUser.userEmail
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(isValid);
    }
  }, [userData, currentUser, isValid]);

  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <div className="profile main__section-inner">
          <h1 className="profile__title">Привет, Username!</h1>
          <form
            ref={formRef}
            className="profile__form "
            name="profile"
            onSubmit={handleSubmit}
            noValidate
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
              {errors.userName && (
                <span className="profile__input-error">{errors.userName}</span>
              )}
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
              {errors.userEmail && (
                <span className="profile__input-error">{errors.userEmail}</span>
              )}
            </label>
            <Button
              classes={`btn_type_profile-submit ${!isFormValid && 'btn_disabled'}`}
              type="submit"
              disabled={!isFormValid}
            >
              Редактировать
            </Button>
            {profileError ? (
              <ErrorMessage
                classes="error-message_active"
                text={profileError}
              />
            ) : (
              logoutError && (
                <ErrorMessage
                  classes="error-message_active"
                  text={logoutError}
                />
              )
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
