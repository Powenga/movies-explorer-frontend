import { useContext, useState, useRef } from 'react';
import './Register.css';
import Button from '../Button/Button';
import SignForm from '../SignForm/SignForm';
import SignToggleLink from '../SignToggleLink/SignToggleLink';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import { useValidation } from '../../hooks/useValidation';

function Register({ classes, onRegister }) {
  const { registerError } = useContext(ErrorsContext);
  const [userData, setUserData] = useState({
    userName: '',
    userEmail: '',
    userPass: '',
  });
  const { errors, isValid, handleValidation } = useValidation();
  const formRef = useRef(null);

  function handleChange(evt) {
    handleValidation(evt, formRef.current);
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(userData.userName, userData.userEmail, userData.userPass);
  }

  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section register">
        <SignForm
          formRef={formRef}
          classes="main__section-inner"
          formTitle="Добро пожаловать!"
          formName="register-form"
          onSubmit={handleSubmit}
        >
          <label className="sign-form__field">
            Имя
            <input
              className="sign-form__input"
              id="user-name"
              name="userName"
              type="text"
              minLength="2"
              maxLength="30"
              value={userData.name}
              onChange={handleChange}
              required
            />
            {errors.userName && (
              <span className="sign-form__error">{errors.userName}</span>
            )}
          </label>
          <label className="sign-form__field">
            Е-mail
            <input
              className="sign-form__input"
              id="user-email"
              name="userEmail"
              type="email"
              minLength="2"
              maxLength="30"
              value={userData.email}
              onChange={handleChange}
              required
            />
            {errors.userEmail && (
              <span className="sign-form__error">{errors.userEmail}</span>
            )}
          </label>
          <label className="sign-form__field">
            Пароль
            <input
              className="sign-form__input"
              id="user-pass"
              name="userPass"
              type="password"
              minLength="8"
              maxLength="30"
              value={userData.pass}
              onChange={handleChange}
              required
            />
            {errors.userPass && (
              <span className="sign-form__error">{errors.userPass}</span>
            )}
          </label>
          <Button
            classes={`btn_type_sign ${!isValid && 'btn_disabled'}`}
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </Button>
          {registerError && (
            <ErrorMessage classes="error-message_active" text={registerError} />
          )}
        </SignForm>
        <SignToggleLink
          text="Уже зарегистрированы?"
          linkText="Войти"
          link="/signin"
        />
      </section>
    </main>
  );
}

export default Register;
